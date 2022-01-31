import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { LayoutTwo } from "../../components/Layout";
import { HeroSliderSix } from "../../components/HeroSlider";
import { CategoryGridFour } from "../../components/Category";
import { getProducts } from "../../lib/product";
import { BlogPostSlider } from "../../components/Blog";
import { SectionTitleOne } from "../../components/SectionTitle";
import { ImageCtaThree } from "../../components/Cta";
import { CountdownTimerThree } from "../../components/Countdown";
import { ProductSliderOne } from "../../components/ProductSlider";
import blogData from "../../data/blog-posts/blog-post-one.json";
import heroSliderData from "../../data/hero-sliders/hero-slider-kitchen.json";
import { HeroSliderTwelve } from "../../components/HeroSlider";
import Kitchen from "../../components/LandingpageContent/kitchen";
import KitchenCTA from "../../components/ImageCTA/KitchenCTA";
const SmartDesign = ({ products }) => {
  return (
    <LayoutTwo aboutOverlay={false}>
      {/* hero slider */}
      <HeroSliderTwelve
        sliderData={heroSliderData}
        spaceBottomClass="space-mb--r130"
      />
      <div className="space-mb--r100"></div>

  <Kitchen/>
 <KitchenCTA spaceBottomClass="space-mb--r130"/>
    </LayoutTwo>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    products: getProducts(products, "furniture", "popular", 10)
  };
};

export default connect(mapStateToProps)(SmartDesign);
