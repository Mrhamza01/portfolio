export interface TechTool {
  id: string;
  name: string;
  category: string;
  icon: string;
  featured?: boolean;
  docUrl?: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  logo?: string;
  website?: string;
  bullets: string[];
}

export interface ProjectEntry {
  name: string;
  stack: string;
  date?: string;
  description: string;
  link?: string;
}

export interface PreferenceSection {
  id: string;
  title: string;
  bullets: string[];
}

export interface CertificationEntry {
  name: string;
  issuer: string;
  year?: string;
  verifyUrl?: string;
}

export const profile = {
  name: "Muhammad Hamza",
  displayName: "Hamza Ghafoor",
  title: "Senior Full-Stack Software Engineer | DevOps Engineer",
  openToWork:
    "Open to work — seeking senior Software Engineer, Senior Full-Stack Developer, and senior individual contributor (IC) roles. Remote-friendly.",
  location: "Faisalabad, Pakistan",
  version: "Portfolio OS 1.0",
  productName: "Hamza Ghafoor — Senior Engineer Edition",

  contact: {
    email: "hamza.kamboh035@gmail.com",
    phone: "+92 309 7906831",
    phoneTel: "+923097906831",
    linkedin: "https://linkedin.com/in/hamza-ghafoor",
    linkedinLabel: "linkedin.com/in/hamza-ghafoor",
    github: "https://github.com/Mrhamza01",
    githubLabel: "github.com/Mrhamza01",
    website: "https://hamzaghafoor.vercel.app/",
    websiteLabel: "hamzaghafoor.vercel.app",
  },

  summary:
    "Senior Full-Stack Software Engineer and DevOps practitioner with 4+ years delivering cloud-native and on-prem production systems—from multi-tenant ERP platforms serving 200+ clients to mission-critical public-sector products.",

  whyHireMe: [
    "Open to work: senior Software Engineer / Full-Stack Developer (IC) roles.",
    "Owns system design, implementation, CI/CD, Kubernetes operations, and reliability end-to-end.",
    "Proven at scale: 200+ tenant ERP fleet, multi-tenant databases, zero-downtime deployments.",
    "Led monolith-to-microservices migrations for high load and large data volumes.",
  ],

  specs: {
    chip: "Full-Stack + DevOps",
    memory: "4+ years production experience",
    os: "Open to work · Remote-friendly · K8s",
  },

  experience: [
    {
      company: "MilestoneZero",
      role: "Senior Full-Stack Software Engineer",
      period: "Dec 2025 — Present",
      logo: "/companies/milestone_zero_logo.jpg",
      website: "https://milestonezero.net/",
      bullets: [
        "Organization-scale sustainability software with law enforcement and public safety partners.",
        "Stabilized legacy codebase; rebuilt backend services and i18n for public-sector law-enforcement platform.",
        "Enterprise brand-onboarding for regional and international clients.",
        "Led monolith-to-microservices migration; redesigned service boundaries for scalable system design.",
        "Technical guidance and modern tooling to accelerate safe delivery.",
      ],
    },
    {
      company: "AxonERP / Axon",
      role: "Senior Full-Stack Software Engineer",
      period: "May 2021 — Nov 2025",
      logo: "/companies/axon-erp.png",
      website: "https://www.axonerp.com/",
      bullets: [
        "Full-stack ERP: React, Next.js, TypeScript, Node.js, REST/GraphQL, PostgreSQL, MongoDB.",
        "Multi-tenant database design: tenant isolation, connection-pool tuning at scale.",
        "On-prem Kubernetes for 200+ clients; Helm charts; CI (GitHub Actions) and CD (Jenkins).",
        "NGINX Ingress, Longhorn, cert-manager, Prometheus/Grafana; fleet backup and disaster recovery.",
        "n8n, WhatsApp Business APIs, ops admin panel; code reviews and clean architecture.",
      ],
    },
  ] as ExperienceEntry[],

  projects: [
    {
      name: "ARCHARCH",
      stack: "Go",
      date: "Sep 2025",
      description: "CLI tool for standardized folder-structure scaffolding.",
      link: "https://github.com/Mrhamza01/arch",
    },
    {
      name: "WhatsApp Order Summary",
      stack: "Chrome Extension, AI",
      description:
        "Chrome extension for WhatsApp Web that summarizes sales conversations and posts structured order summaries in chat.",
    },
    {
      name: "CI/CD & Container Automation",
      stack: "GitHub Actions, Helm, Kubernetes, Docker",
      description:
        "Production CI/CD; automated Docker build/tag/push; cut deployment time from hours to minutes.",
    },
  ] as ProjectEntry[],

  certifications: [
    {
      name: "Back End Development and APIs",
      issuer: "freeCodeCamp",
      year: "2024",
    },
    {
      name: "IBM Full Stack Software Developer Specialization",
      issuer: "Coursera",
      year: "2024",
    },
  ] as CertificationEntry[],

  skills: {
    languages: "TypeScript, JavaScript, Go, SQL",
    frontend: "React, Next.js, Tailwind CSS, ShadCN, i18n / localization",
    backend: "Node.js, Express, Laravel, REST APIs, GraphQL",
    data: "PostgreSQL, MySQL, MongoDB; Prisma, Drizzle, Kysely",
    devops:
      "Docker, Kubernetes, Helm, GitHub Actions, Jenkins, NGINX Ingress, cert-manager, Longhorn",
    observability: "Prometheus, Grafana, backup/DR, NFS",
    architecture: "System design, microservices, multi-tenant SaaS, high-availability",
    cloud: "AWS, Vercel, Netlify, Heroku; Git, n8n, Firebase, Appwrite, Supabase",
    ai: "LLM-powered summarization, Chrome extensions, WhatsApp Web",
  },

  preferences: [
    {
      id: "general",
      title: "Why hire Hamza?",
      bullets: [
        "4+ years shipping production systems from architecture through deployment.",
        "Open to senior Software Engineer and Full-Stack Developer opportunities (IC, remote-friendly).",
        "Strong full-stack + DevOps blend—rare combination for senior engineering teams.",
        "Track record with ERP scale (200+ clients) and mission-critical public-sector delivery.",
        "Takes ownership: design, build, automate, monitor, and recover.",
      ],
    },
    {
      id: "displays",
      title: "What I deliver",
      bullets: [
        "Full-stack features: React, Next.js, TypeScript, Node.js, REST/GraphQL.",
        "Platform engineering: Kubernetes, Helm, CI/CD, observability stacks.",
        "Data layers: PostgreSQL, MongoDB, multi-tenant isolation and performance tuning.",
        "Integrations: WhatsApp Business APIs, workflow automation (n8n), admin tooling.",
      ],
    },
    {
      id: "network",
      title: "How I work",
      bullets: [
        "Remote-ready: async communication and clear written updates.",
        "Collaborates with product, QA, and design; leads code reviews.",
        "Uses modern tooling (e.g. Cursor) to ship faster without sacrificing quality.",
        "Comfortable guiding teams through architecture and migration decisions.",
      ],
    },
    {
      id: "privacy",
      title: "Reliability mindset",
      bullets: [
        "Zero-downtime deployments and automated database migrations.",
        "Fleet-wide backup, restore, and disaster recovery practices.",
        "Prometheus/Grafana monitoring; proactive operational visibility.",
        "Security-conscious multi-tenant isolation and per-client TLS (cert-manager).",
      ],
    },
  ] as PreferenceSection[],

  techStack: [
    { id: "react", name: "React", category: "Frontend", icon: "i-simple-icons:react", featured: true, docUrl: "https://react.dev" },
    { id: "nextjs", name: "Next.js", category: "Frontend", icon: "i-simple-icons:nextdotjs", featured: true, docUrl: "https://nextjs.org" },
    { id: "typescript", name: "TypeScript", category: "Frontend", icon: "i-simple-icons:typescript", featured: true, docUrl: "https://www.typescriptlang.org" },
    { id: "tailwind", name: "Tailwind CSS", category: "Frontend", icon: "i-simple-icons:tailwindcss", docUrl: "https://tailwindcss.com" },
    { id: "nodejs", name: "Node.js", category: "Backend", icon: "i-simple-icons:nodedotjs", featured: true, docUrl: "https://nodejs.org" },
    { id: "express", name: "Express", category: "Backend", icon: "i-simple-icons:express", docUrl: "https://expressjs.com" },
    { id: "laravel", name: "Laravel", category: "Backend", icon: "i-simple-icons:laravel", docUrl: "https://laravel.com" },
    { id: "graphql", name: "GraphQL", category: "Backend", icon: "i-simple-icons:graphql", docUrl: "https://graphql.org" },
    { id: "go", name: "Go", category: "Backend", icon: "i-simple-icons:go", featured: true, docUrl: "https://go.dev" },
    { id: "postgresql", name: "PostgreSQL", category: "Data", icon: "i-simple-icons:postgresql", featured: true, docUrl: "https://www.postgresql.org" },
    { id: "mongodb", name: "MongoDB", category: "Data", icon: "i-simple-icons:mongodb", docUrl: "https://www.mongodb.com" },
    { id: "prisma", name: "Prisma", category: "Data", icon: "i-simple-icons:prisma", docUrl: "https://www.prisma.io" },
    { id: "docker", name: "Docker", category: "DevOps", icon: "i-simple-icons:docker", featured: true, docUrl: "https://www.docker.com" },
    { id: "kubernetes", name: "Kubernetes", category: "DevOps", icon: "i-simple-icons:kubernetes", featured: true, docUrl: "https://kubernetes.io" },
    { id: "helm", name: "Helm", category: "DevOps", icon: "i-simple-icons:helm", docUrl: "https://helm.sh" },
    { id: "githubactions", name: "GitHub Actions", category: "DevOps", icon: "i-simple-icons:githubactions", featured: true, docUrl: "https://github.com/features/actions" },
    { id: "jenkins", name: "Jenkins", category: "DevOps", icon: "i-simple-icons:jenkins", docUrl: "https://www.jenkins.io" },
    { id: "nginx", name: "NGINX", category: "DevOps", icon: "i-simple-icons:nginx", docUrl: "https://nginx.org" },
    { id: "prometheus", name: "Prometheus", category: "DevOps", icon: "i-simple-icons:prometheus", docUrl: "https://prometheus.io" },
    { id: "grafana", name: "Grafana", category: "DevOps", icon: "i-simple-icons:grafana", docUrl: "https://grafana.com" },
    { id: "aws", name: "AWS", category: "Cloud", icon: "i-simple-icons:amazonwebservices", docUrl: "https://aws.amazon.com" },
    { id: "vercel", name: "Vercel", category: "Cloud", icon: "i-simple-icons:vercel", docUrl: "https://vercel.com" },
    { id: "firebase", name: "Firebase", category: "Cloud", icon: "i-simple-icons:firebase", docUrl: "https://firebase.google.com" },
    { id: "openai", name: "AI / LLM", category: "AI & Integrations", icon: "i-simple-icons:openai", docUrl: "https://openai.com" },
    { id: "chrome", name: "Chrome Extensions", category: "AI & Integrations", icon: "i-simple-icons:googlechrome", docUrl: "https://developer.chrome.com/docs/extensions" },
    { id: "git", name: "Git", category: "Tools", icon: "i-simple-icons:git", docUrl: "https://git-scm.com" },
  ] as TechTool[],
};

export function getBioContext(): string {
  return JSON.stringify(
    {
      name: profile.name,
      title: profile.title,
      summary: profile.summary,
      openToWork: profile.openToWork,
      whyHireMe: profile.whyHireMe,
      experience: profile.experience,
      projects: profile.projects,
      skills: profile.skills,
      contact: profile.contact,
    },
    null,
    2
  );
}

export default profile;
