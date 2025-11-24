import { useLanguageStore } from '@/store/useLanguageStore';
import { personalInfo, achievements, futureGoals } from '../info';

// Urdu translations
const personalInfoUr = {
    ...personalInfo,
    title: 'سینئر سافٹ ویئر انجینئر اور ٹیم لیڈ',
    tagline: 'قابل توسیع SaaS اور ERP پلیٹ فارمز کی تعمیر | Kubernetes، DevOps اور Cloud-Native ماہر',
    bio: `میں ایک نتائج پر مبنی **سسٹم آرکیٹیکٹ اور سینئر فل اسٹیک انجینئر** ہوں جو اعلی کارکردگی والے، کلاؤڈ نیٹیو SaaS پلیٹ فارمز کی تعمیر میں مہارت رکھتا ہے۔ **Kubernetes، DevOps، اور Microservices** میں گہری مہارت کے ساتھ، میں پیچیدہ کاروباری ضروریات کو قابل توسیع، محفوظ، اور کم لاگت تکنیکی حلوں میں تبدیل کرتا ہوں۔

فی الحال، میں **Multi-Techno ERP Integrated Solutions** میں انجینئرنگ کی کوششوں کی قیادت کرتا ہوں، جہاں میں نے شروع سے ایک انقلابی ملٹی ٹینینٹ ERP سسٹم ڈیزائن کیا۔ سیلف مینیجڈ Kubernetes کلسٹرز اور خودکار پروویژننگ کا فائدہ اٹھاتے ہوئے، میں نے **انفراسٹرکچر کے اخراجات میں 90% کمی** کی جبکہ سینکڑوں کرایہ داروں کے لیے ڈیٹا کی سخت علیحدگی اور ڈیزاسٹر ریکوری کو یقینی بنایا۔ میرا جنون مشکل آرکیٹیکچرل چیلنجوں کو حل کرنے اور ٹیموں کو عالمی معیار کا سافٹ ویئر فراہم کرنے کے لیے بااختیار بنانے میں ہے۔`,
};

const achievementsUr = [
    'سیلف آرکیٹیکٹڈ، بیئر میٹل Kubernetes کلسٹر پر منتقل ہو کر کلاؤڈ انفراسٹرکچر کے اخراجات میں **90% کمی** کی۔',
    'ایک مضبوط **ملٹی ٹینینٹ SaaS پلیٹ فارم** ڈیزائن اور تعینات کیا، جو نئے کلائنٹس کے لیے وقف شدہ ماحول (App + DB) کی زیرو ٹچ پروویژننگ کو قابل بناتا ہے۔',
    'اعلی اثر والی تکنیکی قیادت اور اہم انٹرپرائز انفراسٹرکچر کی فراہمی کی بدولت 12 ماہ سے کم عرصے میں **تنخواہ میں 180% اضافہ** حاصل کیا۔',
    'پروڈکشن گریڈ **DevOps پریکٹسز** کا آغاز کیا، خودکار CI/CD پائپ لائنز، ڈیزاسٹر ریکوری پروٹوکولز، اور جامع نگرانی کے نظام کو نافذ کیا۔',
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
