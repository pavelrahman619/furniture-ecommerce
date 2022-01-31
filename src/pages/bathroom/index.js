import { LayoutSix } from "../../components/Layout";
import { AccessoriesContent } from "../../components/HomeContent";
import { BlogPostSlider } from "../../components/Blog";
import blogData from "../../data/blog-posts/blog-post-one.json";
import { HeroSliderTwelve } from "../../components/HeroSlider";
import heroSliderData from "../../data/hero-sliders/hero-slider-bathroom.json";
import Bathroom from "../../components/LandingpageContent/bathroom";
import { ImageCtaFour, ImageCtaThree } from "../../components/Cta";
import BathroomCTA from "../../components/ImageCTA/BathroomCTA";

const Accessories = () => {
  return (
    <LayoutSix>
       <HeroSliderTwelve
        sliderData={heroSliderData}
        spaceBottomClass="space-mb--r130"
      />
     <Bathroom/>
     <BathroomCTA spaceBottomClass="space-mb--r130"/>
    </LayoutSix>
  );
};

export default Accessories;
