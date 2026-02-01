// "use client";

// import { Search, ArrowRight } from "lucide-react";

// export default function SearchBar() {
//   return (
//     <div className="hidden md:flex w-full items-center gap-4 px-4 px-8 mb-6 mt-3">
//       {/* Search Input */}
//       <div className="flex items-center gap-3 flex-1 bg-gray-200 rounded-full px-5 py-3">
//         <Search size={18} className="text-gray-500" />
//         <input
//           type="text"
//           placeholder="Search a film here"
//           className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-500"
//         />
//         <ArrowRight size={18} className="text-gray-500" />
//       </div>

//       {/* FAQ Button */}
//       <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black/90 transition">
//         FAQs
//       </button>

//       {/* Enquire Button */}
//       <button className="bg-red-500 text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-red-600 transition">
//         Enquire
//         <ArrowRight size={16} />
//       </button>
//     </div>
//   );
// }

"use client";

import { Search, ArrowRight } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="hidden md:flex w-full items-center gap-4 px-8 mb-6 mt-3">
      {/* Search Input */}
      <div className="flex items-center gap-3 flex-1 bg-gray-200 rounded-full px-5 py-3">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search a film here"
          className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-500"
        />
        <ArrowRight size={18} className="text-gray-500" />
      </div>

      {/* FAQ Button */}
      <button
        className="
          group
          bg-black text-white
          px-6 py-3 rounded-full
          text-sm font-medium
          transition-all duration-300 ease-out
          hover:scale-[1.05]
          hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]
          active:scale-[0.98]
        "
      >
        FAQs
      </button>

      {/* Enquire Button */}
      <button
        className="
          group
          relative overflow-hidden
          bg-red-500 text-white
          px-6 py-3 rounded-full
          text-sm font-medium
          flex items-center gap-2
          transition-all duration-300 ease-out
          hover:scale-[1.06]
          hover:shadow-[0_12px_35px_rgba(239,68,68,0.6)]
          active:scale-[0.97]
        "
      >
        <span className="relative z-10">Enquire</span>

        {/* Arrow animation */}
        <ArrowRight
          size={16}
          className="
            relative z-10
            transition-transform duration-300
            group-hover:translate-x-1.5
          "
        />

        {/* Shine effect */}
        <span
          className="
            absolute inset-0
            bg-gradient-to-r from-transparent via-white/30 to-transparent
            translate-x-[-120%]
            group-hover:translate-x-[120%]
            transition-transform duration-700
          "
        />
      </button>
    </div>
  );
}
