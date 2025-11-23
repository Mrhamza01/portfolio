import { useLanguageStore } from '@/store/useLanguageStore';
import { certificates } from '../certificates';

// Urdu translations for certificates
const certificatesUr = [
    {
        ...certificates[0],
        title: 'Google UX Design Specialization',
        issuer: 'Google',
    },
    {
        ...certificates[1],
        title: 'Google Digital Marketing & E-commerce Specialization',
        issuer: 'Google',
    },
    {
        ...certificates[2],
        title: 'IBM Full Stack Software Developer Specialization',
        issuer: 'IBM',
    },
    {
        ...certificates[3],
        title: 'Back End Development and APIs',
        issuer: 'freeCodeCamp',
    },
    {
        ...certificates[4],
        title: 'Google Data Analytics Specialization',
        issuer: 'Google',
    },
];

export function useCertificates() {
    const { currentLanguage } = useLanguageStore();
    return currentLanguage === 'ur' ? certificatesUr : certificates;
}
