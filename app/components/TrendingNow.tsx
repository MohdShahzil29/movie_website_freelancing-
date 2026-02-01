// "use client";

// import SectionHeading from "./SectionHeading";

// const films = [
//   {
//     title: "ARYA & FEDERICO",
//     date: "Jun 2025",
//     location: "Europe",
//     image: "https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg",
//   },
//   {
//     title: "NIKKI & VISHAL",
//     date: "Mar 2025",
//     location: "India",
//     image: "https://images.pexels.com/photos/3875087/pexels-photo-3875087.jpeg",
//   },
//   {
//     title: "PRIYA & AKSHAY",
//     date: "Dec 2024",
//     location: "India",
//     image: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg",
//   },
//   {
//     title: "AAYUSH & SUMAN",
//     date: "Nov 2024",
//     location: "North America",
//     image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
//   },
// ];

// export default function TrendingNow() {
//   return (
//     <section className="bg-white px-6 md:px-16 py-4">
//       {/* 🔥 REUSABLE HEADING */}

//       {/* CARDS */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//         {films.map((film, i) => (
//           <div key={i} className="group cursor-pointer">
//             {/* IMAGE */}
//             <div className="relative h-[260px] rounded-2xl overflow-hidden mb-5">
//               <img
//                 src={film.image}
//                 alt={film.title}
//                 className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
//               />

//               {/* PLAY ICON */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-14 h-14 rounded-full bg-black/60 text-white flex items-center justify-center text-xl">
//                   ▶
//                 </div>
//               </div>
//             </div>

//             {/* META */}
//             <p className="text-xs tracking-widest text-gray-500 mb-2 uppercase">
//               {film.date} &nbsp; ▸ &nbsp; {film.location}
//             </p>

//             <h3 className="font-serif text-lg text-black">{film.title}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import SectionHeading from "./SectionHeading";

const films = [
  {
    title: "ARYA & FEDERICO",
    date: "Jun 2025",
    location: "Europe",
    image: "https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg",
  },
  {
    title: "NIKKI & VISHAL",
    date: "Mar 2025",
    location: "India",
    image: "https://images.pexels.com/photos/3875087/pexels-photo-3875087.jpeg",
  },
  {
    title: "PRIYA & AKSHAY",
    date: "Dec 2024",
    location: "India",
    image: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg",
  },
  {
    title: "AAYUSH & SUMAN",
    date: "Nov 2024",
    location: "North America",
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
  },
];

export default function TrendingNow() {
  return (
    <section className="bg-white px-6 md:px-16 py-14">
      {/* 🔥 REUSABLE HEADING */}
      {/* <SectionHeading title="TRENDING NOW" actionText="view all" /> */}

      {/* CARDS */}
      <div
        className="
          flex gap-6
          overflow-x-auto
          snap-x snap-mandatory
          no-scrollbar
          md:grid md:grid-cols-4 md:gap-8 md:overflow-visible
        "
      >
        {films.map((film, i) => (
          <div
            key={i}
            className="
              snap-start
              min-w-[85%] sm:min-w-[70%]
              md:min-w-0
              group cursor-pointer
            "
          >
            {/* IMAGE */}
            <div className="relative h-[260px] rounded-2xl overflow-hidden mb-5">
              <img
                src={film.image}
                alt={film.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              {/* PLAY ICON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black/60 text-white flex items-center justify-center text-xl">
                  ▶
                </div>
              </div>
            </div>

            {/* META */}
            <p className="text-xs tracking-widest text-gray-500 mb-2 uppercase">
              {film.date} &nbsp; ▸ &nbsp; {film.location}
            </p>

            <h3 className="font-serif text-lg text-black">{film.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
