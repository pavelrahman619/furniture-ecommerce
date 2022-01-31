import { LayoutTwo } from "../../components/Layout";
import { HeroSliderTwelve } from "../../components/HeroSlider";
import { ImageSliderTwo } from "../../components/ImageSlider";
import { ConceptContent } from "../../components/HomeContent";

import heroSliderData from "../../data/hero-sliders/hero-slider-twelve.json";
import imageSliderData from "../../data/image-sliders/image-slider-one.json";
import { ImageCtaThree } from "../../components/Cta";
import LivingroomCTA from "../../components/ImageCTA/LivingroomCTA";

const Concept = () => {
  return (
    <LayoutTwo aboutOverlay={false}>
      {/* hero slider */}
      <HeroSliderTwelve
        sliderData={heroSliderData}
        spaceBottomClass="space-mb--r130"
      />
      {/* home content */}
      <ConceptContent />
      {/* image slider */}
     <LivingroomCTA spaceBottomClass="space-mb--r130"/>
    </LayoutTwo>
  );
};

export default Concept;
