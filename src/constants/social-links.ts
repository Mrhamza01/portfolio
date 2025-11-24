export interface SocialLink {
    id: string;
    platform: string;
    url: string;
    icon: string;
    username?: string;
    color?: string;
}

export const socialLinks: SocialLink[] = [
    {
        id: 'linkedin',
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/hamza-ghafoor',
        icon: 'linkedin',
        username: 'hamzaghafoor',
        color: '#0A66C2',
    },
    {
        id: 'github',
        platform: 'GitHub',
        url: 'https://github.com/Mrhamza01',
        icon: 'github',
        username: 'hamzaghafoor',
        color: '#181717',
    },
    {
        id: 'portfolio',
        platform: 'Portfolio',
        url: 'https://hamzaghafoor.vercel.app',
        icon: 'globe',
        color: '#6366F1',
    },
    {
        id: 'email',
        platform: 'Email',
        url: 'mailto:hamza.kamboh035@gmail.com',
        icon: 'mail',
        username: 'hamza.kamboh035@gmail.com',
        color: '#EA4335',
    },
    // {
    //     id: 'twitter',
    //     platform: 'Twitter',
    //     url: 'https://twitter.com/hamzaghafoor',
    //     icon: 'twitter',
    //     username: '@hamzaghafoor',
    //     color: '#1DA1F2',
    // },
];

export const whatsappConfig = {
    phoneNumber: '+923097906831',
    defaultMessage: 'Hi Hamza! I found your portfolio and would like to connect.',
};
