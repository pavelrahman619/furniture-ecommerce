import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getProducts } from "../../lib/product";
import { LayoutTwo } from "../../components/Layout";
import { HeroSliderFour } from "../../components/HeroSlider";
import { ProductTabThree } from "../../components/ProductTab";
import { CountdownTimerSix } from "../../components/Countdown";
import { HoverBannerTwo, HoverBannerThree } from "../../components/Banner";
import { BlogPostSlider } from "../../components/Blog";
import blogData from "../../data/blog-posts/blog-post-one.json";
import { HeroSliderTwelve } from "../../components/HeroSlider";
import heroSliderData from "../../data/hero-sliders/hero-slider-bedroom.json";
import Bedroom from "../../components/LandingpageContent/bedroom";
import { ImageCtaThree } from "../../components/Cta";
import BedroomCTA from "../../components/ImageCTA/BedroomCTA";
const Perfumes = ({ newProducts, popularProducts, saleProducts }) => {
  return (
    <LayoutTwo>
      {/* hero slider with banner */}
      <HeroSliderTwelve
        sliderData={heroSliderData}
        spaceBottomClass="space-mb--r130"
      />
      {/* countdown timer */}

    <Bedroom/>

     
<BedroomCTA spaceBottomClass="space-mb--r130"/>
      {/* banner */}
     
    </LayoutTwo>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    newProducts: getProducts(products, "perfumes", "new", 10),
    popularProducts: getProducts(products, "perfumes", "popular", 10),
    saleProducts: getProducts(products, "perfumes", "sale", 10)
  };
};

export default connect(mapStateToProps)(Perfumes);
