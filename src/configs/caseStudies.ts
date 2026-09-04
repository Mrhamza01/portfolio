export interface DiagramStep {
  label: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  problem: string[];
  solution: string[];
  stack: string[];
  outcomes: string[];
  diagramSteps: DiagramStep[];
}

export const caseStudies: CaseStudy[] = [
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
    diagramSteps: [
      { label: "Courier APIs", icon: "i-heroicons-outline:truck" },
      { label: "Abstraction", icon: "i-heroicons-outline:squares-2x2" },
      { label: "Queues", icon: "i-heroicons-outline:queue-list" },
      { label: "Workers", icon: "i-simple-icons:nodedotjs" },
      { label: "Settlement", icon: "i-heroicons-outline:banknotes" },
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
    stack: [
      "Stripe Connect",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
    ],
    outcomes: [
      "Marketplace payment infrastructure owned end-to-end for ticketed events.",
      "Business-rule payout scheduling instead of immediate pass-through.",
      "Refunds and fund reversals implemented in the settlement workflow.",
    ],
    diagramSteps: [
      { label: "Buyers", icon: "i-heroicons-outline:ticket" },
      { label: "Stripe Connect", icon: "i-simple-icons:stripe" },
      { label: "Platform", icon: "i-heroicons-outline:building-library" },
      { label: "Hold / Rules", icon: "i-heroicons-outline:clock" },
      { label: "Host Payout", icon: "i-heroicons-outline:banknotes" },
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
    diagramSteps: [
      { label: "Clients", icon: "i-heroicons-outline:users" },
      { label: "NGINX Ingress", icon: "i-simple-icons:nginx" },
      { label: "API Services", icon: "i-simple-icons:nodedotjs" },
      { label: "Tenant DB", icon: "i-simple-icons:postgresql" },
      { label: "Monitoring", icon: "i-simple-icons:prometheus" },
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
    diagramSteps: [
      { label: "Git Push", icon: "i-simple-icons:git" },
      { label: "GitHub Actions", icon: "i-simple-icons:githubactions" },
      { label: "Docker Registry", icon: "i-simple-icons:docker" },
      { label: "Helm / K8s", icon: "i-simple-icons:kubernetes" },
      { label: "Production", icon: "i-heroicons-outline:server-stack" },
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
    stack: [
      "Kubernetes",
      "Docker",
      "Linux",
      "Windows",
      "Enterprise Auth",
    ],
    outcomes: [
      "Successful production deployment in an air-gapped enterprise environment.",
      "Delivery under licensed-software and restricted-network constraints.",
      "Demonstrated end-to-end ownership beyond typical SaaS web releases.",
    ],
    diagramSteps: [
      { label: "Facility", icon: "i-heroicons-outline:building-office-2" },
      { label: "Air Gap", icon: "i-heroicons-outline:shield-check" },
      { label: "Kubernetes", icon: "i-simple-icons:kubernetes" },
      { label: "Domain Auth DB", icon: "i-simple-icons:postgresql" },
      { label: "Production", icon: "i-heroicons-outline:check-badge" },
    ],
  },
];

export default caseStudies;
