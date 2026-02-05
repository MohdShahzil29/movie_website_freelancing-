import React from "react";

const takeaways = [
  {
    title: "Storytelling",
    desc: "Begin and end each scene like a poem.",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  },
  {
    title: "Pre-Production",
    desc: "Planning and prepping for each shoot like a pro.",
    img: "https://images.unsplash.com/photo-1515165562835-c4c1b572c5b9",
  },
  {
    title: "Creative Thinking",
    desc: "Learn to look at wedding scenes from a different lens.",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    title: "Sound",
    desc: "Layering the audio to deepen the emotional pull.",
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
  },
  {
    title: "Editing",
    desc: "An art so seamless, it’s felt, not seen.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Utility vs. Usage",
    desc: "It’s not about what you use, but how you use it.",
    img: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa",
  },
  {
    title: "Growth",
    desc: "Scaling without losing the soul.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Data",
    desc: "Backups, workflows, and secure storage.",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  },
];

const KeyTakeaways = () => {
  return (
    <section className="w-full bg-white py-12">
      {/* HEADER */}
      <div className="text-center mb-10 px-4">
        <p className="text-xs tracking-widest text-gray-500 uppercase">
          TWF Workshops
        </p>
        <h2 className="mt-2 text-3xl font-serif tracking-wide">
          KEY TAKEAWAYS
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          A hands-on guide to every essential element of wedding filmmaking.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 px-6">
        {takeaways.map((item, index) => (
          <div key={index} className="text-center">
            {/* IMAGE */}
            <div className="rounded-2xl overflow-hidden mb-4">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[150px] object-cover"
              />
            </div>

            {/* TEXT */}
            <h3 className="text-sm font-medium tracking-wide">{item.title}</h3>
            <p className="mt-1 text-xs text-gray-500 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyTakeaways;
