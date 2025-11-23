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
    bio: `Hi, I'm Muhammad Hamza, a Full Stack Developer from Faisalabad, Pakistan, with a Bachelor's degree in Computer Science from the Virtual University of Pakistan (2020–2024).

I work at Multi-Techno ERP Integrated Solutions as a Full Stack Developer. I architected and deployed a multi-tenant ERP system on a self-managed Kubernetes cluster, achieving 90% cost savings compared to managed Kubernetes services. I also led the Axon ERP deployment with full disaster recovery, automated provisioning, and strict data isolation, where each user gets a dedicated app and database on subdomains like demo.axonerp.com.`,
    location: 'Faisalabad, Punjab, Pakistan',
    email: 'hamza.kamboh035@gmail.com',
    phone: '+92-XXX-XXXXXXX', // Add your phone number
    avatar: '/images/avatar.jpg', // Add your avatar image
    resumeUrl: '/resume.pdf', // Add your resume PDF
};

export const achievements = [
    '180% salary growth in under 12 months due to high-impact contributions and technical leadership',
    'Delivered critical ERP infrastructure that reduced cloud costs by 90%',
    'Led Kubernetes and DevOps practices in a production-grade environment',
    'Architected multi-tenant SaaS platform serving multiple clients',
];

export const futureGoals = `I'm passionate about mastering modern software architectures—including microservices, plugin-based systems, and event-driven architectures. I aim to design highly scalable and modular software that empowers teams and minimizes operational costs.

I'm quick to adopt new technologies and thrive in fast-paced, cross-functional teams—making me an ideal fit for ambitious, evolving tech environments.`;
