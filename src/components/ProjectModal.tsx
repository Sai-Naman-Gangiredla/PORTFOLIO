"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Props {
  screenshots: string[];
  title: string;
}

export default function ProjectModal({ screenshots, title }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const open = (index: number) => setActiveIndex(index);
  const close = () => setActiveIndex(null);

  const next = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev! + 1) % screenshots.length);
  }, [activeIndex, screenshots.length]);

  const prev = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((prev) => (prev! - 1 + screenshots.length) % screenshots.length);
  }, [activeIndex, screenshots.length]);

  // Close on ESC, navigate with arrow keys
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  // Mobile Swipe
  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStartX(e.touches[0].clientX);

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;

    if (diff > 80) prev(); // swipe right
    else if (diff < -80) next(); // swipe left

    setTouchStartX(null);
  };

  return (
    <>
      {/* Grid of screenshots */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {screenshots.map((src, i) => (
          <div
            key={i}
            className="relative aspect-video rounded-lg cursor-pointer overflow-hidden group"
            onClick={() => open(i)}
          >
            <Image
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              fill
              className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Viewer */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            {/* Prevent closing when clicking on image */}
            <div
              className="relative w-full max-w-4xl mx-auto select-none"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={close}
                className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition"
              >
                <X size={24} />
              </button>

              {/* PREV BUTTON */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-black/50 hover:bg-black/70 transition"
              >
                <ChevronLeft size={28} />
              </button>

              {/* NEXT BUTTON */}
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-black/50 hover:bg-black/70 transition"
              >
                <ChevronRight size={28} />
              </button>

              {/* IMAGE */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="relative w-full aspect-video"
              >
                <Image
                  src={screenshots[activeIndex]}
                  alt={`${title} screenshot`}
                  fill
                  className="object-contain rounded-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
