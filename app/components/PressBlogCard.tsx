type Props = {
  image: string;
  tag?: string;
  title: string;
};

export default function PressBlogCard({ image, tag, title }: Props) {
  return (
    <div className="group cursor-pointer">
      <div className="relative h-[420px] rounded-3xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
        />

        {tag && (
          <span className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full uppercase">
            {tag}
          </span>
        )}
      </div>

      <h3 className="mt-5 font-serif text-lg leading-snug">{title}</h3>
    </div>
  );
}
