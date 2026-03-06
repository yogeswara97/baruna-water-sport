import Footer from "@/components/Footer";
import Gallery from "@/components/Galery";
import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import Products from "@/components/Products";

export default function Home() {
  return (
    <main className=" text-white min-h-[60vh] flex flex-col">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 lg:px-16 py-6 text-xs md:text-sm tracking-widest">

        <div className="font-bold text-lg">BARUNA WATER SPORT</div>

        {/* menu desktop */}
        <div className="hidden lg:flex gap-10 text-gray-200">
          <a className="hover:text-white">HOME</a>
          <a className="hover:text-white">PAGES</a>
          <a className="hover:text-white">BLOG</a>
        </div>

      </nav>

      
      <Hero />

      <Gallery />
      <Products />
      <MapSection />
      <Footer />

    </main>
  )
}