import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { themes, defaultTheme, type ColorPalette } from '@/constants/themes';

interface ThemeStore {
    currentTheme: ColorPalette;
    setTheme: (themeId: string) => void;
}

export const useThemeStore = create<ThemeStore>()(
    persist(
        (set) => ({
            currentTheme: defaultTheme,
            setTheme: (themeId: string) => {
                const theme = themes.find((t) => t.id === themeId);
                if (theme) {
                    set({ currentTheme: theme });
                    applyThemeToDocument(theme);
                }
            },
        }),
        {
            name: 'theme-storage',
            onRehydrateStorage: () => (state) => {
                if (state?.currentTheme) {
                    applyThemeToDocument(state.currentTheme);
                }
            },
        }
    )
);

// Apply theme colors to document
function applyThemeToDocument(theme: ColorPalette) {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    const style = root.style;

    // Apply all theme colors as inline styles to override CSS
    style.setProperty('--color-primary', `hsl(${theme.colors.primary})`);
    style.setProperty('--color-primary-foreground', `hsl(${theme.colors.primaryForeground})`);
    style.setProperty('--color-secondary', `hsl(${theme.colors.secondary})`);
    style.setProperty('--color-secondary-foreground', `hsl(${theme.colors.secondaryForeground})`);
    style.setProperty('--color-accent', `hsl(${theme.colors.accent})`);
    style.setProperty('--color-accent-foreground', `hsl(${theme.colors.accentForeground})`);
    style.setProperty('--color-background', `hsl(${theme.colors.background})`);
    style.setProperty('--color-foreground', `hsl(${theme.colors.foreground})`);
    style.setProperty('--color-muted', `hsl(${theme.colors.muted})`);
    style.setProperty('--color-muted-foreground', `hsl(${theme.colors.mutedForeground})`);
    style.setProperty('--color-card', `hsl(${theme.colors.card})`);
    style.setProperty('--color-card-foreground', `hsl(${theme.colors.cardForeground})`);
    style.setProperty('--color-border', `hsl(${theme.colors.border})`);
    style.setProperty('--color-ring', `hsl(${theme.colors.ring})`);
}

// Initialize theme on module load
if (typeof window !== 'undefined') {
    // Wait for store to be ready
    setTimeout(() => {
        const store = useThemeStore.getState();
        applyThemeToDocument(store.currentTheme);
    }, 0);
}
