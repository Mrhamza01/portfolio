import { useCallback, useEffect, useRef, useState } from "react";
import type { SceneState } from "./scene/FlowField";

/**
 * One scroll loop for the whole page. It writes CSS variables and notifies the WebGL scene
 * directly, so scrolling never triggers a React render (only the active nav id does, rarely).
 */
export function useScrollStory(reducedMotion: boolean) {
  const listeners = useRef(new Set<(s: SceneState) => void>());
  const latest = useRef<SceneState>({ from: 0, to: 0, mix: 0, tone: 0 });
  const [active, setActive] = useState("");

  const subscribe = useCallback((fn: (s: SceneState) => void) => {
    listeners.current.add(fn);
    fn(latest.current);
    return () => {
      listeners.current.delete(fn);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    let anchors: { top: number; bottom: number; formation: number; dark: boolean }[] = [];
    let sections: { id: string; top: number }[] = [];
    let timeline: HTMLElement | null = null;
    let frame = 0;

    const measure = () => {
      const y = window.scrollY;
      anchors = Array.from(document.querySelectorAll<HTMLElement>("[data-formation]")).map((el) => {
        const r = el.getBoundingClientRect();
        return {
          top: r.top + y,
          bottom: r.bottom + y,
          formation: Number(el.dataset.formation),
          dark: el.dataset.tone === "dark",
        };
      });
      sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]")).map((el) => ({
        id: el.id,
        top: el.getBoundingClientRect().top + y,
      }));
      timeline = document.querySelector<HTMLElement>(".timeline");
      update();
    };

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const vh = window.innerHeight;
      const max = Math.max(1, root.scrollHeight - vh);
      root.style.setProperty("--progress", (y / max).toFixed(4));
      root.style.setProperty("--hero-out", Math.min(1, y / (vh * 0.7)).toFixed(3));

      const probe = y + vh * 0.55;
      let i = 0;
      for (let k = 0; k < anchors.length; k++) if (anchors[k].top <= probe) i = k;
      const cur = anchors[i];
      const next = anchors[i + 1];
      if (cur) {
        const zone = vh * 0.7;
        const mix = next ? Math.min(1, Math.max(0, (probe - (next.top - zone)) / zone)) : 0;
        const dark = cur.dark && probe < cur.bottom + vh * 0.2;
        const state: SceneState = { from: cur.formation, to: next ? next.formation : cur.formation, mix, tone: dark ? 1 : 0 };
        latest.current = state;
        listeners.current.forEach((fn) => fn(state));
        const tone = dark ? "dark" : "light";
        if (root.dataset.tone !== tone) root.dataset.tone = tone;
      }

      if (timeline) {
        const r = timeline.getBoundingClientRect();
        const t = Math.min(1, Math.max(0, (vh * 0.6 - r.top) / r.height));
        timeline.style.setProperty("--drawn", t.toFixed(4));
        const reached = r.top + r.height * t;
        timeline.querySelectorAll<HTMLElement>("li").forEach((li) => {
          li.dataset.reached = String(li.getBoundingClientRect().top + 14 <= reached);
        });
      }

      let id = "";
      for (const s of sections) if (s.top <= y + vh * 0.4) id = s.id;
      setActive((prev) => (prev === id ? prev : id));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    document.fonts?.ready.then(measure);

    let lenis: { destroy: () => void } | undefined;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!reducedMotion && fine) {
      import("lenis").then(({ default: Lenis }) => {
        lenis = new Lenis({ autoRaf: true, anchors: { offset: -64 }, lerp: 0.11 });
      });
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      ro.disconnect();
      lenis?.destroy();
    };
  }, [reducedMotion]);

  return { subscribe, active };
}

export function useReducedMotion() {
  const query = "(prefers-reduced-motion: reduce)";
  const [reduced, setReduced] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduced;
}
