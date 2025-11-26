"use client";

import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-primary/10 rounded-full -z-10" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-dark dark:text-white">
                Tentang{" "}
                <span className="text-brand-primary">Janguleee Trans</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Jang Uleee Bungsuna Transport adalah penyedia layanan
                transportasi bus pariwisata terpercaya yang berbasis di
                Sumedang, Jawa Barat. Kami berkomitmen untuk memberikan
                pengalaman perjalanan yang aman, nyaman, dan tak terlupakan bagi
                setiap pelanggan.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Dengan armada terbaru Jetbus 5 dan kru yang berpengalaman, kami
                siap mengantarkan Anda ke berbagai destinasi wisata di seluruh
                Indonesia.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-zinc-800 rounded-xl">
                  <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark dark:text-white">
                      Lokasi
                    </h4>
                    <p className="text-sm text-gray-500">
                      Sumedang, Jawa Barat
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-zinc-800 rounded-xl">
                  <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark dark:text-white">
                      Keamanan
                    </h4>
                    <p className="text-sm text-gray-500">Prioritas Utama</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            {/* Placeholder for an image or graphic if needed, using a colored block for now or the logo if available */}
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              {/* We can use one of the bus images here as a secondary image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/assets/img/janguleebus2.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="font-bold text-xl mb-2">
                    Profesional & Terpercaya
                  </p>
                  <p className="text-gray-300">
                    Melayani dengan sepenuh hati sejak awal beroperasi.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
