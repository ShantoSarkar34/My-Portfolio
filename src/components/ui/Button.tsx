"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
  className?: string;
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  download,
  className,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-colors";
  const variants =
    variant === "primary"
      ? "bg-[var(--accent)] text-[var(--bg)] hover:bg-[var(--accent-warm)]"
      : "border border-[var(--muted)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]";

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      download={download}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants} ${className ?? ""}`}
    >
      {children}
    </Component>
  );
}
