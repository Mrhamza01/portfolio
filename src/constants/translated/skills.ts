import { useLanguageStore } from '@/store/useLanguageStore';
import { skillCategories } from '../skills';

// Urdu translations for skill categories
const skillCategoriesUr = [
    {
        ...skillCategories[0],
        category: 'فرنٹ اینڈ ڈیولپمنٹ',
    },
    {
        ...skillCategories[1],
        category: 'بیک اینڈ ڈیولپمنٹ',
    },
    {
        ...skillCategories[2],
        category: 'ڈیٹا بیسز اور ORMs',
    },
    {
        ...skillCategories[3],
        category: 'DevOps اور کنٹینرز',
    },
    {
        ...skillCategories[4],
        category: 'کلاؤڈ پلیٹ فارمز اور ہوسٹنگ',
    },
    {
        ...skillCategories[5],
        category: 'بیک اینڈ بطور سروس',
    },
    {
        ...skillCategories[6],
        category: 'ٹولز اور ورژن کنٹرول',
    },
    {
        ...skillCategories[7],
        category: 'دیگر ٹیکنالوجیز',
    },
];

export function useSkillCategories() {
    const { currentLanguage } = useLanguageStore();
    return currentLanguage === 'ur' ? skillCategoriesUr : skillCategories;
}
