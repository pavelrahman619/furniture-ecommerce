import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { CountdownTimerFour } from "../../components/Countdown";
import { LayoutTwo } from "../../components/Layout";
import { HeroSliderFive } from "../../components/HeroSlider";
import { SectionTitleOne } from "../../components/SectionTitle";
import { getProducts } from "../../lib/product";
import { ProductGridWrapper } from "../../components/ProductThumb";
import { TestimonialOne } from "../../components/Testimonial";
import { ImageCtaThree, ImageCtaTwo } from "../../components/Cta";
import { HoverBannerOne } from "../../components/Banner";
import { HeroSliderTwelve } from "../../components/HeroSlider";
import heroSliderData from "../../data/hero-sliders/hero-slider-outdoor.json";
import testimonialOneData from "../../data/testimonials/testimonial-one.json";
import Outdoor from "../../components/LandingpageContent/outdoor";
import OutdoorCTA from "../../components/ImageCTA/OutdoorCTA";

const Furniture = ({ products }) => {
  return (
    <LayoutTwo aboutOverlay={false}>
      {/* hero slider */}
      <HeroSliderTwelve
        sliderData={heroSliderData}
        spaceBottomClass="space-mb--r130"
      />

 <Outdoor/>
     
<OutdoorCTA spaceBottomClass="space-mb--r130"/>
    </LayoutTwo>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    products: getProducts(products, "furniture", "popular", 8)
  };
};

export default connect(mapStateToProps)(Furniture);
