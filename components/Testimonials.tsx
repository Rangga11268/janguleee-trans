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
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-sm border-b border-brand-primary pb-1 mb-4 inline-block">
            Testimoni
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white font-serif">
            Kata Mereka <span className="text-brand-primary">Tentang Kami</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-brand-slate p-8 rounded-2xl border border-white/5 relative group hover:border-brand-primary/30 transition-colors"
            >
              <Quote
                size={40}
                className="text-brand-primary/20 absolute top-6 right-6"
              />
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-brand-primary text-brand-primary"
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{item.text}"
              </p>
              <div>
                <h4 className="text-white font-bold text-lg">{item.name}</h4>
                <p className="text-brand-primary text-sm">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
