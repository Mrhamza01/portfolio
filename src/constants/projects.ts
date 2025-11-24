export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    content?: string;
    image?: string;
    demoUrl?: string;
    githubUrl?: string;
    technologies: string[];
    category: 'Web App' | 'Mobile App' | 'SaaS' | 'ERP' | 'AI/ML' | 'DevOps' | 'Tools' | 'Other';
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
        content: `
## Overview
Axon ERP is a cloud-native Enterprise Resource Planning system designed for scalability and multi-tenancy. It serves hundreds of businesses, providing each with a secure, isolated environment.

## The Challenge
Traditional ERP systems are often monolithic and hard to scale. We needed a solution that could:
-   Scale horizontally to handle thousands of tenants.
-   Ensure strict data isolation (GDPR compliance).
-   Automate the onboarding process (0-touch provisioning).

## Architecture
We chose a **Microservices Architecture** running on **Kubernetes**.
-   **Compute**: Hetzner Bare Metal K8s Cluster.
-   **Storage**: Rook/Ceph for distributed block storage.
-   **Database**: PostgreSQL with a "Database-per-Tenant" pattern.

## Key Features
1.  **Automated Provisioning**: When a user signs up, a Kubernetes Operator automatically provisions a new Namespace, Database, and Ingress route.
2.  **CI/CD**: Jenkins pipelines build and deploy updates with zero downtime using Rolling Updates.
3.  **Monitoring**: Prometheus and Grafana for real-time metrics.

## Tech Stack
-   **Backend**: Node.js, Laravel
-   **Frontend**: React
-   **Infrastructure**: Kubernetes, Docker, Terraform, Ansible
        `,
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
        content: `
## Overview
The AI Mock Interview App helps job seekers practice for technical interviews. It uses Google's Gemini AI to simulate a real interviewer, asking follow-up questions based on the candidate's responses.

## Problem
Mock interviews are expensive and hard to schedule. Candidates often lack immediate, objective feedback.

## Solution
We built an automated platform that:
1.  **Simulates** a video interview environment.
2.  **Transcribes** speech to text in real-time.
3.  **Analyzes** answers for technical accuracy and soft skills.

## Technical Implementation
-   **AI Engine**: Google Gemini Pro API for generating questions and feedback.
-   **Data Layer**: GraphQL (Apollo Server) for efficient data fetching.
-   **Database**: NeonDB (Serverless Postgres) managed via Prisma.

## Results
-   **User Engagement**: 10,000+ interviews conducted.
-   **Performance**: <500ms latency for AI responses.
        `,
        image: '/images/projects/ai-interview.jpg',
        // demoUrl: 'https://ai-interview-demo.vercel.app',
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
        content: `
## Overview
LinkTok is a social media platform inspired by TikTok and Instagram, focusing on short-form content and community engagement.

## Features
-   **Feed Algorithm**: Personalized content based on user interactions.
-   **Stories**: 24-hour ephemeral content.
-   **Real-time Chat**: WebSocket-based messaging.

## Tech Stack
-   **Backend**: Laravel (PHP)
-   **Frontend**: React with Next.js
-   **Database**: MySQL
-   **Styling**: TailwindCSS
        `,
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
        content: `
## Overview
AI Summarizer is a productivity tool that extracts key insights from long articles, research papers, and news reports.

## How it Works
1.  User pastes a URL or text.
2.  The app scrapes the content (if URL).
3.  GPT-4 processes the text and generates a summary.

## Tech Stack
-   **AI**: OpenAI GPT-4 API
-   **Frontend**: React, TailwindCSS
-   **State Management**: Redux Toolkit
        `,
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
    // --- New Projects ---
    {
        id: 'arch-cli',
        title: 'ARCH',
        description: 'A folder Structure scaffolding CLI tool written in Go.',
        longDescription: 'ARCH is a high-performance CLI tool designed to instantly scaffold complex project folder structures based on predefined templates.',
        content: `
## Overview
ARCH is a developer productivity tool written in **Go**. It solves the problem of repetitive project setup by allowing developers to define and generate folder structures with a single command.

## Problem
Setting up a new project often involves creating the same directories (e.g., \`src\`, \`components\`, \`utils\`) manually. This is tedious and prone to inconsistency across teams.

## Solution
ARCH reads a configuration file (YAML/JSON) or uses built-in templates to generate the directory tree instantly.

## Key Features
-   **Speed**: Written in Go for near-instant execution.
-   **Flexibility**: Supports custom templates.
-   **Cross-Platform**: Runs on Windows, Linux, and macOS.

## Tech Stack
-   **Language**: Go (Golang)
-   **Libraries**: Cobra (CLI framework), Viper (Config)
        `,
        image: '/images/projects/arch-cli.jpg',
        githubUrl: 'https://github.com/Mrhamza01/arch',
        technologies: ['Go', 'Cobra', 'CLI'],
        category: 'Tools',
        featured: false,
        status: 'Completed',
        highlights: [
            'Instant project scaffolding',
            'Customizable templates',
            'Cross-platform compatibility',
            'Built with Go for performance'
        ]
    },
    {
        id: 'ci-pipeline-docker',
        title: 'Automated CI Pipeline for Production Docker Images',
        description: 'GitHub Actions workflow to build, tag, and push Docker images automatically.',
        longDescription: 'Implemented a robust GitHub Actions workflow to automate the build and release process of Docker images, ensuring consistency and security.',
        content: `
## Overview
This project focuses on automating the software supply chain. I built a CI pipeline that builds, tags, and pushes Docker images to Docker Hub whenever code is pushed to the repository.

## Problem
Manual builds are:
1.  **Slow**: Developers wait for local builds.
2.  **Inconsistent**: "It works on my machine" issues.
3.  **Insecure**: Handling secrets locally is risky.

## Solution
I implemented a **GitHub Actions** workflow that:
1.  Triggers on \`push\` to \`main\`.
2.  Sets up QEMU and Docker Buildx.
3.  Logs in to Docker Hub using encrypted secrets.
4.  Builds the image and pushes it with multiple tags (\`latest\`, \`sha-xyz\`, \`v1.0.0\`).

## Tech Stack
-   **CI Provider**: GitHub Actions
-   **Containerization**: Docker
-   **Registry**: Docker Hub
        `,
        image: '/images/projects/ci-pipeline.jpg',
        technologies: ['Docker', 'GitHub Actions', 'CI/CD'],
        category: 'DevOps',
        featured: false,
        status: 'Completed',
        highlights: [
            'Automated build and push process',
            'Secure secrets management',
            'Multi-architecture build support',
            'Eliminated manual build errors'
        ]
    },
    {
        id: 'k8s-cicd-pipeline',
        title: 'End-to-End CI/CD Pipeline for Kubernetes',
        description: 'CI/CD pipeline integrating GitHub Actions, Helm, and Kubernetes for automated deployments.',
        longDescription: 'Built a complete CI/CD pipeline that automates the deployment of microservices to a Kubernetes cluster using Helm charts.',
        content: `
## Overview
This project demonstrates a production-grade CD pipeline. It takes code from commit to production in a Kubernetes cluster without manual intervention.

## Architecture
1.  **Code Commit**: Developer pushes code to GitHub.
2.  **CI**: GitHub Actions runs tests and builds the Docker image.
3.  **CD**: GitHub Actions triggers a Helm upgrade.
4.  **Deployment**: Kubernetes pulls the new image and performs a Rolling Update.

## Key Achievements
-   **Speed**: Reduced deployment time from hours to minutes.
-   **Reliability**: Automated rollback capabilities via Helm.
-   **Scalability**: Easily replicable for multiple microservices.

## Tech Stack
-   **Orchestrator**: Kubernetes
-   **Package Manager**: Helm
-   **CI/CD**: GitHub Actions
-   **Containerization**: Docker
        `,
        image: '/images/projects/k8s-pipeline.jpg',
        technologies: ['Kubernetes', 'Helm', 'GitHub Actions', 'Docker', 'CI/CD'],
        category: 'DevOps',
        featured: false,
        status: 'Completed',
        highlights: [
            'Reduced deployment time from hours to minutes',
            'Automated Helm chart updates',
            'Zero-downtime deployments',
            'Integrated testing and validation'
        ]
    }
];
