"use client";

export default function CareersSection() {
  return (
    <section className="bg-white px-6 md:px-16 py-24">
      <div className="max-w-7xl mx-auto">
        {/* 🔝 TOP INFO BAR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-24">
          <div>
            <p className="text-red-500 text-sm mb-2">Phone</p>
            <p className="text-sm text-gray-800">+91 98198 63229</p>
          </div>

          <div>
            <p className="text-red-500 text-sm mb-2">The Studio</p>
            <p className="text-sm text-gray-800 leading-relaxed">
              Astha Bunglow no.30, JP Rd, Aram Nagar Part 2, Versova, Andheri
              West, Mumbai, Maharashtra 400061
            </p>
            <p className="text-xs text-gray-400 mt-2">(Get directions)</p>
          </div>

          <div>
            <p className="text-red-500 text-sm mb-2">Email</p>
            <p className="text-sm text-gray-800">info@theweddingfilmer.co.in</p>
          </div>
        </div>

        {/* 🖼 IMAGE + CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3014853/pexels-photo-3014853.jpeg"
              alt="TWF Team"
              className="w-full h-[30rem] object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-xs tracking-[0.35em] text-gray-500 mb-4">
              CAREERS AT TWF
            </p>

            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
              HELP US TURN WEDDINGS INTO
              <br />
              CINEMATIC MASTERPIECES
            </h2>

            <p className="text-sm text-gray-600 max-w-md mb-8 leading-relaxed">
              Join our talented crew and contribute to making every wedding film
              beautiful. Your creativity can make a difference.
            </p>

            <button className="bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-black/90 transition">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
