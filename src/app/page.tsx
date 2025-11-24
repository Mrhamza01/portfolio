'use client';

import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { CertificatesSection } from '@/components/sections/CertificatesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { RoadmapsSection } from '@/components/sections/RoadmapsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';
import { FloatingButtons } from '@/components/FloatingButtons';
import { AnimatedBackground } from '@/components/AnimatedBackground';
import { useEffect } from 'react';
import { useThemeStore } from '@/store/useThemeStore';
import { useLanguageStore } from '@/store/useLanguageStore';

export default function Home() {
  const { currentTheme, setTheme } = useThemeStore();
  const { currentLanguage, setLanguage } = useLanguageStore();

  // Initialize theme and language on mount
  useEffect(() => {
    // Re-apply current theme to ensure colors show
    setTheme(currentTheme.id);
    setLanguage(currentLanguage);
  }, []);

  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificatesSection />
      <TestimonialsSection />
      <BlogSection />
      <RoadmapsSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
