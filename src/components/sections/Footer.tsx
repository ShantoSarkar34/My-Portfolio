"use client";

import { profile } from "@/src/data/profile";
import { motion } from "framer-motion";
import { FiArrowUp } from "react-icons/fi";
import SocialLinks from "../ui/SocialLinks";
import { socials } from "@/src/data/socials";


const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-(--accent)/20 bg-(--surface)">
      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-12 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Brand */}
          <div>
            <a href="#home" className="font-mono text-lg font-bold text-(--text)">
              <span className="text-(--accent)">&lt;</span>
              README.md
              <span className="text-(--accent)">/&gt;</span>
            </a>
            <p className="mt-3 text-sm text-(--muted) leading-relaxed max-w-xs">
              {profile.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-mono text-xs text-(--accent) mb-4"># quick-links</p>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-(--muted) hover:text-(--accent) transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials + contact */}
          <div>
            <p className="font-mono text-xs text-(--accent) mb-4"># connect</p>
            <SocialLinks socials={socials} />
            <a
              href={`mailto:${profile.email}`}
              className="block mt-4 text-sm text-(--muted) hover:text-(--accent) transition-colors break-all"
            >
              {profile.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 py-6 border-t border-(--accent)/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-(--muted) text-center sm:text-left">
            © {year} {profile.name}. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
            className="w-10 h-10 rounded-full border border-(--accent)/30 bg-(--bg) text-(--accent) flex items-center justify-center hover:border-(--accent) transition-colors"
          >
            <FiArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}