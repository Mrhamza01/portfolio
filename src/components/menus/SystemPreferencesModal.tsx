import React, { useState } from "react";
import { profile } from "~/configs/profile";
import { useStore } from "~/stores";
import ModalOverlay from "./ModalOverlay";

interface SystemPreferencesModalProps {
  onClose: () => void;
}

export default function SystemPreferencesModal({ onClose }: SystemPreferencesModalProps) {
  const [activeId, setActiveId] = useState(profile.preferences[0].id);
  const dark = useStore((s) => s.dark);
  const wifi = useStore((s) => s.wifi);
  const toggleDark = useStore((s) => s.toggleDark);
  const toggleWIFI = useStore((s) => s.toggleWIFI);

  const section = profile.preferences.find((p) => p.id === activeId) ?? profile.preferences[0];

  const sidebarIcons: Record<string, string> = {
    general: "i-heroicons-outline:cog-6-tooth",
    displays: "i-heroicons-outline:computer-desktop",
    network: "i-heroicons-outline:wifi",
    privacy: "i-heroicons-outline:shield-check",
  };

  return (
    <ModalOverlay onClose={onClose} className="max-w-2xl mx-auto">
      <div className="bg-[#f5f5f7] dark:bg-[#1e1e1e] rounded-xl overflow-hidden border border-gray-300/50 dark:border-gray-600/50 flex h-[420px]">
        <aside className="w-44 bg-gray-200/80 dark:bg-[#2a2a2a] p-2 overflow-y-auto">
          {profile.preferences.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center gap-2 mb-0.5 ${
                activeId === p.id
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-300/60 dark:hover:bg-gray-700"
              }`}
              onClick={() => setActiveId(p.id)}
            >
              <span className={sidebarIcons[p.id] ?? "i-heroicons-outline:folder"} />
              <span className="truncate">{p.title}</span>
            </button>
          ))}
        </aside>
        <main className="flex-1 p-6 overflow-y-auto text-gray-900 dark:text-gray-100">
          <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
          <ul className="space-y-3 text-sm">
            {section.bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-blue-500 mt-0.5">✓</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-4 border-t border-gray-300/40 dark:border-gray-600/40 space-y-3">
            <p className="text-xs opacity-50 uppercase tracking-wider">Quick settings</p>
            <label className="flex items-center justify-between text-sm">
              <span>Dark Mode</span>
              <button
                type="button"
                className={`w-10 h-6 rounded-full transition ${dark ? "bg-blue-500" : "bg-gray-400"}`}
                onClick={toggleDark}
              >
                <span
                  className={`block size-5 bg-white rounded-full shadow transition-transform ${
                    dark ? "translate-x-4" : "translate-x-0.5"
                  }`}
                />
              </button>
            </label>
            <label className="flex items-center justify-between text-sm">
              <span>Wi-Fi</span>
              <button
                type="button"
                className={`w-10 h-6 rounded-full transition ${wifi ? "bg-blue-500" : "bg-gray-400"}`}
                onClick={toggleWIFI}
              >
                <span
                  className={`block size-5 bg-white rounded-full shadow transition-transform ${
                    wifi ? "translate-x-4" : "translate-x-0.5"
                  }`}
                />
              </button>
            </label>
          </div>
          <button
            type="button"
            className="mt-6 text-sm text-blue-500 hover:underline"
            onClick={onClose}
          >
            Done
          </button>
        </main>
      </div>
    </ModalOverlay>
  );
}
