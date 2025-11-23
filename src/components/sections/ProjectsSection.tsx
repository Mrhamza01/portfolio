'use client';

import { projects } from '@/constants/projects';
import { useLanguageStore } from '@/store/useLanguageStore';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export function ProjectsSection() {
    const { t } = useLanguageStore();

    return (
        <section id="projects" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            {t('projects.title')}
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground md:text-xl">
                        {t('projects.subtitle')}
                    </p>
                </div>

                {/* Projects Grid */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ staggerChildren: 0.2 }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                        >
                            {/* Project Image */}
                            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center">
                                        <span className="text-6xl font-bold text-primary/20">
                                            {project.title.charAt(0)}
                                        </span>
                                    </div>
                                )}

                                {/* Featured Badge */}
                                {project.featured && (
                                    <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-semibold text-white shadow-lg">
                                        Featured
                                    </div>
                                )}
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                {/* Category & Status */}
                                <div className="mb-3 flex items-center gap-2">
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                        {project.category}
                                    </span>
                                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                                        {project.status}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="mb-3 text-2xl font-bold text-foreground">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="mb-4 text-muted-foreground line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 5).map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 5 && (
                                        <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                                            +{project.technologies.length - 5} more
                                        </span>
                                    )}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3">
                                    {project.demoUrl && (
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            {t('projects.viewDemo')}
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-all hover:bg-accent"
                                        >
                                            <Github className="h-4 w-4" />
                                            {t('projects.viewCode')}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
