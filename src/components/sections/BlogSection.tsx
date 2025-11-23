'use client';

import { blogPosts } from '@/constants/blog';
import { useLanguageStore } from '@/store/useLanguageStore';
import { Calendar, Clock, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

export function BlogSection() {
    const { t } = useLanguageStore();

    return (
        <section id="blog" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            {t('blog.title')}
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground md:text-xl">
                        {t('blog.subtitle')}
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                        >
                            {/* Cover Image */}
                            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                                {post.coverImage ? (
                                    <img
                                        src={post.coverImage}
                                        alt={post.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center">
                                        <span className="text-4xl font-bold text-primary/20">
                                            {post.title.charAt(0)}
                                        </span>
                                    </div>
                                )}

                                {post.featured && (
                                    <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-semibold text-white">
                                        {t('blog.featured')}
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                {/* Category */}
                                <div className="mb-3 flex items-center gap-2">
                                    <Tag className="h-4 w-4 text-primary" />
                                    <span className="text-sm font-medium text-primary">{post.category}</span>
                                </div>

                                {/* Title */}
                                <h3 className="mb-3 text-xl font-bold text-foreground line-clamp-2">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="mb-4 text-muted-foreground line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Meta */}
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        <span>{post.publishDate}</span>
                                    </div>
                                    {post.readTime && (
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Tags */}
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {post.tags.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
