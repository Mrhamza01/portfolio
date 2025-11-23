'use client';

import { useLanguageStore, type Language } from '@/store/useLanguageStore';
import { Languages } from 'lucide-react';
import { useState } from 'react';

const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
    { code: 'ur' as Language, name: 'اردو', flag: '🇵🇰' },
];

export function LanguageSwitcher() {
    const { currentLanguage, setLanguage } = useLanguageStore();
    const [isOpen, setIsOpen] = useState(false);

    const currentLang = languages.find((lang) => lang.code === currentLanguage);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label="Change language"
            >
                <Languages className="h-4 w-4" />
                <span className="hidden sm:inline">{currentLang?.flag}</span>
            </button>

            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Dropdown */}
                    <div className="absolute right-0 top-full z-50 mt-2 w-40 rounded-lg border border-border bg-card p-2 shadow-lg">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-accent ${currentLanguage === lang.code ? 'bg-accent text-accent-foreground' : ''
                                    }`}
                            >
                                <span className="text-xl">{lang.flag}</span>
                                <span>{lang.name}</span>
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
