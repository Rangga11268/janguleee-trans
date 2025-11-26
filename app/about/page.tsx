import PageHeader from "@/components/PageHeader";
import AboutComponent from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <PageHeader
        title="Tentang Kami"
        subtitle="Mengenal Lebih Dekat Janguleee Trans"
        image="/assets/img/janguleebus1.jpg"
      />

      <AboutComponent />

      <section className="py-20 bg-brand-slate">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 font-serif">
                Visi & Misi
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-brand-primary font-bold text-xl mb-2">
                    Visi
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    Menjadi perusahaan transportasi pariwisata terdepan di Jawa
                    Barat yang mengutamakan keselamatan, kenyamanan, dan
                    kepuasan pelanggan dengan standar pelayanan premium.
                  </p>
                </div>
                <div>
                  <h4 className="text-brand-primary font-bold text-xl mb-2">
                    Misi
                  </h4>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>
                      Menyediakan armada terbaru dengan fasilitas terlengkap.
                    </li>
                    <li>Menjaga standar perawatan kendaraan secara berkala.</li>
                    <li>
                      Memiliki kru yang profesional, ramah, dan berpengalaman.
                    </li>
                    <li>
                      Memberikan harga yang kompetitif dengan pelayanan terbaik.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/img/janguleee.jpg')" }}
              />
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
