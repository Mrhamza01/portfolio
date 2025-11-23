import { MetadataRoute } from 'next';
import { blogPosts } from '@/constants/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://hamzaghafoor.vercel.app';

    const blogUrls = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.id}`,
        lastModified: new Date(post.publishDate),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...blogUrls,
    ];
}
