export interface PersonalInfo {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    phone?: string;
    avatar?: string;
    resumeUrl?: string;
}

export const personalInfo: PersonalInfo = {
    name: 'Muhammad Hamza Ghafoor',
    title: 'Senior Software Engineer & Team Lead',
    tagline: 'Architecting Scalable SaaS & ERP Platforms | Kubernetes, DevOps & Cloud-Native Expert',
    bio: `I am a results-driven **System Architect & Senior Full Stack Engineer** specializing in building high-performance, cloud-native SaaS platforms. With a deep expertise in **Kubernetes, DevOps, and Microservices**, I transform complex business requirements into scalable, secure, and cost-efficient technical solutions.

Currently, I lead the engineering efforts at **Multi-Techno ERP Integrated Solutions**, where I architected a revolutionary multi-tenant ERP system from the ground up. By leveraging self-managed Kubernetes clusters and automated provisioning, I successfully **reduced infrastructure costs by 90%** while ensuring strict data isolation and disaster recovery for hundreds of tenants. My passion lies in solving difficult architectural challenges and empowering teams to deliver world-class software.`,
    location: 'Faisalabad, Punjab, Pakistan',
    email: 'hamza.kamboh035@gmail.com',
    phone: '+92-309-7906831', // Add your phone number
    avatar: '/images/avatar.jpg', // Add your avatar image
    resumeUrl: '/resume.pdf', // Add your resume PDF
};

export const achievements = [
    '**Orchestrated** a 90% reduction in cloud infrastructure costs by migrating from managed services to a self-architected, bare-metal Kubernetes cluster.',
    '**Architected & Deployed** a robust multi-tenant SaaS platform, enabling zero-touch provisioning of dedicated environments (App + DB) for new clients.',
    '**Accelerated** career growth with a 180% salary increase in under 12 months, driven by high-impact technical leadership and delivery of critical enterprise infrastructure.',
    '**Pioneered** production-grade DevOps practices, implementing automated CI/CD pipelines, disaster recovery protocols, and comprehensive monitoring systems.',
];

export const futureGoals = `I'm passionate about mastering modern software architectures—including microservices, plugin-based systems, and event-driven architectures. I aim to design highly scalable and modular software that empowers teams and minimizes operational costs.

I'm quick to adopt new technologies and thrive in fast-paced, cross-functional teams—making me an ideal fit for ambitious, evolving tech environments.`;
