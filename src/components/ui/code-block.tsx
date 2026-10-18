"use client";

import { motion } from "framer-motion";
import { FiCopy, FiCheck } from "react-icons/fi";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "text" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl border border-(--accent)/20 bg-gray-900/50 dark:bg-gray-900 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-(--accent)/10 bg-black/20">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <span className="ml-auto font-mono text-xs text-(--muted)">
          {language}
        </span>
        <button
          onClick={copyToClipboard}
          aria-label="Copy to clipboard"
          className="w-8 h-8 rounded flex items-center justify-center hover:bg-(--accent)/10 transition-colors"
        >
          {copied ? (
            <FiCheck className="w-4 h-4 text-green-400" />
          ) : (
            <FiCopy className="w-4 h-4 text-(--muted)" />
          )}
        </button>
      </div>
      <motion.div
        initial={{ maxHeight: 0, opacity: 0 }}
        animate={{ maxHeight: 500, opacity: 1 }}
        exit={{ maxHeight: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <pre className="p-4 font-mono text-xs text-(--muted) overflow-x-auto">
          <code>{code}</code>
        </pre>
      </motion.div>
    </div>
  );
}
