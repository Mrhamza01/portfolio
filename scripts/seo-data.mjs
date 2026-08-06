/**
 * SEO crawlable-layer content.
 * Keep in sync with src/configs/profile.ts and src/configs/caseStudies.ts.
 */

export const SITE_URL = "https://hamzaghafoor.vercel.app";

export const profile = {
  name: "Muhammad Hamza",
  displayName: "Hamza Ghafoor",
  title: "Full Stack Software Engineer | Cloud-Native & SaaS",
  openToWork:
    "Open to work — Senior Full Stack, Backend, Cloud, and SaaS roles. Remote EU-friendly.",
  location: "Faisalabad, Pakistan",
  summary:
    "Full Stack Software Engineer (production since Nov 2022) who builds and operates multi-tenant SaaS and on-prem cloud-native systems—from an ERP fleet of 200+ Kubernetes deployments to air-gapped, mission-critical releases.",
  whyHireMe: [
    "Open to Senior Full Stack, Backend, Cloud, and SaaS roles — remote EU-friendly.",
    "Owns system design, implementation, CI/CD, Kubernetes operations, and reliability end-to-end.",
    "Proven at scale: 200+ tenant ERP fleet, multi-tenant databases, zero-downtime deployments.",
    "Builds and operates production SaaS—not only application code.",
  ],
  roles: [
    "Full Stack Software Engineer",
    "SaaS Platform Developer",
    "ERP System Architect",
    "Kubernetes / Cloud Engineer",
    "Backend Engineer",
    "Product-focused Engineer",
  ],
  contact: {
    email: "hamza.kamboh035@gmail.com",
    phone: "+92 309 7906831",
    linkedin: "https://linkedin.com/in/hamza-ghafoor",
    github: "https://github.com/Mrhamza01",
    website: "https://hamzaghafoor.vercel.app/",
    whatsapp: "https://wa.me/923097906831",
  },
  experience: [
    {
      company: "MilestoneZero",
      role: "Full Stack Software Engineer",
      period: "Dec 2025 — Present",
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
      website: "https://www.axonerp.com/",
      bullets: [
        "Full-stack ERP: React, Next.js, TypeScript, Node.js, REST/GraphQL, PostgreSQL, MongoDB.",
        "Multi-tenant database design: tenant isolation, connection-pool tuning at scale.",
        "On-prem Kubernetes (kOps) for 200+ clients; Helm; CI (GitHub Actions) and CD (Jenkins); hours → minutes deploys.",
        "NGINX Ingress, Longhorn, cert-manager, Prometheus/Grafana; fleet backup and disaster recovery.",
        "n8n, WhatsApp Business APIs, ops admin panel; code reviews and clean architecture.",
      ],
    },
  ],
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
  ],
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
  ],
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
  skillLabels: {
    languages: "Languages",
    frontend: "Frontend",
    backend: "Backend",
    data: "Data",
    devops: "DevOps / Cloud-Native",
    observability: "Observability",
    architecture: "Architecture",
    cloud: "Cloud & Platforms",
    ai: "AI & Integrations",
  },
  education: {
    degree: "Bachelor's degree in Computer Science",
    school: "Virtual University of Pakistan (VU)",
  },
};

export const caseStudies = [
  {
    id: "erp-platform",
    title: "Multi-Tenant ERP Platform",
    subtitle: "On-prem Kubernetes fleet · 200+ client deployments",
    problem: [
      "SaaS ERP serving hundreds of isolated tenants with strict data boundaries.",
      "Connection-pool exhaustion and noisy-neighbor risk at scale.",
      "Per-client TLS, backups, and upgrades without fleet-wide downtime.",
    ],
    solution: [
      "Tenant-scoped PostgreSQL isolation with tuned pool sizing per deployment.",
      "NGINX Ingress + cert-manager for per-client certificates.",
      "Helm-packaged services on on-prem Kubernetes (kOps) with Longhorn storage.",
      "Prometheus/Grafana observability and documented DR/restore runbooks.",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Kubernetes",
      "Helm",
      "NGINX Ingress",
      "Prometheus",
      "Grafana",
    ],
    outcomes: [
      "200+ production client deployments on a repeatable platform baseline.",
      "Zero-downtime rollout patterns for app and schema changes (hours → minutes).",
      "Fleet-wide backup/restore and operational visibility.",
    ],
  },
  {
    id: "cicd-pipeline",
    title: "CI/CD & Container Automation",
    subtitle: "GitHub Actions → Docker → Helm → Kubernetes",
    problem: [
      "Manual builds and deploys taking hours across many client environments.",
      "Inconsistent image tags and rollback difficulty.",
      "Limited visibility when pipelines failed mid-fleet.",
    ],
    solution: [
      "GitHub Actions for build, test, and Docker publish on merge.",
      "Jenkins CD stages for environment promotion and Helm releases.",
      "Immutable image tags and chart version pinning per client.",
      "Automated migrations gated behind pipeline checks.",
    ],
    stack: [
      "GitHub Actions",
      "Jenkins",
      "Docker",
      "Helm",
      "Kubernetes",
      "Git",
    ],
    outcomes: [
      "Deployment cycle reduced from hours to minutes.",
      "Repeatable, auditable releases across the ERP fleet.",
      "Safer rollbacks via versioned charts and images.",
    ],
  },
];

export const pages = [
  {
    slug: "about",
    path: "/about/",
    title: "About Hamza Ghafoor — Full Stack Software Engineer",
    description:
      "Muhammad Hamza (Hamza Ghafoor) is a Full Stack Software Engineer specializing in multi-tenant SaaS, ERP systems, and Kubernetes. Open to Senior roles (remote EU).",
    priority: "0.9",
  },
  {
    slug: "experience",
    path: "/experience/",
    title: "Experience — Hamza Ghafoor | MilestoneZero & AxonERP",
    description:
      "Production experience since Nov 2022: AxonERP multi-tenant Kubernetes fleet (200+ clients) and MilestoneZero air-gapped / SaaS delivery.",
    priority: "0.8",
  },
  {
    slug: "projects",
    path: "/projects/",
    title: "Projects — Multi-Tenant ERP, CI/CD, WhatsApp AI",
    description:
      "Selected projects by Hamza Ghafoor: multi-tenant ERP platform, CI/CD automation, and WhatsApp order summarization.",
    priority: "0.8",
  },
  {
    slug: "case-studies",
    path: "/case-studies/",
    title: "Case Studies — ERP Architecture & Kubernetes CI/CD",
    description:
      "Engineering case studies: multi-tenant SaaS ERP on Kubernetes and CI/CD pipelines that cut deploy time from hours to minutes.",
    priority: "0.8",
  },
  {
    slug: "skills",
    path: "/skills/",
    title: "Skills — React, Node.js, Kubernetes, PostgreSQL",
    description:
      "Technical skills: React, Next.js, TypeScript, Node.js, Go, PostgreSQL, Docker, Kubernetes, Helm, CI/CD, and multi-tenant SaaS architecture.",
    priority: "0.7",
  },
];
