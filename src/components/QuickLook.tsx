import React from "react";
import { useStore } from "~/stores";
import bear from "~/configs/bear";

export default function QuickLook() {
    const { quickLookOpen, quickLookTarget, toggleQuickLook } = useStore((state) => ({
        quickLookOpen: state.quickLookOpen,
        quickLookTarget: state.quickLookTarget,
        toggleQuickLook: state.toggleQuickLook
    }));

    if (!quickLookOpen || !quickLookTarget) return null;

    // Find the content to display. 
    // For now, let's assume quickLookTarget is either a category ID or a file ID.
    // We can look through bear config.
    let targetData = null;
    for (const cat of bear) {
        if (cat.id === quickLookTarget) {
            targetData = { title: cat.title, desc: `Folder containing ${cat.md.length} items`, icon: "i-fluent:folder-24-filled" };
            break;
        }
        const file = cat.md.find(f => f.id === quickLookTarget);
        if (file) {
            targetData = { title: file.title, desc: file.excerpt, icon: file.icon };
            break;
        }
    }

    if (!targetData) return null;

    return (
        <div
            className="fixed inset-0 z-100 flex-center bg-black/5 backdrop-blur-[2px]"
            onClick={() => toggleQuickLook(null)}
        >
            <div
                className="w-120 h-80 bg-white/70 dark:bg-gray-800/80 backdrop-blur-3xl rounded-3xl shadow-2xl border border-white/20 flex flex-col items-center justify-center p-8 text-center"
                onClick={(e) => e.stopPropagation()}
            >
                <div className={`${targetData.icon} text-8xl text-blue-500 mb-6 drop-shadow-xl`} />
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{targetData.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
                    {targetData.desc}
                </p>
                <div className="mt-8 flex space-x-4">
                    <button
                        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm font-bold shadow-lg shadow-blue-500/30 transition-all active:scale-95"
                        onClick={() => {
                            // Open the actual app/folder
                            // This is handled by Desktop icon clicks usually. 
                            // But for QuickLook, maybe we just close it.
                            toggleQuickLook(null);
                        }}
                    >
                        Close Preview
                    </button>
                </div>
                <div className="absolute top-4 right-4 group">
                    <button
                        className="size-6 rounded-full bg-gray-400/20 flex-center hover:bg-red-500 transition-colors"
                        onClick={() => toggleQuickLook(null)}
                    >
                        <span className="i-bi:x text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                </div>
            </div>
        </div>
    );
}
