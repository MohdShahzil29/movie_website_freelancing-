import React from "react";

const Workshops = () => {
  return (
    <section className="w-full bg-white py-10">
      {/* ================= HEADER ================= */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <p className="uppercase tracking-[0.15em] text-xs text-gray-500">
          TWF Workshops
        </p>

        <h1 className="mt-2 text-3xl sm:text-4xl font-serif tracking-wide leading-tight text-black">
          MASTER IT WITH <br /> OUR WORKSHOPS
        </h1>
      </div>

      {/* ================= STATS ================= */}
      <div className="mt-10 grid grid-cols-3 max-w-4xl mx-auto px-6 text-center">
        <div>
          <p className="uppercase text-xs tracking-widest text-gray-500">
            Duration
          </p>
          <p className="mt-1 text-2xl font-serif text-red-600">6 HOURS</p>
        </div>

        <div className="border-x border-gray-200">
          <p className="uppercase text-xs tracking-widest text-gray-500">
            Workshop Fee
          </p>
          <p className="mt-1 text-2xl font-serif text-red-600">₹ 10,000</p>
        </div>

        <div>
          <p className="uppercase text-xs tracking-widest text-gray-500">
            Cities
          </p>
          <p className="mt-1 text-2xl font-serif text-red-600">2</p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start px-6">
        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Workshop"
            className="w-full h-[300px] lg:h-[340px] object-cover"
          />
        </div>

        {/* TEXT */}
        <div>
          <p className="uppercase text-xs tracking-[0.2em] text-gray-500">
            Empowering the next generation of filmmakers
          </p>

          <h2 className="mt-2 text-2xl md:text-3xl font-serif tracking-wide">
            ABOUT THE TWF WORKSHOPS
          </h2>

          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            Since its inception, The Wedding Filmer has educated over 2000
            aspiring filmmakers across more than 20 cities in India. As pioneers
            of cinematic wedding storytelling, we redefined how weddings are
            filmed. These workshops go beyond the technical.
          </p>

          <p className="mt-3 text-gray-500 italic text-sm">
            We don’t just teach you how to shoot. We teach you how to see, feel,
            and think like a storyteller.
          </p>

          <p className="mt-3 text-gray-600 leading-relaxed text-sm">
            From exclusive behind-the-scenes insights to candid Q&As, each
            session is designed to prepare and inspire you for the season ahead.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
