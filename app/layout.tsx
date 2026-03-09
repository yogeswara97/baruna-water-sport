import WhatsAppIcon from "@/components/WhatsAppIcon";
import "./globals.css";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Background from "@/components/ui/Background";

export const metadata = {
  title: "Baruna Water Sport Bali",
  description:
    "Baruna Water Sport Bali menyediakan jet ski, banana boat, parasailing dan berbagai aktivitas water sport di Bali.",
  keywords: [
    "baruna water sport",
    "water sport bali",
    "jet ski bali",
    "banana boat bali",
    "parasailing bali"
  ],
};
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="relative bg-[#001a2e] text-white">
        <Background />
        <Navbar />

        {children}

        <Footer />
        <WhatsAppIcon />
      </body>
    </html>
  );
}