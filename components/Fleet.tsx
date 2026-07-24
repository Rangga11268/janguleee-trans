"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Wifi, Info, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const fleets = [
  {
    name: "Premium R25",
    body: "R25 - SCANIA K450CB",
    capacity: "27 - 50 Seats",
    image: "/assets/img/peremium/R25.webp",
    facilities: [
      "Kursi Premium Reclining",
      "Toilet & Dispenser",
      'Android TV 32"',
      "Premium Audio System",
    ],
    purpose: "VIP Executive",
    highlight: "The Ultimate Luxury",
    isPremium: true,
  },
  {
    name: "Big Bus (Std)",
    body: "Jetbus 5",
    capacity: "50 Seats",
    image: "/assets/img/janguleebus2.webp",
    facilities: ["Full AC", "Audio System", "Karaoke", "Bagasi Luas"],
    purpose: "Wisata rombongan",
    highlight: "Maximum Capacity",
    isPremium: false,
  },
  {
    name: "Big Bus (Exec)",
    body: "Jetbus 5",
    capacity: "32 Seats",
    image: "/assets/img/janguleee.webp",
    facilities: ["Legrest", "Android TV", "Premium Audio"],
    purpose: "Perjalanan jarak jauh",
    highlight: "Premium Comfort",
    isPremium: false,
  },
];

export default function Fleet({ showButton = true }: { showButton?: boolean }) {
  return (
    <section id="fleet" className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-6xl md:text-8xl font-black text-black leading-tight tracking-tighter">
              OUR <br />
              <span className="text-[#008D85]">FLEET.</span>
            </h2>
          </div>
          <p className="text-xl font-medium text-gray-500 max-w-sm text-left md:text-right">
            Premium units designed for maximum comfort and style.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Loop Fleets */}
          {fleets.map((fleet, i) => {
            // Bento Logic: Premium/First item spans 2 cols, others 1.
            const isLarge = fleet.isPremium || i === 0;
            const colSpan = isLarge ? "md:col-span-2" : "md:col-span-1";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${colSpan} h-[500px] relative rounded-[2.5rem] overflow-hidden group cursor-pointer border border-gray-100`}
              >
                <Image
                  src={fleet.image}
                  alt={fleet.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 opacity-80 group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-6 left-6">
                  <span
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest ${
                      fleet.isPremium
                        ? "bg-brand-primary text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {fleet.capacity}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-4xl font-bold text-white mb-2 leading-none">
                    {fleet.name}
                  </h3>
                  <p className="text-white/80 text-lg mb-6">{fleet.body}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {fleet.facilities.slice(0, 3).map((fac, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-bold text-white/90 bg-white/20 px-3 py-1 rounded-lg backdrop-blur-md"
                      >
                        {fac}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4">
                    <Link
                      href="/facilities"
                      className="inline-flex items-center justify-center gap-2 bg-[#008D85] hover:bg-white hover:text-black text-white px-6 py-3 rounded-full font-bold transition-all text-sm group/btn w-full md:w-auto"
                    >
                      View Gallery
                      <ArrowRight
                        size={16}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </Link>
                    <a
                      href={`https://wa.me/628131573731?text=Saya%20tertarik%20booking%20unit%20${fleet.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors w-full md:w-auto"
                    >
                      Book This Unit
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* 'More' Card - Only show if showButton is true */}
          {showButton && (
            <Link
              href="/fleet"
              className="bg-brand-slate rounded-[2.5rem] flex flex-col justify-center items-center p-8 text-center group cursor-pointer hover:bg-black hover:text-white transition-colors duration-500 border border-transparent hover:border-black/50"
            >
              <h3 className="text-3xl font-bold mb-4">
                See All <br /> Units
              </h3>
              <div className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight size={32} />
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
