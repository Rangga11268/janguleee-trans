import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"));
const Fleet = dynamic(() => import("@/components/Fleet"));
const Services = dynamic(() => import("@/components/Services"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Contact = dynamic(() => import("@/components/Contact"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Fleet />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}