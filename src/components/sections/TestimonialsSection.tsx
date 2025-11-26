'use client';

import { useTestimonials } from '@/constants/translated/testimonials';
import { useLanguageStore } from '@/store/useLanguageStore';
import { Quote, Star, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export function TestimonialsSection() {
    const { t } = useLanguageStore();
    const testimonials = useTestimonials();

    return (
        <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="mb-12 sm:mb-16 text-center">
                    <h2 className="mb-3 sm:mb-4 text-3xl font-bold tracking-tight xs:text-4xl sm:text-5xl md:text-6xl">
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            {t('testimonials.title')}
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
                        {t('testimonials.subtitle')}
                    </p>
                </div>

                <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                        >
                            <Quote className="absolute top-3 right-3 sm:top-4 sm:right-4 h-10 w-10 sm:h-12 sm:w-12 text-primary/10" />

                            <div className="relative">
                                {/* Rating */}
                                {testimonial.rating && (
                                    <div className="mb-4 flex gap-1">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                )}

                                {/* Content */}
                                <p className="mb-4 sm:mb-6 text-sm sm:text-base text-muted-foreground italic">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0" />
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                                            {testimonial.linkedin && (
                                                <a
                                                    href={testimonial.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-muted-foreground hover:text-[#0077b5] transition-colors"
                                                    title="View LinkedIn Profile"
                                                >
                                                    <Linkedin className="h-4 w-4" />
                                                </a>
                                            )}
                                        </div>
                                        <p className="text-xs sm:text-sm text-muted-foreground">
                                            {testimonial.role} at {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
