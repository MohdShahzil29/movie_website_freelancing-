"use client";

interface SectionHeadingProps {
  title: string;
  actionText?: string;
  onActionClick?: () => void;
}

export default function SectionHeading({
  title,
  actionText,
  onActionClick,
}: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-between mb-12">
      {/* LEFT TITLE */}
      <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-black">
        {title}
      </h2>

      {/* RIGHT BUTTON (OPTIONAL) */}
      {actionText && (
        <button
          onClick={onActionClick}
          className="px-6 py-2 rounded-full bg-black text-white text-sm hover:scale-105 transition"
        >
          {actionText}
        </button>
      )}
    </div>
  );
}
