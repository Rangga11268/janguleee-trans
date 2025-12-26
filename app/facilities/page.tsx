"use client";

import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Crown } from "lucide-react";
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

      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto">
          <div className="mb-12 border-b border-gray-100 pb-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <Link
                href="/fleet"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-black mb-4 transition-colors"
              >
                <ArrowLeft size={16} /> Back to Fleet
              </Link>
              <h1 className="text-6xl md:text-8xl font-black text-black leading-none tracking-tighter">
                FACILITIES
              </h1>
            </div>
            <p className="max-w-md text-right text-gray-500 font-medium">
              We don't just drive. We ensure you enjoy every second of the trip.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
            {facilityImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative rounded-[2rem] overflow-hidden group ${item.colSpan}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-white font-bold text-2xl leading-none mb-1">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Call to Action Card */}
            <div
              className="md:col-span-2 md:row-span-1 bg-brand-primary rounded-[2rem] flex items-center justify-between p-8 relative overflow-hidden group hover:bg-black transition-colors duration-500 cursor-pointer"
              onClick={() =>
                window.open("https://wa.me/628131573731", "_blank")
              }
            >
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Experience It.
                </h3>
                <button className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm">
                  Book Now
                </button>
              </div>
              <Crown
                size={120}
                className="absolute -right-4 -bottom-4 text-white/10 rotate-12 group-hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
