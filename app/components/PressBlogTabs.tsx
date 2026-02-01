"use client";

type Props = {
  active: "press" | "blogs";
  onChange: (val: "press" | "blogs") => void;
};

export default function PressBlogTabs({ active, onChange }: Props) {
  return (
    <div className="flex justify-center items-center gap-6 mb-16">
      <button
        onClick={() => onChange("press")}
        className={`font-serif text-2xl tracking-wide ${
          active === "press" ? "text-red-500" : "text-black/60"
        }`}
      >
        PRESS
      </button>

      <span className="text-black/30">|</span>

      <button
        onClick={() => onChange("blogs")}
        className={`font-serif text-2xl tracking-wide ${
          active === "blogs" ? "text-red-500" : "text-black/60"
        }`}
      >
        BLOGS
      </button>
    </div>
  );
}
