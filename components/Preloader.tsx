"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Tweak timing for a snappier feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="relative w-full max-w-md px-4 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 relative"
            >
              <div className="relative w-48 h-auto mb-8">
                <Image
                  src="/assets/img/PreloaderLogo.png"
                  alt="Janguleee Logo"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </motion.div>

            <div className="w-full relative">
              <div className="flex justify-between items-end mb-2">
                <span className="text-black font-bold uppercase tracking-widest text-sm">
                  Loading Resources
                </span>
                <span className="text-6xl font-black text-black tracking-tighter">
                  {progress}%
                </span>
              </div>

              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                  className="h-full bg-[#008D85]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
