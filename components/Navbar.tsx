"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Products", href: "/products" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock scroll saat menu terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <nav className="relative z-[200] flex justify-between items-center backdrop-blur-md px-6 sm:px-10 lg:px-20 py-8 lg:py-12">
        
        {/* LOGO */}
        <Link
          href="/"
          className="font-bebas text-lg sm:text-xl tracking-[0.2em] text-cyan-400 flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-yellow-300" />
          BARUNA WATER SPORT
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-xs font-semibold tracking-[0.18em] uppercase text-blue-200/55 hover:text-cyan-400 transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-cyan-400"></span>
          <span className="w-6 h-[2px] bg-cyan-400"></span>
          <span className="w-6 h-[2px] bg-cyan-400"></span>
        </button>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-[250] transition ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* BACKDROP */}
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 backdrop-blur-md bg-black/40"
        />

        {/* MOBILE MENU */}
        <div
          className={`absolute top-0 left-0 w-full bg-[#001a2e] border-b border-cyan-400/20 transform transition-transform duration-300 ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col p-10">

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="self-end text-cyan-400 text-xl"
            >
              ✕
            </button>

            {/* LINKS */}
            <ul className="flex flex-col gap-8 mt-10">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm tracking-[0.18em] uppercase text-blue-200/70 hover:text-cyan-400 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </>
  );
}