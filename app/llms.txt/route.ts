import {
  blogPageSlugs,
  locationPageSlugs,
  servicePageSlugs,
} from "@/lib/seo-routes";
import { SITE_URL } from "@/lib/site";

/**
 * Machine-readable site summary for AI crawlers that request /llms.txt
 * (optional convention; does not replace good content or backlinks).
 */
export function GET() {
  const base = SITE_URL;
  const lines = [
    "# Bandar Laundry Express",
    "",
    "> Express laundry in Bali (~90 minutes), wash & fold, ironing, commercial laundry for hotels and villas. Multiple branches across Denpasar and Badung (Kuta, Seminyak, Canggu, Ubud, Jimbaran, Sanur, Nusa Dua, and more).",
    "",
    "## Canonical site",
    base,
    "",
    "## Main pages",
    `${base}/`,
    `${base}/laundry-bali`,
    `${base}/faq-laundry-bali`,
    `${base}/franchise`,
    "",
    "## Location pages",
    ...locationPageSlugs.map((s) => `${base}/${s}`),
    "",
    "## Service pages",
    ...servicePageSlugs.map((s) => `${base}/${s}`),
    "",
    "## Guides / blog-style pages",
    ...blogPageSlugs.map((s) => `${base}/${s}`),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
