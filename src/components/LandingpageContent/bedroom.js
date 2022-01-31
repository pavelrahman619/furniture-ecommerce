import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const Bedroom = () => {
  return (
    <div className="home-content-concept space-mb--r130">
      <Container className="wide">
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={8} className="offset-lg-4">
                <div className="section-title-container section-title--one section-title--concepthome space-mb--r130">
                  <p className="section-label space-mb--20">SS-2020</p>
                  <h1>Warm Welcomes</h1>
                  <p>
                  These products are aesthetically coherent, even if designed by different hands and feature curated forms and masterful craftsmanship, constructed with superior materials. 
                  </p>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a className="lezada-button-2">shop collection</a>
                  </Link>
                </div>
              </Col>
              <Col sm={10}>
                <div className="single-category single-category--one space-mb--r130">
                  <div className="single-category__image single-category__image--one">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/category/bedroom/bed.webp"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                    <div className="title title--style-two">
                      <p>Beds</p>
                      <Link
                        href="/shop/left-sidebar"
                        as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                      >
                        <a>+ Online store</a>
                      </Link>
                    </div>
                    <p className="product-count">4</p>
                  </div>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a className="banner-link" />
                  </Link>
                </div>
              </Col>
              <Col sm={8} className="offset-sm-4">
                <div className="single-category single-category--one space-mb--r130">
                  <div className="single-category__image single-category__image--one">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/category/bedroom/dresser.webp"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                    <div className="title title--style-two">
                      <p>Dressers</p>
                      <Link
                        href="/shop/left-sidebar"
                        as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                      >
                        <a>+ Online store</a>
                      </Link>
                    </div>
                    <p className="product-count">4</p>
                  </div>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a className="banner-link" />
                  </Link>
                </div>
              </Col>
              <Col lg={6} sm={8} className="offset-lg-5">
                <div className="single-category single-category--one">
                  <div className="single-category__image single-category__image--one">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/category/bedroom/nightstands.webp"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                    <div className="title title--style-two">
                      <p>Night Stand</p>
                      <Link
                        href="/shop/left-sidebar"
                        as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                      >
                        <a>+ Online store</a>
                      </Link>
                    </div>
                    <p className="product-count">4</p>
                  </div>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a className="banner-link" />
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
              <Col lg={8} className="offset-lg-2">
                <div className="single-category single-category--one single-category--custom-width space-mb--r130">
                  <div className="single-category__image single-category__image--one">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/category/bedroom/wardrobe.webp"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                    <div className="title title--style-two">
                      <p>Wardrobe</p>
                      <Link
                        href="/shop/left-sidebar"
                        as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                      >
                        <a>+ Online store</a>
                      </Link>
                    </div>
                    <p className="product-count">4</p>
                  </div>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a className="banner-link" />
                  </Link>
                </div>
              </Col>
              <Col lg={6} sm={8} className="offset-lg-2">
                <div className="single-category single-category--one space-mb--r130">
                  <div
                    className="single-category__content single-category__content--textbanner single-category__content--textbanner--style-two bg-img"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL +
                        "/assets/images/banners/bedroom.webp"
                      })`
                    }}
                  >
                    <p className="text">
                      <span>Harmony</span>
                      <br />
                      <span>In Every</span>
                      <br />
                      <span>Tone</span>
                    </p>
                  </div>
                </div>
              </Col>
              <Col sm={8} className="offset-sm-2">
                <div className="single-category single-category--one">
                  <div className="single-category__image single-category__image--one">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/category/bedroom/mirror.webp"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                    <div className="title title--style-two">
                      <p>Mirrors</p>
                      <Link
                        href="/shop/left-sidebar"
                        as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                      >
                        <a>+ Online store</a>
                      </Link>
                    </div>
                    <p className="product-count">4</p>
                  </div>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a className="banner-link" />
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Bedroom;
