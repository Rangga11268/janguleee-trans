"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "PT. Gudang Garam Tbk",
    role: "Corporate Gathering",
    text: "Unit bus sangat prima, AC dingin, dan kru sangat profesional. Perjalanan Jakarta-Bali jadi tidak terasa lelah.",
    rating: 5,
    colSpan: "md:col-span-2",
  },
  {
    name: "SMAN 1 Sumedang",
    role: "Study Tour",
    text: "Fasilitas karaoke dan TV-nya bikin anak-anak happy terus sepanjang jalan. Recommended!",
    rating: 5,
    colSpan: "md:col-span-1",
  },
  {
    name: "Budi Santoso",
    role: "Family Trip",
    text: "Pelayanan ramah banget dari awal booking sampai selesai trip.",
    rating: 5,
    colSpan: "md:col-span-1",
  },
  {
    name: "Ibu Hjh. Rina",
    role: "Wisata Religi",
    text: "Alhamdulillah perjalanan lancar. Bus bersih dan wangi. Pak sopir bawanya alus banget.",
    rating: 5,
    colSpan: "md:col-span-2",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-black text-black leading-tight tracking-tighter mb-4"
          >
            TRUSTED{" "}
            <span className="text-[#008D85] block md:inline">STORIES.</span>
          </motion.h2>
          <p className="text-xl text-gray-500 font-medium">
            Real experiences from our happy customers.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${item.colSpan} bg-white p-8 md:p-10 rounded-[2.5rem] border border-black/5 hover:border-[#008D85]/30 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between`}
            >
              <div>
                <Quote
                  size={48}
                  className="text-[#008D85]/10 group-hover:text-[#008D85]/20 transition-colors mb-6"
                />
                <p className="text-xl md:text-2xl font-bold text-black mb-6 leading-relaxed">
                  "{item.text}"
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div>
                  <h4 className="font-bold text-black text-lg">{item.name}</h4>
                  <p className="text-[#008D85] text-sm font-bold uppercase tracking-wider">
                    {item.role}
                  </p>
                </div>
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={18}
                      className="fill-[#008D85] text-[#008D85]"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
