import HeroContent from "./HeroContent";
import HeroRating from "./HeroRating";
import HeroStrip from "./HeroStrip";
import { useFadeIn } from "../../hooks/useFadeIn";

function Hero() {
  const ref = useFadeIn();
  return (
    <div ref={ref}>
      <HeroContent />
      <HeroRating />
      <HeroStrip />
    </div>
  );
}

export default Hero;
