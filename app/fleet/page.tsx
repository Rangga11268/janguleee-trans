import PageHeader from "@/components/PageHeader";
import FleetComponent from "@/components/Fleet";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SpotlightCard from "@/components/SpotlightCard";
import Image from "next/image";

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

      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Noise & Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-primary/5 via-black to-black opacity-50" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm border-b border-brand-primary pb-1 mb-4 inline-block">
              Galeri Eksklusif
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sudut <span className="text-brand-primary">Kemewahan</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
              Intip lebih dekat detail interior dan eksterior armada premium
              kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Gallery Item 1 - Large */}
            <div className="md:col-span-2 row-span-1 md:row-span-2">
              <SpotlightCard className="h-full w-full p-0 overflow-hidden group">
                <Image
                  src="/assets/img/janguleebus2.jpg"
                  alt="Exterior Jetbus 5"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Jetbus 5 Exterior
                    </h3>
                    <p className="text-gray-300">Desain aerodinamis modern</p>
                  </div>
                </div>
              </SpotlightCard>
            </div>

            {/* Gallery Item 2 */}
            <SpotlightCard className="h-full w-full p-0 overflow-hidden group">
              <Image
                src="/assets/img/peremium/R25.jpg"
                alt="Premium R25"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Premium R25</h3>
                </div>
              </div>
            </SpotlightCard>

            {/* Gallery Item 3 */}
            <SpotlightCard className="h-full w-full p-0 overflow-hidden group">
              <Image
                src="/assets/img/peremium/Kursi Peremium.jpg"
                alt="Interior Luxury"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Luxury Interior
                  </h3>
                </div>
              </div>
            </SpotlightCard>

            {/* Gallery Item 4 */}
            <SpotlightCard className="h-full w-full p-0 overflow-hidden group">
              <Image
                src="/assets/img/peremium/Toilet.jpg"
                alt="Fasilitas Toilet"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Clean Toilet</h3>
                </div>
              </div>
            </SpotlightCard>

            {/* Gallery Item 5 */}
            <div className="md:col-span-2">
              <SpotlightCard className="h-full w-full p-0 overflow-hidden group">
                <Image
                  src="/assets/img/peremium/Dispenser.jpg"
                  alt="Fasilitas Dispenser"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Fasilitas Lengkap
                    </h3>
                    <p className="text-gray-300">
                      Dispenser air panas & dingin untuk kenyamanan Anda
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
