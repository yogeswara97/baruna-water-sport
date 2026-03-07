import Footer from "@/components/Footer";
import GallerySection from "@/components/Galery";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/Products";
import Background from "@/components/ui/Background";
import WhatsAppIcon from "@/components/WhatsAppIcon";


export default function Page() {
  return (
    <main className="relative min-h-screen bg-[#001a2e] text-white">
      <Background />
      <Hero />

      <GallerySection />
      <ProductsSection />
      <Footer />
      <WhatsAppIcon />
    </main>
  );
}