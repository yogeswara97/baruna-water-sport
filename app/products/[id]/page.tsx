"use client";

import { useState } from "react";
import { PRODUCTS, Product } from "@/data/products";

// ── Icons ────────────────────────────────────────────────────────────────────
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-4 h-4 ${filled ? "text-yellow-300" : "text-blue-900/40"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    className={`w-5 h-5 text-cyan-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>
);

const RefreshIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);

const WaveIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5c1.25-1 2.5-1 3.75 0s2.5 1 3.75 0 2.5-1 3.75 0 2.5 1 3.75 0" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9c1.25-1 2.5-1 3.75 0s2.5 1 3.75 0 2.5-1 3.75 0 2.5 1 3.75 0" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 18c1.25-1 2.5-1 3.75 0s2.5 1 3.75 0 2.5-1 3.75 0 2.5 1 3.75 0" />
  </svg>
);

// ── Accordion Item ────────────────────────────────────────────────────────────
type AccordionItemProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  accentColor: string;
};

function AccordionItem({ title, icon, children, defaultOpen = false, accentColor }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`border ${open ? "border-cyan-400/40" : "border-white/8"} rounded-xl overflow-hidden transition-colors duration-300`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-200 group"
      >
        <div className="flex items-center gap-3">
          <span className={`${accentColor} opacity-80 group-hover:opacity-100 transition-opacity`}>{icon}</span>
          <span className="text-sm font-semibold tracking-wide text-[#e0f7ff]/90 uppercase">{title}</span>
        </div>
        <ChevronIcon open={open} />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pt-3 border-t border-white/8 text-sm text-blue-200/60 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Related Card ─────────────────────────────────────────────────────────────
function RelatedCard({ product, onClick }: { product: Product; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col border ${product.border} rounded-xl overflow-hidden bg-white/[0.03] hover:bg-white/[0.06] ${product.glow} transition-all duration-300 text-left w-full`}
    >
      <div className="relative h-32 overflow-hidden">
        <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001a2e]/80 to-transparent" />
        <span className={`absolute top-2 left-2 text-[0.55rem] font-bold tracking-widest px-2 py-0.5 rounded-sm ${product.tagColor}`}>
          {product.tag}
        </span>
      </div>
      <div className={`h-0.5 ${product.accentBar}`} />
      <div className="p-3">
        <p className="text-xs font-semibold text-[#e0f7ff]/80 leading-snug line-clamp-2">{product.name}</p>
        <p className="text-cyan-400 text-xs font-bold mt-1">{product.discountPrice}</p>
      </div>
    </button>
  );
}

// ── Main Detail Page ──────────────────────────────────────────────────────────
export default function ProductDetailPage({ productId = 1, onBack }: { productId?: number; onBack?: () => void }) {
  const [selectedId, setSelectedId] = useState(productId);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const product = PRODUCTS.find((p) => p.id === selectedId) ?? PRODUCTS[0];
  const related = PRODUCTS.filter((p) => p.id !== product.id);
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(product.rating));

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Accordion data per-product
  const specs: Record<number, { label: string; value: string }[]> = {
    1: [
      { label: "Resolution", value: "4K UHD @ 60fps" },
      { label: "Waterproof Depth", value: "Up to 40m" },
      { label: "Battery Life", value: "120 minutes" },
      { label: "Storage", value: "MicroSD up to 256GB" },
      { label: "Connectivity", value: "Wi-Fi + Bluetooth 5.0" },
      { label: "Weight", value: "132g (with housing)" },
    ],
    2: [
      { label: "Mask Material", value: "Tempered glass lens, silicone skirt" },
      { label: "Fin Size", value: "S / M / L / XL" },
      { label: "Snorkel Type", value: "Dry-top with purge valve" },
      { label: "Bag Included", value: "Yes – mesh carry bag" },
      { label: "Suitable Depth", value: "Surface to 5m" },
      { label: "Colors", value: "Blue, Black, Clear" },
    ],
    3: [
      { label: "Length", value: "6'2\" (188cm)" },
      { label: "Width", value: "20.5 inches" },
      { label: "Thickness", value: "2.75 inches" },
      { label: "Volume", value: "32L" },
      { label: "Material", value: "EPS foam + epoxy glass" },
      { label: "Fins", value: "Thruster setup (3-fin)" },
    ],
    4: [
      { label: "Compatible Size", value: "Up to 6.9\" phones" },
      { label: "Waterproof Rating", value: "IPX8 – up to 30m" },
      { label: "Floating Capacity", value: "Yes – airbag design" },
      { label: "Touchscreen Use", value: "Yes – while sealed" },
      { label: "Lanyard", value: "Included" },
      { label: "Colors", value: "Clear, Orange, Blue" },
    ],
  };

  return (
    <section className="relative min-h-screen py-10 px-6 sm:px-10 lg:px-20 overflow-hidden">

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-yellow-300/4 blur-[100px]" />
      </div>

      {/* Back */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-xs tracking-widest uppercase text-blue-200/50 hover:text-cyan-400 transition-colors mb-10 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">
          <ArrowLeftIcon />
        </span>
        Back to products
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 mb-16">

        {/* ── LEFT: Image ──────────────────────────────────────── */}
        <div className="relative">
          {/* Tag */}
          <span className={`absolute top-4 left-4 z-10 text-[0.6rem] font-bold tracking-widest px-3 py-1 rounded-sm ${product.tagColor}`}>
            {product.tag}
          </span>

          {/* Discount badge */}
          <span className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-bold px-3 py-1 rounded-full">
            {product.discount}
          </span>

          <div className={`relative rounded-2xl overflow-hidden border ${product.border} ${product.glow} transition-all duration-500`}>
            <img
              src={product.img}
              alt={product.name}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001a2e]/60 via-transparent to-transparent" />
            <div className={`absolute bottom-0 left-0 right-0 h-1 ${product.accentBar}`} />
          </div>

          {/* Category chip */}
          <div className="mt-4 flex items-center gap-3">
            <div className="w-6 h-px bg-cyan-400/60" />
            <span className="text-[0.6rem] tracking-[0.3em] text-cyan-400/70 uppercase font-semibold">
              {product.category}
            </span>
          </div>
        </div>

        {/* ── RIGHT: Info ──────────────────────────────────────── */}
        <div className="flex flex-col gap-6">

          {/* Name + Rating */}
          <div>
            <h1 className="font-bebas text-[clamp(2rem,5vw,3.5rem)] leading-none text-[#e0f7ff] mb-3">
              {product.name}
            </h1>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {stars.map((filled, i) => <StarIcon key={i} filled={filled} />)}
              </div>
              <span className="text-yellow-300 text-sm font-bold">{product.rating}</span>
              <span className="text-blue-200/40 text-xs">· {product.stock} in stock</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-end gap-3">
            <span className="font-bebas text-[clamp(1.8rem,4vw,2.8rem)] leading-none text-cyan-400">
              {product.discountPrice}
            </span>
            <span className="text-blue-200/35 line-through text-sm mb-1">{product.originalPrice}</span>
          </div>

          {/* Desc */}
          <p className="text-sm text-blue-200/55 leading-relaxed border-l-2 border-cyan-400/40 pl-4">
            {product.desc}
          </p>

          {/* Qty + Add to Cart */}
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center border border-white/10 rounded-lg overflow-hidden bg-white/[0.03]">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-4 py-3 text-blue-200/60 hover:text-white hover:bg-white/5 transition-colors text-lg leading-none"
              >−</button>
              <span className="px-5 py-3 text-sm font-bold text-[#e0f7ff] min-w-[3rem] text-center border-x border-white/10">
                {qty}
              </span>
              <button
                onClick={() => setQty(Math.min(product.stock, qty + 1))}
                className="px-4 py-3 text-blue-200/60 hover:text-white hover:bg-white/5 transition-colors text-lg leading-none"
              >+</button>
            </div>

            <button
              onClick={handleAddToCart}
              className={`flex-1 min-w-[160px] py-3 px-6 rounded-lg font-semibold text-sm tracking-widest uppercase transition-all duration-300 ${
                added
                  ? "bg-green-400/20 border border-green-400/50 text-green-400"
                  : `${product.accentBar.replace("bg-", "bg-")} text-[#001a2e] hover:opacity-90 hover:scale-[1.02] active:scale-95`
              }`}
            >
              {added ? "✓ Added!" : "Add to Cart"}
            </button>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {[
              { icon: <ShieldIcon />, label: "Guaranteed", sub: "Authentic product" },
              { icon: <TruckIcon />, label: "Fast Ship", sub: "1-3 business days" },
              { icon: <RefreshIcon />, label: "Easy Return", sub: "7-day policy" },
            ].map(({ icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 p-3 rounded-xl border border-white/8 bg-white/[0.02] text-center">
                <span className="text-cyan-400/70">{icon}</span>
                <span className="text-[0.65rem] font-semibold text-[#e0f7ff]/70 tracking-wide">{label}</span>
                <span className="text-[0.6rem] text-blue-200/35">{sub}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── ACCORDION + RELATED ───────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Accordions */}
        <div className="lg:col-span-2 flex flex-col gap-3">

          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-yellow-300" />
            <span className="text-[0.6rem] tracking-[0.35em] text-yellow-300 uppercase font-semibold">Details</span>
          </div>

          <AccordionItem
            title="Product Specifications"
            icon={<WaveIcon />}
            defaultOpen
            accentColor="text-cyan-400"
          >
            <table className="w-full text-xs">
              <tbody>
                {(specs[product.id] ?? []).map(({ label, value }) => (
                  <tr key={label} className="border-b border-white/5 last:border-0">
                    <td className="py-2 pr-4 text-blue-200/40 font-medium w-1/2">{label}</td>
                    <td className="py-2 text-[#e0f7ff]/70">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </AccordionItem>

          <AccordionItem
            title="What's in the Box"
            icon={<TruckIcon />}
            accentColor="text-yellow-300"
          >
            <ul className="space-y-2">
              {product.id === 1 && ["1× Action Camera", "1× Waterproof Housing", "2× Mounting Brackets", "1× USB-C Cable", "1× User Manual", "1× Carrying Bag"].map(item => (
                <li key={item} className="flex items-center gap-2"><span className="text-cyan-400">›</span>{item}</li>
              ))}
              {product.id === 2 && ["1× Full-Face Snorkel Mask", "1× Pair of Fins", "1× Dry-Top Snorkel Tube", "1× Mesh Carry Bag", "1× Anti-fog Spray"].map(item => (
                <li key={item} className="flex items-center gap-2"><span className="text-yellow-300">›</span>{item}</li>
              ))}
              {product.id === 3 && ["1× Performance Surfboard", "3× Fins (Thruster Set)", "1× Fin Key", "1× Deck Grip Pad", "1× Board Sock Cover"].map(item => (
                <li key={item} className="flex items-center gap-2"><span className="text-sky-400">›</span>{item}</li>
              ))}
              {product.id === 4 && ["1× Waterproof Phone Case", "1× Neck Lanyard", "1× Wrist Strap", "1× Cleaning Cloth"].map(item => (
                <li key={item} className="flex items-center gap-2"><span className="text-teal-400">›</span>{item}</li>
              ))}
            </ul>
          </AccordionItem>

          <AccordionItem
            title="Safety & Usage Guide"
            icon={<ShieldIcon />}
            accentColor="text-cyan-400"
          >
            <div className="space-y-3">
              <p>Always inspect the equipment before use. Check for cracks, seal integrity, and strap condition.</p>
              <p>Never exceed the rated depth or waterproof limit. Rinse with fresh water after every saltwater session.</p>
              <p>Store in a cool, dry place away from direct UV exposure to maintain material integrity.</p>
              <p className="text-cyan-400/70 text-xs border-t border-white/8 pt-3">
                ⚠ This product is designed for recreational use. Always follow local safety regulations when used in open water.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem
            title="Shipping & Returns"
            icon={<RefreshIcon />}
            accentColor="text-teal-400"
          >
            <div className="space-y-2.5">
              <div className="flex justify-between text-xs">
                <span className="text-blue-200/40">Standard Delivery</span>
                <span className="text-[#e0f7ff]/70">3–5 business days · Free</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-blue-200/40">Express Delivery</span>
                <span className="text-[#e0f7ff]/70">1–2 business days · IDR 35K</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-blue-200/40">Return Window</span>
                <span className="text-[#e0f7ff]/70">7 days from delivery</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-blue-200/40">Return Condition</span>
                <span className="text-[#e0f7ff]/70">Unused, original packaging</span>
              </div>
              <p className="text-blue-200/35 text-xs border-t border-white/8 pt-3">
                Damaged or defective items qualify for immediate exchange. Contact support within 48h of delivery.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem
            title="Customer Reviews"
            icon={<StarIcon filled />}
            accentColor="text-yellow-300"
          >
            <div className="space-y-4">
              {[
                { name: "Aldi R.", rating: 5, comment: "Incredible quality! Used it for surfing in Bali — performs exactly as described.", date: "2 weeks ago" },
                { name: "Maya S.", rating: 5, comment: "Fast shipping and packaging was super secure. Highly recommend for any water sport.", date: "1 month ago" },
                { name: "Bram T.", rating: 4, comment: "Great product overall. Would love more color options, but performs perfectly.", date: "1 month ago" },
              ].map(({ name, rating, comment, date }) => (
                <div key={name} className="pb-4 border-b border-white/8 last:border-0 last:pb-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-cyan-400/15 border border-cyan-400/20 flex items-center justify-center text-[0.6rem] text-cyan-400 font-bold">
                        {name[0]}
                      </div>
                      <span className="text-xs font-semibold text-[#e0f7ff]/80">{name}</span>
                    </div>
                    <span className="text-[0.6rem] text-blue-200/30">{date}</span>
                  </div>
                  <div className="flex gap-0.5 mb-1.5">
                    {Array.from({ length: 5 }, (_, i) => <StarIcon key={i} filled={i < rating} />)}
                  </div>
                  <p className="text-xs text-blue-200/55">{comment}</p>
                </div>
              ))}
            </div>
          </AccordionItem>

        </div>

        {/* Related Products */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-cyan-400" />
            <span className="text-[0.6rem] tracking-[0.35em] text-cyan-400 uppercase font-semibold">You May Also Like</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {related.map((p) => (
              <RelatedCard
                key={p.id}
                product={p}
                onClick={() => {
                  setSelectedId(p.id);
                  setQty(1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}