"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="relative overflow-hidden w-full max-w-md px-4">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-brand-primary font-serif tracking-tighter mb-4">
                JANGULEEE
              </h1>

              <div className="flex justify-between items-end mb-2 px-1">
                <span className="text-xs text-white/40 uppercase tracking-widest">
                  Loading
                </span>
                <span className="text-4xl font-bold text-white">
                  {progress}%
                </span>
              </div>

              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                  className="h-full bg-brand-primary"
                />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-white/60 mt-4 tracking-[0.5em] text-sm uppercase"
              >
                Premium Transport
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
