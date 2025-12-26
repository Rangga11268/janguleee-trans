"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-[#09090b] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden group">
          {/* Background Gradient/Glow */}
          <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-full h-full bg-gradient-to-b from-[#008D85]/20 to-transparent opacity-50 blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter mb-8">
              READY TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                JOURNEY?
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-lg mx-auto leading-relaxed">
              Don't just travel. Experience the premium standard of tourism
              transport with Janguleee.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#008D85] text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-[#008D85]/20 group/btn"
              >
                Book Your Trip
                <ArrowRight
                  size={20}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </Link>

              <a
                href="https://wa.me/628131573731"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all backdrop-blur-md"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
