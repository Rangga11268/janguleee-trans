import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SmoothScroll from "@/components/SmoothScroll";
import NoiseTexture from "@/components/NoiseTexture";
import Preloader from "@/components/Preloader";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Janguleee Trans - Sewa Bus Pariwisata Mewah",
  description:
    "Layanan sewa bus pariwisata premium dengan fasilitas terlengkap dan armada terbaru.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${outfit.variable} scroll-smooth`}>
      <body className="antialiased bg-background text-foreground selection:bg-brand-primary selection:text-white">
        <Preloader />
        <SmoothScroll />
        <NoiseTexture />
        {children}
        <FloatingWhatsApp />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Jang Uleee Bungsuna Transport",
              image: "https://janguleee-trans.com/icon.png",
              description:
                "Layanan sewa bus pariwisata premium di Sumedang dengan armada Jetbus 5 terbaru.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sumedang",
                addressRegion: "Jawa Barat",
                addressCountry: "ID",
              },
              url: "https://janguleee-trans.com",
              telephone: "+628131573731",
              priceRange: "$$",
            }),
          }}
        />
      </body>
    </html>
  );
}
