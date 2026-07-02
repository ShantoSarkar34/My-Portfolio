"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { profile } from "@/src/data/profile";
import SocialLinks from "../ui/SocialLinks";
import { socials } from "@/src/data/socials";
import Button from "../ui/Button";

function useTypewriter(
  words: string[],
  typingSpeed = 90,
  deletingSpeed = 50,
  pauseTime = 1500,
) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => prev + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            isDeleting
              ? currentWord.slice(0, prev.length - 1)
              : currentWord.slice(0, prev.length + 1),
          );
        },
        isDeleting ? deletingSpeed : typingSpeed,
      );
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return text;
}

export default function Hero() {
  const typedText = useTypewriter(profile.designations);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-12 pt-24"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-12 w-full">
        {/* Left: text content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-sm text-[(--accent)] mb-4"
          >
            ~/shanto-sarkar $ whoami
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 h-8 font-mono text-lg md:text-xl text-[(--muted)]"
          >
            {typedText}
            <span className="inline-block w-0.5 h-5 bg-[(--accent)] ml-1 animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base md:text-lg text-[(--muted)] max-w-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <Button href={profile.resumeUrl} download variant="primary">
              Download Resume <FiDownload />
            </Button>
            <Button href="#projects" variant="secondary">
              View Work <FiArrowRight />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10"
          >
            <SocialLinks socials={socials} />
          </motion.div>
        </div>

        {/* Right: photo as code editor window */}
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto md:mx-0 w-72 md:w-80"
        >
          {/* Offset dashed frame behind — depth accent */}
          <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-dashed border-(--accent)/40 dark:border-(--accent)/30" />

          {/* Editor window */}
          <div className="relative rounded-2xl overflow-hidden border border-(--accent) dark:border-(--accent)/20 bg-(--surface) shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)]">
            {/* Window title bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/50 bg-black/20">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <span className="font-mono text-xs text-(--muted)">
                shanto.tsx
              </span>
            </div>

            {/* Photo */}
            <div className="relative w-full aspect-310/355">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                priority
                className="object-cover object-top"
              />
            </div>

            {/* Status footer */}
            {profile.availableForWork && (
              <div className="flex items-center gap-2 px-4 py-3 border-t border-white/10 bg-black/20 font-mono text-xs text-gray-700 dark:text-(--muted)">
                <span className="relative flex w-2 h-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--accent) opacity-75" />
                  <span className="relative inline-flex rounded-full w-2 h-2 bg-(--accent)" />
                </span>
                Available for work
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
