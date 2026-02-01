"use client";

import { useState } from "react";
import { X, List } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "DHRISHA & ARUN",
    date: "June 2024",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400",
    x: "55%",
    y: "32%",
  },
  {
    id: 2,
    name: "MAHEK & JAY",
    date: "June 2024",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400",
    x: "62%",
    y: "45%",
  },
  {
    id: 3,
    name: "TINA & MADHAV",
    date: "May 2024",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=400",
    x: "68%",
    y: "50%",
  },
  {
    id: 4,
    name: "ALPANA & YASHRAJ",
    date: "Feb 2024",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400",
    x: "72%",
    y: "58%",
  },
  {
    id: 5,
    name: "RAKUL & JACKKY",
    date: "Feb 2024",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400",
    x: "60%",
    y: "60%",
  },
];

export default function TWFAroundWorld() {
  const [open, setOpen] = useState(true);

  return (
    <section className="bg-white px-4 md:px-12 py-24">
      {/* Headings */}
      <p className="text-center text-xs tracking-[0.3em] text-gray-500 mb-4">
        CLICK ON THE HEARTS TO KNOW WHERE WE’VE TRAVELLED
      </p>

      <h2 className="text-center text-3xl md:text-4xl font-serif mb-16 text-black">
        TWF AROUND THE WORLD
      </h2>

      {/* MAIN CARD */}
      <div className="relative bg-white rounded-3xl p-4 md:p-10 shadow-[0_30px_120px_rgba(0,0,0,0.18)] overflow-hidden">
        {/* MAP */}
        <div className="relative mx-auto max-w-[720px] aspect-square">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-gray-100 to-gray-200" />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution_gray_political.svg"
            alt="World Map"
            className="relative z-10 w-full h-full object-contain opacity-70"
          />

          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setOpen(true)}
              className="absolute z-20 text-red-500 text-xl animate-pulse"
              style={{ left: loc.x, top: loc.y }}
            >
              ❤️
            </button>
          ))}
        </div>

        {/* ================= DESKTOP DRAWER (UNCHANGED) ================= */}
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg z-20"
          >
            <List size={18} />
          </button>
        )}

        <div
          className={`
            hidden md:block
            absolute top-6 bottom-6 right-6
            w-[340px]
            bg-black text-white
            rounded-2xl
            p-6
            shadow-2xl
            transition-transform duration-300
            ${open ? "translate-x-0" : "translate-x-[110%]"}
          `}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold">TWF Films</h3>
            <button
              onClick={() => setOpen(false)}
              className="bg-white/10 rounded-full p-1"
            >
              <X size={18} />
            </button>
          </div>

          <div className="space-y-4 overflow-y-auto max-h-full pr-1">
            {locations.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center hover:bg-white/5 p-2 rounded-lg transition"
              >
                <img
                  src={item.image}
                  className="w-20 h-14 object-cover rounded-lg"
                />
                <div>
                  <p className="font-serif text-sm">{item.name}</p>
                  <p className="text-xs opacity-70">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MOBILE FLOATING CARDS ================= */}
        <div className="md:hidden absolute bottom-4 left-4 right-4 z-30">
          <div className="relative bg-black rounded-2xl p-4 shadow-2xl">
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 bg-black text-white rounded-full p-2"
            >
              <X size={16} />
            </button>

            <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory">
              {locations.map((item) => (
                <div
                  key={item.id}
                  className="snap-start min-w-[85%] text-white"
                >
                  <img
                    src={item.image}
                    className="w-full h-36 object-cover rounded-xl mb-3"
                  />
                  <p className="font-serif text-sm">{item.name}</p>
                  <p className="text-xs opacity-70">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
