"use client";

import React from "react";

type MastermindProfileProps = {
  title?: string; // e.g. THE MASTERMIND
  role?: string; // e.g. FOUNDER
  name: string;
  description: string;
  imageUrl: string;
};

const MastermindProfileSection = ({
  title = "THE MASTERMIND",
  role = "FOUNDER",
  name,
  description,
  imageUrl,
}: MastermindProfileProps) => {
  return (
    <section className="w-full bg-[#f2efe9] py-16 px-4">
      {/* TOP TITLE */}
      <h2 className="text-center text-sm tracking-[0.35em] text-gray-700 mb-10">
        {title}
      </h2>

      {/* CARD */}
      <div className="max-w-6xl mx-auto bg-[#efede7] rounded-2xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* IMAGE */}
        <div className="w-full h-[420px] md:h-[520px] rounded-xl overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* CONTENT */}
        <div>
          <p className="text-xs tracking-[0.25em] text-gray-500 mb-3">{role}</p>

          <h3 className="text-3xl md:text-4xl font-serif tracking-wide mb-6">
            {name}
          </h3>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MastermindProfileSection;
