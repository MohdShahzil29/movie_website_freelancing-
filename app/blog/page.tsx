import React from "react";
import PressBlogsSection from "../components/PressBlogsSection";
import { Metadata } from "next";
import SearchBar from "../components/SearchBar";

export const metadata: Metadata = {
  title: "Blogs - The Wedding Filmer",
  description: "Read our latest blogs and press features.",
};

const Blogs = () => {
  return (
    <div>
      <SearchBar />
      <PressBlogsSection />
    </div>
  );
};

export default Blogs;
