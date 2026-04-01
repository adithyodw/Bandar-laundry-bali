/** Apple-style cubic bezier (smooth, minimal) */
export const appleEase = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

export const appleTransition = {
  duration: 0.75,
  ease: appleEase,
} as const;

export const appleTransitionFast = {
  duration: 0.55,
  ease: appleEase,
} as const;
