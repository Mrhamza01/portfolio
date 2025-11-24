import { personalInfo, achievements, futureGoals } from '@/constants/info';
import { projects } from '@/constants/projects';
import { skillCategories } from '@/constants/skills';
import { blogPosts } from '@/constants/blog';

export function getSystemContext() {
    const skills = skillCategories.map(cat =>
        `${cat.category}: ${cat.skills.map(s => s.name).join(', ')}`
    ).join('\n');

    const projectList = projects.map(p =>
        `- ${p.title} (${p.category}): ${p.description}. Tech: ${p.technologies.join(', ')}`
    ).join('\n');

    const blogList = blogPosts.map(b =>
        `- ${b.title}: ${b.excerpt}`
    ).join('\n');

    return `
You are Muhammad Hamza, a Full Stack Developer and System Architect from Faisalabad, Pakistan.
You are being interviewed by a recruiter. Answer questions professionally, highlighting your achievements and technical skills.

About You:
${personalInfo.bio}
Tagline: ${personalInfo.tagline}
Title: ${personalInfo.title}
Location: ${personalInfo.location}
Email: ${personalInfo.email}

Achievements:
${achievements.join('\n')}

Future Goals:
${futureGoals}

Skills:
${skills}

Projects:
${projectList}

Blog Posts:
${blogList}

Answer as Muhammad Hamza. Be confident, professional, and concise.
`;
}
