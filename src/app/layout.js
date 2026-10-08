import { Poppins } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Jipo POS - #1 Modern Laundry POS & Operations Management System",
  description:
    "The complete all-in-one laundry POS for wash & fold, dry cleaning, sneaker care, and multi-branch chains. 15-second fast checkout, flexible discount engine, automated WhatsApp alerts, and 100% white-glove setup assistance!",
  keywords: [
    "laundry POS",
    "laundromat software",
    "dry cleaner POS",
    "laundry management system",
    "jipo pos",
    "laundry receipt whatsapp",
    "lifetime laundry software",
    "laundry saas",
  ],
  openGraph: {
    title: "Jipo POS - Modern Laundry POS & Operations Software",
    description:
      "Built by laundry operators for laundry operators. Lightning-fast checkout, dynamic promos & 100% assisted setup!",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-teal-500 selection:text-white">
        {/* Top Announcement Bar */}
        <div className="bg-[#09090B] text-slate-200 text-xs py-2 px-4 border-b border-slate-800 text-center relative z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider">
              ✨ Special Offer
            </span>
            <span className="text-slate-300">
              <strong>100% Free Initial Price List Setup &amp; Staff Training</strong> for early signups this month!
            </span>
            <Link href="/pricing" className="font-bold text-emerald-400 underline hover:text-emerald-300 transition-colors inline-flex items-center gap-1">
              View Plans &rarr;
            </Link>
          </div>
        </div>

        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
