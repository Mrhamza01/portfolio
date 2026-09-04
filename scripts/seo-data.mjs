/**
 * SEO crawlable-layer content.
 * Keep in sync with src/configs/profile.ts and src/configs/caseStudies.ts.
 */

export const SITE_URL = "https://hamzaghafoor.vercel.app";

export const profile = {
  name: "Hamza Ghafoor",
  displayName: "Hamza Ghafoor",
  title: "Full Stack Software Engineer | Backend & Platform Systems",
  openToWork:
    "Available for Senior Full Stack, Backend, and Platform Engineering roles.",
  location: "Faisalabad, Pakistan",
  summary:
    "Full-Stack Software Engineer (production since Nov 2022) who designs, builds, and operates systems end-to-end—features, APIs, queues, CI/CD, and Kubernetes—across SaaS products and restricted enterprise infrastructure.",
  whyHireMe: [
    "End-to-end ownership: application code through CI/CD, Kubernetes, and production recovery.",
    "Proven depth: air-gapped enterprise delivery, 100K+ async logistics processing, Stripe Connect marketplace payments, and a 200+ client ERP fleet.",
    "Builds production systems that stay reliable under third-party failure, load, and operational constraints.",
  ],
  roles: [
    "Senior Full Stack Software Engineer",
    "Senior Software Engineer",
    "Backend / Platform Engineer",
    "Full Stack Software Engineer",
    "SaaS Platform Engineer",
    "Cloud-Native Engineer",
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
        "Designed, delivered, and deployed a sustainability platform for Abu Dhabi Police to on-premises, air-gapped Kubernetes with licensed software, domain-authenticated databases, and Linux–Windows/Kerberos constraints.",
        "Built multi-courier logistics integration and settlement across 9 providers (including PostEx, Leopards, and M&P)—provider abstraction, data normalization, reconciliation, returns/claims, and net receivables.",
        "Designed BullMQ / Amazon SQS async workers for 100K+ order capacity with concurrency controls, rate-limit awareness, retries, DLQs, and failure isolation.",
        "Owned Stripe Connect marketplace payment infrastructure: Connected Accounts, fund holding, delayed business-rule payouts, transfers, and refunds on an international events product.",
        "Shipped production AI features—message generation, booking-agent order summaries, and WhatsApp order-creation agents that cut a 15–30 minute capture task to seconds.",
      ],
    },
    {
      company: "AxonERP / Axon",
      role: "Full Stack Software Engineer",
      period: "Nov 2022 — Nov 2025",
      website: "https://www.axonerp.com/",
      bullets: [
        "Designed and shipped full-stack ERP features and an ops admin panel with React, Next.js, TypeScript, Node.js, REST/GraphQL, PostgreSQL, and MongoDB.",
        "Designed and operated on-prem Kubernetes (kOps/Helm) for 200+ client deployments with multi-tenant isolation, Dockerized apps/databases, PV/PVC storage, and Redis-backed workloads.",
        "Led the move from manual releases to GitHub Actions and Jenkins with image builds, migrations, seeding, and zero-downtime Helm upgrades—hours to minutes.",
        "Operated NGINX Ingress, cert-manager, Prometheus/Grafana, Longhorn backups, and cluster/database restore practices.",
        "Integrated n8n and WhatsApp Business APIs; contributed to code reviews and clean-architecture standards.",
      ],
    },
  ],
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
    id: "multi-courier-logistics",
    title: "Multi-Courier Logistics & Settlement",
    subtitle: "9 providers · 100K+ async orders · reconciliation",
    problem: [
      "Merchants juggle heterogeneous courier APIs, statuses, charges, invoices, returns, and claims.",
      "Synchronous processing cannot absorb volume or third-party rate limits and failures.",
      "Finance needs contract-aware reconciliation and net-receivable visibility—not raw shipment dumps.",
    ],
    solution: [
      "Common provider abstraction that normalizes 9 courier integrations into one logistics domain model.",
      "BullMQ / Amazon SQS workers with concurrency controls, retries, DLQs, and reprocessing loops.",
      "CPR/invoice ingestion, charge matching, settlement, returns/claims, and cash-flow analytics.",
      "Rate-limit-aware processing so one failing courier cannot stall the pipeline.",
    ],
    stack: [
      "Node.js",
      "TypeScript",
      "BullMQ",
      "Amazon SQS",
      "PostgreSQL",
      "Redis",
    ],
    outcomes: [
      "Designed for 100K+ order async processing capacity across 9 providers.",
      "Unified shipment, payment, invoice, return, and claim workflows behind one internal model.",
      "Fault isolation via DLQ → root-cause → re-enqueue recovery.",
    ],
  },
  {
    id: "stripe-marketplace",
    title: "Stripe Connect Marketplace Payments",
    subtitle: "Connected Accounts · delayed payouts · refunds",
    problem: [
      "An international events product needed marketplace money movement—not a simple checkout drop-in.",
      "Hosts require Connected Accounts, held funds, and business-rule-driven settlement timing.",
      "Refunds and reversals must move money correctly through the platform balance flow.",
    ],
    solution: [
      "Stripe Connect Connected Accounts for event hosts.",
      "Ticket payments → platform balance → fund allocation → delayed transfers/payouts.",
      "Fund holding / reservation until business conditions are met (e.g. delayed payout cycles).",
      "Refund and reversal flows wired through the same marketplace settlement path.",
    ],
    stack: ["Stripe Connect", "Node.js", "TypeScript", "PostgreSQL"],
    outcomes: [
      "Marketplace payment infrastructure owned end-to-end for ticketed events.",
      "Business-rule payout scheduling instead of immediate pass-through.",
      "Refunds and fund reversals implemented in the settlement workflow.",
    ],
  },
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
    stack: ["GitHub Actions", "Jenkins", "Docker", "Helm", "Kubernetes", "Git"],
    outcomes: [
      "Deployment cycle reduced from hours to minutes.",
      "Repeatable, auditable releases across the ERP fleet.",
      "Safer rollbacks via versioned charts and images.",
    ],
  },
  {
    id: "air-gapped-enterprise",
    title: "Air-Gapped Enterprise Delivery",
    subtitle: "Abu Dhabi Police · on-prem Kubernetes",
    problem: [
      "Mission-critical sustainability software had to run in a restricted, air-gapped facility.",
      "External connectivity, tooling, and update paths were constrained.",
      "Licensed enterprise software and domain-authenticated databases added operational complexity.",
    ],
    solution: [
      "On-premises Kubernetes deployment into the customer facility network.",
      "Domain authentication for databases and Linux–Windows/Kerberos connectivity considerations.",
      "Close collaboration with lead DevOps under high reliability and quality requirements.",
    ],
    stack: ["Kubernetes", "Docker", "Linux", "Windows", "Enterprise Auth"],
    outcomes: [
      "Successful production deployment in an air-gapped enterprise environment.",
      "Delivery under licensed-software and restricted-network constraints.",
      "Demonstrated end-to-end ownership beyond typical SaaS web releases.",
    ],
  },
];

export const pages = [
  {
    slug: "about",
    path: "/about/",
    title: "About Hamza Ghafoor — Full Stack Software Engineer",
    description:
      "Hamza Ghafoor is a Full Stack Software Engineer specializing in full-stack product engineering, async systems, marketplace payments, and Kubernetes—including air-gapped enterprise delivery.",
    priority: "0.9",
  },
  {
    slug: "experience",
    path: "/experience/",
    title: "Experience — Hamza Ghafoor | MilestoneZero & AxonERP",
    description:
      "Production experience since Nov 2022: multi-courier logistics, Stripe Connect, air-gapped enterprise delivery, and AxonERP multi-tenant Kubernetes fleet (200+ clients).",
    priority: "0.8",
  },
  {
    slug: "projects",
    path: "/projects/",
    title: "Projects — Logistics, Stripe Connect, ERP, AI Agents",
    description:
      "Selected projects by Hamza Ghafoor: multi-courier logistics & settlement, Stripe Connect marketplace payments, multi-tenant ERP, CI/CD, and production AI agents.",
    priority: "0.8",
  },
  {
    slug: "case-studies",
    path: "/case-studies/",
    title: "Case Studies — Logistics, Payments, ERP & Kubernetes",
    description:
      "Engineering case studies: multi-courier logistics, Stripe Connect marketplace payments, air-gapped enterprise delivery, multi-tenant ERP, and CI/CD.",
    priority: "0.8",
  },
  {
    slug: "skills",
    path: "/skills/",
    title: "Skills — React, Node.js, Kubernetes, Stripe, PostgreSQL",
    description:
      "Technical skills: React, Next.js, TypeScript, Node.js, Go, PostgreSQL, BullMQ, Stripe Connect, Docker, Kubernetes, Helm, CI/CD, and async integration architecture.",
    priority: "0.7",
  },
];
