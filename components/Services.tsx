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
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-primary font-bold tracking-[0.2em] uppercase text-sm border-b border-brand-primary pb-2 mb-6 inline-block"
          >
            Layanan Kami
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-8 text-white font-serif"
          >
            Standard <span className="text-brand-primary">Pelayanan</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto font-light text-xl leading-relaxed"
          >
            Komitmen kami untuk memberikan pengalaman perjalanan terbaik bagi
            setiap pelanggan.
          </motion.p>
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
              <SpotlightCard className="p-8 h-full group">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-black transition-all duration-300 group-hover:scale-110">
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
