export type Product = {
  id: number;
  name: string;
  originalPrice: string;
  discountPrice: string;
  discount: string;
  desc: string;
  category: string;
  rating: number;
  stock: number;
  tag: string;
  tagColor: string;
  border: string;
  glow: string;
  img: string;
  accentBar: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Waterproof Action Camera",
    originalPrice: "IDR 2.500K",
    discountPrice: "IDR 1.950K",
    discount: "-22%",
    desc: "4K waterproof action camera perfect for surfing, diving, and adventure travel.",
    category: "Electronics",
    rating: 4.8,
    stock: 12,
    tag: "BESTSELLER",
    tagColor: "bg-cyan-400 text-[#001a2e]",
    border: "border-cyan-400/30",
    glow: "hover:shadow-[0_0_40px_rgba(0,229,255,0.15)]",
    img: "https://images.unsplash.com/photo-1477160814815-7f4479b86c97?w=600&q=80",
    accentBar: "bg-cyan-400",
  },
  {
    id: 2,
    name: "Professional Snorkel Set",
    originalPrice: "IDR 650K",
    discountPrice: "IDR 420K",
    discount: "-35%",
    desc: "High-quality snorkel mask, fins, and breathing tube for underwater exploration.",
    category: "Water Sport Gear",
    rating: 4.7,
    stock: 25,
    tag: "POPULAR",
    tagColor: "bg-yellow-300 text-[#001a2e]",
    border: "border-yellow-300/30",
    glow: "hover:shadow-[0_0_40px_rgba(253,224,71,0.12)]",
    img: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&q=80",
    accentBar: "bg-yellow-300",
  },
  {
    id: 3,
    name: "Premium Surfboard",
    originalPrice: "IDR 5.200K",
    discountPrice: "IDR 4.350K",
    discount: "-16%",
    desc: "Lightweight performance surfboard designed for speed and stability.",
    category: "Surf Equipment",
    rating: 4.9,
    stock: 6,
    tag: "PRO GEAR",
    tagColor: "bg-sky-400 text-[#001a2e]",
    border: "border-sky-400/30",
    glow: "hover:shadow-[0_0_40px_rgba(56,189,248,0.12)]",
    img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&q=80",
    accentBar: "bg-sky-400",
  },
  {
    id: 4,
    name: "Floating Waterproof Phone Case",
    originalPrice: "IDR 180K",
    discountPrice: "IDR 120K",
    discount: "-33%",
    desc: "Keep your phone safe while swimming, snorkeling, or kayaking.",
    category: "Accessories",
    rating: 4.6,
    stock: 40,
    tag: "HOT ITEM",
    tagColor: "bg-teal-400 text-[#001a2e]",
    border: "border-teal-400/30",
    glow: "hover:shadow-[0_0_40px_rgba(45,212,191,0.12)]",
    img: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=600&q=80",
    accentBar: "bg-teal-400",
  },
];