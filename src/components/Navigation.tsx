'use client';

import { useLanguageStore } from '@/store/useLanguageStore';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Menu, X, Bot } from 'lucide-react';
import { useState, useEffect } from 'react';
import { personalInfo } from '@/constants/info';
import Link from 'next/link';

const navItems = [
    { key: 'about', href: '#about' },
    { key: 'experience', href: '#experience' },
    { key: 'projects', href: '#projects' },
    { key: 'skills', href: '#skills' },
    { key: 'certificates', href: '#certificates' },
    { key: 'testimonials', href: '#testimonials' },
    { key: 'blog', href: '#blog' },
    { key: 'roadmaps', href: '#roadmaps' },
    { key: 'contact', href: '#contact' },
    { key: 'aiChat', href: '/ai-chat', isPage: true },
];

export function Navigation() {
    const { t } = useLanguageStore();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-background/80 backdrop-blur-lg shadow-lg border-b border-border'
                : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a
                        href="#"
                        className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                    >
                        {personalInfo.name.split(' ')[0]}
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navItems.map((item) => (
                            item.isPage ? (
                                <Link
                                    key={item.key}
                                    href={item.href}
                                    className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary flex items-center gap-1"
                                >
                                    <Bot className="h-4 w-4" />
                                    {t(`nav.${item.key}`)}
                                </Link>
                            ) : (
                                <a
                                    key={item.key}
                                    href={item.href}
                                    className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                                >
                                    {t(`nav.${item.key}`)}
                                </a>
                            )
                        ))}
                    </div>

                    {/* Right side controls */}
                    <div className="flex items-center gap-3">
                        <ThemeSwitcher />
                        <LanguageSwitcher />

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden flex items-center justify-center h-10 w-10 rounded-lg border border-border bg-card text-foreground hover:bg-accent"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="lg:hidden py-4 border-t border-border">
                        <div className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                item.isPage ? (
                                    <Link
                                        key={item.key}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-2 text-sm font-medium text-foreground/80 rounded-lg transition-colors hover:bg-accent hover:text-primary flex items-center gap-2"
                                    >
                                        <Bot className="h-4 w-4" />
                                        {t(`nav.${item.key}`)}
                                    </Link>
                                ) : (
                                    <a
                                        key={item.key}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="px-4 py-2 text-sm font-medium text-foreground/80 rounded-lg transition-colors hover:bg-accent hover:text-primary"
                                    >
                                        {t(`nav.${item.key}`)}
                                    </a>
                                )
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
