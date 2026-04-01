import { SHOWCASE_ABOUT_SLIDES } from "./data";
import { SYNCED_STORE_IMAGES } from "./store-gallery.synced";

/** Local filenames you can drop into `Photos of actual stores/` (then run `pnpm sync:stores`). */
const LOCAL_ABOUT_PATHS = [
  "/stores/10.jpeg",
  "/stores/15.jpeg",
  "/stores/17.jpeg",
  "/stores/18.jpeg",
] as const;

/**
 * About carousel sources: use your four real files when all are present after sync;
 * otherwise four distinct official CDN photos (never four copies of one image).
 */
export const ABOUT_DIGITAL_LAUNDRY_SLIDES: readonly { src: string }[] = (() => {
  const synced = new Set(SYNCED_STORE_IMAGES.map((s) => s.src));
  if (LOCAL_ABOUT_PATHS.every((p) => synced.has(p))) {
    return LOCAL_ABOUT_PATHS.map((src) => ({ src }));
  }
  return [...SHOWCASE_ABOUT_SLIDES];
})();

export type AboutSlide = (typeof ABOUT_DIGITAL_LAUNDRY_SLIDES)[number];
