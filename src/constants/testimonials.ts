export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    avatar?: string;
    content: string;
    rating?: number;
    date?: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 'test-1',
        name: 'Client Name 1',
        role: 'CTO',
        company: 'Tech Company',
        avatar: '/images/testimonials/client-1.jpg',
        content: 'Hamza is an exceptional developer who delivered our ERP system ahead of schedule. His expertise in Kubernetes and cloud architecture saved us significant costs while improving performance.',
        rating: 5,
        date: '2024-10',
    },
    {
        id: 'test-2',
        name: 'Client Name 2',
        role: 'Product Manager',
        company: 'SaaS Startup',
        avatar: '/images/testimonials/client-2.jpg',
        content: 'Working with Hamza was a game-changer for our project. His full-stack expertise and attention to detail resulted in a robust, scalable application that exceeded our expectations.',
        rating: 5,
        date: '2024-08',
    },
    {
        id: 'test-3',
        name: 'Client Name 3',
        role: 'CEO',
        company: 'E-commerce Platform',
        avatar: '/images/testimonials/client-3.jpg',
        content: 'Hamza\'s DevOps skills are outstanding. He set up our entire CI/CD pipeline and Kubernetes infrastructure, making deployments seamless and reducing our operational costs significantly.',
        rating: 5,
        date: '2024-06',
    },
];
