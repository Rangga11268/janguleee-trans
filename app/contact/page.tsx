"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    passengers: "",
    destination: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo Janguleee Trans, saya ingin reservasi:
Nama: ${formData.name}
Tanggal: ${formData.date}
Jumlah Penumpang: ${formData.passengers}
Tujuan: ${formData.destination}

Mohon info ketersediaan unit. Terima kasih.`;

    const whatsappUrl = `https://wa.me/628131573731?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="bg-brand-slate min-h-screen">
      <Navbar />

      <section className="pt-32 pb-24 px-4 min-h-screen flex flex-col justify-center">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left: Heading & Info */}
            <div className="bg-black text-white p-10 md:p-16 rounded-[3rem] flex flex-col justify-between min-h-[500px]">
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white mb-8 transition-colors"
                >
                  <ArrowLeft size={16} /> Back Home
                </Link>
                <h1 className="text-6xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-6">
                  LET'S
                  <br />
                  TALK.
                </h1>
                <p className="text-xl text-white/60 max-w-sm">
                  Plan your trip with us. Fast response, premium service.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">
                    WhatsApp
                  </span>
                  <span className="text-xl font-bold">+62 813-1573-731</span>
                </div>
                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <span className="block text-xs uppercase tracking-widest text-white/50 mb-1">
                    Location
                  </span>
                  <span className="text-xl font-bold">Sumedang, West Java</span>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 md:p-16 rounded-[3rem] border border-black/5"
            >
              <h2 className="text-2xl font-bold mb-8 text-black">
                Booking Details
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 font-bold text-black focus:outline-none focus:ring-2 focus:ring-black/5 placeholder:text-gray-300 transition-all"
                    placeholder="e.g. Budi Santoso"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 font-bold text-black focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                      Passengers
                    </label>
                    <input
                      type="number"
                      name="passengers"
                      value={formData.passengers}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 font-bold text-black focus:outline-none focus:ring-2 focus:ring-black/5 placeholder:text-gray-300 transition-all"
                      placeholder="30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                    Destination
                  </label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-4 font-bold text-black focus:outline-none focus:ring-2 focus:ring-black/5 placeholder:text-gray-300 transition-all"
                    placeholder="e.g. Yogyakarta"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-primary text-white font-bold py-5 rounded-xl hover:bg-black transition-colors flex justify-center items-center gap-2 group"
                >
                  Send to WhatsApp
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
