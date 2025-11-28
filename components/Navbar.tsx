"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5"
          : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="flex flex-col items-start group">
          <div
            className={`relative transition-all duration-500 ${
              scrolled ? "h-8 w-28" : "h-12 w-40"
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
            className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-r from-brand-primary via-white to-brand-primary bg-[length:200%_auto] animate-shimmer ${
              scrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100 mt-1"
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
          <a
            href="https://wa.me/628131573731"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-primary hover:bg-brand-accent text-black px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            <Phone size={18} />
            Reservasi
          </a>
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
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-brand-primary py-2 font-medium tracking-wide border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/628131573731"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary text-center text-black px-6 py-3 rounded-lg font-bold mt-4"
              >
                Reservasi Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
