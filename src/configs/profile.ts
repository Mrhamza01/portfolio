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
  title: "Full Stack Software Engineer | Cloud-Native & SaaS",
  openToWork:
    "Open to work — Senior Full Stack, Backend, Cloud, and SaaS roles. Remote EU-friendly.",
  location: "Faisalabad, Pakistan",
  version: "Portfolio OS 2.0",
  productName: "Hamza Ghafoor — Full Stack Engineer",
  // Keep scripts/seo-data.mjs in sync when changing identity / experience / skills / projects.

  contact: {
    email: "hamza.kamboh035@gmail.com",
    phone: "+92 309 7906831",
    phoneTel: "+923097906831",
    whatsapp: "https://wa.me/923097906831?text=Hi%20Hamza%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20about%20a%20Full%20Stack%20%2F%20SaaS%20opportunity.",
    whatsappLabel: "WhatsApp",
    linkedin: "https://linkedin.com/in/hamza-ghafoor",
    linkedinLabel: "linkedin.com/in/hamza-ghafoor",
    github: "https://github.com/Mrhamza01",
    githubLabel: "github.com/Mrhamza01",
    website: "https://hamzaghafoor.vercel.app/",
    websiteLabel: "hamzaghafoor.vercel.app",
  },

  summary:
    "Full Stack Software Engineer (production since Nov 2022) who builds and operates multi-tenant SaaS and on-prem cloud-native systems—from an ERP fleet of 200+ Kubernetes deployments to air-gapped, mission-critical releases.",

  whyHireMe: [
    "Open to Senior Full Stack, Backend, Cloud, and SaaS roles — remote EU-friendly.",
    "Owns system design, implementation, CI/CD, Kubernetes operations, and reliability end-to-end.",
    "Proven at scale: 200+ tenant ERP fleet, multi-tenant databases, zero-downtime deployments.",
    "Builds and operates production SaaS—not only application code.",
  ],

  specs: {
    chip: "Full-Stack + Platform",
    memory: "Production since Nov 2022",
    os: "Open to work · Remote EU · K8s",
  },

  experience: [
    {
      company: "MilestoneZero",
      role: "Full Stack Software Engineer",
      period: "Dec 2025 — Present",
      logo: "/companies/milestone_zero_logo.jpg",
      website: "https://milestonezero.net/",
      bullets: [
        "Deployed sustainability / public-safety software to air-gapped on-prem Kubernetes with enterprise licensing and domain-authenticated databases.",
        "Built courier-aggregator finance receivables: reconcile third-party APIs to contracts, detect anomalies, cash-flow analytics.",
        "Shipped WhatsApp AI order automation (15–30 min capture → seconds); tuned DB/cache and background workers for API latency.",
      ],
    },
    {
      company: "AxonERP / Axon",
      role: "Full Stack Software Engineer",
      period: "Nov 2022 — Nov 2025",
      logo: "/companies/axon-erp.png",
      website: "https://www.axonerp.com/",
      bullets: [
        "Full-stack ERP: React, Next.js, TypeScript, Node.js, REST/GraphQL, PostgreSQL, MongoDB.",
        "Multi-tenant database design: tenant isolation, connection-pool tuning at scale.",
        "On-prem Kubernetes (kOps) for 200+ clients; Helm; CI (GitHub Actions) and CD (Jenkins); hours → minutes deploys.",
        "NGINX Ingress, Longhorn, cert-manager, Prometheus/Grafana; fleet backup and disaster recovery.",
        "n8n, WhatsApp Business APIs, ops admin panel; code reviews and clean architecture.",
      ],
    },
  ] as ExperienceEntry[],

  projects: [
    {
      name: "Multi-Tenant ERP Platform",
      stack: "React, Node.js, PostgreSQL, Kubernetes",
      date: "AxonERP",
      description:
        "Production multi-tenant SaaS ERP with tenant isolation, Helm client deployments, observability, and DR across 200+ on-prem environments.",
    },
    {
      name: "CI/CD & Container Automation",
      stack: "GitHub Actions, Jenkins, Helm, Docker",
      description:
        "Pipelines to build/tag/push Docker images and promote Helm releases to Kubernetes; cut deployment cycles from hours to minutes.",
    },
    {
      name: "WhatsApp Order Summary",
      stack: "Chrome Extension, AI / LLM",
      description:
        "Chrome extension for WhatsApp Web that summarizes sales chats and posts structured order summaries to accelerate order capture.",
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
    frontend: "React, Next.js, Tailwind CSS, ShadCN, i18n",
    backend: "Node.js, Express, REST APIs, GraphQL, Laravel, queues / background jobs",
    data: "PostgreSQL, MongoDB, MySQL; Prisma, Drizzle, Kysely; Redis",
    devops:
      "Docker, Kubernetes, Helm, GitHub Actions, Jenkins, NGINX Ingress, cert-manager, Longhorn",
    observability: "Prometheus, Grafana, backup/DR",
    architecture: "Multi-tenant SaaS, system design, microservices, CI/CD, high availability",
    cloud: "AWS (S3, SQS, RDS), Vercel, Netlify; Git, n8n, Firebase, Appwrite, Supabase",
    ai: "LLM-powered summarization, Chrome extensions, WhatsApp Web",
  },

  preferences: [
    {
      id: "general",
      title: "Why hire Hamza?",
      bullets: [
        "Production engineer since Nov 2022—owns delivery from architecture through deployment.",
        "Open to Senior Full Stack, Backend, Cloud, and SaaS roles (remote EU-friendly).",
        "Full-stack + platform blend: React/Node and Kubernetes/CI/CD in the same ownership loop.",
        "Track record with ERP scale (200+ clients) and air-gapped / mission-critical delivery.",
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
        "Collaborates with product, QA, and design; participates in code reviews.",
        "Uses modern tooling to ship faster without sacrificing quality.",
        "Comfortable with architecture and migration decisions on production systems.",
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
    { id: "jenkins", name: "Jenkins", category: "DevOps", icon: "i-simple-icons:jenkins", docUrl: "https://jenkins.io" },
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

/** Compact bio for Gemini — keeps free-tier input tokens low. */
export function getSlimBioForAI(): string {
  const exp = profile.experience
    .map(
      (e) =>
        `${e.role} @ ${e.company} (${e.period}): ${e.bullets.slice(0, 3).join(" | ")}`
    )
    .join("\n");
  const projects = profile.projects
    .map((p) => `${p.name} [${p.stack}]: ${p.description}`)
    .join("\n");
  return [
    `Name: Muhammad Hamza`,
    `Title: ${profile.title}`,
    `Location: ${profile.location}`,
    `Summary: ${profile.summary}`,
    `OpenToWork: ${profile.openToWork}`,
    `Skills: ${Object.values(profile.skills).join("; ")}`,
    `Experience:\n${exp}`,
    `Projects:\n${projects}`,
    `Contact: ${profile.contact.email} | WhatsApp wa.me/923097906831 | ${profile.contact.linkedinLabel} | ${profile.contact.githubLabel}`,
  ].join("\n");
}

export default profile;
