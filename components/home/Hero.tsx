"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Container from "@/components/common/Container";
import { useRef } from "react";

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
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/917652093533"
                  target="_blank"
                  className="bg-green-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-green-200/50 flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.778-1.203.824-.312.041-.722.066-1.15-.074-.27-.089-.623-.217-1.077-.417-1.926-.851-3.183-2.825-3.279-2.954-.096-.129-.783-.967-.783-1.847 0-.88.461-1.312.626-1.488.164-.177.362-.221.48-.221.118 0 .237 0 .341.005.107.005.249-.04.389.299.144.35.492 1.199.534 1.288.042.089.07.192.011.31-.06.12-.089.192-.178.296-.089.104-.187.232-.267.31-.089.088-.182.184-.078.362.104.178.462.763.992 1.234.684.608 1.26.798 1.438.887.178.089.282.074.387-.044.104-.118.445-.517.564-.694.12-.178.238-.148.4-.089.164.059 1.04.489 1.219.578.178.089.297.133.341.207.044.074.044.43-.101.835z" />
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 21.162c-5.052 0-9.162-4.11-9.162-9.162s4.11-9.162 9.162-9.162 9.162 4.11 9.162 9.162-4.11 9.162-9.162 9.162z" />
                  </svg>
                  Order on WhatsApp
                </motion.a>

                <a
                  href="#products"
                  className="px-8 py-4 rounded-2xl border-2 border-gray-300/50 text-gray-700 font-bold hover:bg-white/80 transition-all flex items-center justify-center backdrop-blur-sm"
                >
                  View Products
                </a>
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
            <div className="relative mt-12 lg:mt-0">
              {/* Soft Radial Glow specifically under the product */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-radial from-green-200/40 to-transparent blur-3xl opacity-60"></div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
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
                  <Image
                    src="/images/atta.png"
                    alt="Rajat King Atta Packaging"
                    width={550}
                    height={550}
                    className="rounded-[3rem] shadow-[0_40px_80px_-15px_rgba(20,50,20,0.25)] w-75 sm:w-95 lg:w-115 mx-auto relative z-10"
                    priority
                  />

                  {/* 🌿 100% Organic Badge - High Contrast */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-10 -left-6 sm:-left-10 bg-slate-900/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-2xl border border-white/10 text-sm font-bold text-white z-20 flex items-center gap-2"
                  >
                    <span className="text-lg">🌿</span>
                    <span>100% Organic</span>
                  </motion.div>

                  {/* ⭐ Local Favorite Badge - High Contrast */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="absolute bottom-10 -right-6 sm:-right-10 bg-slate-900/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-2xl border border-white/10 text-sm font-bold text-white z-20 flex items-center gap-2"
                  >
                    <span className="text-lg text-yellow-400">⭐</span>
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
