"use client";

import { useEffect, useState } from "react";

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 3 + 1,
  dur: `${Math.random() * 8 + 5}s`,
  delay: `${Math.random() * 8}s`,
}));

export default function Background() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <div className="fixed inset-0 z-0 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 60% 110%, #004b7a 0%, #001a2e 55%, #000d1a 100%)"
        }}
      >

        <div className="wave1 absolute -bottom-10 -left-full w-[300%] h-52 rounded-[50%] opacity-[0.12] bg-cyan-400"/>
        <div className="wave2 absolute -bottom-14 -left-full w-[300%] h-60 rounded-[50%] opacity-[0.08] bg-sky-500"/>
        <div className="wave3 absolute -bottom-5 -left-full w-[300%] h-44 rounded-[50%] opacity-[0.06] bg-cyan-300"/>

        {mounted &&
          particles.map((p) => (
            <div
              key={p.id}
              className="absolute bottom-0 rounded-full bg-cyan-400 opacity-0"
              style={{
                left: p.left,
                width: p.size,
                height: p.size,
                animation: `floatUp ${p.dur} ${p.delay} ease-in infinite`,
              }}
            />
          ))}
      </div>

      <div className="grain-anim fixed pointer-events-none z-[1] opacity-[0.025]" />
    </>
  );
}