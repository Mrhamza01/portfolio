'use client';

import { useThemeStore } from '@/store/useThemeStore';
import { themes } from '@/constants/themes';
import { Palette } from 'lucide-react';
import { useState } from 'react';

export function ThemeSwitcher() {
    const { currentTheme, setTheme } = useThemeStore();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="Change theme"
            >
                <Palette className="h-4 w-4" />
                <span className="hidden sm:inline">{currentTheme.name}</span>
            </button>

            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Dropdown */}
                    <div className="absolute right-0 top-full z-50 mt-2 w-48 rounded-lg border border-border bg-card p-2 shadow-lg">
                        {themes.map((theme) => (
                            <button
                                key={theme.id}
                                onClick={() => {
                                    setTheme(theme.id);
                                    setIsOpen(false);
                                }}
                                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-accent ${currentTheme.id === theme.id ? 'bg-accent text-accent-foreground' : ''
                                    }`}
                            >
                                <div
                                    className="h-5 w-5 rounded-full border-2 border-white shadow-sm"
                                    style={{
                                        background: `linear-gradient(135deg, hsl(${theme.colors.gradientFrom}), hsl(${theme.colors.gradientTo}))`,
                                    }}
                                />
                                <span>{theme.name}</span>
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
