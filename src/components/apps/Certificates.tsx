import React, { useState } from "react";
import { profile } from "~/configs/profile";

export default function Certificates() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyName = async (id: string, name: string) => {
    try {
      await navigator.clipboard.writeText(name);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="size-full flex flex-col bg-gradient-to-b from-gray-100 to-gray-200 dark:from-[#2a2a2a] dark:to-[#1a1a1a] font-avenir">
      <div className="px-5 pt-5 pb-3 border-b border-gray-300/50 dark:border-gray-600/50 shrink-0">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-amber-500/20 flex-center">
            <span className="i-heroicons-outline:academic-cap text-2xl text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Certificates</h1>
            <p className="text-xs opacity-60 dark:text-gray-300">Licenses & professional credentials</p>
          </div>
        </div>
      </div>
      <ul className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
        {profile.certifications.map((cert, i) => {
          const id = `cert-${i}`;
          return (
            <li
              key={id}
              className="flex items-start gap-3 p-4 rounded-xl bg-white/80 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-600/40 shadow-sm"
            >
              <div className="size-11 shrink-0 rounded-lg bg-blue-500/10 flex-center">
                <span className="i-heroicons-outline:shield-check text-xl text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-gray-900 dark:text-white leading-snug">{cert.name}</p>
                <p className="text-xs opacity-60 mt-0.5 dark:text-gray-300">
                  {cert.issuer}
                  {cert.year ? ` · ${cert.year}` : ""}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <button
                    type="button"
                    className="text-[11px] px-2.5 py-1 rounded-md bg-gray-200/80 dark:bg-gray-700 hover:opacity-80 transition"
                    onClick={() => copyName(id, cert.name)}
                  >
                    {copiedId === id ? "Copied!" : "Copy name"}
                  </button>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] px-2.5 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
                    >
                      Verify
                    </a>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
