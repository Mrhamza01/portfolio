import React from "react";
import { profile } from "~/configs/profile";
import ModalOverlay from "./ModalOverlay";

interface AboutMacModalProps {
  onClose: () => void;
}

export default function AboutMacModal({ onClose }: AboutMacModalProps) {
  return (
    <ModalOverlay onClose={onClose} className="max-w-md mx-auto">
      <div className="p-1.5 rounded-[1.75rem] bg-black/5 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10">
        <div className="bg-[#f7f7f8] dark:bg-[#18181b] rounded-[calc(1.75rem-0.375rem)] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.45)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
          <div className="p-8 text-center text-[color:var(--color-foreground)]">
            <span className="i-ri:apple-fill text-5xl mb-4 inline-block opacity-80" aria-hidden />
            <h2 className="text-lg font-semibold tracking-tight">{profile.productName}</h2>
            <p className="text-sm opacity-60 mt-1">{profile.version}</p>
            <p className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to work
            </p>
            <p className="text-xs opacity-70 mt-2 px-2 leading-relaxed">{profile.openToWork}</p>

            <div className="mt-6 space-y-2 text-sm text-left bg-white/70 dark:bg-white/5 rounded-xl p-4 ring-1 ring-black/5 dark:ring-white/10">
              <div className="flex justify-between gap-4">
                <span className="opacity-60">Focus</span>
                <span className="font-medium text-right">{profile.specs.chip}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="opacity-60">Experience</span>
                <span className="font-medium text-right">{profile.specs.memory}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="opacity-60">Availability</span>
                <span className="font-medium text-right text-xs">{profile.specs.os}</span>
              </div>
            </div>

            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] opacity-50 mt-6 mb-2">
              Why hire me
            </h3>
            <ul className="text-left text-xs space-y-1.5 opacity-90">
              {profile.whyHireMe.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[color:var(--color-accent)]" aria-hidden>
                    •
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] opacity-50 mt-5 mb-2">
              Contact
            </h3>
            <div className="text-left text-xs space-y-1.5">
              <a href={`tel:${profile.contact.phoneTel}`} className="block hover:text-[color:var(--color-accent)] cursor-pointer">
                {profile.contact.phone}
              </a>
              <a href={`mailto:${profile.contact.email}`} className="block hover:text-[color:var(--color-accent)] cursor-pointer">
                {profile.contact.email}
              </a>
              <a
                href={profile.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="block hover:text-[color:var(--color-accent)] cursor-pointer"
              >
                WhatsApp · {profile.contact.phone}
              </a>
              <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="block hover:text-[color:var(--color-accent)] cursor-pointer">
                {profile.contact.linkedinLabel}
              </a>
              <a href={profile.contact.github} target="_blank" rel="noreferrer" className="block hover:text-[color:var(--color-accent)] cursor-pointer">
                {profile.contact.githubLabel}
              </a>
            </div>

            <div className="mt-6 flex gap-3 justify-center">
              <button
                type="button"
                className="recruiter-cta recruiter-cta-primary"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                Resume PDF
                <span className="recruiter-cta-icon" aria-hidden>
                  ↗
                </span>
              </button>
              <button
                type="button"
                className="recruiter-cta recruiter-cta-secondary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
}
