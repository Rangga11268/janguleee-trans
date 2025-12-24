"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Award, Headphones, Map, Smile } from "lucide-react";
import SpotlightCard from "./SpotlightCard";

const services = [
  {
    icon: <Shield size={32} />,
    title: "Keamanan Terjamin",
    description:
      "Armada rutin dirawat dan dilengkapi fitur keselamatan standar internasional.",
  },
  {
    icon: <Award size={32} />,
    title: "Fasilitas Premium",
    description:
      "Nikmati perjalanan dengan fasilitas mewah seperti AC, Audio, dan Karaoke.",
  },
  {
    icon: <Smile size={32} />,
    title: "Kru Profesional",
    description:
      "Driver dan crew berpengalaman, ramah, dan siap melayani kebutuhan Anda.",
  },
  {
    icon: <Clock size={32} />,
    title: "Tepat Waktu",
    description:
      "Kami menghargai waktu Anda dengan jadwal keberangkatan yang disiplin.",
  },
  {
    icon: <Map size={32} />,
    title: "Rute Fleksibel",
    description:
      "Siap mengantar ke berbagai destinasi wisata di seluruh pulau Jawa dan Bali.",
  },
  {
    icon: <Headphones size={32} />,
    title: "Layanan 24/7",
    description:
      "Tim support kami siap membantu reservasi dan pertanyaan Anda kapan saja.",
  },
  {
    icon: <Shield size={32} />,
    title: "Asuransi Perjalanan",
    description:
      "Setiap penumpang dilindungi asuransi Jasa Raharja untuk ketenangan pikiran.",
  },
  {
    icon: <Award size={32} />,
    title: "Harga Kompetitif",
    description:
      "Dapatkan layanan premium dengan harga terbaik dan transparan.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-sm border-b border-brand-primary pb-1 mb-4 inline-block">
            Layanan Kami
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Standard <span className="text-brand-primary">Pelayanan</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
            Komitmen kami untuk memberikan pengalaman perjalanan terbaik bagi
            setiap pelanggan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 8).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="p-10 h-full group rounded-[2rem] border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_0_40px_rgba(229,197,114,0.1)]">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-black transition-all duration-500 group-hover:scale-110 shadow-lg shadow-brand-primary/5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                  {service.description}
                </p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
