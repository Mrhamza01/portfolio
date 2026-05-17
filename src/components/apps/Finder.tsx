import React from "react";
import bear from "~/configs/bear";
import { useStore } from "~/stores";

export default function Finder() {
    const bearCategory = useStore((state) => state.bearCategory);
    const setBearContentID = useStore((state) => state.setBearContentID);
    const openApp = useStore((state) => state.openApp);

    const categoryData = bear.find((item) => item.id === bearCategory) || bear[0];

    const handleFileClick = (fileId: string) => {
        if (fileId === "resume") {
            window.open("/resume.pdf", "_blank");
        } else {
            setBearContentID(fileId);
            openApp("bear");
        }
    };

    return (
        <div className="size-full bg-white dark:bg-gray-900 flex flex-col font-avenir select-none">
            {/* Toolbar area */}
            <div className="h-10 border-b border-gray-200 dark:border-gray-800 flex items-center px-4 bg-gray-50 dark:bg-gray-800/50">
                <div className="flex space-x-4">
                    <span className="i-heroicons-outline:chevron-left text-gray-400" />
                    <span className="i-heroicons-outline:chevron-right text-gray-400" />
                </div>
                <div className="flex-1 text-center text-sm font-bold text-gray-600 dark:text-gray-300">
                    {categoryData.title}
                </div>
                <div className="flex space-x-2">
                    <span className="i-heroicons-outline:view-grid text-blue-500" />
                    <span className="i-heroicons-outline:search text-gray-400" />
                </div>
            </div>

            {/* Content area */}
            <div className="flex-1 p-4 overflow-auto">
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 items-start">
                    {categoryData.md.map((file) => (
                        <div
                            key={file.id}
                            className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-default group"
                            onDoubleClick={() => handleFileClick(file.id)}
                        >
                            <div className={`${file.icon} text-4xl text-blue-500 mb-1 active:scale-95 transition-transform drop-shadow-sm`} />
                            <span className="text-[11px] text-center break-words text-gray-800 dark:text-gray-200 leading-tight">
                                {file.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
