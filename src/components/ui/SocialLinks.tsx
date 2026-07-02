"use client";

import { motion } from "framer-motion";
import { SocialLink } from "@/src/types";
import { getIcon } from "@/src/lib/utils";

export default function SocialLinks({
  socials,
  className,
}: {
  socials: SocialLink[];
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      {socials.map((social, i) => {
        const Icon = getIcon(social.icon);
        return (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            whileHover={{ y: -4, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-(--accent)/80 dark:border-(--accent)/20 bg-(--surface) text-lg text-(--muted) transition-colors duration-200 hover:border-(--accent) hover:text-(--accent) hover:bg-(--accent)/10"
          >
            {Icon && <Icon />}
          </motion.a>
        );
      })}
    </div>
  );
}