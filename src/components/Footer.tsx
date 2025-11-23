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
            <div className="container mx-auto px-4 py-12">
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Brand */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {personalInfo.name.split(' ')[0]}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {personalInfo.title}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-foreground">
                            Quick Links
                        </h4>
                        <div className="space-y-2">
                            {['about', 'projects', 'blog', 'contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item}`}
                                    className="block text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    {t(`nav.${item}`)}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="mb-4 text-sm font-semibold text-foreground">
                            {t('footer.social')}
                        </h4>
                        <div className="flex gap-3">
                            {socialLinks.slice(0, 4).map((link) => {
                                const Icon = iconMap[link.icon] || Globe;
                                return (
                                    <a
                                        key={link.id}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:scale-110"
                                        aria-label={link.platform}
                                    >
                                        <Icon className="h-5 w-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 border-t border-border pt-8 text-center">
                    <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        © {currentYear} {personalInfo.name}. {t('footer.rights')}.
                        <span className="flex items-center gap-1">
                            {t('footer.builtWith')} <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
