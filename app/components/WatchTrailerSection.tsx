// "use client";

// import { ArrowRight } from "lucide-react";

// const filters = [
//   "Recents",
//   "Favourites",
//   "Classics",
//   "Celebrities",
//   "International",
// ];

// const films = [
//   {
//     title: "A Hindu Gay Wedding",
//     couple: "Aayush & Suman",
//     location: "Mexico",
//     date: "Nov 2024",
//     image:
//       "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200",
//   },
//   {
//     title: "Dhrisha & Arun",
//     couple: "Dhrisha & Arun",
//     location: "Bodrum",
//     date: "Jun 2024",
//     image:
//       "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200",
//   },
//   {
//     title: "Mehak & Jay",
//     couple: "Mehak & Jay",
//     location: "Marrakech",
//     date: "Jun 2024",
//     image:
//       "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200",
//   },
// ];

// export default function WatchTrailerSection() {
//   return (
//     <section className="w-full bg-white px-4 md:px-10 py-20">
//       {/* Top line */}
//       <p className="text-center text-xs tracking-[0.3em] text-gray-600 mb-10">
//         OUR FILMS BRING PEOPLE CLOSER.
//       </p>

//       {/* Title */}
//       <h2 className="text-center text-3xl md:text-4xl font-serif mb-8 text-black">
//         WATCH A TRAILER
//       </h2>

//       {/* Filters */}
//       <div className="mb-14">
//         <div
//           className="
//             flex gap-3
//             overflow-x-auto
//             whitespace-nowrap
//             no-scrollbar
//             md:justify-center
//           "
//         >
//           {filters.map((item, i) => (
//             <button
//               key={i}
//               className={`
//                 shrink-0 px-5 py-2 rounded-full text-sm transition
//                 ${
//                   i === 0
//                     ? "bg-red-500 text-white"
//                     : "border border-gray-300 text-gray-600 hover:bg-gray-100"
//                 }
//               `}
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Film Cards */}
//       <div
//         className="
//           flex gap-5
//           overflow-x-auto
//           snap-x snap-mandatory
//           no-scrollbar
//           md:grid md:grid-cols-3 md:gap-6 md:overflow-visible
//         "
//       >
//         {films.map((film, i) => (
//           <div
//             key={i}
//             className="
//               snap-start
//               min-w-[85%] md:min-w-0
//               group relative h-[420px]
//               rounded-3xl overflow-hidden cursor-pointer
//             "
//           >
//             {/* Image */}
//             <img
//               src={film.image}
//               alt={film.title}
//               className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition" />

//             {/* Content */}
//             <div className="absolute bottom-6 left-6 right-6 text-white">
//               <p className="text-xs opacity-80 mb-1">
//                 {film.date} — {film.location}
//               </p>

//               <h3 className="text-xl font-serif mb-1">{film.title}</h3>

//               <p className="text-sm opacity-90">{film.couple}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* View More */}
//       <div className="flex justify-center mt-14">
//         <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-black/90 transition">
//           View more
//           <ArrowRight size={16} />
//         </button>
//       </div>
//     </section>
//   );
// }

"use client";

import { ArrowRight } from "lucide-react";

const filters = [
  "Recents",
  "Favourites",
  "Classics",
  "Celebrities",
  "International",
];

const films = [
  {
    title: "A Hindu Gay Wedding",
    couple: "Aayush & Suman",
    location: "Mexico",
    date: "Nov 2024",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200",
  },
  {
    title: "Dhrisha & Arun",
    couple: "Dhrisha & Arun",
    location: "Bodrum",
    date: "Jun 2024",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200",
  },
  {
    title: "Mehak & Jay",
    couple: "Mehak & Jay",
    location: "Marrakech",
    date: "Jun 2024",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200",
  },
];

export default function WatchTrailerSection() {
  return (
    <section className="w-full bg-white px-4 md:px-10 py-20">
      {/* Top line */}
      <p className="text-center text-xs tracking-[0.3em] text-gray-600 mb-10">
        OUR FILMS BRING PEOPLE CLOSER.
      </p>

      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-serif mb-8 text-black">
        WATCH A TRAILER
      </h2>

      {/* Filters (single line + hidden scroll) */}
      <div className="mb-14">
        <div
          className="
            flex gap-3
            overflow-x-auto
            whitespace-nowrap
            no-scrollbar
            overscroll-x-contain
            md:justify-center
          "
        >
          {filters.map((item, i) => (
            <button
              key={i}
              className={`
                shrink-0 px-5 py-2 rounded-full text-sm transition
                ${
                  i === 0
                    ? "bg-red-500 text-white"
                    : "border border-gray-300 text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Film Cards (mobile carousel, desktop grid) */}
      <div
        className="
          flex gap-5
          overflow-x-auto
          snap-x snap-mandatory
          no-scrollbar
          overscroll-x-contain
          md:grid md:grid-cols-3 md:gap-6 md:overflow-visible
        "
      >
        {films.map((film, i) => (
          <div
            key={i}
            className="
              snap-start
              min-w-[85%] md:min-w-0
              group relative
              h-[360px] md:h-[420px]
              rounded-3xl overflow-hidden cursor-pointer
            "
          >
            {/* Image */}
            <img
              src={film.image}
              alt={film.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition" />

            {/* Content */}
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <p className="text-xs opacity-80 mb-1">
                {film.date} — {film.location}
              </p>

              <h3 className="text-lg md:text-xl font-serif mb-1">
                {film.title}
              </h3>

              <p className="text-sm opacity-90">{film.couple}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="flex justify-center mt-14">
        <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm hover:bg-black/90 transition">
          View more
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
