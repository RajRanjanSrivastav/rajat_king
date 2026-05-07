"use client";

import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import Container from "@/components/common/Container";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-8 sm:py-10 lg:py-12 overflow-hidden"
    >
      <Container>
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm text-primary font-medium mb-2">Get In Touch</p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Have questions? <br className="hidden sm:block" />
            We’re here to help.
          </h2>
        </div>

        {/* INTERACTIVE GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-12 gap-8"
        >
          {/* LEFT: INFO CARDS (7 Columns) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 mt-12 lg:mt-16">
            <InfoCard
              icon={<Phone className="text-green-600" size={24} />}
              title="Call Us"
              detail="+91 76520 93533"
              subDetail="Always at your service"
              href="tel:+917652093533"
            />
            <InfoCard
              icon={<Mail className="text-green-600" size={24} />}
              title="Email Us"
              detail="rkv16790@gmail.com"
              subDetail="Expect a reply in 24h"
              href="mailto:rkv16790@gmail.com"
            />
            <InfoCard
              icon={<MapPin className="text-green-600" size={24} />}
              title="Our Location"
              detail="Varanasi, UP"
              subDetail="India, 221001"
            />
            <InfoCard
              icon={<Clock className="text-green-600" size={24} />}
              title="Operating Hours"
              detail="9:00 AM - 7:00 PM"
              subDetail="Available on WhatsApp 24/7"
            />
          </div>

          {/* RIGHT: PREMIUM CTA CARD (5 Columns) */}
          <motion.div className="lg:col-span-5 relative group mt-12 lg:mt-16">
            <div className="absolute inset-0 bg-green-600 rounded-3xl rotate-2 group-hover:rotate-0 transition-transform duration-500 -z-10 opacity-10"></div>
            <div className="h-full bg-white border border-slate-100 p-8 md:p-10 rounded-3xl shadow-xl shadow-green-900/5 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="bg-green-100 p-4 rounded-2xl">
                    <MessageCircle className="text-green-600" size={32} />
                  </div>
                  {/* LIVE STATUS INDICATOR */}
                  <div className="flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider">
                      Online Now
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Quick Support
                </h3>
                <p className="text-slate-500 leading-relaxed mb-8">
                  Need help with your order or have a question about our natural
                  products? Chat with us directly on WhatsApp for an instant
                  response.
                </p>
              </div>

              <motion.a
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/917652093533"
                target="_blank"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg shadow-green-600/20 transition-all"
              >
                Start Conversation
                <ArrowUpRight size={20} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

/* --- HELPER COMPONENT --- */

function InfoCard({
  icon,
  title,
  detail,
  subDetail,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
  subDetail: string;
  href?: string;
}) {
  const Content = (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/50 backdrop-blur-sm border border-slate-100 p-6 rounded-2xl hover:border-green-200 hover:shadow-md transition-all group"
    >
      <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
        {title}
      </h4>
      <p className="text-slate-900 font-bold text-lg mb-1">{detail}</p>
      <p className="text-slate-500 text-sm">{subDetail}</p>
    </motion.div>
  );

  return href ? (
    <a href={href} className="block">
      {Content}
    </a>
  ) : (
    Content
  );
}
