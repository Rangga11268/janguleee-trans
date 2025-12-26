"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Apa saja fasilitas yang tersedia di armada Janguleee?",
    answer:
      "Tergantung tipe unit. Untuk Premium R25 & Jetbus 5, kami menyediakan AC Dingin, Karaoke Android TV, Bantal & Selimut (untuk perjalanan jauh), Dispenser Air, dan Port Charger di setiap seat. Beberapa unit VIP memiliki fasilitas Toilet dan Legrest.",
  },
  {
    question: "Apakah harga sewa sudah termasuk BBM & Tol?",
    answer:
      "Harga yang kami berikan biasanya sudah termasuk BBM dan Jasa Crew (Sopir & Kernet). Biaya Tol, Parkir, Penyeberangan Ferry, dan Tips Crew/Makan Crew biasanya ditanggung penyewa. Namun, kami juga menyediakan paket ALL IN jika Anda tidak ingin repot.",
  },
  {
    question: "Bagaimana cara booking dan pembayarannya?",
    answer:
      "Sangat mudah! Hubungi admin via WhatsApp, pilih tanggal dan unit, lalu lakukan DP (Down Payment) minimal 30% untuk mengunci jadwal. Pelunasan bisa dilakukan H-3 sebelum keberangkatan.",
  },
  {
    question: "Melayani rute kemana saja?",
    answer:
      "Kami melayani rute Pariwisata ke seluruh Pulau Jawa, Bali, hingga Lombok & Sumatera. Start point (penjemputan) fleksibel area Sumedang, Bandung, Majalengka, Cirebon, dan sekitarnya.",
  },
  {
    question: "Apakah bisa refund jika batal?",
    answer:
      "Jika pembatalan dilakukan jauh hari (H-14), DP bisa dikembalikan dengan potongan administrasi. Pembatalan mendadak (H-3) akan dikenakan charge cancellation fee sesuai kebijakan perusahaan.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-brand-slate relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-4 rounded-full bg-white mb-6 shadow-sm">
            <HelpCircle size={32} className="text-[#008D85]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tighter">
            FREQUENTLY ASKED <span className="text-[#008D85]">QUESTIONS.</span>
          </h2>
          <p className="text-gray-500 font-medium text-lg max-w-xl mx-auto">
            Semua yang perlu Anda ketahui sebelum memesan perjalanan impian Anda
            bersama Janguleee Trans.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white rounded-[2rem] border overflow-hidden transition-all duration-300 ${
                activeIndex === i
                  ? "border-[#008D85] shadow-lg shadow-[#008D85]/10"
                  : "border-transparent hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full p-8 flex items-center justify-between text-left gap-4"
              >
                <span
                  className={`text-xl font-bold transition-colors ${
                    activeIndex === i ? "text-[#008D85]" : "text-black"
                  }`}
                >
                  {faq.question}
                </span>
                <span
                  className={`p-2 rounded-full transition-colors ${
                    activeIndex === i
                      ? "bg-[#008D85] text-white"
                      : "bg-gray-100 text-black"
                  }`}
                >
                  {activeIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 pt-0 text-gray-500 leading-relaxed font-medium text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
