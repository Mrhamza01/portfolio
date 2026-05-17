import React from "react";
import { profile } from "~/configs/profile";
import ModalOverlay from "./ModalOverlay";

interface AboutMacModalProps {
  onClose: () => void;
}

export default function AboutMacModal({ onClose }: AboutMacModalProps) {
  return (
    <ModalOverlay onClose={onClose} className="max-w-md mx-auto">
      <div className="bg-[#e8e8ed] dark:bg-[#2d2d2d] rounded-2xl overflow-hidden border border-white/20">
        <div className="p-8 text-center text-gray-900 dark:text-gray-100">
          <span className="i-ri:apple-fill text-5xl mb-4 inline-block" />
          <h2 className="text-lg font-semibold">{profile.productName}</h2>
          <p className="text-sm opacity-60 mt-1">{profile.version}</p>

          <div className="mt-6 space-y-2 text-sm text-left bg-white/50 dark:bg-black/20 rounded-xl p-4">
            <div className="flex justify-between">
              <span className="opacity-60">Chip</span>
              <span className="font-medium">{profile.specs.chip}</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-60">Memory</span>
              <span className="font-medium">{profile.specs.memory}</span>
            </div>
            <div className="flex justify-between">
              <span className="opacity-60">macOS</span>
              <span className="font-medium text-right text-xs">{profile.specs.os}</span>
            </div>
          </div>

          <h3 className="text-xs font-bold uppercase tracking-wider opacity-50 mt-6 mb-2">
            Why I&apos;m the right choice
          </h3>
          <ul className="text-left text-xs space-y-1.5 opacity-90">
            {profile.whyHireMe.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-blue-500">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-xs font-bold uppercase tracking-wider opacity-50 mt-5 mb-2">
            Contact
          </h3>
          <div className="text-left text-xs space-y-1.5">
            <a href={`tel:${profile.contact.phoneTel}`} className="block hover:text-blue-500">
              {profile.contact.phone}
            </a>
            <a href={`mailto:${profile.contact.email}`} className="block hover:text-blue-500">
              {profile.contact.email}
            </a>
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="block hover:text-blue-500">
              {profile.contact.linkedinLabel}
            </a>
            <a href={profile.contact.github} target="_blank" rel="noreferrer" className="block hover:text-blue-500">
              {profile.contact.githubLabel}
            </a>
            <a href={profile.contact.website} target="_blank" rel="noreferrer" className="block hover:text-blue-500">
              {profile.contact.websiteLabel}
            </a>
          </div>

          <div className="mt-6 flex gap-3 justify-center">
            <button
              type="button"
              className="px-4 py-1.5 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              Resume PDF
            </button>
            <button
              type="button"
              className="px-4 py-1.5 text-sm bg-gray-200 dark:bg-gray-600 rounded-lg hover:opacity-80"
              onClick={onClose}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
}
