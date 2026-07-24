"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Agisna Dewi",
    text: "Kursinya nyaman bangett, staffnya ramah, harganya terjangkau. Pilihan favorit buat yang mau berwisata dengan aman dan nyaman 🥰",
  },
  {
    name: "alvina nr",
    text: "Pelayanan sangat baik, bus bersih, dan sangat nyaman. Recommended untuk perjalanan jauh rombongan maupun pribadi.",
  },
  {
    name: "Amanda venny",
    text: "Nyaman banget, bus nya bagus dan bersih. Pasti berlangganan terus 🫰🏻",
  },
  {
    name: "Abdul Naffi",
    text: "Pelayanan terbaik, busnya bersih dan nyaman. Supirnya berpengalaman dan sangat ramah, cocok buat liburan bareng keluarga.",
  },
  {
    name: "Aulia Indri",
    text: "Pelayanannya mantap, mobilnya bersih, nyetirnya juga nyaman. Oke mantap.",
  },
  {
    name: "Dadan Sujana",
    text: "Fasilitas dan pelayanan memuaskan. Crew ramah.",
  },
  {
    name: "Diah Intan",
    text: "Keren banget busnya !!!",
  },
  {
    name: "Misbah Priagung",
    text: "Bis jangulee harus di banyakin lagi",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#f8f9fa] overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="text-6xl md:text-8xl font-black text-black leading-tight tracking-tighter mb-4">
            GOOGLE{" "}
            <span className="text-[#008D85] block md:inline">REVIEWS.</span>
          </h2>
          <p className="text-xl text-gray-500 font-medium">
            Apa kata pelanggan nyata tentang Janguleee Trans.
          </p>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-6 w-max animate-scroll">
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="w-[350px] md:w-[400px] bg-white p-6 md:p-8 rounded-[2rem] border border-black/5 shadow-sm shrink-0 flex flex-col justify-between"
            >
              <p className="text-base md:text-lg font-bold text-black mb-4 leading-relaxed">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-bold text-black text-sm">{r.name}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, si) => (
                    <Star
                      key={si}
                      size={14}
                      className="fill-[#008D85] text-[#008D85]"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}