export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    avatar?: string;
    content: string;
    rating?: number;
    date?: string;
    linkedin?: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 'test-1',
        name: 'M Waqas',
        role: 'CEO',
        company: 'Multi Techno',
        avatar: '/images/testimonials/client-1.jpg',
        content: 'Hamza demonstrated exceptional dedication at Multi Techno. His work ethic and technical expertise were instrumental in delivering high-quality solutions for our clients.',
        rating: 5,
        date: '2024-10',
    },
    {
        id: 'test-2',
        name: 'M Abbas',
        role: 'CEO',
        company: 'AxonERP',
        avatar: '/images/testimonials/client-2.jpg',
        content: 'Hamza transformed our engineering culture. He led the Axon project from scratch to production, masterfully handling development, infrastructure, and DevOps automation.',
        rating: 5,
        date: '2024-08',
    },
];
