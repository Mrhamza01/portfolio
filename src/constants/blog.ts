export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content?: string;
    coverImage?: string;
    author: string;
    publishDate: string;
    readTime?: string;
    tags: string[];
    category: string;
    linkedInUrl?: string;
    featured: boolean;
}

export const blogPosts: BlogPost[] = [
    {
        id: 'blog-1',
        title: 'How I Reduced Cloud Costs by 90% with Self-Managed Kubernetes',
        excerpt: 'Learn how I architected and deployed a multi-tenant ERP system on a self-managed Kubernetes cluster, achieving massive cost savings.',
        coverImage: '/images/blog/kubernetes-cost.jpg',
        author: 'Muhammad Hamza Ghafoor',
        publishDate: '2024-11',
        readTime: '8 min read',
        tags: ['Kubernetes', 'DevOps', 'Cloud', 'Cost Optimization'],
        category: 'DevOps',
        featured: true,
    },
    {
        id: 'blog-2',
        title: 'Building a Multi-Tenant SaaS Platform: Lessons Learned',
        excerpt: 'Key insights from architecting a production-grade multi-tenant ERP system with strict data isolation and automated provisioning.',
        coverImage: '/images/blog/multi-tenant.jpg',
        author: 'Muhammad Hamza Ghafoor',
        publishDate: '2024-10',
        readTime: '10 min read',
        tags: ['SaaS', 'Architecture', 'Multi-Tenancy', 'ERP'],
        category: 'Software Architecture',
        featured: true,
    },
    {
        id: 'blog-3',
        title: 'From Junior to Senior Engineer in 12 Months: My Journey',
        excerpt: 'How I achieved 180% salary growth through high-impact contributions and technical leadership in a fast-paced environment.',
        coverImage: '/images/blog/career-growth.jpg',
        author: 'Muhammad Hamza Ghafoor',
        publishDate: '2024-09',
        readTime: '6 min read',
        tags: ['Career', 'Leadership', 'Growth', 'Software Engineering'],
        category: 'Career',
        featured: true,
    },
    {
        id: 'blog-4',
        title: 'Implementing CI/CD Pipelines with Jenkins and Kubernetes',
        excerpt: 'A practical guide to setting up automated deployment pipelines for containerized applications.',
        coverImage: '/images/blog/cicd.jpg',
        author: 'Muhammad Hamza Ghafoor',
        publishDate: '2024-08',
        readTime: '12 min read',
        tags: ['CI/CD', 'Jenkins', 'Kubernetes', 'Automation'],
        category: 'DevOps',
        featured: false,
    },
];
