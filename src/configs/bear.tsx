import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "resume",
        title: "Resume",
        file: "markdown/resume.md",
        icon: "i-la:file-pdf",
        excerpt: "Full professional resume of Muhammad Hamza..."
      },
      {
        id: "experience",
        title: "Experience",
        file: "markdown/experience.md",
        icon: "i-heroicons-outline:briefcase",
        excerpt: "Professional work experience and roles..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "projects-overview",
        title: "Projects Overview",
        file: "markdown/projects.md",
        icon: "i-heroicons-outline:collection",
        excerpt: "A list of all my major projects..."
      }
    ]
  },
  {
    id: "education",
    title: "Education",
    icon: "i-heroicons-outline:academic-cap",
    md: [
      {
        id: "certificates",
        title: "Certificates",
        file: "markdown/certificates.md",
        icon: "i-heroicons-outline:badge-check",
        excerpt: "Licenses and professional certifications..."
      }
    ]
  }
];

export default bear;
