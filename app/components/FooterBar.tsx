"use client";

import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";

export default function FooterBar() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* LEFT TEXT */}
        <p className="text-xs text-gray-600 text-center md:text-left">
          © 2024 — The Wedding Filmer |{" "}
          <span className="font-medium text-black">Website Partners</span> –{" "}
          <span className="text-red-500 font-medium">DesignAR</span>
        </p>

        {/* RIGHT SOCIAL ICONS */}
        <div className="flex items-center gap-3">
          {[
            <Facebook />,
            <Instagram />,
            <Twitter />,
            <Linkedin />,
            <Youtube />,
          ].map((Icon, i) => (
            <button
              key={i}
              className="
                w-9 h-9
                rounded-full
                bg-gray-100
                flex items-center justify-center
                text-gray-700
                hover:bg-black hover:text-white
                transition
              "
            >
              {Icon}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
