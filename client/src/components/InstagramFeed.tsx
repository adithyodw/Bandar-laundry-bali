import { useEffect, useMemo, useState } from "react";

type InstagramPost = {
  id: string;
  permalink: string;
  thumbnailUrl: string;
  caption: string;
};

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();

    async function loadPosts() {
      try {
        const response = await fetch("/api/instagram", { signal: controller.signal });
        if (!response.ok) throw new Error("Instagram API request failed");
        const data = (await response.json()) as { posts?: InstagramPost[] };
        if (mounted) setPosts(Array.isArray(data.posts) ? data.posts : []);
      } catch {
        if (mounted) setPosts([]);
      } finally {
        if (mounted) setIsLoading(false);
      }
    }

    loadPosts();
    return () => {
      mounted = false;
      controller.abort();
    };
  }, []);

  const visiblePosts = useMemo(() => posts.slice(0, 6), [posts]);

  return (
    <section id="instagram" className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="max-w-xl mb-14 reveal">
          <span className="section-label">Follow Us</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1B2A] leading-tight font-['Playfair_Display']">
            Latest from Instagram
            <br />
            <span className="italic">@bandarlaundryexpress</span>
          </h2>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="aspect-square bg-slate-100 animate-pulse rounded-md" />
            ))}
          </div>
        ) : visiblePosts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {visiblePosts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden rounded-md border border-slate-200 bg-slate-50 reveal"
                aria-label="Open Instagram post"
              >
                <img
                  src={post.thumbnailUrl}
                  alt={post.caption || "Instagram post from Bandar Laundry Express"}
                  loading="lazy"
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            ))}
          </div>
        ) : (
          <div className="rounded-md border border-slate-200 p-6 text-slate-600 reveal">
            Latest Instagram posts are temporarily unavailable.
          </div>
        )}

        <div className="mt-12 text-center reveal">
          <a
            href="https://www.instagram.com/bandarlaundryexpress/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-sm font-semibold text-[#1B3FA0] hover:text-[#F5A623] transition-colors font-['Inter'] tracking-wide"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            Follow us on Instagram for daily updates
          </a>
        </div>
      </div>
    </section>
  );
}
