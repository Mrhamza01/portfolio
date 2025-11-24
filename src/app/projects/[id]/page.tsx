import { projects } from '@/constants/projects';
import { notFound } from 'next/navigation';
import { ArrowLeft, Github, Globe, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Generate static params
export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

// Metadata
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);
    if (!project) return { title: 'Project Not Found' };
    return {
        title: `${project.title} | Hamza Ghafoor`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) notFound();

    return (
        <main className="min-h-screen bg-background pt-24 pb-20">
            <article className="container mx-auto max-w-5xl px-4">
                {/* Back Link */}
                <Link href="/#projects" className="mb-8 inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Projects
                </Link>

                {/* Header */}
                <div className="grid gap-8 md:grid-cols-2 mb-12 items-start">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                                {project.category}
                            </span>
                            <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                                {project.status}
                            </span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                            {project.title}
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            {project.description}
                        </p>

                        {/* Links */}
                        <div className="flex flex-wrap gap-4">
                            {project.demoUrl && (
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                                    <Globe className="h-5 w-5" />
                                    View Live Demo
                                </a>
                            )}
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-medium text-foreground hover:bg-muted transition-colors hover:border-primary/50">
                                    <Github className="h-5 w-5" />
                                    View Source Code
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-muted shadow-2xl">
                        {project.image ? (
                            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                        ) : (
                            <div className="flex h-full items-center justify-center text-muted-foreground bg-card">
                                No Image Available
                            </div>
                        )}
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-16">
                    <h3 className="text-lg font-semibold mb-4 text-foreground">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <span key={tech} className="rounded-md bg-muted px-3 py-1 text-sm font-medium text-foreground border border-border">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Content & Highlights */}
                <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
                    <div className="mx-auto max-w-none w-full">
                        {project.content ? (
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-12 mb-6 text-foreground" {...props} />,
                                    h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground border-b border-border pb-2" {...props} />,
                                    h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-8 mb-3 text-foreground" {...props} />,
                                    p: ({ node, ...props }) => <p className="mb-6 text-lg leading-relaxed text-muted-foreground" {...props} />,
                                    ul: ({ node, ...props }) => <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-muted-foreground" {...props} />,
                                    ol: ({ node, ...props }) => <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-muted-foreground" {...props} />,
                                    li: ({ node, ...props }) => <li className="pl-2" {...props} />,
                                    blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-xl text-muted-foreground bg-muted/30 py-4 rounded-r-lg" {...props} />,
                                    a: ({ node, ...props }) => <a className="text-primary hover:underline font-medium underline-offset-4" target="_blank" rel="noopener noreferrer" {...props} />,
                                    code: ({ node, inline, className, children, ...props }: any) => {
                                        return !inline ? (
                                            <div className="relative my-8 rounded-lg bg-card border border-border p-6 overflow-x-auto shadow-sm">
                                                <code className={`${className} text-sm font-mono text-foreground`} {...props}>
                                                    {children}
                                                </code>
                                            </div>
                                        ) : (
                                            <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary font-semibold" {...props}>
                                                {children}
                                            </code>
                                        )
                                    },
                                }}
                            >
                                {project.content}
                            </ReactMarkdown>
                        ) : (
                            <div className="text-center py-12 text-muted-foreground italic border border-dashed border-border rounded-xl">
                                Detailed case study coming soon...
                            </div>
                        )}
                    </div>

                    {/* Sidebar / Highlights */}
                    <div className="space-y-8">
                        {project.highlights && (
                            <div className="rounded-xl border border-border bg-card p-6 shadow-sm sticky top-24">
                                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    Key Highlights
                                </h3>
                                <ul className="space-y-4">
                                    {project.highlights.map((highlight, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                                            <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </article>
        </main>
    );
}
