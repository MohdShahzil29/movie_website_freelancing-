import React from "react";
import { Metadata } from "next";
import Client from "./Client";
import SectionHeading from "../components/SectionHeading";
import TrendingNow from "../components/TrendingNow";

export const metadata: Metadata = {
  title: "Films - The Wedding Filmer",
  description: "Explore our cinematic wedding films collection.",
};

const Films = () => {
  return (
    <div>
      <Client />
      <div className="px-6 md:px-16">
        <SectionHeading title="LATEST FILMS" />
      </div>
      <div className="px-6 md:px-16">
        <TrendingNow />
      </div>
      <div className="px-6 md:px-16">
        <SectionHeading title="EDITOR'S PICKS" actionText="see more" />
      </div>
      <div className="px-6 md:px-16">
        <TrendingNow />
      </div>
      <div className="px-6 md:px-16">
        <SectionHeading title="TWF FILMS" />
      </div>
      <div className="px-6 md:px-16">
        <TrendingNow />
      </div>
    </div>
  );
};

export default Films;
