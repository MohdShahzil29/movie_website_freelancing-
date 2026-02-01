"use client";

import Image from "next/image";
import musicSectionImage from "@/app/components/assets/musicleftsiderimage.jpg";

export default function MusicSection() {
  return (
    <section className="relative bg-white overflow-hidden py-28 px-6 md:px-16">
      {/* ❤️ Heart Line */}
      <svg
        viewBox="0 0 1200 200"
        className="absolute top-8 left-0 w-full h-40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 120 
             C150 80, 250 160, 350 120
             C420 90, 460 60, 500 120
             C520 170, 560 170, 580 120
             C620 60, 660 90, 720 120
             C820 160, 900 80, 1050 120
             C1120 140, 1180 120, 1200 120"
          stroke="#ef4444"
          strokeWidth="3"
          fill="none"
        />
      </svg>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center mt-[10rem]">
        {/* LEFT TEXT */}
        <div>
          <p className="text-xs tracking-[0.3em] text-gray-500 mb-4">
            ORIGINAL COMPOSITIONS
          </p>

          <h2 className="font-serif text-4xl md:text-5xl leading-tight text-black">
            CREATING MUSIC THAT <br />
            MAKES YOU <span className="text-red-500 italic">FEEL.</span>
          </h2>

          <p className="mt-6 max-w-md text-sm text-gray-600 leading-relaxed">
            The Wedding Filmer label creates music with a keen focus on lyrics
            and background scores that set the sounds for weddings across
            cultures.
          </p>
        </div>

        {/* RIGHT IMAGE (ONLY ONE IMAGE) */}
        <div className="relative flex justify-center md:justify-end">
          <Image
            src={musicSectionImage}
            alt="Music Artwork"
            className="w-72 md:w-[340px] "
            priority
          />
        </div>
      </div>
    </section>
  );
}
