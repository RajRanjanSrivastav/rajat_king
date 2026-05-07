"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  title: string;
  image: string;
  desc: string;
};

export default function ProductCard({ title, image, desc }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group relative bg-white rounded-2xl border p-4 sm:p-5 overflow-hidden"
    >
      {/*  Soft Gradient Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute inset-0 bg-linear-to-br from-green-100/40 to-transparent blur-2xl" />
      </div>

      {/* 🖼 IMAGE */}
      <div className="relative overflow-hidden rounded-xl bg-gray-50">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="w-full h-55 sm:h-60 object-contain p-4 transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* 📦 CONTENT */}
      <div className="mt-4 sm:mt-5 relative z-10 flex flex-col h-full">

        {/* Title */}
        <h3 className="text-base sm:text-lg font-semibold tracking-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted mt-2 line-clamp-2">
          {desc}
        </p>

        {/* CTA */}
        <div className="mt-4">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="https://wa.me/917652093533"
            target="_blank"
            className="inline-flex items-center justify-center w-full bg-primary text-white px-4 py-2.5 rounded-xl text-sm font-medium shadow-sm hover:shadow-md transition"
          >
            Order Now
          </motion.a>
        </div>

      </div>

      {/*  Border Highlight on Hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-green-200 transition"></div>
    </motion.div>
  );
}