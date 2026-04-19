"use client";

import type React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

// Framer Motion-only props — must be stripped before passing to plain HTML elements
const MOTION_ONLY = new Set([
  "initial", "animate", "exit", "whileInView", "whileHover", "whileTap",
  "whileFocus", "whileDrag", "viewport", "transition", "variants",
  "onAnimationStart", "onAnimationComplete", "onUpdate", "layout",
  "layoutId", "layoutDependency", "drag", "dragConstraints", "dragElastic",
  "dragMomentum", "dragTransition", "dragPropagation", "custom",
  "transformTemplate", "transformValues",
]);

function strip<T extends object>(props: Record<string, unknown>): T {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(props)) {
    if (!MOTION_ONLY.has(k)) out[k] = v;
  }
  return out as T;
}

/**
 * On iOS (reducedMotion="always"), renders plain HTML — zero Framer Motion
 * runtime, no IntersectionObservers, no WAAPI objects, no GPU layers.
 * On other platforms, delegates to the standard motion.* element.
 */
export function Div(props: Omit<HTMLMotionProps<"div">, "children"> & { children?: React.ReactNode }) {
  const { children, ...rest } = props;
  const reduced = useReducedMotion();
  if (reduced)
    return <div {...strip<React.HTMLAttributes<HTMLDivElement>>(rest as Record<string, unknown>)}>{children}</div>;
  return <motion.div {...(rest as HTMLMotionProps<"div">)}>{children}</motion.div>;
}

export function H1(props: Omit<HTMLMotionProps<"h1">, "children"> & { children?: React.ReactNode }) {
  const { children, ...rest } = props;
  const reduced = useReducedMotion();
  if (reduced)
    return <h1 {...strip<React.HTMLAttributes<HTMLHeadingElement>>(rest as Record<string, unknown>)}>{children}</h1>;
  return <motion.h1 {...(rest as HTMLMotionProps<"h1">)}>{children}</motion.h1>;
}

export function P(props: Omit<HTMLMotionProps<"p">, "children"> & { children?: React.ReactNode }) {
  const { children, ...rest } = props;
  const reduced = useReducedMotion();
  if (reduced)
    return <p {...strip<React.HTMLAttributes<HTMLParagraphElement>>(rest as Record<string, unknown>)}>{children}</p>;
  return <motion.p {...(rest as HTMLMotionProps<"p">)}>{children}</motion.p>;
}

export function Article(props: Omit<HTMLMotionProps<"article">, "children"> & { children?: React.ReactNode }) {
  const { children, ...rest } = props;
  const reduced = useReducedMotion();
  if (reduced)
    return <article {...strip<React.HTMLAttributes<HTMLElement>>(rest as Record<string, unknown>)}>{children}</article>;
  return <motion.article {...(rest as HTMLMotionProps<"article">)}>{children}</motion.article>;
}
