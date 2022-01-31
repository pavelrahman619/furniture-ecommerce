import Head from "next/head";
import { connect } from "react-redux";
import { getProducts } from "../../lib/product";
import { LayoutTwo } from "../../components/Layout";
import { HeroSliderEight } from "../../components/HeroSlider";
import { VideoIconContent, ImageTextContent } from "../../components/About";
import { ProductSliderThree } from "../../components/ProductSlider";
import { BrandLogoTwo } from "../../components/BrandLogo";
import { ImageCtaFour, ImageCtaThree } from "../../components/Cta";
import { ImageSliderOne } from "../../components/ImageSlider";
import { HeroSliderTwelve } from "../../components/HeroSlider";
import heroSliderData from "../../data/hero-sliders/hero-slider-entrance.json";
import brandLogoData from "../../data/brand-logos/brand-logo-one.json";
import imageSliderData from "../../data/image-sliders/image-slider-one.json";
import Entryway from "../../components/LandingpageContent/entryway";
import EntranceCTA from "../../components/ImageCTA/EntranceCTA";

const jewelry = ({ products }) => {
  return (
    <LayoutTwo aboutOverlay={false}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Spectral:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* hero slider */}
      <HeroSliderTwelve
        sliderData={heroSliderData}
        spaceBottomClass="space-mb--r130"
      />
    <Entryway/>
    <EntranceCTA spaceBottomClass="space-mb--r130"/>
    </LayoutTwo>
  );
};

const mapStateToProps = (state) => {
  const products = state.productData;
  return {
    products: getProducts(products, "jewelry", "popular", 9)
  };
};

export default connect(mapStateToProps)(jewelry);
