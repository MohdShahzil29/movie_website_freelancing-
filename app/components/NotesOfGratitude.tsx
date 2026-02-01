"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Oh gosh, this movie ❤️ It is pure beauty!! I watched it twice in a day within a span of few hours and cried both times. You were right in how much thought, consideration and work has gone into making the movie. It is clearly evident! Loved how it blends everything, everyone and spreads the message of “Love is Love”!!",
    name: "AAYUSH & SUMAN",
    role: "TWF Groom",
    image: "https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg",
  },
  {
    quote:
      "Every frame felt intentional and emotional. Watching our story unfold like cinema is something we’ll cherish forever.",
    name: "DHRISHA & ARUN",
    role: "TWF Couple",
    image: "https://images.pexels.com/photos/3875087/pexels-photo-3875087.jpeg",
  },
];

export default function NotesOfGratitude() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="bg-[#f5f4f2] py-28 px-4">
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-xs tracking-[0.35em] text-gray-500 mb-3">
          HERE’S WHAT OUR COUPLES HAVE TO SAY
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-black">
          NOTES OF GRATITUDE
        </h2>
      </div>

      {/* Card */}
      <div className="relative max-w-6xl mx-auto bg-white rounded-[28px] px-6 md:px-16 py-16 shadow-[0_30px_120px_rgba(0,0,0,0.12)]">
        {/* Arrows */}
        <button
          onClick={prev}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border items-center justify-center hover:bg-black hover:text-white transition"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={next}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border items-center justify-center hover:bg-black hover:text-white transition"
        >
          <ChevronRight size={18} />
        </button>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Text */}
          <div className="text-center md:text-left">
            <p className="font-serif text-lg md:text-xl text-black leading-relaxed">
              {testimonials[current].quote}
            </p>

            <div className="mt-10">
              <p className="text-sm tracking-widest text-black">
                – {testimonials[current].name}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {testimonials[current].role}
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-full h-[260px] md:h-[340px] object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-14">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? "w-10 bg-gray-700" : "w-4 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
