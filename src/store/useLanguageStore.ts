import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'en' | 'ur';

interface LanguageStore {
    currentLanguage: Language;
    translations: Record<string, any>;
    setLanguage: (lang: Language) => Promise<void>;
    t: (key: string) => string;
}

// Helper function to get nested translation value
function getNestedTranslation(obj: any, path: string): string {
    return path.split('.').reduce((current, key) => current?.[key], obj) || path;
}

export const useLanguageStore = create<LanguageStore>()(
    persist(
        (set, get) => ({
            currentLanguage: 'en',
            translations: {},
            setLanguage: async (lang: Language) => {
                try {
                    const translations = await import(`@/locales/${lang}.json`);
                    set({ currentLanguage: lang, translations: translations.default });

                    // Update HTML lang attribute
                    if (typeof document !== 'undefined') {
                        document.documentElement.lang = lang;
                        // Set direction for RTL languages
                        document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';
                    }
                } catch (error) {
                    console.error(`Failed to load translations for ${lang}:`, error);
                }
            },
            t: (key: string) => {
                const { translations } = get();
                return getNestedTranslation(translations, key);
            },
        }),
        {
            name: 'language-storage',
        }
    )
);

// Initialize language on module load
if (typeof window !== 'undefined') {
    const initLanguage = async () => {
        const store = useLanguageStore.getState();
        await store.setLanguage(store.currentLanguage);
    };
    initLanguage();
}
