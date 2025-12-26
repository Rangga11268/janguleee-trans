"use client";

import PageHeader from "@/components/PageHeader";
import FleetComponent from "@/components/Fleet";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SpotlightCard from "@/components/SpotlightCard";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FleetPage() {
  return (
    <main className="bg-white min-h-screen pt-24">
      <Navbar />

      <FleetComponent showButton={false} />

      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Noise & Gradient */}
        <div className="absolute inset-0 bg-brand-slate opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-brand-primary font-bold tracking-widest uppercase text-sm border-b border-brand-primary pb-1 mb-4 inline-block"
            >
              Galeri Eksklusif
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tighter"
            >
              Sudut <span className="text-brand-primary">Kemewahan</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 max-w-2xl mx-auto text-lg font-medium"
            >
              Intip lebih dekat detail interior dan eksterior armada premium
              kami.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Gallery Item 1 - Large */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 row-span-1 md:row-span-2"
            >
              <SpotlightCard className="h-full w-full p-0 overflow-hidden group border-white/10 hover:border-brand-primary/50 bg-black/50 backdrop-blur-sm">
                <Image
                  src="/assets/img/janguleebus2.jpg"
                  alt="Exterior Jetbus 5"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold text-white mb-2 font-serif">
                      Jetbus 5 Exterior
                    </h3>
                    <p className="text-brand-primary font-medium tracking-wide">
                      Desain aerodinamis modern
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Gallery Item 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <SpotlightCard className="h-full w-full p-0 overflow-hidden group border-white/10 hover:border-brand-primary/50 bg-black/50 backdrop-blur-sm">
                <Image
                  src="/assets/img/peremium/R25.jpg"
                  alt="Premium R25"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white font-serif">
                      Premium R25
                    </h3>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Gallery Item 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <SpotlightCard className="h-full w-full p-0 overflow-hidden group border-white/10 hover:border-brand-primary/50 bg-black/50 backdrop-blur-sm">
                <Image
                  src="/assets/img/peremium/Kursi Peremium.jpg"
                  alt="Interior Luxury"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white font-serif">
                      Luxury Interior
                    </h3>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Gallery Item 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <SpotlightCard className="h-full w-full p-0 overflow-hidden group border-white/10 hover:border-brand-primary/50 bg-black/50 backdrop-blur-sm">
                <Image
                  src="/assets/img/peremium/Toilet.jpg"
                  alt="Fasilitas Toilet"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white font-serif">
                      Clean Toilet
                    </h3>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Gallery Item 5 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-2"
            >
              <SpotlightCard className="h-full w-full p-0 overflow-hidden group border-white/10 hover:border-brand-primary/50 bg-black/50 backdrop-blur-sm">
                <Image
                  src="/assets/img/peremium/Dispenser.jpg"
                  alt="Fasilitas Dispenser"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2 font-serif">
                      Fasilitas Lengkap
                    </h3>
                    <p className="text-gray-300">
                      Dispenser air panas & dingin untuk kenyamanan Anda
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
