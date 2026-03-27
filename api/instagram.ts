type InstagramPost = {
  id: string;
  shortcode: string;
  permalink: string;
  thumbnailUrl: string;
  caption: string;
};

const USERNAME = "bandarlaundryexpress";
const MAX_POSTS = 6;

function extractPostsFromHtml(html: string): InstagramPost[] {
  // Instagram page HTML includes JSON blobs; we extract shortcode + thumbnail + caption patterns.
  const postRegex =
    /"shortcode":"([^"]+)".*?"display_url":"([^"]+)".*?"edge_media_to_caption":\{"edges":\[(.*?)\]\}/g;
  const posts: InstagramPost[] = [];
  const seen = new Set<string>();

  let match: RegExpExecArray | null;
  while ((match = postRegex.exec(html)) !== null && posts.length < MAX_POSTS) {
    const shortcode = match[1];
    const thumbnailUrl = match[2].replace(/\\u0026/g, "&").replace(/\\\//g, "/");
    const captionBlock = match[3];
    const captionMatch = captionBlock.match(/"text":"([^"]*)"/);
    const caption = (captionMatch?.[1] ?? "").replace(/\\n/g, " ").replace(/\\"/g, '"');

    if (!shortcode || seen.has(shortcode)) {
      continue;
    }
    seen.add(shortcode);

    posts.push({
      id: shortcode,
      shortcode,
      permalink: `https://www.instagram.com/p/${shortcode}/`,
      thumbnailUrl,
      caption,
    });
  }

  return posts;
}

type ApiRequest = {
  method?: string;
};

type ApiResponse = {
  status: (code: number) => ApiResponse;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const response = await fetch(`https://www.instagram.com/${USERNAME}/`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml",
      },
    });

    if (!response.ok) {
      res.status(502).json({ error: "Failed to load Instagram profile page" });
      return;
    }

    const html = await response.text();
    const posts = extractPostsFromHtml(html);

    res.setHeader("Cache-Control", "s-maxage=900, stale-while-revalidate=3600");
    res.status(200).json({
      username: USERNAME,
      posts,
      fetchedAt: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      error: "Instagram fetch failed",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
