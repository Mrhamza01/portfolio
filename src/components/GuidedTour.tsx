import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { setTourState } from "~/utils";

export interface TourStep {
  id: string;
  title: string;
  body: string;
  target?: string;
}

const STEPS: TourStep[] = [
  {
    id: "welcome",
    title: "Welcome to Hamza's Portfolio",
    body: "A macOS-style desktop for a Full Stack engineer who builds and operates multi-tenant SaaS and Kubernetes systems. Start with the intro card or Bear for the resume.",
  },
  {
    id: "bear",
    title: "Resume & experience",
    body: "Open Bear for the full resume, experience, and projects—written in markdown, synced to the latest positioning.",
    target: "#dock-bear",
  },
  {
    id: "architecture",
    title: "Architecture case studies",
    body: "See ERP platform design and CI/CD pipeline flows with problem → solution → outcomes.",
    target: "#dock-architecture",
  },
  {
    id: "widgets",
    title: "Live widgets",
    body: "News, weather, clock, and FX rates powered by public APIs—no API keys required.",
    target: "[data-tour-id='widgets']",
  },
  {
    id: "apple",
    title: "About & preferences",
    body: "Click the Apple menu for About This Mac, System Preferences, App Store tech stack, and to replay this tour.",
    target: "[data-tour-id='apple-menu']",
  },
  {
    id: "dock",
    title: "Dock & Launchpad",
    body: "Open apps from the dock. Use Launchpad for quick links, GitHub, LinkedIn, and your resume PDF.",
    target: "[data-tour-id='dock']",
  },
];

const MARGIN = 16;
const GAP = 12;
const RESERVED_BOTTOM = 88;

interface GuidedTourProps {
  open: boolean;
  onClose: () => void;
}

function getTargetRect(selector: string): DOMRect | null {
  const el = document.querySelector(selector);
  if (!el) return null;
  return el.getBoundingClientRect();
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, max));
}

function computeCardPosition(
  target: DOMRect | null,
  cardW: number,
  cardH: number,
  centered: boolean
): { top: number; left: number } {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const maxBottom = vh - RESERVED_BOTTOM;

  if (centered || !target) {
    return {
      top: clamp((vh - cardH) / 2, MARGIN, maxBottom - cardH),
      left: clamp((vw - cardW) / 2, MARGIN, vw - cardW - MARGIN),
    };
  }

  const targetCenterX = target.left + target.width / 2;
  const targetCenterY = target.top + target.height / 2;
  const nearBottom = target.bottom > vh * 0.55;
  const nearTop = target.top < vh * 0.25;

  let top: number;
  let left: number;

  if (nearBottom) {
    top = target.top - GAP - cardH;
  } else if (nearTop) {
    top = target.bottom + GAP;
  } else {
    top = targetCenterY - cardH / 2;
  }

  left = targetCenterX - cardW / 2;

  if (top + cardH > maxBottom) {
    top = maxBottom - cardH;
  }
  if (top < MARGIN) {
    top = MARGIN;
  }

  if (left + cardW > vw - MARGIN) {
    left = vw - cardW - MARGIN;
  }
  if (left < MARGIN) {
    left = MARGIN;
  }

  const cardRect = { top, left, right: left + cardW, bottom: top + cardH };
  const overlapsTarget =
    cardRect.left < target.right &&
    cardRect.right > target.left &&
    cardRect.top < target.bottom &&
    cardRect.bottom > target.top;

  if (overlapsTarget) {
    if (nearBottom) {
      top = target.top - GAP - cardH;
    } else {
      top = target.bottom + GAP;
    }
    top = clamp(top, MARGIN, maxBottom - cardH);
  }

  return { top, left };
}

export default function GuidedTour({ open, onClose }: GuidedTourProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const [spotlight, setSpotlight] = useState<DOMRect | null>(null);
  const [cardPos, setCardPos] = useState({ top: 0, left: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const step = STEPS[stepIndex];
  const isLast = stepIndex === STEPS.length - 1;
  const isCentered = !step.target;

  const updateLayout = () => {
    const target = step.target ? getTargetRect(step.target) : null;
    setSpotlight(target);

    const card = cardRef.current;
    const cardW = card ? card.offsetWidth : Math.min(352, window.innerWidth - MARGIN * 2);
    const cardH = card ? card.offsetHeight : 220;
    setCardPos(computeCardPosition(target, cardW, cardH, isCentered));
  };

  useEffect(() => {
    if (!open) {
      setStepIndex(0);
      setSpotlight(null);
      return;
    }
    updateLayout();
    window.addEventListener("resize", updateLayout);
    window.addEventListener("scroll", updateLayout, true);
    return () => {
      window.removeEventListener("resize", updateLayout);
      window.removeEventListener("scroll", updateLayout, true);
    };
  }, [open, stepIndex, step.target, isCentered]);

  useLayoutEffect(() => {
    if (!open) return;
    updateLayout();
    const id = requestAnimationFrame(updateLayout);
    return () => cancelAnimationFrame(id);
  }, [open, stepIndex, step.target, isCentered]);

  if (!open) return null;

  const finish = (state: "completed" | "skipped") => {
    setTourState(state);
    onClose();
  };

  const next = () => {
    if (isLast) finish("completed");
    else setStepIndex((i) => i + 1);
  };

  const prev = () => {
    if (stepIndex > 0) setStepIndex((i) => i - 1);
  };

  const pad = 8;
  const spotlightStyle =
    spotlight && !isCentered
      ? {
          top: spotlight.top - pad,
          left: spotlight.left - pad,
          width: spotlight.width + pad * 2,
          height: spotlight.height + pad * 2,
        }
      : null;

  return (
    <div className="fixed inset-0 z-[10000]" role="presentation">
      <div
        className="absolute inset-0 bg-black/55 backdrop-blur-[2px]"
        onClick={() => finish("skipped")}
      />
      {spotlightStyle && (
        <div
          className="absolute rounded-xl ring-4 ring-blue-400/90 shadow-[0_0_0_9999px_rgba(0,0,0,0.55)] pointer-events-none transition-all duration-300"
          style={spotlightStyle}
        />
      )}
      <div
        ref={cardRef}
        className="fixed z-[10001] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/80 dark:border-gray-600 p-5 w-[min(calc(100vw-2rem),22rem)] max-h-[min(70vh,calc(100vh-8rem))] overflow-y-auto"
        style={{ top: cardPos.top, left: cardPos.left }}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider text-blue-500 mb-1">
          Step {stepIndex + 1} of {STEPS.length}
        </p>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{step.title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">{step.body}</p>
        <div className="flex items-center justify-between gap-2 mt-5">
          <button
            type="button"
            className="text-xs text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
            onClick={() => finish("skipped")}
          >
            Skip tour
          </button>
          <div className="flex gap-2">
            {stepIndex > 0 && (
              <button
                type="button"
                className="text-xs px-3 py-1.5 rounded-lg bg-gray-200 dark:bg-gray-700"
                onClick={prev}
              >
                Back
              </button>
            )}
            <button
              type="button"
              className="text-xs px-3 py-1.5 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              onClick={next}
            >
              {isLast ? "Done" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
