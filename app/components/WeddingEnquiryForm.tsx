"use client";

import { useEffect, useState } from "react";

const images = [
  "https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg",
  "https://images.pexels.com/photos/3875087/pexels-photo-3875087.jpeg",
  "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg",
  "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
];

export default function WeddingEnquiryForm() {
  const [index, setIndex] = useState(0);

  /* 🔁 AUTO PLAY IMAGE */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white h-screen overflow-hidden px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 h-full">
        {/* 🖼 LEFT HERO IMAGE (DESKTOP ONLY) */}
        <div className="hidden md:flex items-center justify-center sticky top-16 h-[calc(100vh-8rem)]">
          <div className="relative w-full h-full rounded-3xl overflow-hidden">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                className={`
                  absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
                  ${i === index ? "opacity-100" : "opacity-0"}
                `}
              />
            ))}
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </div>

        {/* 📝 FORM (ONLY THIS SCROLLS) */}
        <div className="h-full overflow-y-auto pr-2 no-scrollbar text-black">
          <form className="space-y-6 pb-10">
            <FieldRow>
              <Input label="Bride’s name*" />
              <Input label="Groom’s name*" />
            </FieldRow>

            <FieldRow>
              <Input label="Phone*" />
              <Input label="Email*" />
            </FieldRow>

            <FieldRow>
              <Input label="Date (from)*" />
              <Input label="Date (to)*" />
            </FieldRow>

            <FieldRow>
              <Input label="No of guests*" />
              <Input label="Venue / Location*" />
            </FieldRow>

            <Textarea label="Describe each other*" />
            <Textarea label="What’s your story?*" />
            <Textarea label="Describe the rituals*" />
            <Textarea label="Describe the flow of events*" />

            <button
              type="submit"
              className="bg-black text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-black/90 transition"
            >
              Submit Enquiry →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* 🔹 HELPERS */

function FieldRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{children}</div>
  );
}

function Input({ label }: { label: string }) {
  return (
    <div>
      <label className="text-sm mb-2 block">{label}</label>
      <input className="w-full border rounded-lg px-4 py-3 text-sm focus:border-black outline-none" />
    </div>
  );
}

function Textarea({ label }: { label: string }) {
  return (
    <div>
      <label className="text-sm mb-2 block">{label}</label>
      <textarea
        rows={4}
        className="w-full border rounded-lg px-4 py-3 text-sm focus:border-black outline-none resize-none"
      />
    </div>
  );
}
