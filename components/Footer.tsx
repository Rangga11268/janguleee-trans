"use client";

import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Janguleee<span className="text-brand-primary">Trans</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Sahabat perjalanan wisata Anda. Melayani dengan sepenuh hati,
              mengutamakan keselamatan dan kenyamanan.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-brand-primary/30 pb-2 inline-block">
              Menu
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-brand-primary transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-brand-primary transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#fleet"
                  className="text-gray-400 hover:text-brand-primary transition-colors"
                >
                  Armada
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-brand-primary transition-colors"
                >
                  Layanan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-brand-primary/30 pb-2 inline-block">
              Hubungi Kami
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin
                  size={20}
                  className="text-brand-primary flex-shrink-0 mt-1"
                />
                <span>Sumedang, Jawa Barat, Indonesia</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="text-brand-primary flex-shrink-0" />
                <a
                  href="https://wa.me/628131573731"
                  className="hover:text-white transition-colors"
                >
                  +62 813-1573-731
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={20} className="text-brand-primary flex-shrink-0" />
                <span className="hover:text-white transition-colors">
                  info@janguleeetrans.com
                </span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-brand-primary/30 pb-2 inline-block">
              Reservasi
            </h3>
            <p className="text-gray-400 mb-4">
              Segera rencanakan perjalanan Anda bersama kami.
            </p>
            <a
              href="https://wa.me/628131573731"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-primary hover:bg-brand-accent text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full text-center"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Jang Uleee Bungsuna Transport. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
