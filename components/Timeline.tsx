"use client";

import { motion } from "framer-motion";
import { Bus, Shield, Crown, Trophy, MapPin, Sparkles } from "lucide-react";

const milestones = [
  {
    year: "2015",
    title: "The Beginning",
    description:
      "Started with 2 units of microbus, serving local tourism in Sumedang.",
    icon: MapPin,
  },
  {
    year: "2018",
    title: "Fleet Expansion",
    description: "Added 5 Medium Bus units to cover West Java routes.",
    icon: Bus,
  },
  {
    year: "2020",
    title: "Surviving & Adapting",
    description:
      "Focused on intense safety protocols and private family trips during the pandemic.",
    icon: Shield,
  },
  {
    year: "2022",
    title: "Premium Era",
    description:
      "Acquired the first Big Bus Jetbus 3+ HDD units. Rebranding to premium service.",
    icon: Crown,
  },
  {
    year: "2024",
    title: "King of Roads",
    description:
      "Launched the newest Jetbus 5 fleet. dominating the tourism market in Sumedang & Bandung.",
    icon: Trophy,
  },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-20">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-4 rounded-full bg-[#008D85]/10 mb-6"
          >
            <Sparkles size={32} className="text-[#008D85]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tighter"
          >
            OUR <span className="text-[#008D85]">JOURNEY.</span>
          </motion.h2>
        </div>

        <div className="relative space-y-12">
          {/* Vertical Dashed Line */}
          <div className="absolute left-[3px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-gray-200" />

          {milestones.map((item, i) => (
            <div
              key={i}
              className={`relative pl-12 md:pl-0 flex flex-col md:flex-row items-center justify-between group w-full ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot - Centered on desktop */}
              <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-[#008D85] rounded-full z-10 group-hover:scale-150 transition-transform duration-300 shadow-md" />

              {/* Horizontal Connector (Desktop Only) */}
              <div
                className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5 border-t-2 border-dashed border-gray-200 w-[5%] z-0 ${
                  i % 2 === 0 ? "right-[50%]" : "left-[50%]"
                }`}
              />

              {/* Spacer for the other side */}
              <div className="hidden md:block w-1/2" />

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-gray-50 hover:bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-[#008D85] transition-all duration-300 w-full md:w-[45%] shadow-sm hover:shadow-2xl group relative overflow-hidden"
              >
                {/* Bg decorative icon */}
                <item.icon className="absolute -right-4 -bottom-4 text-gray-100 group-hover:text-[#008D85]/5 w-32 h-32 transition-colors duration-500" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <span className="block text-5xl font-black text-[#008D85] group-hover:text-black transition-colors tracking-tighter">
                      {item.year}
                    </span>
                    <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-[#008D85] transition-colors duration-300">
                      <item.icon
                        size={24}
                        className="text-[#008D85] group-hover:text-white transition-colors"
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-black transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 font-medium transition-colors leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
