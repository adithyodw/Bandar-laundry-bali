import { STORE_SHOWCASE_GALLERY } from "./data";
import type { StoreGalleryImage } from "./store-gallery.types";
import { SYNCED_STORE_IMAGES } from "./store-gallery.synced";

export type { StoreGalleryImage } from "./store-gallery.types";

/**
 * Franchise “Store network” grid: every image from `Photos of actual stores/`
 * after sync; until then, five distinct official CDN frames (not duplicates).
 */
export const ACTUAL_STORE_GALLERY: StoreGalleryImage[] =
  SYNCED_STORE_IMAGES.length > 0
    ? [...SYNCED_STORE_IMAGES]
    : [...STORE_SHOWCASE_GALLERY];
