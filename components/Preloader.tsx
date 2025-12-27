"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Curve for the slide-up animation (SVG Path)
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${
    dimension.width / 2
  } 0 0 0 L0 0`;

  const curve: any = {
    initial: {
      d: initialPath,
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <>
           {/* MAIN PRELOADER */}
          <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#111] text-white overflow-hidden cursor-wait"
            exit={{
              y: "-100vh",
              transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
            }}
          >
             {/* CONTENT CONTAINER */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0, y: -50 }}
               transition={{ duration: 0.5 }}
               className="relative z-10 flex flex-col items-center justify-center px-4"
            >
                {/* LOGO WITH BREATHING ANIMATION */}
                <motion.div 
                  className="w-48 md:w-72 mb-8"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                     <Image
                        src="/assets/img/logonobg.png"
                        alt="Janguleee"
                        width={400}
                        height={150}
                        className="w-full h-auto object-contain brightness-0 invert drop-shadow-2xl" 
                     />
                </motion.div>

                <div className="flex flex-col items-center gap-3">
                    <p className="text-gray-400 font-medium tracking-[0.5em] uppercase text-xs md:text-sm animate-pulse">
                        PREPARING YOUR JOURNEY
                    </p>
                    {/* Animated Dots */}
                    <div className="flex gap-2 mt-2">
                        {[0, 1, 2].map((i) => (
                           <motion.div
                             key={i}
                             className="w-2 h-2 rounded-full bg-[#008D85]"
                             animate={{ y: [0, -10, 0] }}
                             transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                           />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* CURTAIN REVEAL EFFECT (SVG CURVE) */}
            {dimension.width > 0 && (
              <svg className="absolute top-0 w-full h-[calc(100%_+_300px)] pointer-events-none fill-[#111] z-0 hidden">
                <motion.path
                  variants={curve}
                  initial="initial"
                  exit="exit"
                />
              </svg>
            )}
          </motion.div>
          
          {/* SECONDARY LAYER (ACCENT FLASH) */}
          <motion.div 
             className="fixed inset-0 z-[9998] bg-[#008D85]"
             initial={{ y: 0 }}
             exit={{ 
                y: "-100vh",
                transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.4 } 
             }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
