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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "bg-black/60 backdrop-blur-2xl py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/5 supports-[backdrop-filter]:bg-black/40"
          : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="flex flex-col items-start group">
          <div
            className={`relative transition-all duration-500 ${
              scrolled ? "h-8 w-28" : "h-14 w-48"
            }`}
          >
            <Image
              src="/assets/img/logonobg.png"
              alt="Janguleee Trans Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
          <span
            className={`text-xs font-bold tracking-[0.3em] uppercase transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-primary bg-[length:200%_auto] animate-shimmer ${
              scrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100 mt-2"
            }`}
          >
            #BocahIngusan
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-brand-primary transition-colors font-medium tracking-wide text-sm uppercase"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-brand-primary to-brand-accent hover:to-white text-black px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2 shadow-[0_0_25px_rgba(229,197,114,0.4)] hover:shadow-[0_0_40px_rgba(229,197,114,0.6)] duration-500 text-sm tracking-widest uppercase"
          >
            <Phone size={16} />
            Reservasi
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-brand-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-0 top-[0px] bg-black/98 backdrop-blur-3xl z-40 flex flex-col justify-center items-center"
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
                    className="block text-2xl font-serif text-white hover:text-brand-primary transition-colors duration-300 py-2"
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
