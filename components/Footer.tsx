
export default function Footer() {
    const FOOTER_LINKS = {
        Activities: ["Jet Ski", "Banana Boat", "Parasailing", "Snorkeling", "Surfing"],
        Company: ["About Us", "Gallery", "Blog", "Careers"],
        Support: ["FAQ", "Safety Guide", "Booking Policy", "Contact"],
    };
    return (
        <footer className="relative bg-[#00080f] overflow-hidden">
            

            <div className="px-6 sm:px-10 lg:px-20 pt-16 pb-10">
                {/* Top row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14 border-b border-white/5">

                    {/* Brand column */}
                    <div className="lg:col-span-2">
                        <div className="font-bebas text-3xl tracking-[0.15em] text-cyan-400 flex items-center gap-2 mb-4">
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                            AQUAWAVE
                        </div>
                        <p className="text-sm font-light text-blue-200/50 leading-relaxed max-w-[280px] mb-6">
                            Bali's premier water sports destination. Ride, soar, and explore the ocean like never before.
                        </p>

                        {/* Social icons */}
                        <div className="flex gap-3">
                            {[
                                { label: "IG", icon: "📸" },
                                { label: "TT", icon: "🎵" },
                                { label: "YT", icon: "▶️" },
                                { label: "WA", icon: "💬" },
                            ].map(s => (
                                <button key={s.label}
                                    className="w-9 h-9 rounded-lg bg-[#001a2e] border border-white/10 flex items-center justify-center
                             text-sm hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-300 cursor-pointer">
                                    {s.icon}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-[0.65rem] tracking-[0.3em] text-cyan-400/70 uppercase font-semibold mb-5 m-0">
                                {title}
                            </h4>
                            <ul className="list-none m-0 p-0 space-y-3">
                                {links.map(link => (
                                    <li key={link}>
                                        <a href="#"
                                            className="text-sm text-blue-200/50 no-underline hover:text-cyan-400
                                 transition-colors duration-200 flex items-center gap-2 group">
                                            <span className="w-0 h-px bg-cyan-400 group-hover:w-3 transition-all duration-300" />
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter */}
                <div className="py-10 border-b border-white/5 flex flex-col md:flex-row items-start md:items-center
                        justify-between gap-6">
                    <div>
                        <p className="text-[0.6rem] tracking-[0.3em] text-yellow-300/70 uppercase font-semibold mb-1 m-0">
                            Stay Updated
                        </p>
                        <p className="text-lg font-bebas tracking-wider text-[#e0f7ff] m-0">
                            GET EXCLUSIVE DEALS & NEWS
                        </p>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 md:w-64 bg-[#001a2e] border border-white/10 rounded-lg px-4 py-2.5
                         text-sm text-blue-100/80 placeholder:text-blue-200/30 outline-none
                         focus:border-cyan-400/50 transition-colors duration-200"
                        />
                        <button
                            className="px-5 py-2.5 rounded-lg text-[0.7rem] font-bold tracking-[0.15em] uppercase
                         text-[#001a2e] hover:shadow-[0_4px_20px_rgba(0,229,255,0.3)] hover:-translate-y-0.5
                         transition-all duration-300 cursor-pointer shrink-0"
                            style={{ background: "linear-gradient(135deg, #00e5ff 0%, #0099cc 100%)" }}>
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[0.7rem] text-blue-200/30 m-0">
                        © 2025 AquaWave Bali. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(item => (
                            <a key={item} href="#"
                                className="text-[0.7rem] text-blue-200/30 no-underline hover:text-blue-200/60 transition-colors duration-200">
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-[0.65rem] tracking-[0.15em] text-cyan-400/50 uppercase">Open Today</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}