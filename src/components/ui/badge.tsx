"use client";

import * as React from "react";
import { cn } from "@/src/lib/cn";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "success" | "outline";
}

export default function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-(--accent) text-(--bg)",
    secondary: "bg-(--surface) text-(--text) border border-(--accent)/20",
    success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    outline: "border border-(--accent)/30 text-(--accent) bg-transparent",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-mono font-semibold",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
