"use client";

/**
 * MotionProvider — disables Framer Motion animations on iOS WebKit.
 *
 * Root cause of "Can't open this page" crash on iPhone:
 *   Each Framer Motion element with initial/animate/whileInView sets
 *   `will-change: transform, opacity`, which promotes it to a GPU
 *   compositor layer.  The page has ~50 motion elements across all
 *   sections.  50 compositor layers × 2-5 MB = 100-250 MB GPU memory
 *   on top of images and JS heap — well over iOS WebKit's per-tab limit.
 *
 * Fix:
 *   Set MotionConfig `reducedMotion: "always"` on iOS so Framer Motion
 *   renders all elements at their target values instantly (no animation,
 *   no RAF loop, no compositor layer promotion).
 *
 * Timing:
 *   We use a useState initializer that reads `window.__IOS_WEBKIT__` which
 *   is set by an inline <script> in <head> BEFORE React hydrates.  This
 *   means Framer Motion receives reducedMotion:"always" on the very first
 *   render on iOS — it never sees opacity:0 or translateY states.
 */

import { MotionConfig } from "framer-motion";
import { useState } from "react";

declare global {
  interface Window {
    __IOS_WEBKIT__?: boolean;
  }
}

export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // useState initializer runs synchronously on first render (client-side).
  // window.__IOS_WEBKIT__ is already set by the <head> script before React
  // hydrates, so this correctly reads `true` on iOS from the very start.
  const [reducedMotion] = useState<"always" | "user">(() => {
    if (typeof window !== "undefined" && window.__IOS_WEBKIT__) {
      return "always";
    }
    return "user";
  });

  return (
    <MotionConfig reducedMotion={reducedMotion}>{children}</MotionConfig>
  );
}
