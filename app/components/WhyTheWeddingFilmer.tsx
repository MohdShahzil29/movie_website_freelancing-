"use client";

const items = [
  {
    image: "https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg",
    eyebrow: "POWERFUL STORYTELLING",
    title: "HEARTFELT DIALOGUES",
    desc: "Intimate conversations that capture the humor, drama, emotion, and love of your wedding, forming the backbone of your film. It’s therapeutic, and our expertise shines through in every story we tell.",
  },
  {
    image: "https://images.pexels.com/photos/3875087/pexels-photo-3875087.jpeg",
    eyebrow: "PIONEERING CINEMA",
    title: "CINEMATIC EXCELLENCE",
    desc: "With decades of film-making experience, we use state-of-the-art technology to reinvent ourselves for every story. Our pioneering approach ensures each wedding film is a unique masterpiece.",
  },
  {
    image: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg",
    eyebrow: "SIGNATURE SOUNDSCAPES",
    title: "TIMELESS TUNES",
    desc: "Every memory needs a melody. Our award-winning music, crafted exclusively for you, harmonizes with your wedding’s mood and story into an unforgettable experience.",
  },
];

export default function WhyTheWeddingFilmer() {
  return (
    <section className="bg-white py-32 overflow-hidden">
      {/* HEADING */}
      <div className="text-center mb-20 px-4">
        <p className="text-xs tracking-[0.35em] text-gray-500 mb-4">
          WHY THE WEDDING FILMER?
        </p>

        <h2 className="font-serif text-3xl md:text-4xl text-black">
          HEARTFELT · CINEMATIC · TIMELESS
        </h2>
      </div>

      {/* CARDS */}
      <div
        className="
          max-w-7xl mx-auto
          flex md:grid
          md:grid-cols-3
          gap-12
          px-6 md:px-16
          overflow-x-auto md:overflow-visible
          snap-x snap-mandatory
          no-scrollbar
        "
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="
              snap-start
              min-w-[85%] sm:min-w-[70%] md:min-w-0
            "
          >
            {/* IMAGE */}
            <div className="rounded-3xl overflow-hidden mb-8">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[320px] object-cover"
              />
            </div>

            {/* TEXT */}
            <p className="text-xs tracking-widest text-gray-500 mb-2">
              {item.eyebrow} →
            </p>

            <h3 className="font-serif text-xl text-black mb-4">{item.title}</h3>

            <p className="text-sm text-gray-600 leading-relaxed max-w-md">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
