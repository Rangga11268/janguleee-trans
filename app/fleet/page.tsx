import PageHeader from "@/components/PageHeader";
import FleetComponent from "@/components/Fleet";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function FleetPage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <PageHeader
        title="Armada Kami"
        subtitle="Pilihan Unit Terbaik Untuk Perjalanan Anda"
        image="/assets/img/janguleebus2.jpg"
      />

      <FleetComponent />

      <section className="py-20 bg-brand-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8 font-serif">
            Galeri Armada
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden">
              <img
                src="/assets/img/janguleebus1.jpg"
                alt="Gallery 1"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden">
              <img
                src="/assets/img/janguleebus2.jpg"
                alt="Gallery 2"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden">
              <img
                src="/assets/img/janguleee.jpg"
                alt="Gallery 3"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
