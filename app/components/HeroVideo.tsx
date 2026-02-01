"use client";

export default function HeroVideo() {
  return (
    <section className="bg-white px-4 md:px-8 lg:px-12 py-6">
      {/* 👉 OUTER WRAPPER (FOR LEFT–RIGHT GAP) */}
      <div className="relative h-[90vh] w-full max-w-[1600px] mx-auto overflow-hidden rounded-3xl bg-black">
        {/* 🎥 BACKGROUND VIDEO */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          crossOrigin="anonymous"
          poster="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg"
        >
          <source
            src="https://videos.pexels.com/video-files/3015510/3015510-uhd_2560_1440_24fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* 📍 BOTTOM CONTENT */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl space-y-6 z-10">
          {/* 👉 ENQUIRE BUTTON */}
          <div className="flex justify-center">
            <button className="bg-white text-black px-10 py-4 rounded-full text-sm font-medium hover:scale-105 transition shadow-lg">
              Enquire Now →
            </button>
          </div>

          {/* INFO BAR */}
          <div className="backdrop-blur-xl bg-black/50 text-white rounded-2xl px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div>
              <p className="opacity-60 mb-1">Phone</p>
              <p>+91 98198 63229</p>
            </div>

            <div className="text-center">
              <p className="opacity-60 mb-1">The Studio</p>
              <p>
                Astha Bunglow no.30, JP Rd, Aram Nagar Part 2, Versova, Andheri
                West, Mumbai, Maharashtra 400061
              </p>
            </div>

            <div className="text-right">
              <p className="opacity-60 mb-1">Email</p>
              <p>info@theweddingfilmer.co.in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
