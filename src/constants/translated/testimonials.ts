import { useLanguageStore } from '@/store/useLanguageStore';
import { testimonials } from '../testimonials';

// Urdu translations for testimonials
const testimonialsUr = [
    {
        ...testimonials[0],
        // content: '...', // TODO: Translate to Urdu
    },
    {
        ...testimonials[1],
        // content: '...', // TODO: Translate to Urdu
    },
];

export function useTestimonials() {
    const { currentLanguage } = useLanguageStore();
    return currentLanguage === 'ur' ? testimonialsUr : testimonials;
}
