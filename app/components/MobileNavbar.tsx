// "use client";

// import { useEffect, useState } from "react";
// import { Home } from "lucide-react";

// export default function MobileNavbar() {
//   const [show, setShow] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   let scrollTimeout: NodeJS.Timeout;

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY) {
//         setShow(false);
//       } else {
//         setShow(true);
//       }

//       setLastScrollY(currentScrollY);

//       clearTimeout(scrollTimeout);
//       scrollTimeout = setTimeout(() => {
//         setShow(true);
//       }, 150);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <div
//       className={`
//         md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50
//         transition-transform duration-300
//         ${show ? "translate-y-0" : "translate-y-24"}
//       `}
//     >
//       <nav
//         className="
//           flex items-center justify-between
//           w-[calc(100vw-2rem)]
//           max-w-md
//           bg-black/90 backdrop-blur-lg
//           px-6 py-3
//           rounded-full shadow-lg
//         "
//       >
//         {/* Home */}
//         <button className="text-white">
//           <Home size={22} />
//         </button>

//         {/* Logo */}
//         <div className="text-white font-semibold tracking-wide text-sm">
//           TWF
//         </div>

//         {/* Enquire */}
//         <button className="bg-red-600 px-5 py-2 rounded-full text-sm font-medium text-white">
//           Enquire
//         </button>
//       </nav>
//     </div>
//   );
// }

"use client";

import { useEffect, useState, useRef } from "react";
import { Home } from "lucide-react";

export default function MobileNavbar() {
  const [show, setShow] = useState(false); // 👈 default hidden
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // show on scroll
      setShow(true);

      // hide after scroll stops
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setShow(false);
      }, 200); // adjust delay if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className={`
        md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50
        transition-transform duration-300 ease-out
        ${show ? "translate-y-0" : "translate-y-24"}
      `}
    >
      <nav
        className="
          flex items-center justify-between
          w-[calc(100vw-2rem)]
          max-w-md
          bg-black/90 backdrop-blur-lg
          px-6 py-3
          rounded-full shadow-lg
        "
      >
        {/* Home */}
        <button className="text-white">
          <Home size={22} />
        </button>

        {/* Logo */}
        <div className="text-white font-semibold tracking-wide text-sm">
          TWF
        </div>

        {/* Enquire */}
        <button className="bg-red-600 px-5 py-2 rounded-full text-sm font-medium text-white">
          Enquire
        </button>
      </nav>
    </div>
  );
}
