"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    type: "video",
    title: "PRIYA & AKSHAY",
    location: "HYDERABAD, INDIA  —  DECEMBER 2024",
    desc: "Someone somewhere is made for you but you have to open your heart to love. Beautifully told by The Wedding Filmer crew.",
    src: "https://videos.pexels.com/video-files/3015488/3015488-hd_1920_1080_24fps.mp4",
  },
  {
    type: "image",
    title: "ANJALI & RAHUL",
    location: "JAIPUR, INDIA  —  JANUARY 2025",
    desc: "Love is not about perfection, but about choosing each other every single day.",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600",
  },
  {
    type: "video",
    title: "SARA & AMAN",
    location: "DELHI, INDIA  —  FEBRUARY 2025",
    desc: "A story of laughter, emotions and timeless promises.",
    src: "https://videos.pexels.com/video-files/5495781/5495781-hd_1920_1080_25fps.mp4",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((current - 1 + slides.length) % slides.length);

  const nextSlide = () => setCurrent((current + 1) % slides.length);

  return (
    <section className="relative h-[100vh] md:h-[90vh] w-full bg-white">
      <div
        className="
          relative h-full
          mx-0 md:mx-5 lg:mx-4
          rounded-none md:rounded-3xl
          overflow-hidden
          shadow-none md:shadow-[0_40px_120px_rgba(0,0,0,0.4)]
        "
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Image / Video */}
            {slide.type === "image" ? (
              <img
                src={slide.src}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 md:bg-black/35" />

            {/* TEXT */}
            <div
              className="
                absolute
                bottom-6 md:bottom-12
                left-4 md:left-12
                translate-x-0
                max-w-[92%] md:max-w-xl
                text-left md:text-left
                text-white
              "
            >
              <p className="text-[10px] md:text-xs tracking-widest opacity-80 mb-2">
                {slide.location}
              </p>

              <h1 className="text-2xl md:text-5xl font-serif mb-3 md:mb-4">
                {slide.title}
              </h1>

              <p className="text-xs md:text-base opacity-90">{slide.desc}</p>
            </div>
          </div>
        ))}

        {/* Arrows (Desktop only — unchanged) */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 p-2 rounded-full hover:bg-black/60"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white bg-black/40 p-2 rounded-full hover:bg-black/60"
        >
          <ChevronRight />
        </button>

        {/* Dots (mobile = thin, desktop same) */}
        <div className="absolute bottom-4 md:bottom-6 right-1/2 md:right-8 translate-x-1/2 md:translate-x-0 z-20 flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
                rounded-full transition-all
                ${i === current ? "bg-red-500" : "bg-white/40"}
                h-[3px] w-4 md:h-2 md:w-6
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
