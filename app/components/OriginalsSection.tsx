"use client";

import Image from "next/image";

const tracks = [
  {
    title: "Ik Onkar",
    artist: "by Harshdeep Kaur & Devender Pal Singh",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=900",
  },
  {
    title: "Vekheya Reprise",
    artist: "By Vibha",
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=900",
  },
  {
    title: "Tu Mila",
    artist: "By Riya Goley",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=900",
    playable: true,
  },
  {
    title: "Panaah",
    artist: "Mayank Choudhary",
    image:
      "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=900",
  },
  {
    title: "Sahib Sahiba – Chaap Tilak",
    artist: "Digvijay Singh Pariyar & Shaoni Majumdar",
    image:
      "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?q=80&w=900",
  },
];

export default function OriginalsSection() {
  return (
    <section className="bg-white ">
      {/* TRACKS */}
      <div
        className="
          max-w-7xl mx-auto
          flex gap-10
          overflow-x-auto md:overflow-visible
          snap-x snap-mandatory
          md:grid md:grid-cols-5
          no-scrollbar
        "
      >
        {tracks.map((item, i) => (
          <div
            key={i}
            className="
              snap-start
              min-w-[72%] sm:min-w-[55%] md:min-w-0
              text-center
            "
          >
            {/* COVER */}
            <div className="relative aspect-square rounded-[28px] overflow-hidden mb-7">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />

              {/* Play icon ONLY for Tu Mila */}
              {item.playable && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-xl shadow-md">
                    ▶
                  </div>
                </div>
              )}
            </div>

            {/* TEXT */}
            <h3 className="text-[16px] font-medium text-black leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 mt-2">{item.artist}</p>
          </div>
        ))}
      </div>

      {/* QUOTE */}
      <div className="mt-[21px] text-center max-w-xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 rounded-full border border-gray-300 flex items-center justify-center text-xl">
            ✿
          </div>
        </div>

        <p className="font-serif text-lg text-gray-800 leading-relaxed">
          Nothing is ever lost to us <br />
          as long as we remember it.
        </p>

        <p className="mt-5 text-red-500 font-serif italic">
          – The Wedding Filmer
        </p>
      </div>
    </section>
  );
}
