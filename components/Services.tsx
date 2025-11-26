"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Award, Headphones, Map, Smile } from "lucide-react";

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
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark dark:text-white">
            Mengapa Memilih <span className="text-brand-primary">Kami?</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Komitmen kami untuk memberikan pengalaman perjalanan terbaik bagi
            setiap pelanggan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gray-50 dark:bg-zinc-800 hover:bg-white dark:hover:bg-zinc-700 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-primary/20 group"
            >
              <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-dark dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
