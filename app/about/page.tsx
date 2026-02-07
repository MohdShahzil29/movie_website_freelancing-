// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FaPlay, FaTimes } from "react-icons/fa";

// // TypeScript version — white theme, stronger visuals, and robust image preloading
// // Fix for images not showing: we now preload images client-side with JS Image() and show a fallback while loading.

// const SAMPLE_VIDEO = "https://www.w3schools.com/html/mov_bbb.mp4"; // replace with your showreel

// const unsplashQueries = [
//   "wedding-couple",
//   "bride-portrait",
//   "groom-portrait",
//   "wedding-ceremony",
//   "wedding-dance",
//   "rings",
//   "wedding-details",
// ];

// function getUnsplashUrl(query: string, w = 1400, h = 900) {
//   return `https://source.unsplash.com/${w}x${h}/?${encodeURIComponent(query)}`;
// }

// type LightboxState = { open: boolean; src: string; alt?: string };

// export default function WeddingFilmsPage(): JSX.Element {
//   const [openVideo, setOpenVideo] = useState(false);
//   const [lightbox, setLightbox] = useState<LightboxState>({
//     open: false,
//     src: "",
//   });
//   const [loadedImgs, setLoadedImgs] = useState<string[]>([]);
//   const [loading, setLoading] = useState(true);

//   // Preload images to avoid blank <img> or broken display
//   useEffect(() => {
//     let mounted = true;
//     const urls: string[] = [];
//     let count = 0;

//     unsplashQueries.forEach((q, i) => {
//       const src = getUnsplashUrl(q, 1200, 900) + `&v=${Date.now()}-${i}`; // cache-buster to force fresh image
//       const img = new Image();
//       img.src = src;
//       img.onload = () => {
//         if (!mounted) return;
//         urls[i] = src;
//         count += 1;
//         // when all loaded or partial loaded, update state so UI shows available images
//         setLoadedImgs((prev) => {
//           const copy = [...prev];
//           copy[i] = src;
//           return copy;
//         });
//         if (count === unsplashQueries.length) setLoading(false);
//       };
//       img.onerror = () => {
//         if (!mounted) return;
//         // fallback small grey placeholder (data URI)
//         const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent(
//           `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='900'><rect width='100%' height='100%' fill='#efefef'/><text x='50%' y='50%' font-size='28' text-anchor='middle' fill='#c1c1c1'>Image unavailable</text></svg>`,
//         )}`;
//         urls[i] = placeholder;
//         setLoadedImgs((prev) => {
//           const copy = [...prev];
//           copy[i] = placeholder;
//           return copy;
//         });
//         count += 1;
//         if (count === unsplashQueries.length) setLoading(false);
//       };
//     });

//     return () => {
//       mounted = false;
//     };
//   }, []);

//   return (
//     <main className="min-h-screen bg-white text-gray-900 antialiased">
//       {/* HERO - white themed, strong typograhpy */}
//       <section className="relative h-[86vh] overflow-hidden border-b">
//         <video
//           className="absolute inset-0 w-full h-full object-cover opacity-60"
//           src={SAMPLE_VIDEO}
//           autoPlay
//           muted
//           loop
//           playsInline
//         />

//         <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/95" />

//         <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-start px-6 md:px-10">
//           <motion.h1
//             initial={{ y: 24, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.12, duration: 0.6 }}
//             className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl text-gray-900"
//           >
//             We craft{" "}
//             <span className="text-rose-600">timeless wedding films</span>
//             <br /> that feel like a cinematic love letter.
//           </motion.h1>

//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.28, duration: 0.6 }}
//             className="mt-6 max-w-2xl text-gray-700"
//           >
//             From candid vows to the first dance — we capture emotion, light, and
//             the little details that make your day uniquely yours.
//           </motion.p>

//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.44, duration: 0.6 }}
//             className="mt-8 flex gap-4"
//           >
//             <button
//               onClick={() => setOpenVideo(true)}
//               className="inline-flex items-center gap-3 bg-rose-600 text-white px-6 py-3 rounded-3xl shadow-lg hover:shadow-xl transform active:scale-95 transition"
//             >
//               <FaPlay />
//               Showreel
//             </button>

//             <a
//               href="#gallery"
//               className="inline-flex items-center gap-3 border border-gray-200 px-6 py-3 rounded-3xl hover:bg-gray-50 transition"
//             >
//               View Gallery
//             </a>
//           </motion.div>
//         </div>

//         {/* strong decorative shapes */}
//         <motion.div
//           className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-gradient-to-tr from-rose-200 to-pink-100 opacity-60 blur-3xl"
//           animate={{ rotate: -360 }}
//           transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
//         />
//       </section>

//       {/* SERVICES */}
//       <section className="container mx-auto px-6 md:px-10 py-16">
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <Card
//             title="Cinematic Storytelling"
//             desc="We craft a narrative-driven film — not just clips stitched together."
//           />
//           <Card
//             title="Candid Moments"
//             desc="We catch spontaneous, emotional moments that make your film feel real."
//           />
//           <Card
//             title="Full Production"
//             desc="High-end cameras, stabilizers, drone shots and professional sound."
//           />
//         </motion.div>
//       </section>

//       {/* GALLERY */}
//       <section id="gallery" className="container mx-auto px-6 md:px-10 pb-24">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-3xl font-bold">Gallery</h2>
//           <p className="text-sm text-gray-600">
//             High-res captures & showreel stills
//           </p>
//         </div>

//         {loading && (
//           <div className="mb-6 text-sm text-gray-500">
//             Loading images — fetching fresh shots from Unsplash...
//           </div>
//         )}

//         <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
//           {unsplashQueries.map((q, i) => {
//             const src = loadedImgs[i] ?? getUnsplashUrl(q, 800, 600);
//             return (
//               <motion.button
//                 key={q}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 onClick={() =>
//                   setLightbox({ open: true, src, alt: q.replace(/-/g, " ") })
//                 }
//                 className="group overflow-hidden rounded-2xl relative aspect-[4/3] bg-gray-50 border"
//               >
//                 <img
//                   alt={q}
//                   src={src}
//                   className="w-full h-full object-cover transform group-hover:scale-105 transition"
//                   loading="lazy"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
//                   <div>
//                     <div className="text-sm font-semibold text-gray-800">
//                       {q.replace(/-/g, " ")}
//                     </div>
//                   </div>
//                 </div>
//               </motion.button>
//             );
//           })}
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="bg-gray-50 py-14">
//         <div className="container mx-auto px-6 md:px-10">
//           <h3 className="text-2xl font-bold mb-6">Couples love our films</h3>

//           <motion.div
//             className="grid md:grid-cols-3 gap-6"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             <Testimonial
//               quote="They made us feel like movie stars — every moment was captured beautifully."
//               who="Aisha &amp; Raj"
//             />
//             <Testimonial
//               quote="The film made our parents cry (in a good way!)."
//               who="Sana &amp; Imran"
//             />
//             <Testimonial
//               quote="Fast turnaround and the final color grading was stunning."
//               who="Meera &amp; Arjun"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="container mx-auto px-6 md:px-10 py-12 text-gray-700">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//           <div>
//             <h4 className="text-xl font-bold">Cinematic Weddings</h4>
//             <p className="text-sm">Make your memories last a lifetime.</p>
//           </div>

//           <div className="flex gap-4">
//             <a href="#" className="text-sm hover:underline">
//               Contact
//             </a>
//             <a href="#" className="text-sm hover:underline">
//               Pricing
//             </a>
//             <a href="#" className="text-sm hover:underline">
//               Portfolio
//             </a>
//           </div>
//         </div>
//       </footer>

//       {/* VIDEO MODAL */}
//       {openVideo && (
//         <Modal onClose={() => setOpenVideo(false)}>
//           <video
//             src={SAMPLE_VIDEO}
//             controls
//             autoPlay
//             className="w-full h-[70vh] object-cover rounded-lg shadow-lg"
//           />
//         </Modal>
//       )}

//       {/* LIGHTBOX */}
//       {lightbox.open && (
//         <Modal onClose={() => setLightbox({ open: false, src: "" })}>
//           <img
//             src={lightbox.src}
//             alt={lightbox.alt ?? "photo"}
//             className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
//           />
//         </Modal>
//       )}
//     </main>
//   );
// }

// // Small presentational components
// function Card({ title, desc }: { title: string; desc: string }) {
//   return (
//     <div className="bg-white p-6 rounded-2xl shadow-sm border">
//       <h4 className="font-semibold text-lg mb-2">{title}</h4>
//       <p className="text-sm text-gray-700">{desc}</p>
//     </div>
//   );
// }

// function Testimonial({ quote, who }: { quote: string; who: string }) {
//   return (
//     <div className="bg-white p-6 rounded-2xl shadow-sm border">
//       <p className="italic text-gray-700">“{quote}”</p>
//       <div className="mt-4 text-sm font-semibold text-gray-800">{who}</div>
//     </div>
//   );
// }

// function Modal({
//   children,
//   onClose,
// }: {
//   children: React.ReactNode;
//   onClose: () => void;
// }) {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
//       <div
//         className="absolute inset-0 bg-black/40 backdrop-blur-sm"
//         onClick={onClose}
//       />
//       <motion.div
//         initial={{ scale: 0.96, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.96, opacity: 0 }}
//         transition={{ duration: 0.18 }}
//         className="relative z-10 max-w-5xl w-full"
//       >
//         <div className="flex justify-end mb-4">
//           <button
//             onClick={onClose}
//             className="bg-white p-2 rounded-full hover:bg-gray-100 transition shadow"
//           >
//             <FaTimes />
//           </button>
//         </div>

//         <div className="bg-white p-4 rounded-lg shadow-lg">{children}</div>
//       </motion.div>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";

// TypeScript — robust image fetching (fetch -> blob -> objectURL)
// This avoids redirect / CORS issues with source.unsplash.com and fixes images-not-showing problem.

const SAMPLE_VIDEO = "https://www.w3schools.com/html/mov_bbb.mp4"; // replace with your showreel

const unsplashQueries = [
  "wedding-couple",
  "bride-portrait",
  "groom-portrait",
  "wedding-ceremony",
  "wedding-dance",
  "rings",
  "wedding-details",
];

function getUnsplashUrl(query: string, w = 1400, h = 900) {
  return `https://source.unsplash.com/${w}x${h}/?${encodeURIComponent(query)}`;
}

type LightboxState = { open: boolean; src: string; alt?: string };

export default function WeddingFilmsPage() {
  const [openVideo, setOpenVideo] = useState(false);
  const [lightbox, setLightbox] = useState<LightboxState>({
    open: false,
    src: "",
  });
  const [loadedImgs, setLoadedImgs] = useState<(string | null)[]>(
    new Array(unsplashQueries.length).fill(null),
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const controllers: AbortController[] = [];
    const objectURLs: string[] = [];

    async function fetchImage(q: string, i: number) {
      const controller = new AbortController();
      controllers.push(controller);
      const url = getUnsplashUrl(q, 1200, 900);

      try {
        const resp = await fetch(url, {
          signal: controller.signal,
          mode: "cors",
        });
        if (!resp.ok) throw new Error("Network response not ok");
        const blob = await resp.blob();
        const objUrl = URL.createObjectURL(blob);
        objectURLs.push(objUrl);
        if (!mounted) return;
        setLoadedImgs((prev) => {
          const copy = [...prev];
          copy[i] = objUrl;
          return copy;
        });
      } catch (err) {
        // fallback: simple SVG placeholder as data URL
        const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent(
          `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'><rect width='100%' height='100%' fill='#f3f3f3'/><text x='50%' y='50%' font-size='20' text-anchor='middle' fill='#b1b1b1'>Image unavailable</text></svg>`,
        )}`;
        if (!mounted) return;
        setLoadedImgs((prev) => {
          const copy = [...prev];
          copy[i] = placeholder;
          return copy;
        });
      }
    }

    // fetch all images in parallel but update as they finish
    (async () => {
      await Promise.all(unsplashQueries.map((q, i) => fetchImage(q, i))).catch(
        () => {
          /* ignore individual errors */
        },
      );
      if (mounted) setLoading(false);
    })();

    return () => {
      mounted = false;
      controllers.forEach((c) => c.abort());
      // revoke object URLs
      loadedImgs.forEach((u) => {
        if (u && u.startsWith("blob:")) URL.revokeObjectURL(u);
      });
      objectURLs.forEach((o) => URL.revokeObjectURL(o));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      {/* HERO */}
      <section className="relative h-[82vh] overflow-hidden border-b">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src={SAMPLE_VIDEO}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/95" />

        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-start px-6 md:px-10">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl text-gray-900"
          >
            We craft{" "}
            <span className="text-rose-600">timeless wedding films</span>
            <br /> that feel like a cinematic love letter.
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="mt-6 max-w-2xl text-gray-700"
          >
            From candid vows to the first dance — we capture emotion, light, and
            the little details that make your day uniquely yours.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={() => setOpenVideo(true)}
              className="inline-flex items-center gap-3 bg-rose-600 text-white px-6 py-3 rounded-3xl shadow-lg hover:shadow-xl transform active:scale-95 transition"
            >
              <FaPlay />
              Showreel
            </button>

            <a
              href="#gallery"
              className="inline-flex items-center gap-3 border border-gray-200 px-6 py-3 rounded-3xl hover:bg-gray-50 transition"
            >
              View Gallery
            </a>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            title="Cinematic Storytelling"
            desc="We craft a narrative-driven film — not just clips stitched together."
          />
          <Card
            title="Candid Moments"
            desc="We catch spontaneous, emotional moments that make your film feel real."
          />
          <Card
            title="Full Production"
            desc="High-end cameras, stabilizers, drone shots and professional sound."
          />
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="container mx-auto px-6 md:px-10 pb-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Gallery</h2>
          <p className="text-sm text-gray-600">
            High-res captures & showreel stills
          </p>
        </div>

        {loading && (
          <div className="mb-6 text-sm text-gray-500">Loading images...</div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {unsplashQueries.map((q, i) => {
            const src = loadedImgs[i] ?? getUnsplashUrl(q, 800, 600);
            return (
              <motion.button
                key={q}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  setLightbox({ open: true, src, alt: q.replace(/-/g, " ") })
                }
                className="group overflow-hidden rounded-2xl relative aspect-[4/3] bg-gray-50 border shadow-sm"
              >
                {/* accessibility + loading indicator */}
                {!loadedImgs[i] && (
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Loading…
                  </div>
                )}

                <img
                  alt={q}
                  src={src}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                  <div>
                    <div className="text-sm font-semibold text-gray-800">
                      {q.replace(/-/g, " ")}
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 py-14">
        <div className="container mx-auto px-6 md:px-10">
          <h3 className="text-2xl font-bold mb-6">Couples love our films</h3>

          <div className="grid md:grid-cols-3 gap-6">
            <Testimonial
              quote="They made us feel like movie stars — every moment was captured beautifully."
              who="Aisha &amp; Raj"
            />
            <Testimonial
              quote="The film made our parents cry (in a good way!)."
              who="Sana &amp; Imran"
            />
            <Testimonial
              quote="Fast turnaround and the final color grading was stunning."
              who="Meera &amp; Arjun"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="container mx-auto px-6 md:px-10 py-12 text-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h4 className="text-xl font-bold">Cinematic Weddings</h4>
            <p className="text-sm">Make your memories last a lifetime.</p>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-sm hover:underline">
              Contact
            </a>
            <a href="#" className="text-sm hover:underline">
              Pricing
            </a>
            <a href="#" className="text-sm hover:underline">
              Portfolio
            </a>
          </div>
        </div>
      </footer>

      {/* VIDEO MODAL */}
      {openVideo && (
        <Modal onClose={() => setOpenVideo(false)}>
          <video
            src={SAMPLE_VIDEO}
            controls
            autoPlay
            className="w-full h-[70vh] object-cover rounded-lg shadow-lg"
          />
        </Modal>
      )}

      {/* LIGHTBOX */}
      {lightbox.open && (
        <Modal onClose={() => setLightbox({ open: false, src: "" })}>
          <img
            src={lightbox.src}
            alt={lightbox.alt ?? "photo"}
            className="w-full h-auto rounded-lg max-h-[80vh] object-contain"
          />
        </Modal>
      )}
    </main>
  );
}

// Small presentational components
function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-sm text-gray-700">{desc}</p>
    </div>
  );
}

function Testimonial({ quote, who }: { quote: string; who: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border">
      <p className="italic text-gray-700">“{quote}”</p>
      <div className="mt-4 text-sm font-semibold text-gray-800">{who}</div>
    </div>
  );
}

function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="relative z-10 max-w-5xl w-full"
      >
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="bg-white p-2 rounded-full hover:bg-gray-100 transition shadow"
          >
            <FaTimes />
          </button>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg">{children}</div>
      </motion.div>
    </div>
  );
}
