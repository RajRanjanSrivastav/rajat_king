"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Container from "@/components/common/Container";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const containerRef = useRef(null);

  // Parallax for background depth based on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="w-full pt-32 pb-16 lg:pt-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT: BRAND STORY */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-green-200/50 text-green-800 text-sm font-medium mb-6 shadow-sm">
                🌿 Natural • Pure • Chemical-Free
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900">
                From Nature to <br />
                Your{" "}
                <span className="relative inline-block">
                  <span className="bg-linear-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
                    Kitchen
                  </span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-2 text-green-300/60"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 5 Q 50 0, 100 5"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                    />
                  </svg>
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-700/80 max-w-md mx-auto lg:mx-0 leading-relaxed font-medium">
                Premium Atta, Moringa Powder & traditional spices made with
                purity, care and authenticity.
              </p>

              {/* UPDATED CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
                {/* ✅ PRIMARY CTA */}
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  href="https://wa.me/917652093533"
                  target="_blank"
                  className="
                  group relative
                  px-7 py-3.5 rounded-xl
                  font-semibold text-white
                  
                  bg-green-600
                  shadow-sm
                  
                  flex items-center justify-center gap-2
                  
                  transition-all duration-200
                  hover:bg-green-700
                "
                >
                  {/* subtle top highlight (premium feel, zero lag) */}
                  <span className="absolute inset-0 rounded-xl bg-linear-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>

                  <svg
                    className="w-5 h-5 opacity-90 transition-transform duration-200 group-hover:translate-x-px"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771z" />
                  </svg>

                  <span className="relative">Order on WhatsApp</span>
                </motion.a>

                {/* ✅ SECONDARY CTA */}
                <motion.a
                  initial="initial"
                  whileHover="hover"
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  href="#products"
                  className="
                    group
                    px-7 py-3.5 rounded-xl
                    font-semibold
                    
                    text-gray-800
                    border border-gray-500
                    
                    flex items-center justify-center
                    
                    transition-all duration-200
                    hover:border-gray-400 hover:bg-gray-50
                  "
                >
                  <span className="flex items-center gap-2 transition-all duration-200 group-hover:translate-x-0.5">
                    View Products
                    <motion.span
                      variants={{
                        initial: { x: 0 },
                        hover: { x: 6 },
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                      className="flex items-center"
                    >
                      <ArrowRight className="w-4 h-4 opacity-80" />
                    </motion.span>
                  </span>
                </motion.a>
              </div>

              {/* ORIGINAL TRUST INDICATORS */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-gray-600 justify-center lg:justify-start border-t border-green-200/30 pt-8">
                <span className="flex items-center gap-1.5 text-green-800">
                  ✔ 100% Natural
                </span>
                <span className="flex items-center gap-1.5 text-green-800">
                  ✔ Hygienic Processing
                </span>
                <span className="flex items-center gap-1.5 text-green-800">
                  ✔ Trusted Locally
                </span>
              </div>
            </motion.div>

            {/* RIGHT: PRODUCT VISUAL */}
            <div className="relative mt-12 lg:mt-0 flex justify-center">
              {/* Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[110%] h-[110%] bg-radial from-green-200/40 to-transparent blur-3xl opacity-60"></div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-70 sm:max-w-95 md:max-w-120 lg:max-w-137.5"
              >
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  {/* IMAGE */}
                  <Image
                    src="/images/atta.png"
                    alt="Rajat King Atta Packaging"
                    width={550}
                    height={550}
                    className="w-full h-auto rounded-4xl sm:rounded-[2.5rem] lg:rounded-[3rem]
        shadow-[0_40px_80px_-15px_rgba(20,50,20,0.25)]"
                    priority
                  />

                  {/* 🌿 Organic Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="
          absolute 
          top-3 left-3

          /* 👇 Desktop floating outside */
          sm:top-5 sm:left-5
          lg:-translate-x-1/2 lg:-translate-y-1/2

          /* Styling */
          px-3 sm:px-4 lg:px-5
          py-1.5 sm:py-2 lg:py-3
          text-[10px] sm:text-xs lg:text-sm

          bg-slate-900/95 text-white font-semibold
          rounded-xl sm:rounded-2xl
          shadow-2xl border border-white/10
          backdrop-blur-md

          flex items-center gap-1 sm:gap-2
          whitespace-nowrap
          z-20
        "
                  >
                    <span className="text-sm sm:text-base">🌿</span>
                    <span>100% Organic</span>
                  </motion.div>

                  {/* ⭐ Local Favorite Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="
          absolute 
          bottom-3 right-3

          /* 👇 Desktop floating outside */
          sm:bottom-5 sm:right-5
          lg:translate-x-1/2 lg:translate-y-1/2

          /* Styling */
          px-3 sm:px-4 lg:px-5
          py-1.5 sm:py-2 lg:py-3
          text-[10px] sm:text-xs lg:text-sm

          bg-slate-900/95 text-white font-semibold
          rounded-xl sm:rounded-2xl
          shadow-2xl border border-white/10
          backdrop-blur-md

          flex items-center gap-1 sm:gap-2
          whitespace-nowrap
          z-20
        "
                  >
                    <span className="text-yellow-400 text-sm sm:text-base">
                      ⭐
                    </span>
                    <span>Local Favorite</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
