"use client";

/**
 * MotionProvider — disables Framer Motion animations on iOS WebKit.
 *
 * The `reducedMotion` prop is determined server-side from the User-Agent
 * header in layout.tsx, so SSR and client hydration always agree on the
 * value. This eliminates the hydration mismatch that previously caused
 * React to discard the server HTML and do a full recovery re-render — a
 * burst of Framer Motion GPU compositor layer allocation that exceeded the
 * iOS WebKit per-tab memory limit and crashed the renderer tab.
 */

import { MotionConfig } from "framer-motion";

export default function MotionProvider({
  children,
  reducedMotion = "user",
}: {
  children: React.ReactNode;
  reducedMotion?: "always" | "user" | "never";
}) {
  return (
    <MotionConfig reducedMotion={reducedMotion}>{children}</MotionConfig>
  );
}
