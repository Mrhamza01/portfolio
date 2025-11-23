export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    image?: string;
    demoUrl?: string;
    githubUrl?: string;
    technologies: string[];
    category: 'Web App' | 'Mobile App' | 'SaaS' | 'ERP' | 'AI/ML' | 'Other';
    featured: boolean;
    startDate?: string;
    endDate?: string;
    status: 'Completed' | 'In Progress' | 'Maintained';
    highlights?: string[];
}

export const projects: Project[] = [
    {
        id: 'proj-1',
        title: 'Axon ERP',
        description: 'Cloud-native, multi-tenant ERP system deployed with Kubernetes, featuring CI/CD and per-tenant automation.',
        longDescription: 'Architected and deployed a comprehensive multi-tenant ERP system on a self-managed Kubernetes cluster. Each user gets a dedicated app and database on subdomains (e.g., demo.axonerp.com) with full disaster recovery, automated provisioning, and strict data isolation.',
        image: '/images/projects/axon-erp.jpg',
        demoUrl: 'https://www.axonerp.com',
        technologies: ['Kubernetes', 'Docker', 'PostgreSQL', 'Node.js', 'React', 'Jenkins', 'Laravel'],
        category: 'ERP',
        featured: true,
        status: 'Maintained',
        highlights: [
            'Achieved 90% cost savings compared to managed Kubernetes services',
            'Implemented full disaster recovery and automated provisioning',
            'Strict data isolation with dedicated databases per tenant',
            'Zero-downtime deployments with CI/CD pipelines',
        ],
    },
    {
        id: 'proj-2',
        title: 'AI Mock Interview App',
        description: 'AI-powered interview simulation platform using Gemini AI, GraphQL, and Next.js for realistic interview practice.',
        longDescription: 'Built a comprehensive AI-driven interview preparation platform that provides realistic interview simulations, scoring logic, and detailed feedback dashboards.',
        image: '/images/projects/ai-interview.jpg',
        demoUrl: 'https://ai-interview-demo.vercel.app',
        technologies: ['Next.js', 'React', 'Prisma', 'NeonDB', 'TailwindCSS', 'ShadCN UI', 'Gemini AI', 'GraphQL'],
        category: 'AI/ML',
        featured: true,
        status: 'Completed',
        highlights: [
            'AI-driven interview sessions with real-time responses',
            'Comprehensive scoring and feedback system',
            'Interactive dashboards for progress tracking',
            'GraphQL API for efficient data fetching',
        ],
    },
    {
        id: 'proj-3',
        title: 'LinkTok Social Media App',
        description: 'Full-featured social media platform built with Laravel and React, including authentication, post scheduling, and stories.',
        longDescription: 'Developed a modern social media web application with complete user authentication, post management, feed algorithms, user profiles, and story features.',
        image: '/images/projects/linktok.jpg',
        technologies: ['Laravel', 'MySQL', 'React', 'Next.js', 'TailwindCSS', 'ShadCN UI'],
        category: 'Web App',
        featured: true,
        status: 'Completed',
        highlights: [
            'Complete authentication and authorization system',
            'Real-time post feeds and interactions',
            'Story feature with 24-hour expiration',
            'Post scheduling and management',
            'Optimized API workflows for performance',
        ],
    },
    {
        id: 'proj-4',
        title: 'AI Summarizer',
        description: 'GPT-4-powered web application that converts long articles into concise, readable summaries.',
        longDescription: 'Created an intelligent article summarization tool leveraging GPT-4 to help users quickly digest long-form content.',
        image: '/images/projects/ai-summarizer.jpg',
        demoUrl: 'https://ai-summarizer-demo.vercel.app',
        technologies: ['Next.js', 'React', 'OpenAI GPT-4', 'TailwindCSS'],
        category: 'AI/ML',
        featured: false,
        status: 'Completed',
        highlights: [
            'GPT-4 integration for intelligent summarization',
            'Clean, user-friendly interface',
            'Support for various article formats',
            'Fast processing and response times',
        ],
    },
];
