"use client";

import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Star } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-brand-dark relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="text-brand-primary font-bold tracking-widest uppercase text-sm border-b border-brand-primary pb-1">
                Tentang Kami
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight"
            >
              Mengapa Memilih <br />
              <span className="text-brand-primary">Janguleee Trans?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-400 mb-6 leading-relaxed font-light"
            >
              Kami bukan sekadar penyedia transportasi, kami adalah mitra
              perjalanan Anda. Berbasis di Sumedang, Jang Uleee Bungsuna
              Transport hadir dengan standar baru dalam layanan bus pariwisata.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-400 mb-10 leading-relaxed font-light"
            >
              Armada Jetbus 5 terbaru kami dirancang untuk memberikan kenyamanan
              maksimal, didukung oleh kru profesional yang siap melayani dengan
              sepenuh hati.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-primary/30 transition-colors"
              >
                <div className="p-3 bg-brand-primary/10 rounded-lg text-brand-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">
                    Lokasi Strategis
                  </h4>
                  <p className="text-sm text-gray-500">Sumedang, Jawa Barat</p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-primary/30 transition-colors"
              >
                <div className="p-3 bg-brand-primary/10 rounded-lg text-brand-primary">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg mb-1">
                    Safety First
                  </h4>
                  <p className="text-sm text-gray-500">
                    Standar Keamanan Tinggi
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              >
                <source src="/assets/video/fasilitas1.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-8">
                <div>
                  <div className="flex items-center gap-2 text-brand-primary mb-2">
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                    <Star size={18} fill="currentColor" />
                  </div>
                  <p className="font-bold text-2xl text-white mb-2">
                    Fasilitas Mewah
                  </p>
                  <p className="text-gray-300 font-light">
                    Interior modern untuk kenyamanan perjalanan Anda.
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
