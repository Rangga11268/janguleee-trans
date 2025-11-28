"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Tour Leader",
    text: "Pelayanan Janguleee Trans luar biasa. Unit Jetbus 5 sangat nyaman, AC dingin, dan kru sangat kooperatif. Recommended untuk wisata rombongan!",
    rating: 5,
  },
  {
    name: "Siti Aminah",
    role: "Guru SMAN 1 Sumedang",
    text: "Study tour sekolah kami berjalan lancar berkat armada yang prima. Fasilitas karaoke dan audio bikin perjalanan tidak membosankan.",
    rating: 5,
  },
  {
    name: "Rahmat Hidayat",
    role: "Event Organizer",
    text: "Sudah beberapa kali sewa di sini, tidak pernah mengecewakan. Unit selalu bersih dan on time. Sukses terus Janguleee Trans!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 mb-20">
        <div className="text-center">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-sm border-b border-brand-primary pb-1 mb-4 inline-block">
            Testimoni
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Kata Mereka <span className="text-brand-primary">Tentang Kami</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Kepuasan pelanggan adalah prioritas utama kami. Inilah apa yang
            mereka katakan.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-20" />

        <div className="flex gap-8 animate-marquee whitespace-nowrap py-10">
          {[...testimonials, ...testimonials, ...testimonials].map(
            (item, index) => (
              <div
                key={index}
                className="w-[400px] flex-shrink-0 bg-brand-slate/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-brand-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-brand-primary text-brand-primary"
                      />
                    ))}
                  </div>
                  <Quote
                    size={32}
                    className="text-brand-primary/20 group-hover:text-brand-primary/50 transition-colors"
                  />
                </div>

                <p className="text-gray-300 mb-8 text-lg leading-relaxed whitespace-normal font-light">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-primary to-yellow-600 flex items-center justify-center text-black font-bold text-xl">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">
                      {item.name}
                    </h4>
                    <p className="text-brand-primary text-sm tracking-wide uppercase">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
