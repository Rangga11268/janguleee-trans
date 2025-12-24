"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const width = typeof window !== "undefined" ? window.innerWidth : 1000;
  const height = typeof window !== "undefined" ? window.innerHeight : 800;

  const mouseX = useTransform(x, [0, width], [-20, 20]);
  const mouseY = useTransform(y, [0, height], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    x.set(e.clientX);
    y.set(e.clientY);
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
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
          style={{ x: mouseX, y: mouseY, rotateX: mouseY, rotateY: mouseX }}
          className="perspective-1000 will-change-transform"
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span className="text-gray-300 text-sm tracking-widest uppercase font-medium">
              Premium Bus Charter
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight tracking-tight overflow-hidden font-serif">
            <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
              {"Jang Uleee".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + i * 0.05,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent block mt-2"
            >
              Bungsuna Transport
            </motion.span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Rasakan sensasi perjalanan mewah dengan armada Jetbus 5 terbaru.
            Kenyamanan dan keamanan prioritas kami.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Magnetic>
              <a
                href="https://wa.me/628131573731"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-brand-primary hover:bg-brand-accent text-black px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                Booking Sekarang
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#fleet"
                className="group bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3"
              >
                <Play size={18} className="fill-white" />
                Lihat Armada
              </a>
            </Magnetic>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
