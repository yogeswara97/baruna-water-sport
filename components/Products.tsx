const PRODUCTS = [
  {
    id: 1,
    name: "Jet Ski Express",
    duration: "30 min",
    price: "IDR 350K",
    desc: "Solo or tandem jet ski with certified instructor. Speed & adrenaline guaranteed.",
    tag: "BESTSELLER",
    tagColor: "bg-cyan-400 text-[#001a2e]",
    border: "border-cyan-400/30",
    glow: "hover:shadow-[0_0_40px_rgba(0,229,255,0.15)]",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
    accentBar: "bg-cyan-400",
  },
  {
    id: 2,
    name: "Banana Boat Blast",
    duration: "20 min",
    price: "IDR 150K",
    desc: "Up to 6 riders per ride. The classic group thrill — hold on tight!",
    tag: "GROUP PICK",
    tagColor: "bg-yellow-300 text-[#001a2e]",
    border: "border-yellow-300/30",
    glow: "hover:shadow-[0_0_40px_rgba(253,224,71,0.12)]",
    img: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&q=80",
    accentBar: "bg-yellow-300",
  },
  {
    id: 3,
    name: "Parasailing Sky",
    duration: "15 min",
    price: "IDR 450K",
    desc: "Soar 50 meters above the ocean with panoramic views of Bali's coastline.",
    tag: "MOST SCENIC",
    tagColor: "bg-sky-400 text-[#001a2e]",
    border: "border-sky-400/30",
    glow: "hover:shadow-[0_0_40px_rgba(56,189,248,0.12)]",
    img: "https://images.unsplash.com/photo-1530053969600-caed2596d242?w=600&q=80",
    accentBar: "bg-sky-400",
  },
  {
    id: 4,
    name: "Snorkel Discovery",
    duration: "60 min",
    price: "IDR 275K",
    desc: "Explore coral reefs and tropical fish. Equipment & guide included.",
    tag: "FAMILY SAFE",
    tagColor: "bg-teal-400 text-[#001a2e]",
    border: "border-teal-400/30",
    glow: "hover:shadow-[0_0_40px_rgba(45,212,191,0.12)]",
    img: "https://images.unsplash.com/photo-1682687218982-6c508299e107?w=600&q=80",
    accentBar: "bg-teal-400",
  },
];

export default function ProductsSection() {
  return (
    <section className="relative  py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">

      {/* BG texture lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, #00e5ff 0px, #00e5ff 1px, transparent 1px, transparent 60px)",
        }} />

      <div className="relative z-10">
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

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              className={`relative flex flex-col bg-[#001a2e] border ${p.border} rounded-2xl overflow-hidden
                          hover:-translate-y-2 transition-all duration-300 cursor-pointer group ${p.glow}`}
            >
              {/* Photo Header */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Gradient fade into card body */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001a2e] via-[#001a2e]/20 to-transparent" />

                {/* Tag badge floated on image */}
                <div className={`absolute top-3 left-3 text-[0.55rem] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded ${p.tagColor}`}>
                  {p.tag}
                </div>

                {/* Accent bar at bottom of image */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${p.accentBar} opacity-60`} />
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-5">
                {/* Name */}
                <h3 className="font-bebas text-[1.6rem] leading-none text-[#e0f7ff] mb-2">{p.name}</h3>

                {/* Desc */}
                <p className="text-[0.8rem] font-light text-blue-200/55 leading-relaxed mb-6 flex-1">
                  {p.desc}
                </p>

                {/* Bottom */}
                <div className="flex items-end justify-between pt-4 border-t border-white/5">
                  <div>
                    <div className="text-[0.6rem] tracking-[0.2em] text-blue-200/40 uppercase mb-0.5">Duration</div>
                    <div className="text-sm text-blue-100/70 font-semibold">{p.duration}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[0.6rem] tracking-[0.2em] text-blue-200/40 uppercase mb-0.5">Price / pax</div>
                    <div className="font-bebas text-xl text-cyan-400 leading-none">{p.price}</div>
                  </div>
                </div>

                {/* Book CTA */}
                <button className="mt-4 w-full py-2.5 rounded-lg border border-white/10 text-[0.7rem] tracking-[0.18em]
                                   uppercase font-semibold text-blue-200/60
                                   hover:bg-white/5 hover:text-white hover:border-white/25 transition-all duration-300">
                  Book This Package →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}