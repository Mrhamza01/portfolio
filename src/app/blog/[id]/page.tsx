import { blogPosts } from '@/constants/blog';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Generate static params for all blog posts
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id,
    }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params;
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | Hamza Ghafoor`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.publishDate,
            authors: [post.author],
            tags: post.tags,
        },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background pt-24 pb-20">
            <article className="container mx-auto max-w-4xl px-4">
                {/* Back Button */}
                <Link
                    href="/#blog"
                    className="mb-8 inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Blog
                </Link>

                {/* Header */}
                <header className="mb-12 text-center">
                    <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                        <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.publishDate}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                    </div>
                </header>

                {/* Cover Image */}
                {post.coverImage && (
                    <div className="mb-12 overflow-hidden rounded-2xl border border-border bg-muted shadow-2xl">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="h-full w-full object-cover"
                        />
                    </div>
                )}

                {/* Content */}
                <div className="mx-auto max-w-none">
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
                            table: ({ node, ...props }) => <div className="overflow-x-auto my-8 rounded-lg border border-border"><table className="w-full text-left text-sm" {...props} /></div>,
                            thead: ({ node, ...props }) => <thead className="bg-muted text-foreground" {...props} />,
                            tbody: ({ node, ...props }) => <tbody className="divide-y divide-border bg-card" {...props} />,
                            tr: ({ node, ...props }) => <tr className="hover:bg-muted/50 transition-colors" {...props} />,
                            th: ({ node, ...props }) => <th className="px-6 py-4 font-semibold" {...props} />,
                            td: ({ node, ...props }) => <td className="px-6 py-4 text-muted-foreground" {...props} />,
                            hr: ({ node, ...props }) => <hr className="my-12 border-border" {...props} />,
                        }}
                    >
                        {post.content || ''}
                    </ReactMarkdown>
                </div>

                {/* Tags */}
                <div className="mt-12 border-t border-border pt-8">
                    <h4 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Tags
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-md bg-muted px-3 py-1 text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </main>
    );
}
