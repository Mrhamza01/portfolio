'use client';

import { useSkillCategories } from '@/constants/translated/skills';
import { useLanguageStore } from '@/store/useLanguageStore';
import { motion } from 'framer-motion';

const levelColors = {
    Beginner: 'bg-blue-500',
    Intermediate: 'bg-green-500',
    Advanced: 'bg-orange-500',
    Expert: 'bg-purple-500',
};

const levelWidths = {
    Beginner: 'w-1/4',
    Intermediate: 'w-1/2',
    Advanced: 'w-3/4',
    Expert: 'w-full',
};

export function SkillsSection() {
    const { t } = useLanguageStore();
    const skillCategories = useSkillCategories();

    return (
        <section id="skills" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            {t('skills.title')}
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground md:text-xl">
                        {t('skills.subtitle')}
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                        >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            {/* Content */}
                            <div className="relative">
                                {/* Category Title */}
                                <h3 className="mb-6 text-xl font-bold text-foreground">
                                    {category.category}
                                </h3>

                                {/* Skills List */}
                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                                            className="space-y-2"
                                        >
                                            {/* Skill name and level */}
                                            <div className="flex items-center justify-between">
                                                <span className="font-medium text-foreground">
                                                    {skill.name}
                                                </span>
                                                {skill.level && (
                                                    <span className="text-xs font-medium text-muted-foreground">
                                                        {skill.level}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Progress bar */}
                                            {skill.level && (
                                                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: '100%' }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1, delay: skillIndex * 0.05 }}
                                                        className={`h-full rounded-full bg-gradient-to-r from-primary to-accent ${levelWidths[skill.level]}`}
                                                    />
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
