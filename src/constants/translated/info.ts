import { useLanguageStore } from '@/store/useLanguageStore';
import { personalInfo, achievements, futureGoals } from '../info';

// Urdu translations
const personalInfoUr = {
    ...personalInfo,
    title: 'سینئر سافٹ ویئر انجینئر اور ٹیم لیڈ',
    tagline: 'قابل توسیع SaaS اور ERP پلیٹ فارمز کی تعمیر | Kubernetes، DevOps اور Cloud-Native ماہر',
    bio: `ہیلو، میں محمد حمزہ ہوں، فیصل آباد، پاکستان سے ایک فل سٹیک ڈویلپر ہوں، جس نے ورچوئل یونیورسٹی آف پاکستان سے کمپیوٹر سائنس میں بیچلر کی ڈگری حاصل کی ہے (2020-2024)۔

میں Multi-Techno ERP Integrated Solutions میں فل سٹیک ڈویلپر کے طور پر کام کرتا ہوں۔ میں نے ایک سیلف مینیجڈ Kubernetes کلسٹر پر ملٹی ٹینینٹ ERP سسٹم ڈیزائن اور ڈیپلائے کیا، جس سے managed Kubernetes services کے مقابلے میں 90% لاگت میں بچت ہوئی۔`,
};

const achievementsUr = [
    '12 ماہ سے کم میں 180% تنخواہ میں اضافہ',
    'ERP انفراسٹرکچر فراہم کیا جس سے کلاؤڈ اخراجات میں 90% کمی',
    'پروڈکشن گریڈ ماحول میں Kubernetes اور DevOps پریکٹسز کی قیادت',
    'متعدد کلائنٹس کی خدمت کرنے والا ملٹی ٹینینٹ SaaS پلیٹ فارم ڈیزائن کیا',
];

const futureGoalsUr = `میں جدید سافٹ ویئر آرکیٹیکچرز میں مہارت حاصل کرنے کا شوقین ہوں - بشمول microservices، plugin-based systems، اور event-driven architectures۔ میرا مقصد انتہائی قابل توسیع اور ماڈیولر سافٹ ویئر ڈیزائن کرنا ہے جو ٹیموں کو بااختیار بنائے اور آپریشنل اخراجات کو کم کرے۔

میں نئی ٹیکنالوجیز کو تیزی سے اپناتا ہوں اور تیز رفتار، کراس فنکشنل ٹیموں میں کامیاب ہوتا ہوں۔`;

// Hook to get translated personal info
export function usePersonalInfo() {
    const { currentLanguage } = useLanguageStore();

    return currentLanguage === 'ur' ? personalInfoUr : personalInfo;
}

export function useAchievements() {
    const { currentLanguage } = useLanguageStore();

    return currentLanguage === 'ur' ? achievementsUr : achievements;
}

export function useFutureGoals() {
    const { currentLanguage } = useLanguageStore();

    return currentLanguage === 'ur' ? futureGoalsUr : futureGoals;
}
