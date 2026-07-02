"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { profile } from "@/src/data/profile";
import ThemeToggle from "../ui/ThemeToggle";


const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.href.slice(1))
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Triggers when a section occupies the middle band of the viewport
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-(--surface)/70 border-(--accent)/30 dark:border-white/10"
          : "bg-(--bg)/40 border-(--accent)/30 dark:border-white/10"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-0 py-4">
        {/* Logo */}
        <a href="#home" className="font-mono text-lg font-bold text-(--text) shrink-0">
          <span className="text-(--accent)">&lt;</span>
          {profile.name.split(" ")[0]}
          <span className="text-(--accent)">/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative py-1 text-sm font-medium transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:origin-left after:bg-(--accent) after:transition-transform after:duration-300 ${
                    isActive
                      ? "text-(--accent) after:scale-x-100"
                      : "text-(--muted) hover:text-(--accent) after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right side: contact button + theme toggle + mobile menu */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-5 py-2 rounded-full bg-(--accent) text-(--bg) text-sm font-semibold transition-transform hover:scale-105"
          >
            Contact Me
          </a>
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-(--accent)/30 dark:border-white/10 text-(--text)"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden flex flex-col gap-1 px-6 pb-6 bg-(--surface)/95 backdrop-blur-md border-b border-(--accent)/20"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-sm font-medium transition-colors ${
                      isActive ? "text-(--accent)" : "text-(--muted) hover:text-(--accent)"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block mt-2 text-center py-3 rounded-full bg-(--accent) text-(--bg) text-sm font-semibold"
              >
                Contact Me
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}