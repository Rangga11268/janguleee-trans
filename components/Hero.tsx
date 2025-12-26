"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star, MapPin, Shield } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-white pt-24 pb-12 px-4 md:px-8 flex flex-col justify-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-8 bg-brand-slate rounded-[2.5rem] p-8 md:p-16 flex flex-col justify-between relative overflow-hidden group min-h-[500px]"
        >
          <div className="absolute top-8 right-8 flex gap-2">
            <span className="px-4 py-2 bg-white rounded-full text-xs font-bold uppercase tracking-widest border border-black/5 shadow-sm">
              Since 2015
            </span>
          </div>

          <div className="relative z-10 mt-auto">
            <h1 className="text-[17vw] md:text-[8rem] font-black leading-[0.85] tracking-tighter text-black mb-4">
              JANG
              <br />
              ULEEE
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-500 tracking-tight max-w-md">
              The Premium Bus Charter Experience.
              <br />
              <span className="text-brand-primary">#BocahIngusan</span>
            </p>
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
            className="flex-1 bg-black rounded-[2.5rem] relative overflow-hidden min-h-[300px] group"
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

            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex justify-between items-end">
                <span className="text-white font-bold text-2xl">Reels</span>
                <button className="w-12 h-12 rounded-full bg-white backdrop-blur-md flex items-center justify-center text-[#FF3B30] hover:bg-[#FF3B30] hover:text-white transition-all group">
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
            className="bg-[#FF3B30] rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[250px] relative overflow-hidden group cursor-pointer hover:bg-black transition-colors duration-500"
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

        {/* STATS TICKER (Col-Span-12) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-12 bg-black rounded-[2rem] p-6 flex flex-wrap items-center justify-around gap-4 md:gap-8 overflow-hidden"
        >
          <div className="flex items-center gap-3 text-white">
            <div className="p-2 bg-white/10 rounded-full">
              <Star
                size={18}
                className="text-brand-primary fill-brand-primary"
              />
            </div>
            <span className="font-bold uppercase tracking-wider text-sm">
              Top Rated Service
            </span>
          </div>
          <div className="w-px h-8 bg-white/10 hidden md:block" />
          <div className="flex items-center gap-3 text-white">
            <div className="p-2 bg-white/10 rounded-full">
              <Shield size={18} className="text-brand-primary" />
            </div>
            <span className="font-bold uppercase tracking-wider text-sm">
              Insurance Included
            </span>
          </div>
          <div className="w-px h-8 bg-white/10 hidden md:block" />
          <div className="flex items-center gap-3 text-white">
            <div className="p-2 bg-white/10 rounded-full">
              <MapPin size={18} className="text-brand-primary" />
            </div>
            <span className="font-bold uppercase tracking-wider text-sm">
              Java - Bali Coverage
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
