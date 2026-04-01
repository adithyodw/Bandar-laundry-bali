import { HERO_BG } from "./data";
import type { StoreGalleryImage } from "./store-gallery.types";
import { SYNCED_STORE_IMAGES } from "./store-gallery.synced";

export type { StoreGalleryImage } from "./store-gallery.types";

/** Brand showcase from CDN plus any images synced from `Photos of actual stores/`. */
const CDN_SHOWCASE: StoreGalleryImage[] = [
  {
    src: HERO_BG,
    caption: {
      id: "Jaringan gerai Bandar Laundry Express di Bali",
      en: "Bandar Laundry Express store network across Bali",
    },
  },
];

/** All synced location photos; CDN hero only when no local assets yet. */
export const ACTUAL_STORE_GALLERY: StoreGalleryImage[] =
  SYNCED_STORE_IMAGES.length > 0
    ? [...SYNCED_STORE_IMAGES]
    : [...CDN_SHOWCASE];
