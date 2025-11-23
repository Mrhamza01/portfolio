export interface Education {
    id: string;
    degree: string;
    field: string;
    institution: string;
    location?: string;
    startDate: string;
    endDate: string;
    description?: string;
    grade?: string;
    achievements?: string[];
}

export const education: Education[] = [
    {
        id: 'edu-1',
        degree: "Bachelor's Degree",
        field: 'Computer Science',
        institution: 'Virtual University of Pakistan (VU)',
        location: 'Pakistan',
        startDate: '2021-10',
        endDate: '2024-10',
        description: 'Completed comprehensive computer science curriculum covering software engineering, algorithms, databases, and system design.',
        achievements: [
            'Graduated with strong foundation in software development',
            'Completed multiple real-world projects during studies',
            'Focused on full-stack development and cloud technologies',
        ],
    },
];
