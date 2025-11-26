"use client";

import { motion } from "framer-motion";
import { Check, Users, Tv, Music, Wifi, Briefcase } from "lucide-react";
import Image from "next/image";

const fleets = [
  {
    name: "Big Bus (Standard)",
    body: "Jetbus 5",
    capacity: "50 Seat",
    image: "/assets/img/janguleebus2.jpg",
    facilities: ["Full AC", "Audio System", "Karaoke", "Bagasi Luas"],
    purpose: "Wisata rombongan besar, Study Tour",
    highlight: "Kapasitas Maksimal",
  },
  {
    name: "Big Bus (Executive)",
    body: "Jetbus 5",
    capacity: "32 Seat",
    image: "/assets/img/janguleee.jpg",
    facilities: [
      "Legrest (Sandaran Kaki)",
      "Android TV",
      "Premium Audio",
      "USB Charger",
    ],
    purpose: "Perjalanan jarak jauh, VIP",
    highlight: "Kenyamanan Premium",
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-20 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark dark:text-white">
            Armada <span className="text-brand-primary">Kami</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Pilihan armada terbaik dengan fasilitas lengkap untuk menunjang
            kenyamanan perjalanan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {fleets.map((fleet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 dark:border-zinc-800"
            >
              <div className="relative h-64 w-full overflow-hidden group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${fleet.image}')` }}
                />
                <div className="absolute top-4 right-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  {fleet.body}
                </div>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-1">
                      {fleet.name}
                    </h3>
                    <p className="text-brand-primary font-medium text-sm">
                      {fleet.highlight}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-gray-100 dark:bg-zinc-800 px-3 py-1 rounded-lg">
                    <Users size={16} className="text-gray-500" />
                    <span className="font-bold text-brand-dark dark:text-white">
                      {fleet.capacity}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                    Fasilitas
                  </div>
                  <ul className="grid grid-cols-2 gap-3">
                    {fleet.facilities.map((facility, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm"
                      >
                        <Check
                          size={16}
                          className="text-brand-primary flex-shrink-0"
                        />
                        {facility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-zinc-800">
                  <p className="text-sm text-gray-500 mb-4">
                    Cocok untuk:{" "}
                    <span className="text-brand-dark dark:text-gray-300 font-medium">
                      {fleet.purpose}
                    </span>
                  </p>
                  <a
                    href={`https://wa.me/628131573731?text=Halo%20Janguleee%20Trans,%20saya%20ingin%20tanya%20tentang%20unit%20${fleet.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-brand-dark hover:bg-brand-primary text-white py-3 rounded-xl font-semibold transition-colors"
                  >
                    Tanya Ketersediaan
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
