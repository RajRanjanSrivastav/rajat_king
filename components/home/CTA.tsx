"use client";

import { motion } from "framer-motion";
import Container from "@/components/common/Container";

export default function CTA() {
  return (
    <section className="py-8 sm:py-10 lg:py-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl p-px"
        >
          {/*  BORDER GRADIENT (premium touch) */}
          <div className="absolute inset-0 bg-linear-to-r from-green-400 via-green-600 to-green-400 blur opacity-30"></div>

          {/*  MAIN CARD */}
          <div className="relative rounded-3xl bg-linear-to-br from-green-700 via-green-600 to-green-500 p-10 sm:p-12 lg:p-16 text-white text-center overflow-hidden">
            {/* ✨ LIGHT OVERLAY (glass effect) */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

            {/*  GLOW BLOBS */}
            <div className="absolute inset-0">
              <motion.div
                animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-20 -left-20 w-65 h-65 bg-white/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute -bottom-20 -right-20 w-65 h-65 bg-white/10 rounded-full blur-3xl"
              />
            </div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-2xl mx-auto">
              {/* HEADING */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Start Your{" "}
                <span className="text-green-100">Healthy Journey</span> Today
              </h2>

              {/* SUBTEXT */}
              <p className="mt-4 text-white/90 text-sm sm:text-base">
                Fresh, natural & chemical-free food products delivered directly
                to your home.
              </p>

              {/* CTA BUTTON */}
              <motion.a
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/917652093533"
                target="_blank"
                className="group inline-flex items-center justify-center mt-8 px-8 py-3 rounded-xl font-semibold text-green-700 bg-white shadow-lg hover:shadow-xl transition"
              >
                Order on WhatsApp
                <span className="ml-2 transition group-hover:translate-x-1">
                  →
                </span>
              </motion.a>

              {/* TRUST */}
              <p className="text-xs sm:text-sm mt-4 text-white/80">
                ✔ Fast response • ✔ Trusted locally • ✔ Fresh products
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
