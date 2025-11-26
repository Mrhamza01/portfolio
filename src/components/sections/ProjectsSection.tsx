'use client';

import { useProjects } from '@/constants/translated/projects';
import { useLanguageStore } from '@/store/useLanguageStore';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function ProjectsSection() {
    const { t } = useLanguageStore();
    const projects = useProjects();

    return (
        <section id="projects" className="py-12 sm:py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-12 sm:mb-16 text-center">
                    <h2 className="mb-3 sm:mb-4 text-3xl font-bold tracking-tight xs:text-4xl sm:text-5xl md:text-6xl">
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            {t('projects.title')}
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
                        {t('projects.subtitle')}
                    </p>
                </div>

                {/* Projects Masonry Layout */}
                <div className="columns-1 gap-4 space-y-4 sm:gap-6 sm:space-y-6 md:columns-2 lg:gap-8 lg:space-y-8 lg:columns-3">
                    {projects.map((project, index) => (
                        <div key={project.id} className="break-inside-avoid">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative flex flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                            >
                                {/* Project Image */}
                                <Link href={`/projects/${project.id}`} target="_blank" className="relative h-48 xs:h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 block cursor-pointer">
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
                                        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-semibold text-white shadow-lg">
                                            Featured
                                        </div>
                                    )}
                                </Link>

                                {/* Project Content */}
                                <div className="flex flex-1 flex-col p-4 sm:p-6">
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
                                    <Link href={`/projects/${project.id}`} target="_blank" className="mb-2 sm:mb-3 block">
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                                            {project.title}
                                        </h3>
                                    </Link>

                                    {/* Description */}
                                    <p className="mb-3 sm:mb-4 text-sm sm:text-base text-muted-foreground line-clamp-3 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mb-4 sm:mb-6 flex flex-wrap gap-1.5 sm:gap-2">
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
                                    <div className="mt-auto flex gap-2 sm:gap-3">
                                        <Link
                                            href={`/projects/${project.id}`}
                                            target="_blank"
                                            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
                                        >
                                            View Details
                                            <ArrowRight className="h-4 w-4" />
                                        </Link>

                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-3 py-2 text-foreground transition-all hover:bg-accent hover:text-accent-foreground"
                                                title="View Live Demo"
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-3 py-2 text-foreground transition-all hover:bg-accent hover:text-accent-foreground"
                                                title="View Source Code"
                                            >
                                                <Github className="h-4 w-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
