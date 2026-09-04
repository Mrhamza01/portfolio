import React from "react";
import { profile } from "~/configs/profile";

interface RecruiterIntroProps {
  onOpenResume: () => void;
  onOpenArchitecture: () => void;
  onDismiss: () => void;
}

export default function RecruiterIntro({
  onOpenResume,
  onOpenArchitecture,
  onDismiss,
}: RecruiterIntroProps) {
  return (
    <aside
      className="recruiter-intro absolute z-20 left-1/2 top-[22%] w-[min(92vw,28rem)] -translate-x-1/2 px-0 sm:top-[26%]"
      aria-label="Engineer introduction"
    >
      <div className="recruiter-intro-shell">
        <div className="recruiter-intro-core text-[color:var(--color-foreground)]">
          <p className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] bg-[color:var(--color-muted)] text-[color:var(--color-secondary)]">
            <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
            Open to work
          </p>

          <h1 className="mt-3 text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
            {profile.displayName}
          </h1>
          <p className="mt-1 text-sm font-medium text-[color:var(--color-secondary)]">
            {profile.title}
          </p>
          <p className="mt-3 text-[13px] leading-relaxed text-[color:var(--color-secondary)]">
            Builds and operates production systems end-to-end —
            <strong className="text-[color:var(--color-foreground)]">9-courier logistics</strong>,
            Stripe Connect marketplace payments, AI order agents, and an ERP fleet of{" "}
            <strong className="text-[color:var(--color-foreground)]">200+ clients</strong>.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            <button
              type="button"
              className="recruiter-cta recruiter-cta-primary"
              onClick={onOpenResume}
            >
              View resume
              <span className="recruiter-cta-icon" aria-hidden>
                ↗
              </span>
            </button>
            <button
              type="button"
              className="recruiter-cta recruiter-cta-secondary"
              onClick={onOpenArchitecture}
            >
              Case studies
            </button>
            <a
              href="https://wa.me/923097906831?text=Hi%20Hamza%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20about%20a%20Full%20Stack%20%2F%20SaaS%20opportunity."
              target="_blank"
              rel="noreferrer"
              className="recruiter-cta recruiter-cta-secondary no-underline"
            >
              WhatsApp
            </a>
            <button
              type="button"
              className="recruiter-cta recruiter-cta-secondary"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              PDF
            </button>
          </div>

          <button
            type="button"
            onClick={onDismiss}
            className="mt-4 text-[11px] text-[color:var(--color-secondary)] underline-offset-2 hover:underline cursor-pointer"
          >
            Dismiss intro
          </button>
        </div>
      </div>
    </aside>
  );
}
