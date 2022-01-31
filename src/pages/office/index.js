import { LayoutNine } from "../../components/Layout";
import { BlogPostSlider } from "../../components/Blog";
import { SectionTitleOne } from "../../components/SectionTitle";
import { HeroSliderSeven } from "../../components/HeroSlider/";
import { CategoryGridThree } from "../../components/Category";
import { CountdownTimerOne } from "../../components/Countdown";
import { HeroSliderTwelve } from "../../components/HeroSlider";
import blogData from "../../data/blog-posts/blog-post-one.json";
import heroSliderData from "../../data/hero-sliders/hero-slider-seven.json";
import { TestimonialOne } from "../../components/Testimonial";
import { ImageCtaThree, ImageCtaTwo } from "../../components/Cta";
import testimonialOneData from "../../data/testimonials/testimonial-one.json";
import { HoverBannerOne } from "../../components/Banner";
import { VideoIconContent, ImageTextContent } from "../../components/About";
import OfficeCTA from "../../components/ImageCTA/OfficeCTA";
const Collection = () => {
  return (
    <LayoutNine aboutOverlay={false}>
      {/* hero slider */}
      <HeroSliderSeven sliderData={heroSliderData}  spaceBottomClass="space-mb--50"/>
      <div className="space-mb--r100"></div>
      <HoverBannerOne spaceBottomClass="space-mb--r20" />
      <div className="space-mb--r100"></div>
      <VideoIconContent />
     {/* testimonial */}
     <TestimonialOne
        testimonialData={testimonialOneData}
        spaceBottomClass="space-mb--r100"
      />

      {/* image cta */}
      <OfficeCTA spaceBottomClass="space-mb--r100" />
    
    </LayoutNine>
  );
};

export default Collection;
