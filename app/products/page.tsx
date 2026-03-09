import ProductCard from "@/components/ui/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function ProductsPage() {
  return (
    <section className="relative py-8 px-6 sm:px-10 lg:px-20 overflow-hidden">

      <div className="">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-yellow-300" />
              <span className="text-[0.6rem] tracking-[0.35em] text-yellow-300 uppercase font-semibold">Packages</span>
            </div>
            <h2 className="font-bebas text-[clamp(2.5rem,6vw,5rem)] leading-none text-[#e0f7ff] m-0">
              CHOOSE YOUR <span className="text-yellow-300">RIDE</span>
            </h2>
          </div>
          <p className="text-sm font-light text-blue-200/55 max-w-xs leading-relaxed">
            All packages include safety equipment, briefing, and an experienced instructor by your side.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>

    </section>
  );
}