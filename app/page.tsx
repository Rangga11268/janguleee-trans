import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Fleet from "@/components/Fleet";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Fleet />
      <Services />
      <Footer />
    </main>
  );
}
