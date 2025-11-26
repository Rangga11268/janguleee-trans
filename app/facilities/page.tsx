import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CheckCircle } from "lucide-react";

const facilityImages = [
  {
    src: "/assets/img/fasilitas/kursipremium.jpg",
    title: "Kursi Premium",
    desc: "Kenyamanan maksimal dengan legrest",
  },
  {
    src: "/assets/img/fasilitas/kursipremium2.jpg",
    title: "Interior Mewah",
    desc: "Desain elegan dan modern",
  },
  {
    src: "/assets/img/fasilitas/TvDepan.jpg",
    title: "Android TV Depan",
    desc: "Hiburan sepanjang perjalanan",
  },
  {
    src: "/assets/img/fasilitas/TvBelakangjpg.jpg",
    title: "TV Tengah",
    desc: "Menjangkau seluruh penumpang",
  },
  {
    src: "/assets/img/fasilitas/lampudisco.jpg",
    title: "Lampu Disco",
    desc: "Suasana meriah untuk karaoke",
  },
  {
    src: "/assets/img/fasilitas/speaker1.jpg",
    title: "Premium Audio",
    desc: "Kualitas suara jernih dan dentuman bass",
  },
  {
    src: "/assets/img/fasilitas/speaker2.jpg",
    title: "Sound System",
    desc: "Full entertainment system",
  },
  {
    src: "/assets/img/fasilitas/miniipad.jpg",
    title: "Control Panel",
    desc: "Kontrol mudah untuk hiburan",
  },
  {
    src: "/assets/img/fasilitas/dispenser.jpg",
    title: "Dispenser",
    desc: "Air minum panas dan dingin",
  },
  {
    src: "/assets/img/fasilitas/coolbox.jpg",
    title: "Coolbox",
    desc: "Menjaga minuman tetap dingin",
  },
  {
    src: "/assets/img/fasilitas/apar.jpg",
    title: "APAR",
    desc: "Alat Pemadam Api Ringan untuk keamanan",
  },
  {
    src: "/assets/img/fasilitas/pemecahkacadarurat.jpg",
    title: "Palu Pemecah Kaca",
    desc: "Standar keselamatan darurat",
  },
];

export default function FacilitiesPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <PageHeader
        title="Fasilitas Armada"
        subtitle="Kenyamanan & Keamanan Tanpa Kompromi"
        image="/assets/img/fasilitas/kursipremium.jpg"
      />

      <section className="py-24 bg-brand-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 font-serif">
              Galeri <span className="text-brand-primary">Fasilitas</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Setiap armada kami dilengkapi dengan fasilitas premium untuk
              menjamin kenyamanan dan keselamatan Anda selama perjalanan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">
            {facilityImages.map((item, index) => (
              <div
                key={index}
                className={`group relative rounded-3xl overflow-hidden border border-white/5 hover:border-brand-primary/50 transition-all duration-700 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)] ${
                  index === 0 || index === 7
                    ? "md:col-span-2 md:row-span-2"
                    : index === 3 || index === 4
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-2">
                    <div className="flex items-center gap-2 text-brand-primary text-xs font-bold uppercase tracking-wider">
                      <CheckCircle size={14} />
                      <span>Premium Feature</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-serif group-hover:text-brand-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 transform translate-y-4 group-hover:translate-y-0">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
