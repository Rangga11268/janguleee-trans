import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <PageHeader
        title="Hubungi Kami"
        subtitle="Siap Melayani Kebutuhan Perjalanan Anda"
        image="/assets/img/janguleebus1.jpg"
      />

      <section className="py-24 bg-brand-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 font-serif">
                Informasi Kontak
              </h2>
              <p className="text-gray-400 mb-12 text-lg">
                Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda
                24/7 untuk konsultasi perjalanan dan reservasi.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary flex-shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">
                      Alamat Kantor
                    </h4>
                    <p className="text-gray-400">
                      Sumedang, Jawa Barat, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary flex-shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">
                      Telepon / WhatsApp
                    </h4>
                    <p className="text-gray-400">+62 813-1573-731</p>
                    <p className="text-sm text-brand-primary mt-1">
                      Fast Response 24 Jam
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary flex-shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">Email</h4>
                    <p className="text-gray-400">info@janguleeetrans.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary flex-shrink-0">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-2">
                      Jam Operasional
                    </h4>
                    <p className="text-gray-400">Senin - Minggu: 24 Jam</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-slate p-10 rounded-3xl border border-white/5 hover:border-brand-primary/30 transition-all duration-500 shadow-2xl relative overflow-hidden group">
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-brand-primary/10 transition-colors duration-700" />

              <h3 className="text-3xl font-bold text-white mb-8 font-serif relative z-10">
                Kirim Pesan
              </h3>
              <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group/input">
                    <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within/input:text-brand-primary transition-colors">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-primary/60 focus:ring-1 focus:ring-brand-primary/60 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] placeholder:text-white/20"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div className="group/input">
                    <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within/input:text-brand-primary transition-colors">
                      Nomor WhatsApp
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-primary/60 focus:ring-1 focus:ring-brand-primary/60 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] placeholder:text-white/20"
                      placeholder="08xxx"
                    />
                  </div>
                </div>
                <div className="group/input">
                  <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within/input:text-brand-primary transition-colors">
                    Subjek
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-primary/60 focus:ring-1 focus:ring-brand-primary/60 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] placeholder:text-white/20"
                    placeholder="Tanya Harga / Booking"
                  />
                </div>
                <div className="group/input">
                  <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within/input:text-brand-primary transition-colors">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-primary/60 focus:ring-1 focus:ring-brand-primary/60 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] placeholder:text-white/20 resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-brand-primary to-brand-accent text-black font-bold py-4 rounded-xl transition-all shadow-[0_5px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:scale-[1.01] active:scale-[0.99]"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
