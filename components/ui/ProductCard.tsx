type Product = {
  id: number;
  name: string;
  duration: string;
  price: string;
  desc: string;
  tag: string;
  tagColor: string;
  border: string;
  glow: string;
  img: string;
  accentBar: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className={`relative flex flex-col bg-[#001a2e] border ${product.border} rounded-2xl overflow-hidden
      hover:-translate-y-2 transition-all duration-300 cursor-pointer group ${product.glow}`}
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#001a2e] via-[#001a2e]/20 to-transparent" />

        <div className={`absolute top-3 left-3 text-[0.55rem] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded ${product.tagColor}`}>
          {product.tag}
        </div>

        <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${product.accentBar}`} />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bebas text-[1.6rem] text-[#e0f7ff] mb-2">
          {product.name}
        </h3>

        <p className="text-[0.8rem] text-blue-200/55 mb-6 flex-1">
          {product.desc}
        </p>

        <div className="flex items-end justify-between pt-4 border-t border-white/5">
          <div>
            <div className="text-[0.6rem] tracking-[0.2em] text-blue-200/40 uppercase">
              Duration
            </div>
            <div className="text-sm text-blue-100/70 font-semibold">
              {product.duration}
            </div>
          </div>

          <div className="text-right">
            <div className="text-[0.6rem] tracking-[0.2em] text-blue-200/40 uppercase">
              Price / pax
            </div>
            <div className="font-bebas text-xl text-cyan-400">
              {product.price}
            </div>
          </div>
        </div>

        <button className="mt-4 w-full py-2.5 rounded-lg border border-white/10 text-[0.7rem] tracking-[0.18em] uppercase font-semibold text-blue-200/60 hover:bg-white/5 hover:text-white transition">
          Book This Package →
        </button>
      </div>
    </div>
  );
}