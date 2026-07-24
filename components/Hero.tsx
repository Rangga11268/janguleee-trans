"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Magnetic from "@/components/Magnetic";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white pt-32 pb-12 px-4 md:px-8 flex flex-col justify-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-8 bg-brand-slate rounded-[2.5rem] p-8 md:p-16 flex flex-col md:justify-between relative overflow-hidden group min-h-[400px] md:min-h-[500px]"
        >
          <div className="absolute top-8 right-8 flex gap-2">
            <span className="px-4 py-2 bg-white rounded-full text-xs font-bold uppercase tracking-widest border border-black/5 shadow-sm">
              Since 2015
            </span>
          </div>

          <div className="relative z-10 mt-24 md:mt-auto">
            <h1 className="text-[17vw] md:text-[8rem] font-black leading-[0.85] tracking-tighter text-black mb-4">
              JANG
              <br />
              ULEEE
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-500 tracking-tight max-w-lg mb-8">
              Pengalaman sewa bus premium di Sumedang, Bandung &amp; Majalengka.
              <br />
              <span className="text-brand-primary">#BocahIngusan</span>
            </p>

            <div className="flex flex-wrap gap-4">
              <Magnetic>
                <button
                  onClick={() =>
                    document
                      .getElementById("fleet")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-black hover:bg-[#008D85] text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 group shadow-xl hover:shadow-[#008D85]/30"
                >
                  Explore Fleet
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </Magnetic>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/50 to-transparent pointer-events-none" />
        </motion.div>

        {/* SIDE COLUMN (Col-Span-4) */}
        <div className="md:col-span-4 flex flex-col gap-4">
          {/* VIDEO CARD / IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 bg-black rounded-[2.5rem] relative overflow-hidden min-h-[400px] group"
          >
            <div className="absolute inset-0 opacity-80 group-hover:opacity-60 transition-opacity duration-500">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source
                  src="/assets/video/comingsoonbus.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
              <div className="flex justify-between items-end">
                <span className="text-white font-bold text-2xl shadow-black/20 drop-shadow-lg">
                  Reels
                </span>
                <button className="w-12 h-12 rounded-full bg-white backdrop-blur-md flex items-center justify-center text-[#008D85] hover:bg-[#008D85] hover:text-white transition-all group">
                  <Play
                    size={20}
                    className="fill-current group-hover:fill-white transition-colors"
                  />
                </button>
              </div>
            </div>
          </motion.div>

          {/* CTA CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#008D85] rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[250px] relative overflow-hidden group cursor-pointer hover:bg-black transition-colors duration-500"
            onClick={() => window.open("https://wa.me/628131573731", "_blank")}
          >
            <div className="absolute top-0 right-0 p-8 opacity-20">
              <ArrowRight size={100} className="-rotate-45" />
            </div>

            <div>
              <h3 className="text-4xl font-bold text-white mb-2">Book Now</h3>
              <p className="text-white/80 font-medium">
                Start your journey today.
              </p>
            </div>

            <div className="flex items-center justify-between mt-8">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-white/20 border-2 border-transparent backdrop-blur-sm"
                  />
                ))}
              </div>
              <div className="w-12 h-12 rounded-full bg-white text-brand-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight size={24} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
