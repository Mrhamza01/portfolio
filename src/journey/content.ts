/**
 * Copy for the Journey portfolio.
 * Every claim here traces back to src/configs/profile.ts, src/configs/caseStudies.ts
 * or the published resume. Do not add metrics that are not in those sources.
 */
import { profile } from "~/configs/profile";

export const contact = profile.contact;
export const RESUME_URL = "/resume.pdf";
export const EMAIL_URL = `mailto:${profile.contact.email}?subject=${encodeURIComponent(
  "Role opportunity for Hamza"
)}`;

export const hero = {
  thesis:
    "I build systems that keep moving when integrations, infrastructure and money get complicated.",
  role: "Full-stack software engineer, in production since November 2022.",
  sub: "I design, ship and operate the whole path: product features, APIs, queues, CI/CD and Kubernetes.",
  availability:
    "Open to remote senior full-stack, backend and platform roles. Based in Faisalabad, Pakistan (UTC+5).",
  sceneCaption:
    "Nine courier feeds, each shaped differently, normalized into one stream. It is the logistics platform I built, drawn live.",
};

export interface LedgerRow {
  figure: string;
  unit: string;
  meaning: string;
}

export const ledger: LedgerRow[] = [
  {
    figure: "9",
    unit: "courier providers",
    meaning: "Unified behind one logistics domain model instead of nine sets of special cases.",
  },
  {
    figure: "100K+",
    unit: "orders",
    meaning: "Async processing capacity the queue and worker pipeline is designed for.",
  },
  {
    figure: "200+",
    unit: "client deployments",
    meaning: "The on-prem Kubernetes fleet I designed and operated at AxonERP.",
  },
  {
    figure: "15–30 min → seconds",
    unit: "per order",
    meaning: "Order capture time after shipping a WhatsApp order-creation agent.",
  },
  {
    figure: "Hours → minutes",
    unit: "per release",
    meaning: "Deployment cycle after replacing manual releases with CI/CD.",
  },
  {
    figure: "3",
    unit: "operating environments",
    meaning: "SaaS, on-prem Kubernetes, and an air-gapped enterprise facility.",
  },
];

export interface Milestone {
  when: string;
  title: string;
  body: string;
}

export const milestones: Milestone[] = [
  {
    when: "2020",
    title: "Started computer science",
    body: "Began a B.S. in Computer Science at Virtual University of Pakistan.",
  },
  {
    when: "Nov 2022",
    title: "First production role",
    body: "Joined the team behind AxonERP, a product that grew out of Multi-Techno, as a full-stack engineer. Shipped ERP features and a client-operations admin panel with React, Next.js, Node.js, PostgreSQL and MongoDB.",
  },
  {
    when: "AxonERP",
    title: "From features to the platform",
    body: "Took on how the product runs, not only what it does: on-prem Kubernetes with kOps and Helm, tenant isolation, storage and backups, for a fleet of 200+ client deployments.",
  },
  {
    when: "AxonERP",
    title: "Made releases boring",
    body: "Led the move from manual releases to GitHub Actions and Jenkins. Image builds, migrations, seeding and zero-downtime Helm upgrades took the cycle from hours to minutes.",
  },
  {
    when: "2024",
    title: "Graduated",
    body: "Finished the degree, plus the IBM Full Stack Software Developer specialization and freeCodeCamp's Back End Development and APIs certification.",
  },
  {
    when: "Sep 2025",
    title: "Open-sourced Arch",
    body: "A Go CLI that scaffolds feature-based Clean Architecture projects, so new services start from the same structure.",
  },
  {
    when: "Dec 2025",
    title: "Joined MilestoneZero",
    body: "Harder problems: nine courier integrations with settlement, Stripe Connect marketplace payments, production AI agents, and an air-gapped delivery for Abu Dhabi Police.",
  },
  {
    when: "Now",
    title: "Looking for the next system to own",
    body: "Running technical interviews for the team, and looking for a remote senior role on an international engineering team.",
  },
];

export interface FlowStep {
  label: string;
  note?: string;
}

export interface Decision {
  title: string;
  body: string;
}

export interface SystemStudy {
  id: string;
  company: string;
  title: string;
  lede: string;
  problem: string;
  decisions: Decision[];
  outcome: string[];
  stack: string[];
  flow: FlowStep[];
  flowCaption: string;
}

export const systems: SystemStudy[] = [
  {
    id: "logistics",
    company: "MilestoneZero",
    title: "Multi-courier logistics and settlement",
    lede: "Nine couriers, one model, and a pipeline that isolates whichever one is failing today.",
    problem:
      "Merchants were juggling nine courier APIs with different statuses, identifiers, charges, invoices, returns and claims. Finance needed to know what each courier actually owed, not a dump of raw shipments.",
    decisions: [
      {
        title: "One domain model, nine adapters",
        body: "Each courier maps into a shared model for shipments, payments, invoices, returns and claims. The rest of the product never sees a courier-specific field.",
      },
      {
        title: "Async by default",
        body: "BullMQ and Amazon SQS workers with scheduling and concurrency limits tuned to each provider's rate limits.",
      },
      {
        title: "Failures get parked, not propagated",
        body: "Retries with backoff, then a dead-letter queue. Find the root cause, correct the data, re-enqueue.",
      },
      {
        title: "Reconcile against the contract",
        body: "CPR and invoice ingestion, contract-based charge matching, discrepancy analysis, settlement and net receivables.",
      },
    ],
    outcome: [
      "Designed for 100K+ orders of async processing capacity across 9 providers.",
      "One failing courier cannot stall the others.",
      "Finance and operations get settlement and cash-flow visibility from one place.",
    ],
    stack: ["Node.js", "TypeScript", "BullMQ", "Amazon SQS", "PostgreSQL", "Redis"],
    flow: [
      { label: "Orders and events" },
      { label: "BullMQ / SQS queues" },
      { label: "Concurrent workers" },
      { label: "Courier adapters" },
      { label: "Normalized domain" },
      { label: "Reconciliation and settlement" },
    ],
    flowCaption: "How an order moves through the logistics pipeline.",
  },
  {
    id: "payments",
    company: "MilestoneZero",
    title: "Stripe Connect marketplace payments",
    lede: "Ticket money that waits for the rules before it moves.",
    problem:
      "An international events product needed marketplace money movement, not a checkout drop-in. Hosts needed their own accounts, and payouts had to wait until business conditions were met.",
    decisions: [
      {
        title: "Connected Accounts for hosts",
        body: "Every event host is onboarded as a Stripe Connect Connected Account.",
      },
      {
        title: "Hold first, pay out on rules",
        body: "Ticket payments land in the platform balance. Funds are allocated and held, then transferred on a delayed, business-rule-driven schedule.",
      },
      {
        title: "Refunds use the same path",
        body: "Refunds and reversals run back through the settlement flow, so the balances stay correct.",
      },
    ],
    outcome: [
      "Owned the marketplace payment infrastructure end to end.",
      "Payout timing follows business rules instead of immediate pass-through.",
    ],
    stack: ["Stripe Connect", "Node.js", "TypeScript", "PostgreSQL"],
    flow: [
      { label: "Ticket purchase" },
      { label: "Stripe Connect" },
      { label: "Platform balance" },
      { label: "Hold until rules are met" },
      { label: "Transfer and host payout" },
    ],
    flowCaption: "How ticket money moves from buyer to host. Refunds and reversals travel the same path in reverse.",
  },
  {
    id: "airgap",
    company: "MilestoneZero",
    title: "Air-gapped delivery for Abu Dhabi Police",
    lede: "No internet on the other side. Everything the platform needs has to arrive with it.",
    problem:
      "A sustainability platform had to run inside a restricted facility on an air-gapped network. Outside connectivity, tooling and update paths were all constrained, on top of licensed enterprise software and domain-authenticated databases.",
    decisions: [
      {
        title: "Kubernetes inside the facility",
        body: "Designed, delivered and deployed the platform to on-premises Kubernetes on the customer's own network.",
      },
      {
        title: "Authenticate the way the facility does",
        body: "Databases use domain authentication, which meant working through Linux-to-Windows connectivity and Kerberos.",
      },
      {
        title: "Work as one team with DevOps",
        body: "Delivered alongside the lead DevOps engineer under high reliability and quality requirements.",
      },
    ],
    outcome: [
      "In production inside an air-gapped enterprise environment.",
      "Delivered within licensed-software and restricted-network constraints.",
    ],
    stack: ["Kubernetes", "Docker", "Linux", "Windows", "Kerberos"],
    flow: [
      { label: "Restricted facility" },
      { label: "Air gap" },
      { label: "On-prem Kubernetes" },
      { label: "Domain-authenticated databases" },
      { label: "Production" },
    ],
    flowCaption: "What the platform passes through to reach production in the facility.",
  },
  {
    id: "fleet",
    company: "AxonERP",
    title: "A 200+ deployment ERP fleet, released by pipeline",
    lede: "Hundreds of isolated client environments on one repeatable baseline.",
    problem:
      "A multi-tenant ERP served hundreds of clients with strict data boundaries. Releases were manual and took hours, image tags drifted, and rollbacks were hard.",
    decisions: [
      {
        title: "A repeatable client baseline",
        body: "Helm-packaged services on on-prem Kubernetes (kOps) with tenant-scoped PostgreSQL isolation, Longhorn storage and Redis-backed workloads.",
      },
      {
        title: "Pipelines instead of people",
        body: "GitHub Actions builds, tests and publishes images. Jenkins promotes Helm releases with migrations and seeding gated behind pipeline checks.",
      },
      {
        title: "Pin everything",
        body: "Immutable image tags and chart versions pinned per client make rollbacks a version change.",
      },
      {
        title: "Plan for the bad day",
        body: "NGINX Ingress and cert-manager for per-client TLS, Prometheus and Grafana for visibility, Longhorn backups and practiced cluster and database restores.",
      },
    ],
    outcome: [
      "200+ production client deployments on one platform baseline.",
      "Release cycle cut from hours to minutes with zero-downtime Helm upgrades.",
    ],
    stack: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Kubernetes",
      "Helm",
      "GitHub Actions",
      "Jenkins",
      "Prometheus",
      "Grafana",
    ],
    flow: [
      { label: "Git push" },
      { label: "GitHub Actions" },
      { label: "Docker registry" },
      { label: "Jenkins and Helm release" },
      { label: "Client cluster" },
    ],
    flowCaption: "How a change reaches a client cluster.",
  },
  {
    id: "agents",
    company: "MilestoneZero",
    title: "AI agents that create real orders",
    lede: "A 15 to 30 minute capture task, done in seconds.",
    problem:
      "Capturing an order from a WhatsApp conversation was manual work: read the thread, find the customer, check the address, key it in.",
    decisions: [
      {
        title: "Let the agent draft, make the system verify",
        body: "A WhatsApp order-creation agent builds the order, then validates the user and address before anything is saved.",
      },
      {
        title: "Put AI where the time goes",
        body: "Personalized message generation and order summaries for booking agents, shipped as production features.",
      },
    ],
    outcome: ["Order capture went from 15–30 minutes to seconds."],
    stack: ["LLM agents", "WhatsApp automation", "Node.js", "TypeScript"],
    flow: [
      { label: "WhatsApp conversation" },
      { label: "Order-creation agent" },
      { label: "User and address validation" },
      { label: "Order created" },
    ],
    flowCaption: "How a conversation becomes an order.",
  },
];

export interface Role {
  company: string;
  role: string;
  period: string;
  url: string;
  logo: string;
  note?: string;
  points: string[];
}

export const roles: Role[] = [
  {
    company: "MilestoneZero",
    role: "Full-Stack Software Engineer",
    period: "Dec 2025 – Present",
    url: "https://milestonezero.net/",
    logo: "/companies/milestone_zero_logo.jpg",
    points: [
      "Designed the integration and settlement workflows for 9 courier providers, including PostEx, Leopards and M&P.",
      "Built BullMQ and Amazon SQS workers for 100K+ orders of designed capacity, with retries, dead-letter queues and reprocessing.",
      "Own the Stripe Connect payment infrastructure for an international events product.",
      "Delivered a sustainability platform for Abu Dhabi Police to air-gapped, on-prem Kubernetes.",
      "Shipped production AI agents that cut order capture from 15–30 minutes to seconds.",
      "Conduct hiring and technical interviews.",
    ],
  },
  {
    company: "AxonERP",
    role: "Full-Stack Software Engineer",
    period: "Nov 2022 – Nov 2025",
    url: "https://www.axonerp.com/",
    logo: "/companies/axon-erp.png",
    note: "Core product, scaled from Multi-Techno",
    points: [
      "Shipped ERP features and a client-operations admin panel with React, Next.js, TypeScript, Node.js, REST and GraphQL.",
      "Designed and operated on-prem Kubernetes for 200+ client deployments with multi-tenant isolation.",
      "Led the move to GitHub Actions and Jenkins, cutting releases from hours to minutes.",
      "Ran ingress, TLS, monitoring, backups and restore practice for the fleet.",
      "Integrated n8n and WhatsApp Business APIs. Reviewed code and helped set clean-architecture standards.",
    ],
  },
];

export const skillGroups: { job: string; tools: string }[] = [
  { job: "Languages", tools: "TypeScript, JavaScript, Go, SQL" },
  { job: "Frontend", tools: "React, Next.js, Tailwind CSS, shadcn/ui" },
  { job: "Backend and APIs", tools: "Node.js, Express, REST, GraphQL, Laravel" },
  { job: "Queues and workers", tools: "BullMQ, Amazon SQS, retries and backoff, dead-letter queues" },
  { job: "Data", tools: "PostgreSQL, MongoDB, MySQL, Redis, Prisma, Drizzle, Kysely" },
  {
    job: "Infrastructure and delivery",
    tools: "Docker, Kubernetes, Helm, kOps, GitHub Actions, Jenkins, NGINX Ingress, cert-manager, Longhorn",
  },
  { job: "Observability and recovery", tools: "Prometheus, Grafana, backup and disaster recovery" },
  { job: "Cloud", tools: "AWS (S3, SQS, RDS), Vercel" },
  { job: "Payments", tools: "Stripe Connect: Connected Accounts, holds, delayed payouts, refunds" },
  { job: "AI and automation", tools: "LLM agents, message generation, order summarization, WhatsApp automation, n8n" },
];

export const principles: { title: string; body: string; proof: string }[] = [
  {
    title: "Assume the third party will fail",
    body: "Courier APIs rate-limit, time out and change. The pipeline has to expect that and keep the healthy paths moving.",
    proof: "Retries, backoff, dead-letter queues and reprocessing across 9 couriers.",
  },
  {
    title: "Model the domain, not the vendor",
    body: "An adapter per provider and one internal model. Adding or replacing a provider should not ripple through the product.",
    proof: "Nine courier integrations behind one logistics model.",
  },
  {
    title: "Money moves on rules, not on events",
    body: "A payment succeeding is not the same as a host being owed. Hold funds until the business condition is true.",
    proof: "Delayed, rule-driven payouts and refunds on Stripe Connect.",
  },
  {
    title: "Make releases boring",
    body: "If a deploy needs a person and an afternoon, it will be skipped or rushed. Automate it until it is uneventful.",
    proof: "Hours to minutes, with zero-downtime Helm upgrades across 200+ deployments.",
  },
  {
    title: "Recovery is a feature",
    body: "Backups that have never been restored are a hope. Practice the restore before you need it.",
    proof: "Longhorn backups and cluster and database restore practice for the ERP fleet.",
  },
];

export const beyond: { title: string; body: string }[] = [
  {
    title: "Hiring",
    body: "I conduct technical interviews at MilestoneZero, so I know what a strong engineer looks like from the other side of the table.",
  },
  {
    title: "Standards",
    body: "Code reviews and clean-architecture standards at AxonERP, and an open-source CLI that bakes that structure into new projects.",
  },
  {
    title: "Working with the business",
    body: "I have built for finance teams reconciling courier invoices and for operations teams running client environments, alongside product, design and QA.",
  },
  {
    title: "Remote habits",
    body: "Async communication and clear written updates. I use AI-assisted tooling as part of a disciplined workflow, not instead of one.",
  },
];

export const openSource = [
  {
    name: "Arch CLI",
    stack: "Go",
    body: "Scaffolds feature-based Clean Architecture folder structures.",
    url: "https://github.com/Mrhamza01/arch",
  },
  {
    name: "AI Article Summarizer",
    stack: "GPT-4, React, Vite",
    body: "Extracts the key points of an article into a short summary.",
    url: "https://github.com/Mrhamza01/AI-summarizer",
  },
];

export const education = {
  degree: "B.S. Computer Science",
  school: "Virtual University of Pakistan",
  years: "2020 – 2024",
  certs: [
    "IBM Full Stack Software Developer Specialization (Coursera)",
    "Back End Development and APIs (freeCodeCamp)",
  ],
};

export const navLinks = [
  { id: "journey", label: "Journey" },
  { id: "systems", label: "Systems" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "approach", label: "Approach" },
  { id: "contact", label: "Contact" },
];
