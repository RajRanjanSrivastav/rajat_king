"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/common/Container";
import { Crown } from "lucide-react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "Products", id: "products" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  // Scroll detection + active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "home";
      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop - 120;
          if (window.scrollY >= top) current = item.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // ESC close
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl border-b shadow-sm"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between py-4">
            {/* LOGO */}
            {/* <h1 className="text-lg sm:text-xl font-bold tracking-tight">
              <span className="text-primary">Rajat</span>{" "}
              <span className="text-black">King</span>
            </h1> */}
            <div className="flex items-center gap-1.5 cursor-pointer select-none group">
              {/* "Rajat" - Modern, Clean Sans */}
              <span className="text-xl font-light tracking-[0.15em] text-slate-900 uppercase">
                Rajat
              </span>

              {/* "King" - Bold, Authoritative Serif style with Crown */}
              <span className="relative flex items-center text-xl font-black tracking-tight text-emerald-950 uppercase">
                King
                {/* Refined Crown - Positioned as a "Trademark" accent */}
                <motion.div
                  initial={{ rotate: -10, y: 0 }}
                  whileHover={{ rotate: 0, y: -2, scale: 1.1 }}
                  className="absolute -top-3 -right-3"
                >
                  <Crown
                    size={14}
                    strokeWidth={2.5}
                    className="text-amber-500 fill-amber-500/10 drop-shadow-[0_2px_3px_rgba(245,158,11,0.3)]"
                  />
                </motion.div>
              </span>

              {/* Subtle Bottom Accent Line */}
              <div className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-emerald-600 transition-all duration-500 group-hover:w-full opacity-50" />
            </div>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="relative group"
                >
                  <span
                    className={`transition ${
                      active === item.id ? "text-primary" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </span>

                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-300 ${
                      active === item.id ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              ))}
            </nav>

            {/* CTA */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/917652093533"
              target="_blank"
              className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-xl text-sm font-medium text-white bg-linear-to-r from-green-500 to-green-600 shadow-md hover:shadow-lg"
            >
              Order Now
            </motion.a>

            {/* MOBILE BUTTON */}
            <button onClick={() => setOpen(true)} className="md:hidden">
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="block h-0.5 bg-black"></span>
                <span className="block h-0.5 bg-black"></span>
                <span className="block h-0.5 bg-black"></span>
              </div>
            </button>
          </div>
        </Container>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="fixed top-0 right-0 w-[80%] max-w-sm h-full bg-white z-50 shadow-xl p-6"
            >
              <button onClick={() => setOpen(false)} className="text-2xl mb-8">
                ✕
              </button>

              <div className="flex flex-col gap-6 text-lg font-medium">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`${
                      active === item.id ? "text-primary" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <a
                href="https://wa.me/917652093533"
                target="_blank"
                className="mt-10 inline-block w-full text-center bg-primary text-white py-3 rounded-xl font-medium"
              >
                Order Now
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
