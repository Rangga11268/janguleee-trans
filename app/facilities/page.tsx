"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const facilityImages = [
  {
    src: "/assets/img/fasilitas/kursipremium.jpg",
    title: "Premium Seats",
    desc: "Reclining comfort.",
    colSpan: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/assets/img/fasilitas/kursipremium2.jpg",
    title: "Luxury Interior",
    desc: "Elegant design.",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/assets/img/fasilitas/TvDepan.jpg",
    title: "Android TV",
    desc: "Smart entertainment.",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/assets/img/fasilitas/TvBelakangjpg.jpg",
    title: "Central TV",
    desc: "View for everyone.",
    colSpan: "md:col-span-2 md:row-span-1",
  },
  {
    src: "/assets/img/fasilitas/lampudisco.jpg",
    title: "Disco Light",
    desc: "Party mode on.",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/assets/img/fasilitas/speaker1.jpg",
    title: "Premium Audio",
    desc: "Crystal clear sound.",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/assets/img/fasilitas/dispenser.jpg",
    title: "Dispenser",
    desc: "Hot & Cold water.",
    colSpan: "md:col-span-1 md:row-span-1",
  },
  {
    src: "/assets/img/fasilitas/coolbox.jpg",
    title: "Coolbox",
    desc: "Keep drinks fresh.",
    colSpan: "md:col-span-1 md:row-span-1",
  },
];

export default function FacilitiesPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <section className="pt-32 pb-12 px-4 md:px-8">
        <div className="container mx-auto">
          {/* Header */}
          <div className="mb-12 border-b border-gray-100 pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <Link
                href="/#fleet"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-[#008D85] mb-4 transition-colors"
              >
                <ArrowLeft size={16} /> Back to Fleet
              </Link>
              <h1 className="text-6xl md:text-8xl font-black text-black leading-none tracking-tighter">
                FACILITIES<span className="text-[#008D85]">.</span>
              </h1>
            </div>
            <p className="max-w-md text-right text-gray-500 font-medium text-lg">
              We don't just drive. We ensure you enjoy every second of the trip
              with{" "}
              <span className="text-[#008D85] font-bold">
                Premium Amenities
              </span>
              .
            </p>
          </div>

          {/* Bento Grid Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
            {facilityImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-[2rem] overflow-hidden group ${item.colSpan} bg-gray-100`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-1 leading-none tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
