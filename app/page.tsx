import FeaturedWorkSection from "./components/FeaturedWorkSection";
import FooterBar from "./components/FooterBar";
import HeroSection from "./components/HeroSection";
import HeroVideo from "./components/HeroVideo";
import InventedWeddingFilms from "./components/InventedWeddingFilms";
import MusicSection from "./components/MusicSection";
import NotesOfGratitude from "./components/NotesOfGratitude";
import OriginalsSection from "./components/OriginalsSection";
import SearchBar from "./components/SearchBar";
import TWFAroundWorld from "./components/TWFAroundWorld";
import WatchTrailerSection from "./components/WatchTrailerSection";
import WhyTheWeddingFilmer from "./components/WhyTheWeddingFilmer";

export default function Home() {
  return (
    <div>
      <SearchBar />
      {/* <HeroSection /> */}
      <WatchTrailerSection />
      <TWFAroundWorld />
      <MusicSection />
      <OriginalsSection />
      <FeaturedWorkSection />
      <InventedWeddingFilms />
      <NotesOfGratitude />
      <WhyTheWeddingFilmer />
    </div>
  );
}
