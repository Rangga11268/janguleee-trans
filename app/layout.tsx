import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import NoiseTexture from "@/components/NoiseTexture";
import Preloader from "@/components/Preloader";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
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
    <html lang="id" className={`${playfair.variable}`}>
      <body className="antialiased bg-black text-white selection:bg-brand-primary selection:text-black">
        <Preloader />
        <SmoothScroll />
        <CustomCursor />
        <NoiseTexture />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
