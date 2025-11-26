'use client';

import { blogPosts } from '@/constants/blog';
import { useLanguageStore } from '@/store/useLanguageStore';
import { Calendar, Clock, Tag, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export function BlogSection() {
    const { t } = useLanguageStore();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Extract unique categories
    const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

    // Filter posts
    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <section id="blog" className="py-12 sm:py-16 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="mb-8 sm:mb-12 text-center">
                    <h2 className="mb-3 sm:mb-4 text-3xl font-bold tracking-tight xs:text-4xl sm:text-5xl md:text-6xl">
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            {t('blog.title')}
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
                        {t('blog.subtitle')}
                    </p>
                </div>

                {/* Search and Filter Controls */}
                <div className="mb-8 sm:mb-12 flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center md:justify-between">
                    {/* Search Bar */}
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full rounded-full border border-border bg-background py-2 pl-10 pr-4 text-sm sm:text-base focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-colors ${selectedCategory === category
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masonry Layout */}
                <div className="columns-1 gap-4 space-y-4 sm:gap-6 sm:space-y-6 md:columns-2 lg:gap-8 lg:space-y-8 lg:columns-3">
                    {filteredPosts.map((post, index) => (
                        <div key={post.id} className="break-inside-avoid">
                            <Link href={`/blog/${post.id}`} target="_blank" rel="noopener noreferrer">
                                <motion.article
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-card shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                                >
                                    {/* Cover Image */}
                                    <div className="relative w-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                                        {post.coverImage ? (
                                            <img
                                                src={post.coverImage}
                                                alt={post.title}
                                                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="flex h-40 xs:h-48 sm:h-48 items-center justify-center">
                                                <span className="text-4xl font-bold text-primary/20">
                                                    {post.title.charAt(0)}
                                                </span>
                                            </div>
                                        )}

                                        {post.featured && (
                                            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-semibold text-white">
                                                {t('blog.featured')}
                                            </div>
                                        )}
                                    </div>

                                    <div className="p-4 sm:p-6">
                                        {/* Category */}
                                        <div className="mb-3 flex items-center gap-2">
                                            <Tag className="h-4 w-4 text-primary" />
                                            <span className="text-sm font-medium text-primary">{post.category}</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="mb-3 sm:mb-4 text-sm sm:text-base text-muted-foreground line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        {/* Meta */}
                                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
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
                            </Link>
                        </div>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="py-20 text-center text-muted-foreground">
                        <p className="text-xl">No articles found matching your criteria.</p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                            className="mt-4 text-primary hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
