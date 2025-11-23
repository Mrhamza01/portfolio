export interface ColorPalette {
    id: string;
    name: string;
    colors: {
        primary: string;
        primaryForeground: string;
        secondary: string;
        secondaryForeground: string;
        accent: string;
        accentForeground: string;
        background: string;
        foreground: string;
        muted: string;
        mutedForeground: string;
        card: string;
        cardForeground: string;
        border: string;
        ring: string;
        // Gradient colors
        gradientFrom: string;
        gradientVia?: string;
        gradientTo: string;
    };
}

export const themes: ColorPalette[] = [
    {
        id: 'default',
        name: 'Modern Purple',
        colors: {
            primary: '262.1 83.3% 57.8%',
            primaryForeground: '210 40% 98%',
            secondary: '220 14.3% 95.9%',
            secondaryForeground: '220.9 39.3% 11%',
            accent: '280 89% 66%',
            accentForeground: '210 40% 98%',
            background: '0 0% 100%',
            foreground: '224 71.4% 4.1%',
            muted: '220 14.3% 95.9%',
            mutedForeground: '220 8.9% 46.1%',
            card: '0 0% 100%',
            cardForeground: '224 71.4% 4.1%',
            border: '220 13% 91%',
            ring: '262.1 83.3% 57.8%',
            gradientFrom: '262.1 83.3% 57.8%',
            gradientVia: '280 89% 66%',
            gradientTo: '291.4 84.1% 60.6%',
        },
    },
    {
        id: 'google',
        name: 'Google',
        colors: {
            primary: '217 89% 61%',
            primaryForeground: '0 0% 100%',
            secondary: '4 90% 58%',
            secondaryForeground: '0 0% 100%',
            accent: '45 100% 51%',
            accentForeground: '0 0% 0%',
            background: '0 0% 100%',
            foreground: '0 0% 13%',
            muted: '210 40% 96.1%',
            mutedForeground: '215.4 16.3% 46.9%',
            card: '0 0% 100%',
            cardForeground: '0 0% 13%',
            border: '214.3 31.8% 91.4%',
            ring: '217 89% 61%',
            gradientFrom: '217 89% 61%',
            gradientVia: '4 90% 58%',
            gradientTo: '45 100% 51%',
        },
    },
    {
        id: 'odoo',
        name: 'Odoo',
        colors: {
            primary: '280 100% 40%',
            primaryForeground: '0 0% 100%',
            secondary: '340 82% 52%',
            secondaryForeground: '0 0% 100%',
            accent: '291 64% 42%',
            accentForeground: '0 0% 100%',
            background: '0 0% 100%',
            foreground: '240 10% 3.9%',
            muted: '240 4.8% 95.9%',
            mutedForeground: '240 3.8% 46.1%',
            card: '0 0% 100%',
            cardForeground: '240 10% 3.9%',
            border: '240 5.9% 90%',
            ring: '280 100% 40%',
            gradientFrom: '280 100% 40%',
            gradientVia: '291 64% 42%',
            gradientTo: '340 82% 52%',
        },
    },
];

export const defaultTheme = themes[0];
