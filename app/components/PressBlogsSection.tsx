"use client";

import { useState } from "react";
import PressBlogTabs from "./PressBlogTabs";
import PressBlogCard from "./PressBlogCard";

const pressData = [
  {
    image: "https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg",
    tag: "Mid-Day",
    title:
      "Exclusive | Hari and Sukmani’s hit song Baagay finally gets a video",
  },
  {
    image: "https://images.pexels.com/photos/3875087/pexels-photo-3875087.jpeg",
    tag: "NDTV",
    title:
      "Virat–Anushka wedding filmer Vishal Punjabi breaks down the big fat Indian wedding",
  },
  {
    image: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg",
    tag: "afaqs!",
    title:
      "The Wedding Filmer champions queer wedding film with Soul Has No Gender",
  },
];

export default function PressBlogsSection() {
  const [active, setActive] = useState<"press" | "blogs">("press");

  return (
    <section className="bg-white px-6 md:px-16 py-5">
      {/* TABS */}
      <PressBlogTabs active={active} onChange={setActive} />

      {/* FILTER BAR */}
      <div className="flex justify-between items-center ">
        <button className="border rounded-full px-5 py-2 text-sm">
          Select Press Category ▾
        </button>

        <button className="border rounded-full px-5 py-2 text-sm">
          Sort by ▾
        </button>
      </div>

      {/* CONTENT (NO HORIZONTAL SCROLL AT ALL) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pressData.map((item, i) => (
          <PressBlogCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
