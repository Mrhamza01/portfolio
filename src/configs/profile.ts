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
  name: "Hamza Ghafoor",
  displayName: "Hamza Ghafoor",
  title: "Full Stack Software Engineer | Backend & Platform Systems",
  openToWork:
    "Available for Senior Full Stack, Backend, and Platform Engineering roles.",
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
    "Full-Stack Software Engineer (production since Nov 2022) who designs, builds, and operates systems end-to-end—features, APIs, queues, CI/CD, and Kubernetes—across SaaS products and restricted enterprise infrastructure.",

  whyHireMe: [
    "End-to-end ownership: application code through CI/CD, Kubernetes, and production recovery.",
    "Proven depth: air-gapped enterprise delivery, 100K+ async logistics processing, Stripe Connect marketplace payments, and a 200+ client ERP fleet.",
    "Builds production systems that stay reliable under third-party failure, load, and operational constraints.",
  ],

  specs: {
    chip: "Full-Stack + Platform",
    memory: "Production since Nov 2022",
    os: "Available · Full Stack · K8s",
  },

  experience: [
    {
      company: "MilestoneZero",
      role: "Full Stack Software Engineer",
      period: "Dec 2025 — Present",
      logo: "/companies/milestone_zero_logo.jpg",
      website: "https://milestonezero.net/",
      bullets: [
        "Designed, delivered, and deployed a sustainability platform for Abu Dhabi Police to on-premises, air-gapped Kubernetes with licensed software, domain-authenticated databases, and Linux–Windows/Kerberos constraints.",
        "Built multi-courier logistics integration and settlement across 9 providers (including PostEx, Leopards, and M&P)—provider abstraction, data normalization, reconciliation, returns/claims, and net receivables—not raw API wrappers.",
        "Designed BullMQ / Amazon SQS async workers for 100K+ order capacity with concurrency controls, rate-limit awareness, retries, DLQs, and failure isolation.",
        "Owned Stripe Connect marketplace payment infrastructure: Connected Accounts, fund holding, delayed business-rule payouts, transfers, and refunds on an international events product.",
        "Shipped production AI features—message generation, booking-agent order summaries, and WhatsApp order-creation agents that cut a 15–30 minute capture task to seconds.",
      ],
    },
    {
      company: "AxonERP / Axon",
      role: "Full Stack Software Engineer",
      period: "Nov 2022 — Nov 2025",
      logo: "/companies/axon-erp.png",
      website: "https://www.axonerp.com/",
      bullets: [
        "Designed and shipped full-stack ERP features and an ops admin panel with React, Next.js, TypeScript, Node.js, REST/GraphQL, PostgreSQL, and MongoDB.",
        "Designed and operated on-prem Kubernetes (kOps/Helm) for 200+ client deployments with multi-tenant isolation, Dockerized apps/databases, PV/PVC storage, and Redis-backed workloads.",
        "Led the move from manual releases to GitHub Actions and Jenkins with image builds, migrations, seeding, and zero-downtime Helm upgrades—hours to minutes.",
        "Operated NGINX Ingress, cert-manager, Prometheus/Grafana, Longhorn backups, and cluster/database restore practices.",
        "Integrated n8n and WhatsApp Business APIs; contributed to code reviews and clean-architecture standards.",
      ],
    },
  ] as ExperienceEntry[],

  projects: [
    {
      name: "Multi-Courier Logistics & Settlement Platform",
      stack: "Node.js, BullMQ, Amazon SQS, PostgreSQL",
      date: "MilestoneZero",
      description:
        "Scalable multi-provider logistics processing: 9 courier integrations, domain normalization, async workers for 100K+ orders, DLQ recovery, CPR/invoice reconciliation, and settlement workflows.",
    },
    {
      name: "Stripe Connect Marketplace Payments",
      stack: "Stripe Connect, Node.js, TypeScript",
      date: "MilestoneZero",
      description:
        "Marketplace payment infrastructure for an international events product—Connected Accounts, ticket payments, fund holding, delayed payouts, transfers, and refunds driven by business rules.",
    },
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
      name: "Production AI Order Agents",
      stack: "LLM agents, WhatsApp automation",
      description:
        "AI message generation, booking-agent order summaries, and order-creation agents with validation—compressing a 15–30 minute manual capture flow to seconds.",
    },
    {
      name: "ARCHARCH / Arch CLI",
      stack: "Go, Clean Architecture",
      date: "Sep 2025",
      description:
        "Open-source Go CLI that scaffolds feature-based Clean Architecture folder structures to standardize and accelerate project setup.",
      link: "https://github.com/Mrhamza01/arch",
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
    frontend: "React, Next.js, Tailwind CSS, ShadCN",
    backend: "Node.js, Express, REST APIs, GraphQL, Laravel, BullMQ, Amazon SQS",
    data: "PostgreSQL, MongoDB, MySQL; Prisma, Drizzle, Kysely; Redis; partitioning & warm cache",
    devops:
      "Docker, Kubernetes, Helm, kOps, GitHub Actions, Jenkins, NGINX Ingress, cert-manager, Longhorn",
    observability: "Prometheus, Grafana, backup/DR",
    architecture:
      "Multi-tenant SaaS, provider abstraction, async processing, Stripe Connect, air-gapped on-prem delivery",
    cloud: "AWS (S3, SQS, RDS), Vercel, Netlify; Git, n8n, Firebase, Appwrite, Supabase",
    ai: "LLM agents, AI message generation, order summarization, WhatsApp automation",
  },

  preferences: [
    {
      id: "general",
      title: "Why hire Hamza?",
      bullets: [
        "Production engineer since Nov 2022—owns delivery from architecture through deployment and recovery.",
        "Full-stack + platform blend: React/Node and Kubernetes/CI/CD in the same ownership loop.",
        "Track record spanning ERP fleets (200+ clients), air-gapped enterprise delivery, logistics at 100K+ orders, and marketplace payments.",
        "Takes ownership: design, build, automate, monitor, and recover.",
      ],
    },
    {
      id: "displays",
      title: "What I deliver",
      bullets: [
        "Full-stack product features: React, Next.js, TypeScript, Node.js, REST/GraphQL.",
        "Integration architecture: multi-provider abstraction, normalization, reconciliation, and settlement.",
        "Async systems: BullMQ/SQS workers, retries, DLQs, rate-limit-aware concurrency.",
        "Platform engineering: Kubernetes, Helm, CI/CD, observability, backup/DR.",
      ],
    },
    {
      id: "network",
      title: "How I work",
      bullets: [
        "Remote-ready: async communication and clear written updates.",
        "Collaborates with product, QA, and design; participates in code reviews and hiring interviews.",
        "Uses modern AI-assisted tooling to ship faster without sacrificing quality.",
        "Comfortable with architecture and migration decisions on production systems.",
      ],
    },
    {
      id: "privacy",
      title: "Reliability mindset",
      bullets: [
        "Zero-downtime deployments and automated database migrations.",
        "Fault isolation via DLQs and reprocessing—failures must not stall the pipeline.",
        "Fleet-wide backup, restore, and disaster recovery practices.",
        "Security-conscious multi-tenant isolation and restricted/on-prem delivery patterns.",
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
    { id: "stripe", name: "Stripe", category: "Backend", icon: "i-simple-icons:stripe", featured: true, docUrl: "https://stripe.com/docs/connect" },
    { id: "postgresql", name: "PostgreSQL", category: "Data", icon: "i-simple-icons:postgresql", featured: true, docUrl: "https://www.postgresql.org" },
    { id: "mongodb", name: "MongoDB", category: "Data", icon: "i-simple-icons:mongodb", docUrl: "https://www.mongodb.com" },
    { id: "prisma", name: "Prisma", category: "Data", icon: "i-simple-icons:prisma", docUrl: "https://www.prisma.io" },
    { id: "redis", name: "Redis", category: "Data", icon: "i-simple-icons:redis", docUrl: "https://redis.io" },
    { id: "docker", name: "Docker", category: "DevOps", icon: "i-simple-icons:docker", featured: true, docUrl: "https://docker.com" },
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
    { id: "openai", name: "AI / LLM", category: "AI & Integrations", icon: "i-simple-icons:openai", featured: true, docUrl: "https://openai.com" },
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
    `Name: Hamza Ghafoor`,
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
