import React from "react";
import WeddingEnquiryForm from "../components/WeddingEnquiryForm";
import CareersSection from "../components/CareersSection";

const Contact = () => {
  return (
    <div>
      <div className="text-black">
        <div className="w-full flex flex-col items-center py-7">
          <h1 className="text-3xl font-bold text-center">Contact Us</h1>
          <p className="text-lg text-center">We would love to hear from you!</p>
        </div>
      </div>
      <WeddingEnquiryForm />
      <CareersSection />
    </div>
  );
};

export default Contact;
