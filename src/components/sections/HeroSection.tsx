'use client';

import { usePersonalInfo } from '@/constants/translated/info';
import { socialLinks } from '@/constants/social-links';
import { useLanguageStore } from '@/store/useLanguageStore';
import { ArrowRight, Download, Github, Linkedin, Mail, Globe, Sparkles, Bot } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

const iconMap: Record<string, any> = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail,
    globe: Globe,
};

export function HeroSection() {
    const { t } = useLanguageStore();
    const personalInfo = usePersonalInfo();
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // GSAP Animations
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(titleRef.current, {
                opacity: 0,
                y: 100,
                scale: 0.8,
                duration: 1.2,
                ease: 'power4.out',
            })
                .from(subtitleRef.current, {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    ease: 'power3.out',
                }, '-=0.6')
                .from(ctaRef.current, {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    ease: 'power2.out',
                }, '-=0.4');

            // Floating animation for title
            gsap.to(titleRef.current, {
                y: -20,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });
        }, heroRef);

        // Particle Animation
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx2d = canvas.getContext('2d');
        if (!ctx2d) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Array<{
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
        }> = [];

        // Create particles
        for (let i = 0; i < 100; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.2,
            });
        }

        let animationId: number;

        function animate() {
            if (!ctx2d || !canvas) return;

            ctx2d.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;

                // Wrap around screen
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.y > canvas.height) particle.y = 0;
                if (particle.y < 0) particle.y = canvas.height;

                // Draw particle
                ctx2d.beginPath();
                ctx2d.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx2d.fillStyle = `rgba(168, 85, 247, ${particle.opacity})`;
                ctx2d.fill();
            });

            // Draw connections
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach((p2) => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx2d.beginPath();
                        ctx2d.moveTo(p1.x, p1.y);
                        ctx2d.lineTo(p2.x, p2.y);
                        ctx2d.strokeStyle = `rgba(168, 85, 247, ${0.15 * (1 - distance / 150)})`;
                        ctx2d.lineWidth = 1;
                        ctx2d.stroke();
                    }
                });
            });

            animationId = requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            ctx.revert();
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className="relative min-h-screenw flex items-center justify-center overflow-hidden"
        >
            {/* Animated Canvas Background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
                style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a0a 100%)' }}
            />

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Content */}
            <div className="container relative z-10 px-4 py-20">
                <div className="mx-auto  max-w-4xl text-center">
                    {/* Sparkle Icon */}
                    <div className="mb-6 flex justify-center">
                        <div className="relative">
                            <Sparkles className="h-16 w-16 text-primary animate-spin" style={{ animationDuration: '8s' }} />
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                        </div>
                    </div>

                    {/* Greeting */}
                    <p className="mb-4 text-lg font-medium text-primary/80 animate-pulse">
                        {t('hero.greeting')}
                    </p>

                    {/* Name with 3D effect */}
                    <h1
                        ref={titleRef}
                        className="mb-4 sm:mb-6 text-3xl font-bold tracking-tight xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl px-2"
                        style={{
                            textShadow: '0 0 40px rgba(168, 85, 247, 0.5), 0 0 80px rgba(168, 85, 247, 0.3)',
                        }}
                    >
                        <span className="inline-block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                            {personalInfo.name}
                        </span>
                    </h1>

                    {/* Title */}
                    <p
                        ref={subtitleRef}
                        className="mb-3 sm:mb-4 text-base font-semibold text-white xs:text-lg sm:text-xl md:text-2xl lg:text-3xl px-2"
                    >
                        {personalInfo.title}
                    </p>

                    {/* Tagline */}
                    <p className="mb-6 sm:mb-8 text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                        {personalInfo.tagline}
                    </p>

                    {/* Social Links with hover effects */}
                    <div className="mb-8 sm:mb-12 flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 px-2">
                        {socialLinks.slice(0, 4).map((link, index) => {
                            const Icon = iconMap[link.icon] || Globe;
                            return (
                                <a
                                    key={link.id}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative flex h-10 w-10 xs:h-12 xs:w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-black/40 backdrop-blur-sm text-white transition-all duration-500 hover:scale-110 sm:hover:scale-125 hover:border-primary hover:bg-primary hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                                    style={{
                                        animation: `float 3s ease-in-out infinite`,
                                        animationDelay: `${index * 0.2}s`,
                                    }}
                                    aria-label={link.platform}
                                >
                                    <Icon className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 transition-transform group-hover:scale-110" />
                                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            );
                        })}
                    </div>

                    {/* CTA Buttons with 3D effects */}
                    <div ref={ctaRef} className="flex flex-col items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:flex-row sm:flex-wrap">
                        <a
                            href="#projects"
                            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary via-accent to-secondary px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] overflow-hidden w-full sm:w-auto max-w-xs"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="relative z-10">{t('hero.cta.viewWork')}</span>
                            <ArrowRight className="relative z-10 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-2" />
                        </a>

                        <a
                            href={personalInfo.resumeUrl || '#'}
                            download
                            className="group relative inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-black/40 backdrop-blur-sm px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:bg-primary hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] w-full sm:w-auto max-w-xs"
                        >
                            <Download className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-110" />
                            <span>{t('hero.cta.downloadResume')}</span>
                        </a>

                        <Link
                            href="/ai-chat"
                            className="group relative inline-flex items-center justify-center gap-2 rounded-full border-2 border-accent bg-black/40 backdrop-blur-sm px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white transition-all duration-500 hover:scale-105 sm:hover:scale-110 hover:bg-accent hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] w-full sm:w-auto max-w-xs"
                        >
                            <Bot className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:scale-110" />
                            <span>Chat with AI</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll indicator with animation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="h-14 w-9 rounded-full border-2 border-primary/50 p-2 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                    <div className="h-3 w-3 rounded-full bg-primary mx-auto animate-pulse" />
                </div>
            </div>

            {/* Custom keyframes */}
            <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
        </section>
    );
}
