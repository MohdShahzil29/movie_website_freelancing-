import React from "react";

const WhatYouLearn = () => {
  return (
    <section className="w-full px-4 py-10">
      <div className="bg-[#efebe6] rounded-3xl px-8 py-10 max-w-7xl mx-auto">
        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT TEXT */}
          <div>
            <p className="uppercase text-xs tracking-widest text-gray-600">
              What you’ll learn →
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-serif leading-tight">
              THE MIND BEHIND <br /> THE LENS
            </h2>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed max-w-md">
              Wedding filmmaking is more than just hitting record. Our workshops
              sharpen your vision, elevate your craft, and prepare you for the
              emotional and logistical ride of a wedding day. Whether you're new
              or experienced, you'll leave inspired, informed, and ready to tell
              meaningful stories.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="Workshop Session"
              className="w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover"
            />
          </div>
        </div>

        {/* ================= TABS ================= */}
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span className="text-black font-medium">Overview</span>
          <span>/</span>
          <span className="hover:text-black cursor-pointer">
            Pre-Production
          </span>
          <span>/</span>
          <span className="hover:text-black cursor-pointer">Filmmaking</span>
          <span>/</span>
          <span className="hover:text-black cursor-pointer">
            Post Production
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
