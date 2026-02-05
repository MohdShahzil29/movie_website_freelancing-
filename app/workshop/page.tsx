import React from "react";
import Workshops from "./Workshops";
import WhatYouLearn from "./WhatYouLearn";
import UpcomingWorkshops from "./UpcomingWorkshops";
import KeyTakeaways from "./KeyTakeaways";
import MastermindProfileSection from "./MastermindProfileSection";
import Faq from "./Faq";

const Workshop = () => {
  return (
    <div>
      <Workshops />
      <WhatYouLearn />
      <UpcomingWorkshops />
      <KeyTakeaways />
      <MastermindProfileSection
        title="THE MASTERMIND"
        role="FOUNDER"
        name="Vishal Punjabi"
        imageUrl="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        description={`Vishal Punjabi, an award-winning filmmaker, storyteller, and visionary,
founded The Wedding Filmer (TWF) in 2010, forever changing the way weddings
are captured in India. Introducing the country’s first-ever wedding feature film,
he redefined the genre by blending cinematic storytelling, original music,
and raw human emotion.

Under his creative leadership, TWF has filmed over 500 weddings across
30+ countries, producing viral films that have garnered millions of views
and inspired a new generation of wedding filmmakers...`}
      />
      <Faq />
    </div>
  );
};

export default Workshop;
