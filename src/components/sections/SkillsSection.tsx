'use client';

import { useSkillCategories } from '@/constants/translated/skills';
import { useLanguageStore } from '@/store/useLanguageStore';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Code2, Cloud, Terminal, Layers, Database, Globe, Server } from 'lucide-react';

export function SkillsSection() {
    const { t } = useLanguageStore();
    const skillCategories = useSkillCategories();
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'development', label: 'Development' },
        { id: 'devops', label: 'DevOps & Cloud' },
        { id: 'tools', label: 'Tools & Others' },
    ];

    const categoryGroups: Record<string, string[]> = {
        development: ['frontend', 'backend', 'database', 'baas'],
        devops: ['devops', 'cloud'],
        tools: ['tools', 'other'],
    };

    const filteredCategories = skillCategories.filter(cat => {
        if (activeFilter === 'all') return true;
        return categoryGroups[activeFilter]?.includes(cat.id);
    });

    // Helper to get icon for category
    const getCategoryIcon = (id: string) => {
        switch (id) {
            case 'frontend': return <Globe className="w-5 h-5" />;
            case 'backend': return <Server className="w-5 h-5" />;
            case 'database': return <Database className="w-5 h-5" />;
            case 'devops': return <Cloud className="w-5 h-5" />;
            case 'cloud': return <Cloud className="w-5 h-5" />;
            case 'tools': return <Terminal className="w-5 h-5" />;
            case 'baas': return <Layers className="w-5 h-5" />;
            default: return <Code2 className="w-5 h-5" />;
        }
    };

    return (
        <section id="skills" className="py-12 sm:py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-8 sm:mb-12 text-center">
                    <h2 className="mb-3 sm:mb-4 text-3xl font-bold tracking-tight xs:text-4xl sm:text-5xl md:text-6xl">
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            {t('skills.title')}
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                        {t('skills.subtitle')}
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12 px-2">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeFilter === filter.id
                                ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                                : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <motion.div
                    layout
                    className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredCategories.map((category) => (
                            <motion.div
                                layout
                                key={category.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative overflow-hidden rounded-lg sm:rounded-xl border border-border bg-card p-4 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20"
                            >
                                {/* Header */}
                                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                                    <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 text-primary">
                                        {getCategoryIcon(category.id)}
                                    </div>
                                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                                        {category.category}
                                    </h3>
                                </div>

                                {/* Skills Badges */}
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, index) => (
                                        <motion.span
                                            key={skill.name}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1 rounded-md bg-muted text-xs sm:text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary cursor-default border border-transparent hover:border-primary/20"
                                        >
                                            {skill.name}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
