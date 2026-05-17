import React, { useMemo, useState } from "react";
import { profile } from "~/configs/profile";
import ModalOverlay from "./ModalOverlay";

interface AppStoreModalProps {
  onClose: () => void;
}

export default function AppStoreModal({ onClose }: AppStoreModalProps) {
  const [tab, setTab] = useState<"featured" | "all">("featured");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = new Set(profile.techStack.map((t) => t.category));
    return ["All", ...Array.from(cats)];
  }, []);

  const filtered = useMemo(() => {
    let list = tab === "featured"
      ? profile.techStack.filter((t) => t.featured)
      : profile.techStack;
    if (category !== "All") list = list.filter((t) => t.category === category);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q)
      );
    }
    return list;
  }, [tab, search, category]);

  return (
    <ModalOverlay onClose={onClose} className="max-w-3xl mx-auto">
      <div className="bg-white dark:bg-[#1c1c1e] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 h-[520px] flex flex-col">
        <header className="px-6 pt-5 pb-3 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">App Store</h2>
            <button type="button" onClick={onClose} className="text-gray-500 hover:text-gray-800 text-xl">
              ×
            </button>
          </div>
          <input
            type="search"
            placeholder="Search tools & technologies"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-sm outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex gap-4 mt-3 text-sm">
            <button
              type="button"
              className={tab === "featured" ? "text-blue-500 font-semibold" : "opacity-60"}
              onClick={() => setTab("featured")}
            >
              Featured
            </button>
            <button
              type="button"
              className={tab === "all" ? "text-blue-500 font-semibold" : "opacity-60"}
              onClick={() => setTab("all")}
            >
              All Tools
            </button>
          </div>
          <div className="flex gap-2 mt-2 flex-wrap">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className={`px-2 py-0.5 rounded-full text-xs ${
                  category === c ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"
                }`}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {filtered.map((tool) => (
            <div
              key={tool.id}
              className="bg-gray-50 dark:bg-gray-800/80 rounded-xl p-3 flex flex-col items-center text-center border border-gray-100 dark:border-gray-700"
            >
              <span className={`${tool.icon} text-4xl mb-2`} />
              <p className="font-semibold text-sm text-gray-900 dark:text-white">{tool.name}</p>
              <p className="text-[10px] opacity-50 mt-0.5">{tool.category}</p>
              {tool.docUrl && (
                <a
                  href={tool.docUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 px-3 py-1 text-xs bg-blue-500 text-white rounded-full hover:bg-blue-600"
                >
                  GET
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </ModalOverlay>
  );
}
