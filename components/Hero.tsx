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
        <div className="relative  font-barlow overflow-x-hidden">


            <section className="relative z-100  flex flex-col px-6 sm:px-10 lg:px-20 pb-8 lg:pb-12">

                
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

                    <h1 className="font-bebas leading-[0.88] text-[2.6rem] sm:text-[3.4rem] md:text-[4.8rem] lg:text-[clamp(4rem,8vw,9rem)]">
                        <span className="flex flex-row lg:flex-col lg:items-end lg:gap-0 gap-3">
                            <span className="text-[#e0f7ff]">RIDE</span>
                            <span className="text-cyan-400">THE</span>
                            <span className="outline-text">WAVE</span>
                        </span>
                    </h1>

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