export interface SkillCategory {
    id: string;
    category: string;
    skills: Skill[];
}

export interface Skill {
    name: string;
    level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    icon?: string;
}

export const skillCategories: SkillCategory[] = [
    {
        id: 'frontend',
        category: 'Frontend Development',
        skills: [
            { name: 'HTML', level: 'Expert' },
            { name: 'CSS', level: 'Expert' },
            { name: 'JavaScript', level: 'Expert' },
            { name: 'TypeScript', level: 'Expert' },
            { name: 'React', level: 'Expert' },
            { name: 'Next.js', level: 'Expert' },
            { name: 'TailwindCSS', level: 'Expert' },
            { name: 'ShadCN UI', level: 'Advanced' },
        ],
    },
    {
        id: 'backend',
        category: 'Backend Development',
        skills: [
            { name: 'Node.js', level: 'Expert' },
            { name: 'Express', level: 'Expert' },
            { name: 'Laravel', level: 'Advanced' },
            { name: 'GraphQL', level: 'Advanced' },
            { name: 'REST APIs', level: 'Expert' },
        ],
    },
    {
        id: 'database',
        category: 'Databases & ORMs',
        skills: [
            { name: 'PostgreSQL', level: 'Expert' },
            { name: 'MySQL', level: 'Advanced' },
            { name: 'MongoDB', level: 'Advanced' },
            { name: 'Prisma', level: 'Expert' },
            { name: 'Drizzle', level: 'Advanced' },
            { name: 'Kysely', level: 'Advanced' },
        ],
    },
    {
        id: 'devops',
        category: 'DevOps & Containers',
        skills: [
            { name: 'Docker', level: 'Expert' },
            { name: 'Podman', level: 'Advanced' },
            { name: 'Kubernetes', level: 'Expert' },
            { name: 'Jenkins', level: 'Advanced' },
            { name: 'CI/CD Pipelines', level: 'Expert' },
            { name: 'Linux', level: 'Advanced' },
        ],
    },
    {
        id: 'cloud',
        category: 'Cloud Platforms & Hosting',
        skills: [
            { name: 'Vercel', level: 'Expert' },
            { name: 'Heroku', level: 'Advanced' },
            { name: 'Netlify', level: 'Advanced' },
            { name: 'AWS', level: 'Intermediate' },
        ],
    },
    {
        id: 'baas',
        category: 'Backend as a Service',
        skills: [
            { name: 'Firebase', level: 'Advanced' },
            { name: 'Appwrite', level: 'Advanced' },
            { name: 'Supabase', level: 'Advanced' },
        ],
    },
    {
        id: 'tools',
        category: 'Tools & Version Control',
        skills: [
            { name: 'Git', level: 'Expert' },
            { name: 'GitHub', level: 'Expert' },
            { name: 'VS Code', level: 'Expert' },
            { name: 'Postman', level: 'Advanced' },
        ],
    },
    {
        id: 'other',
        category: 'Other Technologies',
        skills: [
            { name: 'Backup & Recovery Systems', level: 'Expert' },
            { name: 'System Architecture', level: 'Advanced' },
            { name: 'Microservices', level: 'Advanced' },
            { name: 'Event-Driven Architecture', level: 'Intermediate' },
        ],
    },
];

export const languages = [
    { name: 'English', proficiency: 'Professional Working' },
    { name: 'Urdu', proficiency: 'Native or Bilingual' },
];
