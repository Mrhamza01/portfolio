import { useEffect, useRef, useState } from "react";

/**
 * Illustrative simulation of the failure-isolation pattern in the logistics pipeline:
 * a courier goes down, its orders retry then park in the dead-letter queue, the rest keep flowing.
 * It is a drawing of the design, not production telemetry.
 */
const LANES = ["PostEx", "Leopards", "M&P", "6 more"];
const TOGGLEABLE = 3;
const X = { queue: 0.14, worker: 0.32, adapter: 0.54, domain: 0.78, end: 1 };
const STAGES: [number, string, string][] = [
  [X.queue, "Queue", "Queue"],
  [X.worker, "Workers", "Workers"],
  [X.adapter, "Courier API", "Courier"],
  [X.domain, "One model", "Model"],
];

type Phase = "flow" | "retry" | "fall" | "dlq" | "requeue";
interface Packet {
  lane: number;
  x: number;
  y: number;
  phase: Phase;
  tries: number;
  dir: number;
  slot: number;
}

export default function FailureSim({ reducedMotion }: { reducedMotion: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const downRef = useRef<boolean[]>([false, false, false, false]);
  const [down, setDown] = useState<boolean[]>([false, false, false, false]);
  const [stats, setStats] = useState({ settled: 0, parked: 0 });

  const toggle = (i: number) => {
    const next = down.map((d, k) => (k === i ? !d : d));
    downRef.current = next;
    setDown(next);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const css = getComputedStyle(document.documentElement);
    const ink = css.getPropertyValue("--ink-fixed").trim() || "#0e1b2c";
    const blue = css.getPropertyValue("--route-fixed").trim() || "#1f4fd8";
    const amber = css.getPropertyValue("--hold-fixed").trim() || "#b4610f";
    const rule = "rgba(14,27,44,0.16)";

    let W = 0;
    let H = 0;
    let pad = 78;
    const packets: Packet[] = [];
    const spawnAt = LANES.map((_, i) => i * 0.22);
    let settled = 0;
    let last = performance.now();
    let raf = 0;
    let visible = false;
    let statTick = 0;

    const laneY = (i: number) => H * (0.2 + i * 0.145);
    const mergedY = () => (laneY(0) + laneY(LANES.length - 1)) / 2;
    const trayY = () => H * 0.88;
    const px = (x: number) => pad + x * (W - pad - 14);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width;
      H = rect.height;
      pad = W < 520 ? 62 : 84;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const yFor = (p: Packet) => {
      const ly = laneY(p.lane);
      if (p.x <= X.adapter) return ly;
      const t = Math.min(1, (p.x - X.adapter) / (X.domain - X.adapter));
      const e = t * t * (3 - 2 * t);
      return ly + (mergedY() - ly) * e;
    };

    const step = (dt: number) => {
      const isDown = downRef.current;
      const parkedBy = LANES.map(() => 0);
      for (const p of packets) if (p.phase === "dlq" || p.phase === "fall") parkedBy[p.lane]++;
      for (let i = 0; i < LANES.length; i++) {
        spawnAt[i] -= dt;
        if (spawnAt[i] <= 0 && parkedBy[i] < 14) {
          packets.push({ lane: i, x: 0, y: laneY(i), phase: "flow", tries: 0, dir: 1, slot: 0 });
          spawnAt[i] = 0.55 + Math.random() * 0.5;
        }
      }
      for (let k = packets.length - 1; k >= 0; k--) {
        const p = packets[k];
        if (p.phase === "flow") {
          const before = p.x;
          p.x += dt * 0.17;
          if (isDown[p.lane] && before < X.adapter - 0.02 && p.x >= X.adapter - 0.02) {
            p.phase = "retry";
            p.x = X.adapter - 0.02;
            p.dir = -1;
          }
          p.y = yFor(p);
          if (p.x >= X.end) {
            packets.splice(k, 1);
            settled++;
          }
        } else if (p.phase === "retry") {
          // back off, try again, three times
          p.x += p.dir * dt * 0.16;
          if (p.dir < 0 && p.x <= X.adapter - 0.07) p.dir = 1;
          if (p.dir > 0 && p.x >= X.adapter - 0.02) {
            if (!isDown[p.lane]) p.phase = "flow";
            else if (++p.tries >= 3) {
              p.phase = "fall";
              p.slot = packets.filter((q) => q.phase === "dlq" || (q.phase === "fall" && q !== p)).length;
            } else p.dir = -1;
          }
        } else if (p.phase === "fall") {
          const tx = X.worker + 0.02 + (p.slot % 20) * 0.021;
          const ty = trayY() + Math.floor(p.slot / 20) * 9 - 4;
          p.x += (tx - p.x) * Math.min(1, dt * 4);
          p.y += (ty - p.y) * Math.min(1, dt * 4);
          if (Math.abs(ty - p.y) < 1) p.phase = "dlq";
        } else if (p.phase === "dlq") {
          if (!isDown[p.lane]) p.phase = "requeue";
        } else {
          const ty = laneY(p.lane);
          p.x += (X.queue - p.x) * Math.min(1, dt * 3.5);
          p.y += (ty - p.y) * Math.min(1, dt * 3.5);
          if (Math.abs(ty - p.y) < 1) {
            p.phase = "flow";
            p.tries = 0;
            p.y = ty;
          }
        }
      }
    };

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      const small = W < 520;
      ctx.font = `500 ${small ? 10.5 : 12.5}px "Archivo Variable", system-ui, sans-serif`;
      ctx.textBaseline = "middle";
      // stage guides
      ctx.setLineDash([2, 5]);
      ctx.strokeStyle = rule;
      ctx.fillStyle = ink;
      ctx.textAlign = "center";
      for (const [x, full, short] of STAGES) {
        const label = small ? short : full;
        ctx.beginPath();
        ctx.moveTo(px(x), H * 0.11);
        ctx.lineTo(px(x), laneY(LANES.length - 1) + 14);
        ctx.stroke();
        ctx.fillText(label, px(x), H * 0.055);
      }
      ctx.setLineDash([]);
      ctx.textAlign = "right";
      ctx.fillText(small ? "Settle" : "Settlement", W - 6, H * 0.055);
      // lanes
      for (let i = 0; i < LANES.length; i++) {
        const y = laneY(i);
        const isDown = downRef.current[i];
        ctx.strokeStyle = rule;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(px(0), y);
        ctx.lineTo(px(X.adapter), y);
        ctx.bezierCurveTo(px(X.adapter + 0.1), y, px(X.domain - 0.1), mergedY(), px(X.domain), mergedY());
        ctx.lineTo(px(1), mergedY());
        ctx.stroke();
        ctx.textAlign = "left";
        ctx.fillStyle = isDown ? amber : ink;
        ctx.fillText(LANES[i], 0, y);
        // adapter node
        ctx.fillStyle = isDown ? amber : "#fff";
        ctx.strokeStyle = isDown ? amber : ink;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.rect(px(X.adapter) - 6, y - 6, 12, 12);
        ctx.fill();
        ctx.stroke();
        if (isDown) {
          ctx.strokeStyle = "#fff";
          ctx.beginPath();
          ctx.moveTo(px(X.adapter) - 3, y - 3);
          ctx.lineTo(px(X.adapter) + 3, y + 3);
          ctx.moveTo(px(X.adapter) + 3, y - 3);
          ctx.lineTo(px(X.adapter) - 3, y + 3);
          ctx.stroke();
        }
      }
      // normalized node
      ctx.fillStyle = blue;
      ctx.beginPath();
      ctx.arc(px(X.domain), mergedY(), 6, 0, Math.PI * 2);
      ctx.fill();
      // dead-letter tray
      ctx.strokeStyle = amber;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.strokeRect(px(X.worker) - 6, trayY() - 14, px(X.worker + 0.46) - px(X.worker), 30);
      ctx.setLineDash([]);
      ctx.fillStyle = amber;
      ctx.textAlign = "left";
      ctx.fillText(small ? "DLQ" : "Dead-letter queue", 0, trayY());
      // parcels
      for (const p of packets) {
        const warn = p.phase !== "flow";
        ctx.fillStyle = warn ? amber : p.x > X.domain ? blue : ink;
        const s = small ? 5 : 6;
        ctx.fillRect(px(p.x) - s / 2, p.y - s / 2, s, s);
      }
    }

    const loop = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      step(dt);
      draw();
      statTick += dt;
      if (statTick > 0.25) {
        statTick = 0;
        const parked = packets.filter((p) => p.phase === "dlq" || p.phase === "fall").length;
        setStats((s) => (s.settled === settled && s.parked === parked ? s : { settled, parked }));
      }
      if (visible) raf = requestAnimationFrame(loop);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    document.fonts?.ready.then(draw);

    if (reducedMotion) {
      // settle into a representative still frame
      for (let i = 0; i < 260; i++) step(0.05);
      draw();
      return () => ro.disconnect();
    }
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && !document.hidden;
      cancelAnimationFrame(raf);
      if (visible) {
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
    });
    io.observe(canvas);
    return () => {
      visible = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
    };
  }, [reducedMotion]);

  const downNames = LANES.filter((_, i) => down[i]);
  const status =
    downNames.length === 0
      ? "All couriers are healthy. Orders flow through the adapters into one model."
      : `${downNames.join(" and ")} ${downNames.length > 1 ? "are" : "is"} down. Those orders retry three times, then park in the dead-letter queue. Everything else keeps flowing. Restore to re-enqueue.`;

  return (
    <figure className="sim">
      <figcaption>
        <strong>Try it: take a courier down.</strong>{" "}
        <span>An illustration of the failure-isolation design, not live production data.</span>
      </figcaption>
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Diagram: orders from four courier lanes pass through a queue, workers and a courier adapter, then merge into one normalized model before settlement. Orders for a failed courier retry and are parked in a dead-letter queue while the other lanes continue."
      />
      {!reducedMotion && (
        <div className="sim-controls">
          {LANES.slice(0, TOGGLEABLE).map((name, i) => (
            <button key={name} type="button" aria-pressed={down[i]} onClick={() => toggle(i)}>
              {down[i] ? `Restore ${name}` : `Take ${name} down`}
            </button>
          ))}
        </div>
      )}
      <p className="sim-status" aria-live="polite">
        {status}
      </p>
      {!reducedMotion && (
        <dl className="sim-stats">
          <div>
            <dt>Settled</dt>
            <dd>{stats.settled}</dd>
          </div>
          <div>
            <dt>Parked in dead-letter queue</dt>
            <dd>{stats.parked}</dd>
          </div>
        </dl>
      )}
    </figure>
  );
}
