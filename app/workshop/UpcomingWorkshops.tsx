import React from "react";

const workshops = [
  {
    title: "# CLASSROOM OF Love",
    city: "MUMBAI",
    date: "AUG 30, 2025",
    time: "11AM - 6PM",
    venue: "WHISTLING WOODS",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    comingSoon: false,
  },
  {
    title: "# CLASSROOM OF Love",
    city: "COMING SOON!",
    image: "https://images.unsplash.com/photo-1515165562835-c4c1b572c5b9",
    comingSoon: true,
  },
];

const UpcomingWorkshops = () => {
  return (
    <section className="w-full bg-white py-10">
      {/* HEADER */}
      <div className="text-center mb-10">
        <p className="text-xs tracking-widest text-gray-500">
          Register for our
        </p>
        <h2 className="mt-1 text-3xl font-serif tracking-wide">
          UPCOMING WORKSHOP
        </h2>
      </div>

      {/* CARDS */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {workshops.map((item, index) => (
          <div key={index} className="space-y-4">
            {/* IMAGE */}
            <div className="rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={item.image}
                alt={item.city}
                className="w-full h-[220px] object-cover"
              />
            </div>

            {/* INFO */}
            {!item.comingSoon ? (
              <>
                <p className="text-xs tracking-widest text-gray-500">
                  {item.date} &nbsp; • &nbsp; {item.time}
                </p>

                <h3 className="text-lg font-serif tracking-wide">
                  {item.city}
                </h3>

                <p className="text-xs text-gray-500 uppercase">{item.venue}</p>
              </>
            ) : (
              <p className="text-sm tracking-wide text-gray-700 font-medium">
                COMING SOON!
              </p>
            )}

            {/* BUTTON */}
            <button className="mt-2 px-6 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-900 transition">
              Register
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingWorkshops;
