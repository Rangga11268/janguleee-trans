"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/628131573731"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-colors group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
      <div className="relative">
        <MessageCircle
          size={32}
          fill="white"
          className="group-hover:scale-110 transition-transform"
        />
      </div>
    </motion.a>
  );
}
