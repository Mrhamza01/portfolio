import React from "react";

interface DesktopIconProps {
    id: string;
    title: string;
    icon: string;
    openApp: (id: string) => void;
}

export default function DesktopIcon({ id, title, icon, openApp }: DesktopIconProps) {
    return (
        <div
            className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-white/20 cursor-default select-none group w-24"
            onDoubleClick={() => openApp(id)}
        >
            <div className={`${icon} text-5xl text-blue-500 drop-shadow-md transition-transform active:scale-95`} />
            <span className="mt-1 text-xs text-white text-center font-medium drop-shadow-md">
                {title}
            </span>
        </div>
    );
}
