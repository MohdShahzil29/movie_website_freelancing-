// "use client";

// import {
//   Home,
//   Film,
//   Info,
//   Users,
//   GraduationCap,
//   Newspaper,
//   Phone,
// } from "lucide-react";

// const menu = [
//   { name: "Home", icon: Home },
//   { name: "Films", icon: Film },
//   { name: "About", icon: Info },
//   { name: "Crew", icon: Users },
//   { name: "Workshop", icon: GraduationCap },
//   { name: "Blog & Press", icon: Newspaper },
//   { name: "Contact", icon: Phone },
// ];

// export default function Sidebar() {
//   const active = "Home";

//   return (
//     <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-black text-white flex-col px-6 py-8">
//       {/* Logo (Centered Top) */}
//       <div className="flex justify-center mb-14">
//         <h1 className="text-3xl font-extrabold tracking-wide text-center leading-tight">
//           The Wedding
//           <br />
//           Filmer
//         </h1>
//       </div>

//       {/* Menu (Middle) */}
//       <nav className="flex flex-col gap-2">
//         {menu.map((item, i) => {
//           const isActive = item.name === active;
//           return (
//             <button
//               key={i}
//               className={`
//                 flex items-center gap-4 px-5 py-3 rounded-2xl
//                 transition-all duration-300
//                 ${
//                   isActive
//                     ? "bg-white text-black shadow-md"
//                     : "text-gray-400 hover:text-white hover:bg-white/10"
//                 }
//               `}
//             >
//               <item.icon size={20} className={isActive ? "text-red-500" : ""} />
//               <span className="text-base font-medium">{item.name}</span>
//             </button>
//           );
//         })}
//       </nav>

//       {/* Bottom CTA with Gradient Border */}
//       <div className="mt-auto pt-10">
//         <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-red-500 via-orange-400 to-yellow-400">
//           {/* Inner Card */}
//           <div className="rounded-2xl bg-black p-6 text-center">
//             <p className="text-lg font-serif mb-5 text-gray-200">
//               We'd love to
//               <br />
//               hear your story!
//             </p>

//             <button className="w-full rounded-xl bg-red-600 py-3 text-white font-semibold flex items-center justify-center gap-2 hover:bg-red-700 transition">
//               Enquire →
//             </button>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Film,
  Info,
  Users,
  GraduationCap,
  Newspaper,
  Phone,
} from "lucide-react";

const menu = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Films", icon: Film, href: "/films" },
  { name: "About", icon: Info, href: "/about" },
  { name: "Crew", icon: Users, href: "/crew" },
  { name: "Workshop", icon: GraduationCap, href: "/workshop" },
  { name: "Blog & Press", icon: Newspaper, href: "/blog" },
  { name: "Contact", icon: Phone, href: "/contact" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-black text-white flex-col px-6 py-8">
      {/* LOGO */}
      <div className="flex justify-center mb-14">
        <h1 className="text-3xl font-extrabold tracking-wide text-center leading-tight">
          The Wedding
          <br />
          Filmer
        </h1>
      </div>

      {/* MENU */}
      <nav className="flex flex-col gap-2">
        {menu.map((item, i) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={i}
              href={item.href}
              className={`
                flex items-center gap-4 px-5 py-3 rounded-2xl
                transition-all duration-300
                ${
                  isActive
                    ? "bg-white text-black shadow-md"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }
              `}
            >
              <item.icon size={20} className={isActive ? "text-red-500" : ""} />
              <span className="text-base font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* BOTTOM CTA */}
      <div className="mt-auto pt-10">
        <div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-red-500 via-orange-400 to-yellow-400">
          <div className="rounded-2xl bg-black p-6 text-center">
            <p className="text-lg font-serif mb-5 text-gray-200">
              We'd love to
              <br />
              hear your story!
            </p>

            <Link
              href="/contact"
              className="w-full rounded-xl bg-red-600 py-3 text-white font-semibold flex items-center justify-center gap-2 hover:bg-red-700 transition"
            >
              Enquire →
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
}
