'use client';

import { roadmaps } from '@/constants/roadmaps';
import { useLanguageStore } from '@/store/useLanguageStore';
import { BookOpen, Clock, TrendingUp, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const difficultyColors = {
    Beginner: 'bg-green-500',
    Intermediate: 'bg-yellow-500',
    Advanced: 'bg-red-500',
};

export function RoadmapsSection() {
    const { t } = useLanguageStore();
    const [expandedRoadmap, setExpandedRoadmap] = useState<string | null>(null);

    return (
        <section id="roadmaps" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            {t('roadmaps.title')}
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground md:text-xl">
                        {t('roadmaps.subtitle')}
                    </p>
                </div>

                <div className="mx-auto max-w-5xl space-y-8">
                    {roadmaps.map((roadmap, index) => (
                        <motion.div
                            key={roadmap.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg"
                        >
                            {/* Roadmap Header */}
                            <div className="p-6 bg-gradient-to-r from-primary/10 to-accent/10">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="mb-2 text-2xl font-bold text-foreground">
                                            {roadmap.title}
                                        </h3>
                                        <p className="mb-4 text-muted-foreground">
                                            {roadmap.description}
                                        </p>

                                        <div className="flex flex-wrap gap-4 text-sm">
                                            <div className="flex items-center gap-2">
                                                <TrendingUp className="h-4 w-4 text-primary" />
                                                <span className="text-muted-foreground">
                                                    {t('roadmaps.difficulty')}:
                                                </span>
                                                <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${difficultyColors[roadmap.difficulty]}`}>
                                                    {roadmap.difficulty}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4 text-accent" />
                                                <span className="text-muted-foreground">
                                                    {t('roadmaps.estimatedTime')}: {roadmap.estimatedTime}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setExpandedRoadmap(expandedRoadmap === roadmap.id ? null : roadmap.id)}
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
                                    >
                                        <ChevronRight className={`h-5 w-5 transition-transform ${expandedRoadmap === roadmap.id ? 'rotate-90' : ''}`} />
                                    </button>
                                </div>
                            </div>

                            {/* Roadmap Phases */}
                            {expandedRoadmap === roadmap.id && (
                                <div className="p-6 space-y-6">
                                    {roadmap.phases.map((phase, phaseIndex) => (
                                        <motion.div
                                            key={phase.id}
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            transition={{ duration: 0.3, delay: phaseIndex * 0.1 }}
                                            className="rounded-xl border border-border bg-background p-6"
                                        >
                                            {/* Phase Header */}
                                            <div className="mb-4 flex items-start justify-between">
                                                <div>
                                                    <h4 className="mb-1 text-lg font-bold text-foreground">
                                                        Phase {phaseIndex + 1}: {phase.title}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        Duration: {phase.duration}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="mb-4 text-muted-foreground">
                                                {phase.description}
                                            </p>

                                            {/* Topics */}
                                            <div className="mb-4">
                                                <h5 className="mb-2 text-sm font-semibold text-foreground flex items-center gap-2">
                                                    <BookOpen className="h-4 w-4 text-primary" />
                                                    {t('roadmaps.topics')}
                                                </h5>
                                                <div className="flex flex-wrap gap-2">
                                                    {phase.topics.map((topic) => (
                                                        <span
                                                            key={topic}
                                                            className="rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                                                        >
                                                            {topic}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Resources */}
                                            {phase.resources && phase.resources.length > 0 && (
                                                <div className="mb-4">
                                                    <h5 className="mb-2 text-sm font-semibold text-foreground">
                                                        {t('roadmaps.resources')}
                                                    </h5>
                                                    <ul className="space-y-1">
                                                        {phase.resources.map((resource, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                                                                <span>{resource}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {/* Projects */}
                                            {phase.projects && phase.projects.length > 0 && (
                                                <div>
                                                    <h5 className="mb-2 text-sm font-semibold text-foreground">
                                                        {t('roadmaps.projects')}
                                                    </h5>
                                                    <ul className="space-y-1">
                                                        {phase.projects.map((project, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                                                                <span>{project}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
