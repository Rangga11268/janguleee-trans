"use client";

import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Crown,
  Sparkles,
  MoveRight,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const facilityImages = [
  {
    src: "/assets/img/fasilitas/kursipremium.jpg",
    title: "Kursi Premium",
    desc: "Kenyamanan maksimal dengan legrest",
    colSpan: "md:col-span-2",
    isHighlights: true,
  },
  {
    src: "/assets/img/fasilitas/kursipremium2.jpg",
    title: "Interior Mewah",
    desc: "Desain elegan dan modern",
  },
  {
    src: "/assets/img/fasilitas/TvDepan.jpg",
    title: "Android TV Depan",
    desc: "Hiburan sepanjang perjalanan",
  },
  {
    src: "/assets/img/fasilitas/TvBelakangjpg.jpg",
    title: "TV Tengah",
    desc: "Menjangkau seluruh penumpang",
    colSpan: "md:col-span-2",
  },
  {
    src: "/assets/img/fasilitas/lampudisco.jpg",
    title: "Lampu Disco",
    desc: "Suasana meriah untuk karaoke",
  },
  {
    src: "/assets/img/fasilitas/speaker1.jpg",
    title: "Premium Audio",
    desc: "Kualitas suara jernih",
  },
  {
    src: "/assets/img/fasilitas/speaker2.jpg",
    title: "Sound System",
    desc: "Full entertainment system",
    colSpan: "md:col-span-2",
    isHighlights: true,
  },
  {
    src: "/assets/img/fasilitas/miniipad.jpg",
    title: "Control Panel",
    desc: "Kontrol mudah untuk hiburan",
  },
  {
    src: "/assets/img/fasilitas/dispenser.jpg",
    title: "Dispenser",
    desc: "Air minum panas dan dingin",
  },
  {
    src: "/assets/img/fasilitas/coolbox.jpg",
    title: "Coolbox",
    desc: "Menjaga minuman dingin",
  },
  {
    src: "/assets/img/fasilitas/apar.jpg",
    title: "APAR",
    desc: "Alat Pemadam Api Ringan",
  },
  {
    src: "/assets/img/fasilitas/pemecahkacadarurat.jpg",
    title: "Palu Pemecah Kaca",
    desc: "Standar keselamatan darurat",
  },
];

function ParallaxImage({ item, index }: { item: any; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-[2.5rem] border border-white/5 hover:border-brand-primary/30 h-[400px] ${
        item.colSpan || ""
      }`}
    >
      <motion.div
        style={{ scale, y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src={item.src}
          alt={item.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      </motion.div>

      {/* Floating Badge */}
      {item.isHighlights && (
        <div className="absolute top-6 right-6">
          <div className="flex items-center gap-2 bg-brand-primary text-black px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider shadow-lg">
            <Crown size={14} />
            Unggulan
          </div>
        </div>
      )}

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="transform transition-transform duration-500 group-hover:-translate-y-2"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-brand-primary border border-white/10 group-hover:bg-brand-primary group-hover:text-black transition-colors duration-300">
              <Sparkles size={18} />
            </span>
            <h3 className="text-3xl font-serif text-white group-hover:text-brand-primary transition-colors duration-300">
              {item.title}
            </h3>
          </div>

          <p className="text-gray-300 text-lg font-light max-w-[80%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {item.desc}
          </p>

          <div className="w-full h-[1px] bg-gradient-to-r from-brand-primary/50 to-transparent mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function FacilitiesPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <PageHeader
        title="Fasilitas Armada"
        subtitle="Kenyamanan & Keamanan Tanpa Kompromi"
        image="/assets/img/fasilitas/kursipremium.jpg"
      />

      <div className="container mx-auto px-4 -mt-12 relative z-20 mb-12">
        <Link
          href="/fleet"
          className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-primary hover:text-black hover:border-brand-primary transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(229,197,114,0.3)] group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform duration-300"
          />
          <span className="tracking-widest uppercase text-sm">
            Kembali ke Armada
          </span>
        </Link>
      </div>

      <section className="py-24 bg-brand-dark overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24 relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 text-brand-primary font-bold tracking-[0.3em] uppercase text-sm border-b border-brand-primary/50 pb-2 mb-6 inline-block"
            >
              Galeri Eksklusif
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative z-10 text-5xl md:text-7xl font-bold text-white mb-6 font-serif"
            >
              Fasilitas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
                Premium
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-10 text-gray-400 max-w-2xl mx-auto text-xl font-light leading-relaxed"
            >
              Kami tidak hanya menawarkan perjalanan, tetapi pengalaman. Setiap
              detail dirancang untuk kenyamanan maksimal Anda.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilityImages.map((item, index) => (
              <ParallaxImage key={index} item={item} index={index} />
            ))}
          </div>

          <div className="mt-24 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 text-brand-primary hover:text-white transition-colors duration-300 text-lg uppercase tracking-widest font-bold group"
            >
              Booking Sekarang
              <MoveRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
