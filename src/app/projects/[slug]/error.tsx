"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ProjectDetailError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Project detail error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-6xl font-bold">⚠️</h1>
      <h2 className="text-2xl font-bold text-(--text)">Something went wrong</h2>
      <p className="text-(--muted) max-w-sm">
        We couldn't load this project details. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-(--accent) text-(--bg) px-6 py-3 font-medium hover:bg-(--accent-warm) transition-colors"
      >
        Try Again
      </button>
      <div className="mt-8">
        <Link
          href="/#projects"
          className="text-(--accent) font-mono text-sm hover:underline transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>
    </main>
  );
}
