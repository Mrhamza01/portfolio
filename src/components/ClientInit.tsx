'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/store/useThemeStore';
import { useLanguageStore } from '@/store/useLanguageStore';

/**
 * Client-side initialization component
 * Ensures theme and language are properly loaded on app start
 */
export function ClientInit() {
    const { currentTheme, setTheme } = useThemeStore();
    const { currentLanguage, setLanguage } = useLanguageStore();

    useEffect(() => {
        // Force theme application on mount
        setTheme(currentTheme.id);
        setLanguage(currentLanguage);
    }, []);

    return null;
}
