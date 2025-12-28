import React, { useEffect, useState } from "react";

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

interface Article {
    title: string;
    source: { name: string };
    url: string;
    urlToImage?: string;
    publishedAt: string;
}

export default function NewsWidget() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const url = NEWS_API_KEY
                    ? `https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=4&apiKey=${NEWS_API_KEY}`
                    : `https://api.spaceflightnewsapi.net/v4/articles/?limit=4`;

                const res = await fetch(url);
                const data = await res.json();

                if (NEWS_API_KEY && data.articles) {
                    setArticles(data.articles);
                } else if (!NEWS_API_KEY && data.results) {
                    const adapted = data.results.map((item: any) => ({
                        title: item.title,
                        source: { name: item.news_site || "Tech News" },
                        url: item.url,
                        urlToImage: item.image_url,
                        publishedAt: item.published_at
                    }));
                    setArticles(adapted);
                }
            } catch (err) {
                console.error("Failed to fetch news:", err);
            }
            setLoading(false);
        };

        fetchNews();
    }, []);

    return (
        <div className="w-72 sm:w-80 group">
            <div className="bg-white/10 dark:bg-black/20 backdrop-blur-3xl border border-white/20 dark:border-white/10 rounded-[2.5rem] p-5 shadow-2xl transition-all hover:bg-white/15 dark:hover:bg-black/30">
                <div className="flex justify-between items-center mb-4 px-1">
                    <div className="flex items-center space-x-2">
                        <div className="size-5 bg-red-500 rounded-md flex-center shadow-lg shadow-red-500/20">
                            <span className="i-bi:newspaper text-[10px] text-white" />
                        </div>
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.1em] opacity-50 dark:text-white">News</h3>
                    </div>
                    <span className="text-[10px] font-medium opacity-40 dark:text-white uppercase tracking-tighter">Tech Headlines</span>
                </div>

                {loading ? (
                    <div className="space-y-4 animate-pulse">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex space-x-3">
                                <div className="flex-1 space-y-2">
                                    <div className="h-3 bg-white/10 rounded w-full" />
                                    <div className="h-3 bg-white/10 rounded w-2/3" />
                                </div>
                                <div className="size-12 bg-white/10 rounded-xl" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-5">
                        {articles.map((article, idx) => (
                            <a
                                key={idx}
                                href={article.url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex space-x-3 group/item cursor-default"
                            >
                                <div className="flex-1 min-w-0">
                                    <div className="text-[12px] font-bold leading-[1.3] text-gray-900 dark:text-gray-100 line-clamp-2 group-hover/item:text-blue-500 transition-colors">
                                        {article.title}
                                    </div>
                                    <div className="mt-1 flex items-center space-x-2 text-[10px] font-medium opacity-40 dark:text-white uppercase tracking-tight">
                                        <span>{article.source.name}</span>
                                        <span className="size-0.5 bg-current rounded-full" />
                                        <span>{new Date(article.publishedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
                                    </div>
                                </div>
                                {article.urlToImage && (
                                    <div className="size-14 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm border border-black/5 bg-gray-200/20">
                                        <img
                                            src={article.urlToImage}
                                            className="size-full object-cover group-hover/item:scale-110 transition-transform duration-500"
                                            alt=""
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).parentElement?.remove();
                                            }}
                                        />
                                    </div>
                                )}
                            </a>
                        ))}
                    </div>
                )}

                <div className="mt-5 pt-4 border-t border-white/10 flex justify-center">
                    <button className="text-[10px] font-bold text-blue-500 hover:text-blue-400 transition-colors uppercase tracking-widest">
                        Show More
                    </button>
                </div>
            </div>
        </div>
    );
}
