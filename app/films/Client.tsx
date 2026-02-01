import React from "react";
import SearchBar from "../components/SearchBar";

const Client = () => {
  return (
    <div>
      <SearchBar />
      <div className="w-full flex flex-col items-center py-7">
        {/* TITLE */}
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-black">
          TWF FILMS
        </h2>

        {/* UNDERLINE */}
        <div className="mt-6 w-20 h-[1px] bg-gray-300" />
      </div>
    </div>
  );
};

export default Client;
