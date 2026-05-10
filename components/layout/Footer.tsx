"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import {
  Phone,
  MapPin,
  Mail,
  MessageCircle,
  ArrowRight,
  Heart,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative mt-20 bg-[#022c22] text-slate-200 border-t border-emerald-500/20">
      {/* Subtle Glow Top Bar */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-emerald-500/40 to-transparent" />

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-12 grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-12"
        >
          {/* 1. Brand Section */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 space-y-4"
          >
            <Link href="/" className="inline-block group">
              <h2 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight">
                Rajat King<span className="text-emerald-500">.</span>
              </h2>
            </Link>
            <p className="text-slate-300/80 text-sm leading-relaxed max-w-xs">
              Pioneering the movement for chemical-free, nutrient-dense food
              products sourced directly from nature’s lap.
            </p>
          </motion.div>

          {/* 2. Links Section (2x2 on Mobile for Compactness) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-5 grid grid-cols-2 gap-8"
          >
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-500">
                Explore
              </h4>
              <ul className="space-y-3">
                <FooterLink href="#home">Home</FooterLink>
                <FooterLink href="#products">Our Products</FooterLink>
                <FooterLink href="#about">Our Story</FooterLink>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-500">
                Support
              </h4>
              <ul className="space-y-3">
                <FooterLink href="/contact">Contact</FooterLink>
              </ul>
            </div>
          </motion.div>

          {/* 3. Contact Section */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-3 space-y-6"
          >
            <div className="space-y-3 text-sm">
              <ContactItem icon={<Phone size={14} />} text="+91 76520 93533" />
              <ContactItem
                icon={<Mail size={14} />}
                text="rkv16790@gmail.com"
              />
              <ContactItem
                icon={<MapPin size={14} />}
                text="Varanasi, UP, India"
              />
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/917652093533"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-xl shadow-emerald-900/40 border border-emerald-400/20"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] font-medium text-slate-300 tracking-normal">
          {/* Copyright Text - High Contrast */}
          <p className="text-center md:text-left leading-relaxed">
            © {currentYear}{" "}
            <span className="text-emerald-400 font-bold tracking-tight">
              RAJAT KING
            </span>
            <span className="mx-1 text-slate-500">|</span>
            FOOD PRODUCTS RASHMI ENTERPRISES PVT LTD.
          </p>

          {/* Enhanced Heart Section - Perfectly Readable */}
          <div className="flex items-center gap-3 group cursor-default bg-white/5 px-4 py-1.5 rounded-full border border-white/5 shadow-inner">
            <span className="text-slate-200">Made with</span>

            <div className="relative flex items-center justify-center w-5 h-5">
              {/* 1. The Ripple Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.8, 2],
                  opacity: [0.4, 0.2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute"
              >
                <Heart
                  size={16}
                  fill="currentColor"
                  className="text-red-500/30"
                />
              </motion.div>

              {/* 2. The Main Beating Heart */}
              <motion.div
                animate={{
                  scale: [1, 1.25, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <Heart
                  size={16}
                  fill="currentColor"
                  className="text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.6)] group-hover:text-red-400 transition-colors"
                />
              </motion.div>
            </div>

            <span className="text-slate-200 uppercase tracking-widest text-[11px] font-bold">
              India
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

// Sub-components for better maintainability and cleaner code
function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-slate-400 hover:text-white transition-all duration-300 text-[14px] flex items-center group"
      >
        <ArrowRight
          size={12}
          className="mr-0 w-0 opacity-0 group-hover:w-4 group-hover:mr-2 group-hover:opacity-100 transition-all text-emerald-500"
        />
        {children}
      </Link>
    </li>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 text-slate-300 group cursor-default">
      <span className="text-emerald-500 bg-emerald-500/10 p-1.5 rounded-md group-hover:bg-emerald-500 group-hover:text-white transition-colors">
        {icon}
      </span>
      <span className="group-hover:text-white transition-colors">{text}</span>
    </div>
  );
}
