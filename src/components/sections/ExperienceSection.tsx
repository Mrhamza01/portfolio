'use client';

import { useExperiences } from '@/constants/translated/experience';
import { useLanguageStore } from '@/store/useLanguageStore';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function ExperienceSection() {
    const { t } = useLanguageStore();
    const experiences = useExperiences();

    const formatDate = (date: string) => {
        if (date === 'Present') return t('experience.current');
        const [year, month] = date.split('-');
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return `${monthNames[parseInt(month) - 1]} ${year}`;
    };

    return (
        <section id="experience" className="py-12 sm:py-16 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-12 sm:mb-16 text-center">
                    <h2 className="mb-3 sm:mb-4 text-3xl font-bold tracking-tight xs:text-4xl sm:text-5xl md:text-6xl">
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            {t('experience.title')}
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
                        {t('experience.subtitle')}
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative mx-auto max-w-5xl">
                    {/* Timeline line */}
                    <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary md:left-1/2" />

                    {/* Experience items */}
                    <div className="space-y-8 sm:space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-4 sm:left-8 flex h-3 w-3 sm:h-4 sm:w-4 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                                    <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 sm:border-4 border-background bg-gradient-to-br from-primary to-accent shadow-lg" />
                                </div>

                                {/* Content card */}
                                <div className={`ml-10 sm:ml-20 w-full md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                                        {/* Current badge */}
                                        {exp.current && (
                                            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-semibold text-white shadow-lg">
                                                {t('experience.current')}
                                            </div>
                                        )}

                                        {/* Company & Title */}
                                        <div className="mb-3 sm:mb-4">
                                            <h3 className="mb-1 sm:mb-2 text-lg sm:text-xl md:text-2xl font-bold text-foreground pr-16">
                                                {exp.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-primary">
                                                <Briefcase className="h-3 w-3 sm:h-4 sm:w-4" />
                                                <span className="font-semibold text-sm sm:text-base">{exp.company}</span>
                                            </div>
                                        </div>

                                        {/* Date & Location */}
                                        <div className="mb-3 sm:mb-4 flex flex-col xs:flex-row xs:flex-wrap gap-2 xs:gap-4 text-xs sm:text-sm text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                                                <span>
                                                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="mb-3 sm:mb-4 text-sm sm:text-base text-muted-foreground">
                                            {exp.description}
                                        </p>

                                        {/* Responsibilities */}
                                        {exp.responsibilities && exp.responsibilities.length > 0 && (
                                            <div className="mb-3 sm:mb-4">
                                                <h4 className="mb-2 text-xs sm:text-sm font-semibold text-foreground">
                                                    {t('experience.responsibilities')}
                                                </h4>
                                                <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                                                    {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                                                        <li key={idx} className="flex items-start gap-2">
                                                            <span className="mt-1.5 h-1 w-1 sm:h-1.5 sm:w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                                            <span>{resp}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Technologies */}
                                        {exp.technologies && exp.technologies.length > 0 && (
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {exp.technologies.slice(0, 6).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="rounded-md bg-primary/10 px-2 py-0.5 sm:py-1 text-xs font-medium text-primary"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
