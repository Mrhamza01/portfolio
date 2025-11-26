'use client';

import { usePersonalInfo, useAchievements, useFutureGoals } from '@/constants/translated/info';
import { useLanguageStore } from '@/store/useLanguageStore';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function AboutSection() {
    const { t } = useLanguageStore();
    const personalInfo = usePersonalInfo();
    const achievements = useAchievements();
    const futureGoals = useFutureGoals();

    // Helper to render text with bold markers
    const renderWithBold = (text: string) => {
        return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={index} className="font-bold text-foreground">{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    return (
        <section id="about" className="py-12 sm:py-16 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="mb-12 sm:mb-16 text-center">
                    <h2 className="mb-3 sm:mb-4 text-3xl font-bold tracking-tight xs:text-4xl sm:text-5xl md:text-6xl">
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            {t('about.title')}
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
                        {t('about.subtitle')}
                    </p>
                </div>

                <div className="mx-auto max-w-4xl space-y-8 sm:space-y-12">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-xl sm:rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-8 shadow-lg"
                    >
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                            {renderWithBold(personalInfo.bio)}
                        </p>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-xl sm:rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-8 shadow-lg"
                    >
                        <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-foreground">
                            {t('about.achievements')}
                        </h3>
                        <div className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="flex items-start gap-2 sm:gap-3">
                                    <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 text-primary mt-0.5" />
                                    <p className="text-sm sm:text-base text-muted-foreground">{renderWithBold(achievement)}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Future Goals */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="rounded-xl sm:rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-accent/10 p-4 sm:p-6 md:p-8 shadow-lg"
                    >
                        <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold text-foreground">
                            {t('about.futureGoals')}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                            {futureGoals}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
