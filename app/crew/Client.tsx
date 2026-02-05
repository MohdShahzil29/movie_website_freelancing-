import React from "react";

const team = [
  {
    name: "Vishal Punjabi",
    role: "Director",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    name: "Siddhi Kanakia",
    role: "Producer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    name: "Swapnali Murudkar",
    role: "Accountant",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
  {
    name: "Vijay Kumar Singh",
    role: "Editor",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
  },
];

const Client = () => {
  return (
    <section className="w-full space-y-12">
      {/* ================= IMAGE SECTION ================= */}
      <div className="relative w-full h-[35vh] sm:h-[40vh] md:h-[45vh] overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
          alt="Our Crew"
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* DESKTOP TEXT */}
        <div className="hidden md:flex absolute bottom-0 left-0 right-0 bg-black/50">
          <div className="px-8 py-6 text-white max-w-4xl">
            <p className="uppercase tracking-widest text-sm opacity-80">
              Meet Our Crew
            </p>
            <h2 className="text-3xl font-semibold mt-1">
              The Wedding Filmer Team
            </h2>
            <p className="text-white/80 mt-2 text-base">
              If our crew in a studio group shot looks this good, imagine what
              your wedding film will look like.
            </p>
          </div>
        </div>
      </div>

      {/* MOBILE TEXT */}
      <div className="md:hidden px-4 text-center">
        <p className="uppercase tracking-widest text-xs text-gray-500">
          Meet Our Crew
        </p>
        <h2 className="text-2xl font-semibold mt-1">The Wedding Filmer Team</h2>
        <p className="text-gray-600 mt-3 text-sm">
          If our crew in a studio group shot looks this good, imagine what your
          wedding film will look like.
        </p>
      </div>

      {/* ================= TEAM GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {team.map((member, index) => (
          <div
            key={index}
            className="relative h-[420px] rounded-2xl overflow-hidden group"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Text */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-lg font-semibold tracking-wide">
                {member.name}
              </h3>
              <p className="text-sm opacity-80 mt-1">({member.role})</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Client;
