'use client';

import { personalInfo } from '@/constants/info';
import { socialLinks } from '@/constants/social-links';
import { useLanguageStore } from '@/store/useLanguageStore';
import { Heart, Linkedin, Github, Mail, Globe, Twitter } from 'lucide-react';

const iconMap: Record<string, any> = {
    linkedin: Linkedin,
    github: Github,
    mail: Mail,
    globe: Globe,
    twitter: Twitter,
};

export function Footer() {
    const { t } = useLanguageStore();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-card">
            <div className="container mx-auto px-4 py-8 sm:py-12">
                <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {/* Brand */}
                    <div className="text-center sm:text-left">
                        <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {personalInfo.name.split(' ')[0]}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                            {personalInfo.title}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center sm:text-left">
                        <h4 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-foreground">
                            Quick Links
                        </h4>
                        <div className="space-y-2 flex flex-col items-center sm:items-start">
                            {['about', 'projects', 'blog', 'contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    className="block text-xs sm:text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    {t(`nav.${item}`)}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div className="text-center sm:text-left">
                        <h4 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-foreground">
                            {t('footer.social')}
                        </h4>
                        <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
                            {socialLinks.slice(0, 4).map((link) => {
                                const Icon = iconMap[link.icon] || Globe;
                                return (
                                    <a
                                        key={link.id}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:scale-110"
                                        aria-label={link.platform}
                                    >
                                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-6 sm:mt-8 border-t border-border pt-6 sm:pt-8 text-center">
                    <p className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-foreground">
                        <span>© {currentYear} {personalInfo.name}. {t('footer.rights')}.</span>
                        <span className="flex items-center gap-1">
                            {t('footer.builtWith')} <Heart className="h-3 w-3 sm:h-4 sm:w-4 fill-red-500 text-red-500" />
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
