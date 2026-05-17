import React, { useEffect, useState } from "react";

const STORAGE_KEY = "hamza_portfolio_notes";

export default function Notes() {
  const [notes, setNotes] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) ?? "";
    } catch {
      return "";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, notes);
    } catch {
      /* ignore */
    }
  }, [notes]);

  return (
    <div className="size-full bg-[#fef9c3] dark:bg-[#2d2a1e] flex flex-col">
      <div className="px-4 py-2 border-b border-yellow-200/50 dark:border-gray-600 text-sm font-medium opacity-60">
        Notes — saved locally
      </div>
      <textarea
        className="flex-1 w-full p-4 bg-transparent resize-none outline-none text-gray-900 dark:text-gray-100 font-avenir text-sm leading-relaxed"
        placeholder="Write a note..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
    </div>
  );
}
