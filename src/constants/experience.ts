export interface Experience {
    id: string;
    title: string;
    company: string;
    companyUrl?: string;
    location: string;
    startDate: string;
    endDate: string | 'Present';
    current: boolean;
    description: string;
    responsibilities: string[];
    achievements?: string[];
    technologies?: string[];
}

export const experiences: Experience[] = [
    {
        id: 'exp-1',
        title: 'Software Development Project Manager',
        company: 'AxonERP',
        companyUrl: 'https://www.axonerp.com',
        location: 'Faisalabad, Punjab, Pakistan',
        startDate: '2025-09',
        endDate: 'Present',
        current: true,
        description: 'Leading multiple ERP projects while maintaining senior engineering responsibilities, ensuring alignment with customer needs and business goals.',
        responsibilities: [
            'Defining product roadmap, feature prioritization, and release planning based on client feedback and market needs',
            'Assigning tasks and managing workflows for developers and technical support teams',
            'Conducting code reviews and maintaining high-quality engineering standards',
            'Cross-functional collaboration with product, design, and business teams to optimize product roadmap',
            'Managing project timelines, sprint planning, and team coordination',
            'Mentoring team members and fostering collaborative engineering culture',
        ],
        achievements: [
            'Successfully managing multiple concurrent ERP projects',
            'Improved team productivity through effective task management',
            'Maintained system reliability while scaling product features',
        ],
        technologies: ['Kubernetes', 'Docker', 'Node.js', 'React', 'PostgreSQL', 'DevOps', 'CI/CD'],
    },
    {
        id: 'exp-2',
        title: 'Senior Software Engineer',
        company: 'AxonERP',
        companyUrl: 'https://www.axonerp.com',
        location: 'Faisalabad, Punjab, Pakistan',
        startDate: '2024-11',
        endDate: '2025-08',
        current: false,
        description: 'Promoted to Senior Software Engineer, owning and enhancing core engineering infrastructure with focus on scalability and reliability.',
        responsibilities: [
            'Managing and improving Kubernetes-based infrastructure for scalability, reliability, and cost efficiency',
            'Maintaining system uptime, promptly addressing failures and disruptions to minimize downtime',
            'Implementing CI/CD pipelines to maintain seamless production environments',
            'Developing new features, optimizing performance, and ensuring code quality',
            'Establishing engineering best practices and consistency across projects',
            'Mentoring junior developers and supporting team collaboration',
        ],
        achievements: [
            'Achieved 99.9% system uptime through proactive monitoring',
            'Reduced deployment time by 70% through CI/CD automation',
            'Implemented disaster recovery strategies protecting critical data',
        ],
        technologies: ['Kubernetes', 'Docker', 'Jenkins', 'PostgreSQL', 'Node.js', 'React', 'Laravel'],
    },
    {
        id: 'exp-3',
        title: 'Junior Full Stack Developer',
        company: 'Multi-Techno Integrated Solutions (Pvt.) Ltd.',
        companyUrl: 'https://www.axonerp.com',
        location: 'Faisalabad, Punjab, Pakistan',
        startDate: '2024-05',
        endDate: '2024-10',
        current: false,
        description: 'Led the infrastructure transformation to fully containerized/cloud-native architecture by building and managing complete Kubernetes cluster infrastructure.',
        responsibilities: [
            'Designed and implemented scalable, reliable deployment workflows',
            'Built comprehensive admin panel for monitoring clients and managing administrative tasks',
            'Automated deployment processes including database migration, seeding, and deployment with zero manual intervention',
            'Ensured smooth and reliable database operations within Kubernetes clusters',
            'Implemented backup and disaster recovery strategies to protect critical data',
        ],
        achievements: [
            'Achieved 90% cost savings compared to managed Kubernetes services',
            'Successfully migrated entire infrastructure to self-managed Kubernetes',
            'Reduced deployment time from hours to minutes through automation',
            '180% salary growth in under 12 months due to high-impact contributions',
        ],
        technologies: ['Kubernetes', 'Docker', 'PostgreSQL', 'Laravel', 'React', 'Jenkins', 'Linux'],
    },
    {
        id: 'exp-4',
        title: 'Full-Stack Engineer — Self-Directed Product Development',
        company: 'Independent Software Development',
        location: 'Remote',
        startDate: '2023-02',
        endDate: '2024-04',
        current: false,
        description: 'Over 1 year of hands-on development, building production-ready applications for real clients and personal products across the full stack.',
        responsibilities: [
            'Full ownership of backend, frontend, database modeling, and system architecture',
            'Designed secure, scalable codebases with clean API structures',
            'Managed deployments, monitoring, debugging, and maintenance',
            'Implemented UI/UX with modern frameworks and component libraries',
            'Delivered client projects including dashboards, internal tools, and SaaS systems',
        ],
        achievements: [
            'Built LinkTok social media app using Laravel, MySQL, React/Next.js with authentication, posts, feeds, and profiles',
            'Developed AI Mock Interview App using Next.js, Prisma, NeonDB with AI-driven sessions and scoring',
            'Delivered multiple client projects with full end-to-end ownership',
        ],
        technologies: ['Next.js', 'React', 'Laravel', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'MySQL', 'TailwindCSS'],
    },
];
