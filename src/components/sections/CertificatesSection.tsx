'use client';

import { certificates } from '@/constants/certificates';
import { useLanguageStore } from '@/store/useLanguageStore';
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export function CertificatesSection() {
    const { t } = useLanguageStore();

    return (
        <section id="certificates" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            {t('certificates.title')}
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground md:text-xl">
                        {t('certificates.subtitle')}
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                        >
                            {/* Icon */}
                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                                <Award className="h-8 w-8 text-white" />
                            </div>

                            {/* Title */}
                            <h3 className="mb-2 text-lg font-bold text-foreground">
                                {cert.title}
                            </h3>

                            {/* Issuer */}
                            <p className="mb-4 text-sm text-muted-foreground">
                                {t('certificates.issuedBy')} <span className="font-semibold text-primary">{cert.issuer}</span>
                            </p>

                            {/* Date */}
                            <p className="mb-4 text-sm text-muted-foreground">
                                {cert.issueDate}
                            </p>

                            {/* Skills */}
                            {cert.skills && cert.skills.length > 0 && (
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {cert.skills.slice(0, 3).map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Link */}
                            {cert.credentialUrl && (
                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
                                >
                                    {t('certificates.viewCredential')}
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
