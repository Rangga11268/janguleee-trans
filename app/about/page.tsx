"use client";

import AboutComponent from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Target, Flag, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen pt-24">
      <Navbar />

      <AboutComponent />

      <section className="py-24 bg-brand-slate relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tighter"
            >
              VISION & <span className="text-brand-primary">MISSION</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Visi Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-white rounded-[2.5rem] p-10 shadow-xl shadow-black/5 hover:shadow-2xl transition-all duration-500 overflow-hidden border border-black/5"
            >
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-4 bg-brand-slate rounded-2xl text-black group-hover:bg-[#008D85] group-hover:text-white transition-all duration-500">
                  <Target
                    size={32}
                    className="group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-3xl font-bold text-black group-hover:text-[#008D85] transition-colors">
                  Our Vision
                </h3>
              </div>

              <p className="text-gray-500 text-xl leading-relaxed relative z-10 font-medium group-hover:text-black transition-colors">
                To be the #1 premium transport service in West Java,
                prioritizing
                <span className="text-brand-primary font-bold"> safety</span>,
                <span className="text-brand-primary font-bold"> comfort</span>,
                and
                <span className="text-brand-primary font-bold"> style</span>.
              </p>
            </motion.div>

            {/* Misi Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative bg-white rounded-[2.5rem] p-10 shadow-xl shadow-black/5 hover:shadow-2xl transition-all duration-500 overflow-hidden border border-black/5"
            >
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="p-4 bg-brand-slate rounded-2xl text-black group-hover:bg-[#008D85] group-hover:text-white transition-all duration-500">
                  <Flag
                    size={32}
                    className="group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-3xl font-bold text-black group-hover:text-[#008D85] transition-colors">
                  Our Mission
                </h3>
              </div>

              <ul className="space-y-4 relative z-10">
                {[
                  "Provide the newest fleet (Jetbus 5).",
                  "Ensure 100% safety maintenance.",
                  "Deliver 5-star hospitality service.",
                  "Make every trip unforgettable.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-500 font-medium group-hover:text-black transition-colors"
                  >
                    <CheckCircle
                      size={20}
                      className="text-brand-primary shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
