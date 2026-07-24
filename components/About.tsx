"use client";

import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Star, Play } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="mb-6">
              <span className="text-brand-primary font-black tracking-widest uppercase text-sm border-b-2 border-brand-primary pb-1">
                Kenapa Janguleee?
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-4 text-black leading-none tracking-tighter">
              Cari Bus Pariwisata yang{" "}
              <span className="text-brand-primary">Bener?</span>
            </h2>

            <p className="text-lg text-gray-500 font-medium mb-8 max-w-xl">
              Udah bayar mahal tapi AC kurang dingin? Armada nggak sesuai foto?
              Sopir ugal-ugalan? Tenang, lo di tempat yang tepat.
            </p>

            <div className="space-y-6 text-lg text-gray-600 font-medium font-sans">
              <p>
                Kami bukan sekadar penyedia transportasi, kami adalah mitra
                perjalanan Anda. Berbasis di Sumedang, Jang Uleee Bungsuna
                Transport hadir dengan standar baru dalam layanan bus
                pariwisata.
              </p>
              <p>
                Armada Jetbus 5 terbaru kami dirancang untuk memberikan
                kenyamanan maksimal, didukung oleh kru profesional yang siap
                melayani dengan sepenuh hati.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <div className="flex items-start gap-4 p-6 rounded-[2rem] bg-brand-slate border border-transparent hover:border-brand-primary/20 transition-colors group">
                <div className="p-3 bg-white rounded-2xl text-black group-hover:bg-[#008D85] group-hover:text-white transition-colors shadow-sm duration-300">
                  <MapPin
                    size={24}
                    className="group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg mb-1">
                    Lokasi Strategis
                  </h4>
                  <p className="text-sm text-gray-500">Sumedang, Jawa Barat</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-[2rem] bg-brand-slate border border-transparent hover:border-brand-primary/20 transition-colors group">
                <div className="p-3 bg-white rounded-2xl text-black group-hover:bg-[#008D85] group-hover:text-white transition-colors shadow-sm duration-300">
                  <ShieldCheck
                    size={24}
                    className="group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg mb-1">
                    Safety First
                  </h4>
                  <p className="text-sm text-gray-500">
                    Standar Keamanan Tinggi
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/5 group aspect-video bg-black">
              {!isPlaying ? (
                <>
                  <video
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
                  >
                    <source
                      src="/assets/video/fasilitas1.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-primary hover:text-black transition-all transform hover:scale-110"
                    >
                      <Play size={32} className="fill-current ms-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center gap-1 text-brand-primary mb-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <p className="font-bold text-white text-xl">
                      The Premium Experience
                    </p>
                  </div>
                </>
              ) : (
                <video autoPlay controls className="w-full h-full object-cover">
                  <source src="/assets/video/fasilitas1.mp4" type="video/mp4" />
                </video>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
