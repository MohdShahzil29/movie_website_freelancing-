"use client";

export default function FeaturedWorkSection() {
  return (
    <section className="bg-white px-4 md:px-16 py-24">
      <div
        className="
           mx-auto
          bg-[#ede9e4]
          rounded-[28px]
          p-6 md:p-10
          grid grid-cols-1 md:grid-cols-2
          gap-10
          items-center
        "
      >
        {/* LEFT — VIDEO */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl bg-black">
          <video
            src="https://videos.pexels.com/video-files/3015488/3015488-hd_1920_1080_24fps.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover aspect-video"
          />
        </div>

        {/* RIGHT — CONTENT */}
        <div className="px-2 md:px-6">
          <p className="text-xs tracking-[0.25em] text-gray-600 mb-4">
            AMAZON PRIME VIDEO SERIES &nbsp;—&nbsp; 2019
          </p>

          <h2 className="font-serif text-3xl md:text-4xl leading-tight text-black">
            CRAFTED THE <br />
            OPENING TITLES <br />
            OF <span className="text-red-500 italic">MADE IN HEAVEN</span>
          </h2>

          {/* FOOT META */}
          <div className="mt-16 flex flex-wrap gap-4 text-xs text-gray-500">
            <span className="opacity-40">Netflix</span>
            <span>/</span>
            <span className="text-black">Made In Heaven</span>
            <span>/</span>
            <span className="opacity-40">The Big Day</span>
            <span>/</span>
            <span className="opacity-40">SONY Alpha</span>
          </div>
        </div>
      </div>
    </section>
  );
}
