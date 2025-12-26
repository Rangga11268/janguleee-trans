"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReservationModal from "./ReservationModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Armada", href: "/fleet" },
    { name: "Kontak", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out w-[90%] max-w-4xl rounded-full border border-black/5 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl py-3 px-6 shadow-xl shadow-black/5 supports-[backdrop-filter]:bg-white/60"
          : "bg-white py-4 px-8 shadow-2xl"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/assets/img/BlackLogo.png"
            alt="Janguleee Trans"
            width={160}
            height={50}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-5 py-2 text-black hover:bg-gray-100 rounded-full transition-all font-medium text-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#FF3B30] hover:bg-black text-white px-5 py-2.5 rounded-full font-bold transition-all flex items-center gap-2 text-sm shadow-lg shadow-red-500/20"
          >
            <Phone size={14} />
            <span className="hidden sm:inline">Book Now</span>
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 16 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-4 flex flex-col gap-2 overflow-hidden"
          >
            <div className="absolute top-8 right-8">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={32} />
              </button>
            </div>

            <motion.div
              className="flex flex-col items-center gap-8 w-full max-w-sm px-6"
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-2xl font-serif text-black hover:text-brand-primary transition-colors duration-300 py-2"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="w-full pt-8"
              >
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 bg-brand-primary text-black w-full py-4 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  <Phone size={20} />
                  Reservasi Sekarang
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <ReservationModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </nav>
  );
}
