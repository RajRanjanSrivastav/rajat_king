"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function GlobalBackground() {
  const { scrollYProgress } = useScroll();

  // Gentle parallax: blobs move slightly as you scroll the page
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <>
      {/* 🌿 ENHANCED MESH GRADIENT BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Main soft green gradient wash */}
        <div className="absolute inset-0 bg-linear-to-br from-green-100/40 via-[#fbfcfa] to-emerald-100/40" />

        {/* Dynamic, pulsating gradient "blobs" for a "living" background */}
        <motion.div
          style={{ y: y1 }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-15%] left-[-10%] w-175 h-175 bg-green-200/40 blur-[140px] rounded-full"
        />

        <motion.div
          style={{ y: y2 }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[-10%] right-[-5%] w-150 h-150 bg-emerald-200/30 blur-[130px] rounded-full"
        />

        {/* Subtle Lime glow for variety */}
        <div className="absolute top-[20%] right-[10%] w-100 h-100 bg-lime-100/30 blur-[120px] rounded-full" />
      </div>
    </>
  );
}
