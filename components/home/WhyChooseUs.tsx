"use client";

import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import { Leaf, ShieldCheck, HeartPulse, Star } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    desc: "No chemicals or artificial additives, just pure ingredients.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    desc: "Carefully processed and packed with hygiene standards.",
  },
  {
    icon: HeartPulse,
    title: "Healthy Living",
    desc: "Designed to support your daily nutrition and wellness.",
  },
  {
    icon: Star,
    title: "Trusted Locally",
    desc: "Loved by families for consistent taste and quality.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="about"
      className="relative py-8 m:py-10 lg:py-12 overflow-hidden"
    >
      {/*  Background depth */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-87.5 h-87.5 bg-green-100 blur-3xl opacity-30 rounded-full"></div>
      </div>

      <Container>
        {/* 🧠 HEADING (improved hierarchy) */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm text-primary font-medium mb-2">
            Why Choose Us
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Trusted Quality You <br className="hidden sm:block" />
            Can Rely On
          </h2>

          <p className="text-muted mt-3 text-sm sm:text-base">
            We combine purity, quality and tradition to bring
            you the best natural food products.
          </p>
        </div>

        {/* 🧱 GRID */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 lg:mt-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {features.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white p-5 sm:p-6 rounded-2xl border overflow-hidden"
              >
                {/*  subtle hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute inset-0 bg-linear-to-br from-green-100/40 to-transparent blur-2xl"></div>
                </div>

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-primary mb-4 transition group-hover:scale-110">
                  <Icon size={20} />
                </div>

                {/* Title */}
                <h3 className="relative z-10 font-semibold text-base sm:text-lg">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="relative z-10 text-sm text-muted mt-2">
                  {item.desc}
                </p>

                {/*  border highlight */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-green-200 transition"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}