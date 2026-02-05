"use client";
import React, { useState } from "react";

const faqs = [
  {
    q: "Who can attend this workshop?",
    a: "Anyone interested in wedding filmmaking — beginners, professionals, and enthusiasts.",
  },
  {
    q: "What topics will be covered in the workshop?",
    a: "Storytelling, pre-production, filming techniques, sound, editing, workflow, and business insights.",
  },
  {
    q: "Do I need to bring anything for the workshop?",
    a: "You may bring a notebook or camera, but it is not mandatory.",
  },
  {
    q: "Do I need prior experience to attend the workshop?",
    a: "No prior experience is required. The workshop is designed for all levels.",
  },
  {
    q: "Does the workshop cover only filmmaking, or photography as well?",
    a: "The focus is primarily on filmmaking, with some concepts applicable to photography.",
  },
  {
    q: "Will I receive a certificate after completing this workshop?",
    a: "Yes, all participants receive a certificate of participation.",
  },
  {
    q: "Is recording or photography of workshop content allowed?",
    a: "Recording is not allowed unless explicitly mentioned by the instructors.",
  },
  {
    q: "How do I sign up for the workshop?",
    a: "You can register directly through the workshop registration page.",
  },
  {
    q: "Will I get a refund if I am unable to attend?",
    a: "Refund policies are shared during registration and may vary by workshop.",
  },
  {
    q: "Is there any EMI option available for payment?",
    a: "Yes, EMI options may be available depending on the payment provider.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-14">
      <div className="text-center mb-10 px-4">
        <p className="text-xs tracking-widest text-gray-500 uppercase">
          Common Workshop Queries
        </p>
        <h2 className="mt-2 text-3xl font-serif tracking-wide">
          FREQUENTLY ASKED QUESTIONS
        </h2>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {faqs.map((item, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between text-left"
            >
              <span className="text-sm text-gray-800">{item.q}</span>
              <span className="text-red-500 text-sm">♥</span>
            </button>

            {openIndex === index && (
              <p className="mt-3 text-sm text-gray-500 max-w-3xl">{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
