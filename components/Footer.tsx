"use client";

import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-32 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Massive Background Text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03]">
        <h1 className="text-[20vw] font-bold text-white leading-none whitespace-nowrap">
          JANGULEEE
        </h1>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Massive CTA */}
        <div className="mb-32 border-b border-white/10 pb-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 leading-tight font-serif">
            Siap untuk <br />
            <span className="text-brand-primary">Perjalanan Mewah?</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <a
              href="https://wa.me/628131573731"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-black px-10 py-6 rounded-full font-bold text-xl transition-all hover:bg-brand-primary flex items-center gap-4"
            >
              Booking Sekarang
              <ArrowRight
                size={24}
                className="group-hover:translate-x-2 transition-transform"
              />
            </a>
            <p className="text-gray-400 max-w-md text-lg font-light">
              Hubungi kami sekarang untuk mendapatkan penawaran terbaik untuk
              perjalanan wisata Anda.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8 tracking-tighter">
              Janguleee<span className="text-brand-primary">Trans</span>
              <span className="block text-xs font-normal text-brand-primary tracking-[0.3em] mt-1 opacity-80">
                #BocahIngusan
              </span>
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-black hover:border-brand-primary transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-black hover:border-brand-primary transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-8">
              Menu
            </h4>
            <ul className="space-y-4 text-lg">
              <li>
                <a
                  href="#home"
                  className="text-white hover:text-brand-primary transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white hover:text-brand-primary transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#fleet"
                  className="text-white hover:text-brand-primary transition-colors"
                >
                  Armada
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white hover:text-brand-primary transition-colors"
                >
                  Layanan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-8">
              Kontak
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-300 group">
                <MapPin size={24} className="text-brand-primary shrink-0" />
                <span className="leading-relaxed">
                  Sumedang, Jawa Barat, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-4 text-gray-300 group">
                <Phone size={24} className="text-brand-primary shrink-0" />
                <a
                  href="https://wa.me/628131573731"
                  className="hover:text-white transition-colors"
                >
                  +62 813-1573-731
                </a>
              </li>
              <li className="flex items-center gap-4 text-gray-300 group">
                <Mail size={24} className="text-brand-primary shrink-0" />
                <span className="hover:text-white transition-colors">
                  info@janguleeetrans.com
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-8">
              Legal
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Jang Uleee Bungsuna Transport. All
            rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm text-white hover:text-brand-primary transition-colors uppercase tracking-widest font-bold"
          >
            Kembali ke Atas
            <span className="p-2 rounded-full bg-white/10 group-hover:bg-brand-primary group-hover:text-black transition-all">
              <ArrowUp size={16} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
