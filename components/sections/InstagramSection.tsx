"use client";

import { useEffect, useRef, useMemo, useState } from "react";
import { INSTAGRAM_URL } from "@/lib/data";

type InstagramPost = {
  id: string;
  permalink: string;
  thumbnailUrl: string;
  caption: string;
};

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4" aria-hidden="true">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="aspect-square skeleton rounded-sm" />
      ))}
    </div>
  );
}

export default function InstagramSection() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const sectionRef = useRef<HTMLElement>(null);

  // Only start fetching once the section enters the viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && status === "idle") {
          setStatus("loading");
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [status]);

  // Fetch once status transitions to loading
  useEffect(() => {
    if (status !== "loading") return;

    let mounted = true;
    const controller = new AbortController();

    async function loadPosts() {
      try {
        const response = await fetch("/api/instagram", {
          signal: controller.signal,
        });
        if (!response.ok) throw new Error("Failed");
        const data = (await response.json()) as { posts?: InstagramPost[] };
        if (mounted) {
          setPosts(Array.isArray(data.posts) ? data.posts : []);
          setStatus("done");
        }
      } catch {
        if (mounted) setStatus("error");
      }
    }

    loadPosts();
    return () => {
      mounted = false;
      controller.abort();
    };
  }, [status]);

  const visiblePosts = useMemo(() => posts.slice(0, 6), [posts]);

  return (
    <section ref={sectionRef} id="instagram" className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 md:mb-14 gap-4">
          <div>
            <span className="section-label">Follow Us</span>
            <h2
              className="font-bold text-[#0D1B2A] leading-tight"
              style={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: "clamp(1.75rem, 5vw, 3rem)",
              }}
            >
              Latest from Instagram
              <br />
              <span className="italic">@bandarlaundryexpress</span>
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-[#1B3FA0] hover:text-[#F5A623] transition-colors tracking-wide min-h-[44px]"
            aria-label="View all posts on Instagram"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            View all posts
          </a>
        </div>

        {/* Loading state */}
        {(status === "idle" || status === "loading") && <SkeletonGrid />}

        {/* Posts grid */}
        {status === "done" && visiblePosts.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {visiblePosts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-item group block rounded-sm overflow-hidden border border-slate-100"
                aria-label={post.caption || "View Instagram post"}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.thumbnailUrl}
                  alt={post.caption || "Bandar Laundry Express Instagram post"}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-square object-cover"
                  width={400}
                  height={400}
                />
              </a>
            ))}
          </div>
        )}

        {/* Error / fallback state */}
        {(status === "error" || (status === "done" && visiblePosts.length === 0)) && (
          <div className="rounded-sm border border-slate-200 p-8 md:p-10 text-center">
            <p className="text-slate-500 mb-5 text-base">
              Follow us on Instagram for daily updates from our laundry service across Bali.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              @bandarlaundryexpress
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
