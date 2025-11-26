"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-60"
        >
          <source src="/assets/video/comingsoonbus.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span className="text-gray-300 text-sm tracking-widest uppercase font-medium">
              Premium Bus Charter
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
            Jang Uleee <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
              Bungsuna Transport
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Rasakan sensasi perjalanan mewah dengan armada Jetbus 5 terbaru.
            Kenyamanan dan keamanan prioritas kami.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/628131573731"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-brand-primary hover:bg-brand-accent text-black px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              Booking Sekarang
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#fleet"
              className="group bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3"
            >
              <Play size={18} className="fill-white" />
              Lihat Armada
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
