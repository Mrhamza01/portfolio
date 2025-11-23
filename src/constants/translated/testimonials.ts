import { useLanguageStore } from '@/store/useLanguageStore';
import { testimonials } from '../testimonials';

// Urdu translations for testimonials
const testimonialsUr = [
    {
        ...testimonials[0],
        content: 'حمزہ ایک غیر معمولی ڈویلپر ہیں جنہوں نے ہمارے ERP سسٹم کو شیڈول سے پہلے فراہم کیا۔ Kubernetes اور کلاؤڈ آرکیٹیکچر میں ان کی مہارت نے کارکردگی کو بہتر بناتے ہوئے ہمیں نمایاں لاگت بچائی۔',
    },
    {
        ...testimonials[1],
        content: 'حمزہ کے ساتھ کام کرنا ہمارے پروجیکٹ کے لیے گیم چینجر تھا۔ ان کی فل سٹیک مہارت اور تفصیل پر توجہ کے نتیجے میں ایک مضبوط، قابل توسیع ایپلیکیشن بنی جو ہماری توقعات سے بڑھ گئی۔',
    },
    {
        ...testimonials[2],
        content: 'حمزہ کی DevOps مہارتیں شاندار ہیں۔ انہوں نے ہماری پوری CI/CD پائپ لائن اور Kubernetes انفراسٹرکچر ترتیب دی، جس سے ڈیپلائمنٹس بغیر رکاوٹ کے ہو گئیں اور ہماری آپریشنل لاگت نمایاں طور پر کم ہو گئی۔',
    },
];

export function useTestimonials() {
    const { currentLanguage } = useLanguageStore();
    return currentLanguage === 'ur' ? testimonialsUr : testimonials;
}
