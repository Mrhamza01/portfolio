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
      "Helm-packaged services on on-prem Kubernetes with Longhorn storage.",
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
      "Zero-downtime rollout patterns for app and schema changes.",
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
];

export default caseStudies;
