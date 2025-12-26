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
  metadataBase: new URL("https://janguleee-trans.vercel.app"),
  title: {
    default: "Janguleee Trans | Sewa Bus Pariwisata Mewah Sumedang & Bandung",
    template: "%s | Janguleee Trans",
  },
  description:
    "Solusi sewa bus pariwisata terbaik di Sumedang, Bandung, & Majalengka. Armada Jetbus 5 terbaru, fasilitas premium (Karaoke/Toilet/Legrest), harga kompetitif, dan pelayanan bintang 5. Booking sekarang untuk perjalanan aman & nyaman.",
  keywords: [
    "Sewa Bus Sumedang",
    "Bus Pariwisata Bandung",
    "Rental Bus Majalengka",
    "Sewa Bus Jetbus 5",
    "Harga Sewa Bus Pariwisata",
    "Janguleee Trans",
    "Bus Mewah Sumedang",
    "Travel Sumedang",
    "PO Bus Pariwisata Terbaik",
  ],
  authors: [{ name: "Janguleee Trans" }],
  creator: "Janguleee Trans",
  publisher: "Janguleee Trans",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Janguleee Trans - Sewa Bus Pariwisata Premium",
    description:
      "Nikmati perjalanan wisata tak terlupakan dengan armada Jetbus 5 terbaru dari Janguleee Trans. Fasilitas lengkap, kru ramah, harga bersahabat.",
    url: "https://janguleee-trans.vercel.app",
    siteName: "Janguleee Trans",
    images: [
      {
        url: "/assets/img/janguleebus2.jpg", // Pastikan gambar ini ada
        width: 1200,
        height: 630,
        alt: "Janguleee Trans Bus Fleet",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
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
              image: [
                "https://janguleee-trans.vercel.app/assets/img/janguleebus2.jpg",
                "https://janguleee-trans.vercel.app/icon.png",
              ],
              description:
                "Layanan sewa bus pariwisata premium di Sumedang dengan armada Jetbus 5 terbaru. Melayani rute Jawa, Bali, Lombok, Sumatera.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Jalan Raya Sumedang - Cirebon",
                addressLocality: "Sumedang",
                addressRegion: "Jawa Barat",
                postalCode: "45363",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -6.838383, // Koordinat Sumedang (Perkiraan, bisa disesuaikan)
                longitude: 107.927246,
              },
              url: "https://janguleee-trans.vercel.app",
              telephone: "+628131573731",
              priceRange: "Rp2.000.000 - Rp50.000.000",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "00:00",
                  closes: "23:59",
                },
              ],
              sameAs: [
                "https://instagram.com/janguleee_trans",
                "https://facebook.com/janguleee_trans",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
