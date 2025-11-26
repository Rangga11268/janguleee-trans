"use client";

import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6 tracking-tighter">
              Janguleee<span className="text-brand-primary">Trans</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 font-light">
              Sahabat perjalanan wisata Anda. Melayani dengan sepenuh hati,
              mengutamakan keselamatan dan kenyamanan di setiap kilometer
              perjalanan.
            </p>
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
            <h3 className="text-lg font-bold mb-8 text-white">Menu Utama</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-brand-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-brand-primary rounded-full"></span>
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-brand-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-brand-primary rounded-full"></span>
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#fleet"
                  className="text-gray-400 hover:text-brand-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-brand-primary rounded-full"></span>
                  Armada
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-brand-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-brand-primary rounded-full"></span>
                  Layanan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-white">Hubungi Kami</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-gray-400 group">
                <div className="p-2 bg-white/5 rounded-lg text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-colors">
                  <MapPin size={20} />
                </div>
                <span className="mt-1">Sumedang, Jawa Barat, Indonesia</span>
              </li>
              <li className="flex items-center gap-4 text-gray-400 group">
                <div className="p-2 bg-white/5 rounded-lg text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-colors">
                  <Phone size={20} />
                </div>
                <a
                  href="https://wa.me/628131573731"
                  className="hover:text-white transition-colors"
                >
                  +62 813-1573-731
                </a>
              </li>
              <li className="flex items-center gap-4 text-gray-400 group">
                <div className="p-2 bg-white/5 rounded-lg text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-colors">
                  <Mail size={20} />
                </div>
                <span className="hover:text-white transition-colors">
                  info@janguleeetrans.com
                </span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-lg font-bold mb-8 text-white">Reservasi</h3>
            <p className="text-gray-400 mb-6 font-light">
              Segera rencanakan perjalanan Anda bersama kami. Dapatkan penawaran
              terbaik sekarang.
            </p>
            <a
              href="https://wa.me/628131573731"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-primary hover:bg-brand-accent text-black px-8 py-4 rounded-xl font-bold transition-all w-full text-center shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Jang Uleee Bungsuna Transport. All
            rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-primary transition-colors"
          >
            Kembali ke Atas <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
