
const GALLERY_ITEMS = [
  {
    id: 1,
    label: "Jet Ski",
    tag: "HIGH SPEED",
    accent: "bg-cyan-400",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  },
  {
    id: 2,
    label: "Parasailing",
    tag: "SKY HIGH",
    accent: "bg-blue-400",
    img: "https://images.unsplash.com/photo-1530053969600-caed2596d242?w=600&q=80",
  },
  {
    id: 3,
    label: "Banana Boat",
    tag: "FAMILY FUN",
    accent: "bg-yellow-300",
    img: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&q=80",
  },
  {
    id: 4,
    label: "Snorkeling",
    tag: "UNDERWATER",
    accent: "bg-teal-400",
    img: "https://images.unsplash.com/photo-1682687218982-6c508299e107?w=600&q=80",
  },
  {
    id: 5,
    label: "Surfing",
    tag: "RIDE THE SWELL",
    accent: "bg-sky-400",
    img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=600&q=80",
  },
];

export default function GallerySection() {
  return (
    <section className="relative py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-cyan-400" />
            <span className="text-[0.6rem] tracking-[0.35em] text-cyan-400 uppercase font-semibold">Our Activities</span>
          </div>
          <h2 className="font-bebas text-[clamp(2.5rem,6vw,5rem)] leading-none text-[#e0f7ff] m-0">
            CAPTURED IN <span className="text-cyan-400">ACTION</span>
          </h2>
        </div>
        <p className="text-sm font-light text-blue-200/55 max-w-xs leading-relaxed">
          Every ride is a story. Explore the range of experiences we offer on Bali's legendary waters.
        </p>
      </div>

      {/* Bento Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-3">
        {GALLERY_ITEMS.map((item, i) => (
          <div
            key={item.id}
            className={`${i === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"} relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5 bg-[#002233]`}
          >
            {/* Real photo */}
            <img
              src={item.img}
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />

            {/* Dark gradient overlay — stronger at bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#001a2e]/90 via-[#001a2e]/30 to-transparent group-hover:via-[#001a2e]/10 transition-all duration-500" />

            {/* Top edge vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
              <div className={`inline-block text-[0.55rem] font-semibold tracking-[0.25em] px-2 py-0.5 rounded mb-2 ${item.accent} text-[#001a2e]`}>
                {item.tag}
              </div>
              <div className="font-bebas text-[clamp(1.3rem,2.5vw,2rem)] leading-none text-white drop-shadow-lg">
                {item.label}
              </div>
            </div>

            {/* Hover arrow */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/30 bg-black/20 backdrop-blur-sm flex items-center justify-center
                            opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0
                            transition-all duration-300 text-white text-sm">
              →
            </div>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="mt-10 flex justify-center">
        <button className="inline-flex items-center gap-3 border border-cyan-400/30 text-cyan-400 text-[0.7rem]
                           tracking-[0.2em] uppercase px-8 py-3 rounded-full
                           hover:bg-cyan-400/10 hover:border-cyan-400/60 transition-all duration-300">
          View Full Gallery
          <span className="text-xs">→</span>
        </button>
      </div>
    </section>
  );
}