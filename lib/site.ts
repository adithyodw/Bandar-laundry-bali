function normalizeSiteUrl(url: string): string {
  return url.replace(/\/$/, "");
}

const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();

/**
 * Canonical origin for metadata, sitemap, robots, JSON-LD, and OG URLs.
 *
 * In Vercel → Project → Settings → Environment Variables, set:
 * `NEXT_PUBLIC_SITE_URL=https://bandarlaundryexpress.com` (your primary domain)
 * so Google and social previews consolidate on one URL. Redeploy after changing.
 */
export const SITE_URL = normalizeSiteUrl(
  fromEnv && fromEnv.length > 0
    ? fromEnv
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://bandar-laundry-bali.vercel.app"
);

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

export const LOGO_ABSOLUTE = absoluteUrl("/logo-hd.png");
export const DEFAULT_OG_IMAGE = absoluteUrl("/stores/10.jpeg");
