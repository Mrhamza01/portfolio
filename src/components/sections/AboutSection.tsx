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

    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            {t('about.title')}
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground md:text-xl">
                        {t('about.subtitle')}
                    </p>
                </div>

                <div className="mx-auto max-w-4xl space-y-12">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-2xl border border-border bg-card p-8 shadow-lg"
                    >
                        <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                            {personalInfo.bio}
                        </p>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-2xl border border-border bg-card p-8 shadow-lg"
                    >
                        <h3 className="mb-6 text-2xl font-bold text-foreground">
                            {t('about.achievements')}
                        </h3>
                        <div className="space-y-4">
                            {achievements.map((achievement, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary mt-0.5" />
                                    <p className="text-muted-foreground">{achievement}</p>
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
                        className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-accent/10 p-8 shadow-lg"
                    >
                        <h3 className="mb-6 text-2xl font-bold text-foreground">
                            {t('about.futureGoals')}
                        </h3>
                        <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-line">
                            {futureGoals}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
