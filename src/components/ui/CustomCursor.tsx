"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
          target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          target.closest("a, button") !== null
      );
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isVisible]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-9999 hidden md:flex items-center justify-center"
      animate={{
        x: position.x - 10,
        y: position.y - 5,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.3 }}
    >
      <AnimatePresence mode="wait">
        {isPointer ? (
          <motion.div
            key="ring"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-5 h-5 rounded-full border border-(--accent) mix-blend-difference"
          />
        ) : (
          <motion.div
            key="pipe"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-0.5 h-5 bg-(--accent) mix-blend-difference"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}