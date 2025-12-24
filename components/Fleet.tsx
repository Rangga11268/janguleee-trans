"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Users, Briefcase, ArrowRight, Star, Wifi, Info } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

const fleets = [
  {
    name: "Premium R25",
    body: "R25 - SCANIA K450CB",
    capacity: "Adjustable Seat (27 - 50)",
    image: "/assets/img/peremium/R25.jpg",
    facilities: [
      "Kursi Premium Reclining",
      "Toilet & Dispenser",
      'Android TV 32"',
      "Premium Audio System",
      "USB Charger Setiap Seat",
      "LED Interior",
    ],
    purpose: "VIP Executive, Perjalanan Jarak Jauh Premium",
    highlight: "Unit Terbaru & Termewah",
    isPremium: true,
    isNew: true,
  },
  {
    name: "Big Bus (Standard)",
    body: "Jetbus 5",
    capacity: "50 Seat",
    image: "/assets/img/janguleebus2.jpg",
    facilities: ["Full AC", "Audio System", "Karaoke", "Bagasi Luas"],
    purpose: "Wisata rombongan besar, Study Tour",
    highlight: "Kapasitas Maksimal",
    isPremium: false,
  },
  {
    name: "Big Bus (Executive)",
    body: "Jetbus 5",
    capacity: "32 Seat",
    image: "/assets/img/janguleee.jpg",
    facilities: [
      "Legrest (Sandaran Kaki)",
      "Android TV",
      "Premium Audio",
      "USB Charger",
    ],
    purpose: "Perjalanan jarak jauh, VIP",
    highlight: "Kenyamanan Premium",
    isPremium: false,
  },
];

function PremiumHero({ fleet }: { fleet: any }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div
      ref={ref}
      className="relative w-full h-[85vh] overflow-hidden rounded-[3rem] group"
    >
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%]">
        <Image
          src={fleet.image}
          alt={fleet.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </motion.div>

      {/* Content Overlay */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 flex flex-col justify-end p-8 md:p-16"
      >
        <div className="flex flex-col md:flex-row items-end gap-12 w-full max-w-7xl mx-auto">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <span className="px-4 py-2 bg-brand-primary text-black font-bold text-xs tracking-[0.2em] uppercase rounded-full">
                Flagship Unit
              </span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-xs tracking-[0.2em] uppercase rounded-full flex items-center gap-2">
                <Star
                  size={14}
                  className="fill-brand-primary text-brand-primary"
                />
                Premium Class
              </span>
            </div>

            <h3 className="text-6xl md:text-8xl font-serif text-white leading-none">
              {fleet.name}
            </h3>
            <p className="text-2xl text-gray-200 font-light max-w-xl">
              {fleet.body} — {fleet.highlight}
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {fleet.facilities.slice(0, 4).map((f: string, i: number) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm text-sm text-gray-300"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full md:w-auto flex flex-col gap-4">
            <a
              href={`https://wa.me/628131573731?text=Saya%20tertarik%20booking%20unit%20Premium%20${fleet.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative px-8 py-4 bg-brand-primary hover:bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_40px_rgba(229,197,114,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Booking Unit Ini{" "}
                <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="/facilities"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold text-lg rounded-full transition-all duration-300 text-center shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(229,197,114,0.3)]"
            >
              Lihat Detail Fasilitas
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function StandardCard({ fleet, index }: { fleet: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative h-[600px] w-full rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-brand-primary/30 transition-colors duration-500"
    >
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
        <Image
          src={fleet.image}
          alt={fleet.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
      </div>

      {/* Static Info (Always Visible) */}
      <div className="absolute top-8 left-8 right-8 flex justify-between items-start opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-3xl font-serif text-white">{fleet.name}</h3>
      </div>

      <div className="absolute bottom-8 left-8 right-8 z-10 transition-transform duration-500 group-hover:-translate-y-2">
        <p className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          {fleet.capacity}
        </p>
        <h4 className="text-4xl font-serif text-white leading-tight opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          {fleet.body}
        </h4>
      </div>

      {/* Slide-Up Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-[80%] z-20 bg-black/40 backdrop-blur-xl border-t border-white/10 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.19,1,0.22,1] flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-serif text-white mb-2">{fleet.name}</h3>
          <p className="text-gray-400 mb-8">{fleet.highlight}</p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-2 rounded-full bg-white/10">
                <Users size={18} />
              </div>
              <span>{fleet.capacity}</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-2 rounded-full bg-white/10">
                <Wifi size={18} />
              </div>
              <span>{fleet.facilities.length} Fasilitas Tersedia</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-2 rounded-full bg-white/10">
                <Info size={18} />
              </div>
              <span className="text-sm">{fleet.purpose}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={`https://wa.me/628131573731?text=Halo,%20ketersediaan%20untuk%20${fleet.name}%20bagaimana?`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-primary transition-colors"
          >
            Cek Ketersediaan
          </a>
          <a
            href="/facilities"
            className="w-full py-3 bg-white/5 border border-white/10 text-white font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors text-sm"
          >
            Lihat Fasilitas
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold tracking-[0.3em] uppercase text-sm border-b border-brand-primary/50 pb-2 mb-6 inline-block"
          >
            Armada Kami
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white font-serif"
          >
            Pilihan{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
              Eksklusif
            </span>
          </motion.h2>
        </div>

        <div className="space-y-16">
          {/* Premium/Highlight Unit */}
          {fleets
            .filter((f) => f.isPremium)
            .map((fleet, i) => (
              <PremiumHero key={i} fleet={fleet} />
            ))}

          {/* Standard Units Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fleets
              .filter((f) => !f.isPremium)
              .map((fleet, i) => (
                <StandardCard key={i} fleet={fleet} index={i} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
