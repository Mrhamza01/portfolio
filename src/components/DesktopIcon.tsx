import React from "react";
import { useStore } from "~/stores";

interface DesktopIconProps {
    id: string;
    title: string;
    icon: string;
    openApp: (id: string) => void;
}

export default function DesktopIcon({ id, title, icon, openApp }: DesktopIconProps) {
    const lastSelectedIcon = useStore((state) => state.lastSelectedIcon);
    const setLastSelectedIcon = useStore((state) => state.setLastSelectedIcon);

    const isSelected = lastSelectedIcon === id;

    return (
        <div
            className={`flex flex-col items-center justify-center p-2 rounded-md cursor-default select-none group w-24 transition-colors ${isSelected ? "bg-white/30" : "hover:bg-white/20"
                }`}
            onClick={(e) => {
                e.stopPropagation();
                setLastSelectedIcon(id);
            }}
            onDoubleClick={() => openApp(id)}
        >
            <div className={`${icon} text-5xl text-blue-500 drop-shadow-md transition-transform active:scale-95`} />
            <span className={`mt-1 text-[11px] text-white text-center font-medium drop-shadow-md px-1 rounded ${isSelected ? "bg-blue-600" : ""
                }`}>
                {title}
            </span>
        </div>
    );
}
