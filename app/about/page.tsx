"use client";

import PageHeader from "@/components/PageHeader";
import AboutComponent from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Target, Flag, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <PageHeader
        title="Tentang Kami"
        subtitle="Mengenal Lebih Dekat Janguleee Trans"
        image="/assets/img/janguleebus1.jpg"
      />

      <AboutComponent />

      <section className="py-24 bg-brand-slate relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif"
            >
              Visi & <span className="text-brand-primary">Misi</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-brand-primary mx-auto rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Visi Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/5 hover:border-brand-primary/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(229,197,114,0.15)]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target size={120} className="text-brand-primary" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary group-hover:scale-110 transition-transform duration-500">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white font-serif">
                  Visi
                </h3>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed relative z-10">
                "Menjadi perusahaan transportasi pariwisata terdepan di Jawa
                Barat yang mengutamakan{" "}
                <span className="text-brand-primary font-medium">
                  keselamatan
                </span>
                ,
                <span className="text-brand-primary font-medium">
                  {" "}
                  kenyamanan
                </span>
                , dan
                <span className="text-brand-primary font-medium">
                  {" "}
                  kepuasan pelanggan
                </span>{" "}
                dengan standar pelayanan premium."
              </p>
            </motion.div>

            {/* Misi Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group relative bg-white/5 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/5 hover:border-brand-primary/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(229,197,114,0.15)]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Flag size={120} className="text-brand-primary" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand-primary/10 rounded-xl text-brand-primary group-hover:scale-110 transition-transform duration-500">
                  <Flag size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white font-serif">
                  Misi
                </h3>
              </div>

              <ul className="space-y-4 relative z-10">
                {[
                  "Menyediakan armada terbaru dengan fasilitas terlengkap.",
                  "Menjaga standar perawatan kendaraan secara berkala.",
                  "Memiliki kru yang profesional, ramah, dan berpengalaman.",
                  "Memberikan harga yang kompetitif dengan pelayanan terbaik.",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 text-gray-300 group/item"
                  >
                    <CheckCircle
                      className="text-brand-primary shrink-0 mt-1 group-hover/item:text-white transition-colors"
                      size={18}
                    />
                    <span className="group-hover/item:translate-x-1 transition-transform">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
