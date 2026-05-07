"use client";

import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section
      id="products"
      className="relative py-8 sm:py-10 lg:py-12 overflow-hidden"
    >
      <Container>
        {/* 🧠 HEADING (improved hierarchy) */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm text-primary font-medium mb-2">
            Our Products
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Pure & Natural <br className="hidden sm:block" />
            Food Collection
          </h2>

          <p className="text-muted mt-3 text-sm sm:text-base">
            Carefully crafted natural products designed to support
            your healthy lifestyle.
          </p>
        </div>

        {/* 🧱 GRID (responsive + premium spacing) */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 lg:mt-16"
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
          {products.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <ProductCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}