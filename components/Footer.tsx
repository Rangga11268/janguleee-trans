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
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white pt-24 pb-8 border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* BIG FOOTER CTA */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-24 gap-12">
          <div>
            <h2 className="text-[12vw] lg:text-[10rem] font-black leading-[0.8] tracking-tighter text-white/20 select-none">
              JANG
              <br />
              ULEEE
            </h2>
          </div>

          <div className="lg:mb-12">
            <h3 className="text-2xl font-bold mb-6">Ready to ride?</h3>
            <a
              href="https://wa.me/628131573731"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 bg-brand-primary text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-white hover:text-black"
            >
              Start Booking
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
          <div className="col-span-1 md:col-span-2">
            <span className="font-bold text-lg tracking-tight block mb-4">
              Janguleee Trans
            </span>
            <p className="text-gray-500 max-w-xs text-sm">
              Premium bus charter service based in Sumedang, Indonesia. Serving
              Java & Bali with style.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm text-gray-500 mb-4 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a
                  href="#home"
                  className="hover:text-brand-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#fleet"
                  className="hover:text-brand-primary transition-colors"
                >
                  Fleet
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-brand-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-brand-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-gray-500 mb-4 uppercase tracking-widest">
              Connect
            </h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>
                <a
                  href="#"
                  className="hover:text-brand-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-primary transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/628131573731"
                  className="hover:text-brand-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center pt-24 mt-4 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
          <span>&copy; {new Date().getFullYear()} Janguleee.</span>
          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
