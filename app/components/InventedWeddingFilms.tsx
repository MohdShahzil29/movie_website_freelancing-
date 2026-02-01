// "use client";

// const images = [
//   "https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg",
//   "https://images.pexels.com/photos/3875087/pexels-photo-3875087.jpeg",
//   "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg",
//   "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
// ];

// export default function InventedWeddingFilms() {
//   return (
//     <section className="bg-white py-32 overflow-hidden">
//       {/* HEADINGS */}
//       <div className="text-center mb-20 px-4">
//         <p className="text-xs tracking-[0.35em] text-gray-500 mb-4">
//           REAL WEDDING FILMS MADE BY REAL FILMMAKERS
//         </p>

//         <h2 className="font-serif text-3xl md:text-4xl text-black">
//           WE INVENTED WEDDING FILMS
//         </h2>
//       </div>

//       {/* STRIP CONTAINER */}
//       <div className="relative">
//         {/* 🔥 WAVY BLACK STRIP */}
//         <div
//           className="
//             absolute inset-x-[-5%]
//             top-1/2 -translate-y-1/2
//             h-[320px]
//             bg-black
//             rotate-[-2.5deg]
//             skew-y-[-2deg]
//           "
//         />

//         {/* IMAGE STRIP */}
//         <div
//           className="
//             relative
//             flex gap-6
//             px-6 md:px-16
//             rotate-[-2.5deg]
//             md:rotate-[-1.5deg]
//             overflow-x-auto md:overflow-visible
//             no-scrollbar
//           "
//         >
//           {images.map((src, i) => (
//             <div
//               key={i}
//               className={`
//                 min-w-[260px] md:min-w-[340px]
//                 h-[220px] md:h-[260px]
//                 rounded-2xl
//                 overflow-hidden
//                 shadow-2xl
//                 bg-black
//                 transform
//                 ${i % 2 === 0 ? "-translate-y-4" : "translate-y-4"}
//               `}
//             >
//               <img
//                 src={src}
//                 alt="Wedding filmmaking"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

const images = [
  "https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg",
  "https://images.pexels.com/photos/3875087/pexels-photo-3875087.jpeg",
  "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg",
  "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
];

export default function InventedWeddingFilms() {
  return (
    <section className="bg-white py-32 overflow-hidden">
      {/* HEADINGS */}
      <div className="text-center mb-20 px-4">
        <p className="text-xs tracking-[0.35em] text-gray-500 mb-4">
          REAL WEDDING FILMS MADE BY REAL FILMMAKERS
        </p>

        <h2 className="font-serif text-3xl md:text-4xl text-black">
          WE INVENTED WEDDING FILMS
        </h2>
      </div>

      {/* STRIP WRAPPER (ONE FLOW CONTEXT) */}
      <div className="relative">
        <div
          className="
            relative
            rotate-[-2.5deg]
            md:rotate-[-1.5deg]
          "
        >
          {/* BLACK STRIP */}
          <div className="absolute inset-x-[-5%] top-1/2 -translate-y-1/2 h-[320px] bg-black rounded-[40px]" />

          {/* IMAGE STRIP */}
          <div
            className="
              relative
              flex gap-6
              px-6 md:px-16
              py-12
              overflow-x-auto md:overflow-visible
              no-scrollbar
            "
          >
            {images.map((src, i) => (
              <div
                key={i}
                className={`
                  min-w-[260px] md:min-w-[340px]
                  h-[220px] md:h-[260px]
                  rounded-2xl
                  overflow-hidden
                  shadow-2xl
                  bg-black
                  ${i % 2 === 0 ? "translate-y-[-10px]" : "translate-y-[10px]"}
                `}
              >
                <img
                  src={src}
                  alt="Wedding filmmaking"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
