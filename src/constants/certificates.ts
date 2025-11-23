
export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    issueDate: string;
    expiryDate?: string;
    credentialId?: string;
    credentialUrl?: string;
    image?: string;
    skills?: string[];
}

export const certificates: Certificate[] = [
    {
        id: 'cert-1',
        title: 'Google UX Design Specialization',
        issuer: 'Google',
        issueDate: '2024',
        credentialUrl: 'https://www.credly.com/badges/220537be-a0f2-45c8-91ab-aae2cb487cfc/linked_in_profile',
        image: '/images/certificates/google-ux.jpg',
        skills: ['UX Design', 'User Research', 'Prototyping', 'Figma'],
    },
    {
        id: 'cert-2',
        title: 'Google Digital Marketing & E-commerce Specialization',
        issuer: 'Google',
        issueDate: '2024',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/VMQB38YM9AM8',
        image: '/images/certificates/google-marketing.jpg',
        skills: ['Digital Marketing', 'E-commerce', 'SEO', 'Analytics'],
    },
    {
        id: 'cert-3',
        title: 'IBM Full Stack Software Developer Specialization',
        issuer: 'IBM',
        issueDate: '2024',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/MMUN6DJEERPU',
        image: '/images/certificates/ibm-fullstack.jpg',
        skills: ['Full Stack Development', 'Cloud Computing', 'DevOps', 'Microservices'],
    },
    {
        id: 'cert-4',
        title: 'Back End Development and APIs',
        issuer: 'freeCodeCamp',
        issueDate: '2023',
        credentialUrl: 'https://www.freecodecamp.org/certification/hamza_ghafoor/back-end-development-and-apis',
        image: '/images/certificates/freecodecamp-backend.jpg',
        skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
    },
    {
        id: 'cert-5',
        title: 'Google Data Analytics Specialization',
        issuer: 'Google',
        issueDate: '2024',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/3NJRKWYEG8P6',
        image: '/images/certificates/google-analytics.jpg',
        skills: ['Data Analysis', 'SQL', 'Data Visualization', 'R Programming'],
    },
];
