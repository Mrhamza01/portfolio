'use client';

import { usePersonalInfo } from '@/constants/translated/info';
import { socialLinks } from '@/constants/social-links';
import { useLanguageStore } from '@/store/useLanguageStore';
import { MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Linkedin, Github, Mail, Globe, Twitter } from 'lucide-react';

const iconMap: Record<string, any> = {
    linkedin: Linkedin,
    github: Github,
    mail: Mail,
    globe: Globe,
    twitter: Twitter,
};
export function ContactSection() {
    const { t } = useLanguageStore();
    const personalInfo = usePersonalInfo();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section id="contact" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-12 sm:mb-16 text-center px-4">
                    <h2 className="mb-3 sm:mb-4 text-3xl font-bold tracking-tight xs:text-4xl sm:text-5xl md:text-6xl">
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            {t('contact.title')}
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                        {t('contact.subtitle')}
                    </p>
                </div>

                <div className="mx-auto grid max-w-6xl gap-8 sm:gap-12 grid-cols-1 lg:grid-cols-2">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 sm:space-y-8"
                    >
                        <div>
                            <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-foreground">
                                {t('contact.info.email')}
                            </h3>

                            {/* Email */}
                            <div className="mb-4 sm:mb-6 flex items-start gap-3 sm:gap-4 rounded-xl border border-border bg-card p-4 sm:p-6 shadow-lg">
                                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-semibold text-foreground text-sm sm:text-base">{t('contact.info.email')}</p>
                                    <a
                                        href={`mailto:${personalInfo.email}`}
                                        className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm break-all"
                                    >
                                        {personalInfo.email}
                                    </a>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-3 sm:gap-4 rounded-xl border border-border bg-card p-4 sm:p-6 shadow-lg">
                                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-accent/10 flex-shrink-0">
                                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground text-sm sm:text-base">{t('contact.info.location')}</p>
                                    <p className="text-muted-foreground text-xs sm:text-sm">{personalInfo.location}</p>
                                </div>
                            </div>
                        </div>

                        {/* Social */}
                        <div>
                            <h4 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-foreground">
                                {t('footer.social')}
                            </h4>
                            <div className="flex gap-2 sm:gap-3">
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
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-8 shadow-lg">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="mb-2 block text-xs sm:text-sm font-medium text-foreground">
                                    {t('contact.form.name')}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border border-border bg-background px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="mb-2 block text-xs sm:text-sm font-medium text-foreground">
                                    {t('contact.form.email')}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border border-border bg-background px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="mb-2 block text-xs sm:text-sm font-medium text-foreground">
                                    {t('contact.form.subject')}
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-lg border border-border bg-background px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="mb-2 block text-xs sm:text-sm font-medium text-foreground">
                                    {t('contact.form.message')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full rounded-lg border border-border bg-background px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="group w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-3 sm:px-6 sm:py-4 text-base sm:text-lg font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'sending' ? (
                                    <>
                                        <div className="h-4 w-4 sm:h-5 sm:w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                        {t('contact.form.sending')}
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                                        {t('contact.form.send')}
                                    </>
                                )}
                            </button>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <div className="rounded-lg bg-green-500/10 border border-green-500/20 px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-green-600 dark:text-green-400">
                                    {t('contact.form.success')}
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="rounded-lg bg-red-500/10 border border-red-500/20 px-3 py-2 sm:px-4 sm:py-3 text-xs sm:text-sm text-red-600 dark:text-red-400">
                                    {t('contact.form.error')}
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
