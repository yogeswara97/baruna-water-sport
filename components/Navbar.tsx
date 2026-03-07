"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = ["Activities", "About", "Gallery", "Packages"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock scroll saat menu terbuka
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <nav className="relative z-50 flex justify-between items-center mb-16 lg:mb-24 backdrop-blur-md">

        {/* LOGO */}
        <div className="font-bebas text-xl tracking-[0.2em] text-cyan-400 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-yellow-300" />
          BARUNA WATER SPORT
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-200/55 hover:text-cyan-400 transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* DESKTOP BUTTON */}
        <button className="hidden md:block border border-cyan-400/40 text-cyan-400 text-[0.7rem] font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full hover:bg-cyan-400 hover:text-[#001a2e] transition">
          Book Now
        </button>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-cyan-400"></span>
          <span className="w-6 h-[2px] bg-cyan-400"></span>
          <span className="w-6 h-[2px] bg-cyan-400"></span>
        </button>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-100 transition ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* BLUR BACKGROUND */}
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 backdrop-blur-md bg-black/30"
        />

        {/* SIDE MENU */}
        <div
          className={`absolute right-0 top-0 h-full w-[80%] max-w-[320px] bg-[#001a2e] border-l border-cyan-400/20 transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-10">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="self-end text-cyan-400 text-xl"
            >
              ✕
            </button>

            {/* LINKS */}
            <ul className="flex flex-col gap-8 mt-16">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    onClick={() => setOpen(false)}
                    className="text-sm tracking-[0.18em] uppercase text-blue-200/70 hover:text-cyan-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-auto">
              <button className="w-full border border-cyan-400/40 text-cyan-400 text-xs tracking-[0.18em] uppercase px-6 py-3 rounded-full hover:bg-cyan-400 hover:text-[#001a2e] transition">
                Book Now
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}