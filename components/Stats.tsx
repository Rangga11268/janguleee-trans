"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: "10+",
    label: "Years Experience",
    sub: "Since 2015",
  },
  {
    value: "50+",
    label: "Premium Units",
    sub: "Jetbus 5 Ready",
  },
  {
    value: "15k+",
    label: "Happy Travelers",
    sub: "Trusted Choice",
  },
  {
    value: "24/7",
    label: "Support Service",
    sub: "Always Available",
  },
];

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-[#09090b] text-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#008D85]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#008D85]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="text-center group"
            >
              <h3 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter group-hover:text-[#008D85] transition-colors duration-300">
                {stat.value}
              </h3>
              <p className="text-lg font-bold text-gray-400 mb-1">
                {stat.label}
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-[#008D85]">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
