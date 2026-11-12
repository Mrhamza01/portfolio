import { useEffect, useRef } from "react";
import type { FlowField, SceneState } from "../scene/FlowField";

interface Props {
  /** Read on every frame-worthy change; kept in a ref by the parent so React never re-renders for scroll. */
  subscribe: (listener: (s: SceneState) => void) => () => void;
  reducedMotion: boolean;
}

/** Fixed background canvas. three.js is loaded after first paint so it never blocks the text. */
export default function SceneCanvas({ subscribe, reducedMotion }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    let field: FlowField | undefined;
    let cancelled = false;
    let unsubscribe = () => {};

    const onVisibility = () => (document.hidden ? field?.pause() : field?.play());
    const onPointer = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      field?.setPointer((e.clientX / window.innerWidth) * 2 - 1, (e.clientY / window.innerHeight) * 2 - 1);
    };
    const onResize = () => field?.resize();

    const boot = async () => {
      try {
        const { FlowField } = await import("../scene/FlowField");
        if (cancelled) return;
        field = new FlowField(canvas, { animate: !reducedMotion });
        unsubscribe = subscribe((s) => field?.setState(s));
        field.play();
        canvas.dataset.ready = "true";
        document.addEventListener("visibilitychange", onVisibility);
        window.addEventListener("resize", onResize);
        if (!reducedMotion) window.addEventListener("pointermove", onPointer, { passive: true });
      } catch {
        // No WebGL: the page is complete without the scene.
        canvas.hidden = true;
      }
    };
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 200));
    const handle = idle(() => void boot());

    return () => {
      cancelled = true;
      (window.cancelIdleCallback ?? window.clearTimeout)(handle as number);
      unsubscribe();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointer);
      field?.dispose();
    };
  }, [subscribe, reducedMotion]);

  return <canvas ref={ref} className="scene" aria-hidden="true" />;
}
