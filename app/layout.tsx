import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/lib/smooth-scroll";
import ScrollProgress from "@/components/common/ScrollProgress";
import GlobalBackground from "@/components/common/GlobalBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: {
    default: "Rajat King - Natural Food Products",
    template: "%s | Rajat King",
  },
  description:
    "Buy premium Multigrain Atta, Moringa Powder and Spices in Varanasi. 100% natural and chemical-free products.",

  keywords: [
    "multigrain atta Varanasi",
    "moringa powder India",
    "organic spices Varanasi",
    "healthy food products",
  ],

  openGraph: {
    title: "Rajat King",
    description: "Natural & Healthy Food Products",
    url: "https://your-domain.com",
    siteName: "Rajat King",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <GlobalBackground />
        <SmoothScroll />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10"> {/* Ensure content is above background */}
          {children}
        </main>
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Rajat King",
              image: "/images/atta.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Varanasi",
                addressCountry: "IN",
              },
              telephone: "+91-7652093533",
            }),
          }}
        />
      </body>
    </html>
  );
}
