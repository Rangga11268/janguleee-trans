"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Users, Briefcase, ArrowRight } from "lucide-react";
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
  },
];

function FleetCard({ fleet, index }: { fleet: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 200);
    y.set(yPct * 200);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group bg-brand-slate rounded-3xl overflow-hidden border transition-all duration-500 perspective-1000 ${
        fleet.isPremium
          ? "border-brand-primary/60 shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:shadow-[0_0_60px_rgba(212,175,55,0.4)] scale-[1.02] hover:scale-[1.03]"
          : "border-white/10 hover:border-brand-primary/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
      }`}
    >
      <div className="relative h-72 w-full overflow-hidden transform-style-3d">
        <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
          {fleet.video ? (
            <>
              <Image
                src={fleet.image}
                alt={fleet.name}
                fill
                className="object-cover group-hover:opacity-0 transition-opacity duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <video
                src={fleet.video}
                muted
                loop
                playsInline
                autoPlay
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </>
          ) : (
            <Image
              src={fleet.image}
              alt={fleet.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-slate via-transparent to-transparent opacity-90" />

        {/* Badges */}
        <div className="absolute top-6 right-6 flex gap-2 flex-col items-end">
          {fleet.isNew && (
            <div className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg animate-pulse">
              NEW
            </div>
          )}
          {fleet.isPremium && (
            <div className="bg-gradient-to-r from-yellow-400 to-brand-primary text-black text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
              ⭐ PREMIUM
            </div>
          )}
          <div className="bg-brand-primary/90 backdrop-blur-sm text-black text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg translate-z-20">
            {fleet.body}
          </div>
        </div>

        <div className="absolute bottom-6 left-6 translate-z-20">
          <h3 className="text-3xl font-bold text-white mb-1 group-hover:text-brand-primary transition-colors">
            {fleet.name}
          </h3>
          <p className="text-gray-300 font-medium">{fleet.highlight}</p>
        </div>
      </div>

      <div className="p-8 transform-style-3d">
        <div className="flex items-center gap-3 mb-8 bg-black/30 p-4 rounded-xl border border-white/5 translate-z-10">
          <div className="p-2 bg-brand-primary/20 rounded-lg text-brand-primary">
            <Users size={20} />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">
              Kapasitas
            </p>
            <p className="font-bold text-white text-lg">{fleet.capacity}</p>
          </div>
        </div>

        <div className="space-y-6 mb-10 translate-z-10">
          <div className="text-sm text-brand-primary font-bold uppercase tracking-widest">
            Fasilitas Unggulan
          </div>
          <ul className="grid grid-cols-2 gap-4">
            {fleet.facilities.map((facility: string, idx: number) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-gray-300 text-sm group/item"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary group-hover/item:scale-150 transition-transform" />
                {facility}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 border-t border-white/5 translate-z-10">
          <p className="text-sm text-gray-500 mb-6 flex items-center gap-2">
            <Briefcase size={16} />
            Cocok untuk:{" "}
            <span className="text-gray-300 font-medium">{fleet.purpose}</span>
          </p>
          <a
            href={`https://wa.me/628131573731?text=Halo%20Janguleee%20Trans,%20saya%20ingin%20tanya%20tentang%20unit%20${fleet.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-brand-primary hover:text-black py-4 rounded-xl font-bold transition-all duration-300 group-hover:translate-y-[-2px] mb-3"
          >
            Tanya Ketersediaan
            <ArrowRight size={18} />
          </a>
          <a
            href="/facilities"
            className="w-full flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white hover:bg-white/5 py-4 rounded-xl font-bold transition-all duration-300"
          >
            Lihat Detail Fasilitas
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-brand-primary pb-2 mb-6 inline-block">
            Armada Kami
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white font-serif">
            Pilihan <span className="text-brand-primary">Unit Terbaik</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light text-xl leading-relaxed">
            Setiap unit dirawat dengan standar tinggi untuk menjamin keamanan
            dan kenyamanan perjalanan Anda.
          </p>
        </div>

        <div className="space-y-10">
          {/* Premium Featured Unit */}
          {fleets
            .filter((f) => f.isPremium)
            .map((fleet, index) => (
              <div key={index} className="mb-12">
                <FleetCard fleet={fleet} index={index} />
              </div>
            ))}

          {/* Standard Units Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {fleets
              .filter((f) => !f.isPremium)
              .map((fleet, index) => (
                <FleetCard key={index} fleet={fleet} index={index + 1} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
