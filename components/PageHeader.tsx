"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHeader({
  title,
  subtitle,
  image,
}: PageHeaderProps) {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tighter leading-none">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-brand-primary font-bold tracking-widest uppercase px-4">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
