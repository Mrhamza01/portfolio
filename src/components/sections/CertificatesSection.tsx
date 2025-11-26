'use client';

import { useCertificates } from '@/constants/translated/certificates';
import { useLanguageStore } from '@/store/useLanguageStore';
import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export function CertificatesSection() {
    const { t } = useLanguageStore();
    const certificates = useCertificates();

    return (
        <section id="certificates" className="py-12 sm:py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="mb-12 sm:mb-16 text-center">
                    <h2 className="mb-3 sm:mb-4 text-3xl font-bold tracking-tight xs:text-4xl sm:text-5xl md:text-6xl">
                        <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            {t('certificates.title')}
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
                        {t('certificates.subtitle')}
                    </p>
                </div>

                <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                        >
                            {/* Icon */}
                            <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                                <Award className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                            </div>

                            {/* Title */}
                            <h3 className="mb-2 text-base sm:text-lg font-bold text-foreground">
                                {cert.title}
                            </h3>

                            {/* Issuer */}
                            <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-muted-foreground">
                                {t('certificates.issuedBy')} <span className="font-semibold text-primary">{cert.issuer}</span>
                            </p>

                            {/* Date */}
                            <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-muted-foreground">
                                {cert.issueDate}
                            </p>

                            {/* Skills */}
                            {cert.skills && cert.skills.length > 0 && (
                                <div className="mb-3 sm:mb-4 flex flex-wrap gap-1.5 sm:gap-2">
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
                                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary transition-colors hover:text-accent"
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
