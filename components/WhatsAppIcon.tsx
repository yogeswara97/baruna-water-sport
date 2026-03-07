"use client";

import { useState } from "react";

const AGENTS = [
  {
    id: 1,
    name: "Dewi Pratiwi",
    role: "Sales Consultant",
    phone: "6281234567890",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80",
    message: "Hi! Ready to help you book the perfect water sport adventure 🌊",
  },
  {
    id: 2,
    name: "Made Surya",
    role: "Customer Support",
    phone: "6289876543210",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    message: "Hello! Any questions about our packages or safety? Ask me! 🏄",
  },
];

export default function WhatsAppIcon() {
  const [open, setOpen] = useState(false);

  const openChat = (phone: string, name: string) => {
    const text = encodeURIComponent(
      `Halo ${name}, saya tertarik dengan paket water sport AquaWave Bali. Bisa bantu saya?`
    );
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <>
      <style>{`
        @keyframes waBounce {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-6px)}
        }
        @keyframes waPopUp {
          from{opacity:0;transform:translateY(16px) scale(.95)}
          to{opacity:1;transform:translateY(0) scale(1)}
        }
        @keyframes waCardIn {
          from{opacity:0;transform:translateY(12px)}
          to{opacity:1;transform:translateY(0)}
        }
        @keyframes pulsering {
          0%{transform:scale(1);opacity:.6}
          100%{transform:scale(1.9);opacity:0}
        }

        .wa-bounce{animation:waBounce 2.4s ease-in-out infinite}
        .wa-popup{animation:waPopUp .3s cubic-bezier(.34,1.56,.64,1) both}
        .wa-card-1{animation:waCardIn .3s .05s ease both}
        .wa-card-2{animation:waCardIn .3s .15s ease both}

        .pulse-ring{
          position:absolute;
          inset:-4px;
          border-radius:9999px;
          background:#25d366;
          animation:pulsering 2s ease-out infinite;
        }
      `}</style>

      {/* CONTAINER */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

        {/* AGENT LIST */}
        {open && (
          <div className="wa-popup flex flex-col gap-3 mb-1">

            <div className="flex items-center gap-2 px-1">
              <div className="w-5 h-px bg-green-400/50" />
              <span className="text-[0.6rem] tracking-[0.25em] uppercase text-green-400/70 font-semibold">
                Chat with us
              </span>
            </div>

            {AGENTS.map((agent, i) => (
              <div
                key={agent.id}
                className={`wa-card-${i + 1} group flex items-center gap-3 bg-[#001f2e]/95 backdrop-blur-xl
                border border-white/10 rounded-2xl px-4 py-3 cursor-pointer w-[260px]
                hover:border-green-400/40 hover:bg-[#002a3a]/95 hover:-translate-y-0.5
                transition-all duration-200 shadow-[0_8px_32px_rgba(0,0,0,0.4)]`}
                onClick={() => openChat(agent.phone, agent.name)}
              >
                <div className="relative shrink-0">
                  <img
                    src={agent.avatar}
                    alt={agent.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-green-400/30"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-[#001f2e]" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="text-[0.82rem] font-semibold text-white truncate">
                    {agent.name}
                  </div>
                  <div className="text-[0.65rem] text-green-400/80 mb-1">
                    {agent.role}
                  </div>
                  <div className="text-[0.7rem] text-blue-200/50 line-clamp-1">
                    {agent.message}
                  </div>
                </div>

                <div className="shrink-0 w-7 h-7 rounded-full bg-green-500/20 border border-green-400/30
                flex items-center justify-center text-green-400 text-xs
                group-hover:bg-green-500 group-hover:text-white group-hover:border-green-500
                transition-all duration-200">
                  →
                </div>
              </div>
            ))}

            <p className="text-[0.58rem] text-blue-200/30 text-center px-2">
              Typically replies within minutes
            </p>
          </div>
        )}

        {/* MAIN BUTTON */}
        <div className="relative">
          {!open && <div className="pulse-ring" />}

          <button
            onClick={() => setOpen(!open)}
            className={`relative w-14 h-14 rounded-full flex items-center justify-center
            shadow-[0_8px_30px_rgba(37,211,102,0.45)]
            transition-all duration-300
            ${
              open
                ? "bg-[#001f2e] border-2 border-white/20 scale-95"
                : "bg-[#25d366] wa-bounce hover:scale-110"
            }`}
          >
            {open ? (
              <svg
                className="w-5 h-5 text-white/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
}