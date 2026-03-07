import Navbar from "./Navbar";
import Background from "./ui/Background";

const STATS = [
  { num: "12+", desc: "Activities" },
  { num: "98%", desc: "Satisfaction" },
  { num: "5K+", desc: "Riders" },
];

const FOOTER_INFO = [
  { label: "Location", value: "Bali, Indonesia" },
  { label: "Phone", value: "+62 812 3456 7890" },
  { label: "Email", value: "info@aquawave.id" },
  { label: "Hours", value: "07:00 – 18:00 WIB" },
];

export default function Hero() {
  return (
    <div className="relative  bg-[#001a2e] font-barlow overflow-x-hidden">
      <Background />

      <section className="relative z-[2]  flex flex-col px-6 sm:px-10 lg:px-20 py-8 lg:py-12">
        
        <Navbar />
        {/* HERO GRID */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 items-end gap-16">

          {/* LEFT */}
          <div className="flex flex-col justify-end space-y-8">

            <p className="text-[0.9rem] font-light leading-[1.85] text-blue-100/65 max-w-[340px]">
              Discover thrilling water activities — from jet ski rides to banana boats
              and parasailing. Crafted for friends, families, and anyone bold enough
              to chase the horizon.
            </p>

            <div className="w-16 h-px bg-cyan-400/30"></div>

            <div className="flex gap-8">
              {STATS.map((stat) => (
                <div key={stat.desc} className="space-y-1">
                  <p className="font-bebas text-2xl text-cyan-400 leading-none">
                    {stat.num}
                  </p>

                  <p className="text-[0.6rem] tracking-[0.18em] uppercase text-blue-200/40">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT */}
          <div className="text-left lg:text-right flex flex-col justify-end">
            <h1 className="font-bebas leading-[0.88] text-[clamp(3.8rem,9vw,9.5rem)] text-[#e0f7ff]">
              <div>RIDE</div>
              <div className="text-cyan-400">THE</div>
              <div className="outline-text">WAVE</div>
            </h1>

            <div className="flex lg:justify-end items-center gap-3 mt-5">
              <span className="text-[0.65rem] tracking-[0.25em] text-blue-200/30 uppercase">
                Bali, Indonesia · 2025
              </span>
              <div className="w-12 h-px bg-cyan-400/20" />
            </div>
          </div>

        </div>

        <div className="w-full h-px my-8 lg:my-10 bg-cyan-400/20" />

        <div className="flex flex-wrap gap-8">
          {FOOTER_INFO.map((item) => (
            <div key={item.label}>
              <p className="text-[0.6rem] tracking-[0.3em] text-cyan-400/50 uppercase">
                {item.label}
              </p>
              <p className="text-[0.85rem] text-[#e0f7ff]">{item.value}</p>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}