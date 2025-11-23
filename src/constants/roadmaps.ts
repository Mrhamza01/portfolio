export interface RoadmapPhase {
    id: string;
    title: string;
    duration: string;
    description: string;
    topics: string[];
    resources?: string[];
    projects?: string[];
}

export interface Roadmap {
    id: string;
    title: string;
    description: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    estimatedTime: string;
    phases: RoadmapPhase[];
}

export const roadmaps: Roadmap[] = [
    {
        id: 'fullstack-roadmap',
        title: 'Full Stack Developer Roadmap',
        description: 'Complete roadmap to become a full-stack developer like me, covering frontend, backend, databases, and DevOps.',
        difficulty: 'Intermediate',
        estimatedTime: '12-18 months',
        phases: [
            {
                id: 'phase-1',
                title: 'Frontend Fundamentals',
                duration: '3 months',
                description: 'Master the basics of web development and modern frontend technologies.',
                topics: ['HTML5', 'CSS3', 'JavaScript ES6+', 'Responsive Design', 'Git & GitHub'],
                resources: [
                    'MDN Web Docs',
                    'freeCodeCamp',
                    'JavaScript.info',
                ],
                projects: [
                    'Personal Portfolio Website',
                    'Responsive Landing Pages',
                    'Interactive Web Applications',
                ],
            },
            {
                id: 'phase-2',
                title: 'Modern Frontend Frameworks',
                duration: '3 months',
                description: 'Learn React and Next.js for building modern web applications.',
                topics: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'State Management'],
                resources: [
                    'React Official Docs',
                    'Next.js Documentation',
                    'TypeScript Handbook',
                ],
                projects: [
                    'Social Media Dashboard',
                    'E-commerce Frontend',
                    'Real-time Chat Application',
                ],
            },
            {
                id: 'phase-3',
                title: 'Backend Development',
                duration: '3 months',
                description: 'Build robust backend systems with Node.js and databases.',
                topics: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Authentication', 'PostgreSQL', 'MongoDB'],
                resources: [
                    'Node.js Documentation',
                    'Express.js Guide',
                    'PostgreSQL Tutorial',
                ],
                projects: [
                    'RESTful API for Blog',
                    'Authentication System',
                    'GraphQL API Server',
                ],
            },
            {
                id: 'phase-4',
                title: 'DevOps & Cloud',
                duration: '3-6 months',
                description: 'Learn containerization, orchestration, and cloud deployment.',
                topics: ['Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'Cloud Platforms', 'Linux'],
                resources: [
                    'Docker Documentation',
                    'Kubernetes Official Docs',
                    'AWS/Vercel Tutorials',
                ],
                projects: [
                    'Dockerized Full Stack App',
                    'Kubernetes Deployment',
                    'CI/CD Pipeline Setup',
                ],
            },
        ],
    },
    {
        id: 'devops-roadmap',
        title: 'DevOps Engineer Roadmap',
        description: 'Path to becoming a DevOps engineer specializing in Kubernetes and cloud-native technologies.',
        difficulty: 'Advanced',
        estimatedTime: '8-12 months',
        phases: [
            {
                id: 'devops-phase-1',
                title: 'Linux & Scripting',
                duration: '2 months',
                description: 'Master Linux administration and shell scripting.',
                topics: ['Linux Fundamentals', 'Bash Scripting', 'System Administration', 'Networking'],
                resources: [
                    'Linux Journey',
                    'The Linux Command Line Book',
                ],
                projects: [
                    'Automated Backup Scripts',
                    'System Monitoring Tools',
                ],
            },
            {
                id: 'devops-phase-2',
                title: 'Containerization',
                duration: '2 months',
                description: 'Learn Docker and container orchestration.',
                topics: ['Docker', 'Docker Compose', 'Container Security', 'Image Optimization'],
                resources: [
                    'Docker Mastery Course',
                    'Docker Official Documentation',
                ],
                projects: [
                    'Multi-container Applications',
                    'Custom Docker Images',
                ],
            },
            {
                id: 'devops-phase-3',
                title: 'Kubernetes Mastery',
                duration: '3 months',
                description: 'Deep dive into Kubernetes and cloud-native architecture.',
                topics: ['Kubernetes Architecture', 'Deployments', 'Services', 'Ingress', 'Helm', 'Monitoring'],
                resources: [
                    'Kubernetes Documentation',
                    'CNCF Courses',
                ],
                projects: [
                    'Self-managed Kubernetes Cluster',
                    'Multi-tenant Application Deployment',
                ],
            },
            {
                id: 'devops-phase-4',
                title: 'CI/CD & Automation',
                duration: '1-3 months',
                description: 'Implement automated pipelines and infrastructure as code.',
                topics: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Terraform', 'Ansible'],
                resources: [
                    'Jenkins Documentation',
                    'Terraform Tutorials',
                ],
                projects: [
                    'Complete CI/CD Pipeline',
                    'Infrastructure Automation',
                ],
            },
        ],
    },
];
