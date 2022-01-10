import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const CreativeContent = () => {
  return (
    <Container className="wide">
      <Row>
        <Col lg={6}>
          <Row>
            <Col lg={12}>
              <div className="mobile-font single-category single-category--three space-mb--30">
                <div className="single-category__image single-category__image--three single-category__image--three--creativehome">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/banners/creative-home/living-room.png"
                    }
                    className="mobile img-fluid"
                    alt=""
                  />
                   <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/banners/creative-home/living-room-mobile.png"
                    }
                    className="desktop img-fluid"
                    alt=""
                  />
                  
                </div>
                <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
                  <div >
                  <p className="mobile-font" >
                      <Link
                        href="/living-room"
                        as={process.env.PUBLIC_URL + "living-room"}
                      >
                        <a>Living Room</a>
                      </Link>
                    </p>
                  
                    <p className="mobile-font-smaller"  >
                    <Link
                      href="/living-room/shop"
                      as={process.env.PUBLIC_URL + "/living-room/shop"}
                    >
                      <a>+ Shop Now</a>
                    </Link>
                    </p>
                  </div>
                </div>
                <Link
                  href="/living-room"
                  as={process.env.PUBLIC_URL + "/living-room"}
                >
                  <a className="banner-link"></a>
                </Link>
              </div>
            </Col>
            <Col lg={12}>
              <div className="single-category single-category--three space-mb--30">
                <div className="single-category__image single-category__image--three single-category__image--three--creativehome">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/banners/creative-home/bed.png"
                    }
                    className="mobile img-fluid"
                    alt=""
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/banners/creative-home/bed-mobile.png"
                    }
                    className="desktop img-fluid"
                    alt=""
                  />
                </div>
                <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
                  <div >
                  <p className="mobile-font" >
                      <Link
                        href="/bedrooom"
                        as={process.env.PUBLIC_URL + "/bedroom"}
                      >
                        <a>Bedroom</a>
                      </Link>
                    </p>
                    <p className="mobile-font-smaller"  >
                    <Link
                      href="/bedroom/shop"
                      as={process.env.PUBLIC_URL + "/bedroom/shop"}
                    >
                      <a>+ Shop Now</a>
                    </Link>
                    </p>
                  </div>
                </div>
                <Link
                  href="/bedroom"
                  as={process.env.PUBLIC_URL + "/bedroom"}
                >
                  <a className="banner-link"></a>
                </Link>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <Row>
            <Col lg={12}>
              <div className="single-category single-category--three space-mb--30">
                <div className="single-category__image single-category__image--three single-category__image--three--creativehome">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/banners/creative-home/office.png"
                    }
                    className="mobile img-fluid"
                    alt=""
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/banners/creative-home/office-mobile.png"
                    }
                    className="desktop img-fluid"
                    alt=""
                  />
                </div>
                <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
                  <div>
                  <p className="mobile-font" >
                      <Link
                        href="/office"
                        as={process.env.PUBLIC_URL + "/office"}
                      >
                        <a>Office</a>
                      </Link>
                    </p>
                    <p className="mobile-font-smaller"  >
                    <Link
                      href="/office/shop"
                      as={process.env.PUBLIC_URL + "/office/shop"}
                    >
                      <a>+ Shop Now</a>
                    </Link>
                    </p>
                  </div>
                </div>
                <Link
                  href="/office"
                  as={process.env.PUBLIC_URL + "/office"}
                >
                  <a className="banner-link"></a>
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="single-category single-category--three space-mb--30">
                <div className="single-category__image single-category__image--three single-category__image--three--creativehome">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/banners/creative-home/kitchen.png"
                    }
                    className="mobile img-fluid"
                    alt=""
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/banners/creative-home/kitchen-mobile.png"
                    }
                    className="desktop img-fluid"
                    alt=""
                  />
                </div>
                <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
                  <div>
                  <p className="mobile-font" >
                      <Link
                        href="/kitchen"
                        as={process.env.PUBLIC_URL + "/kitchen"}
                      >
                        <a>Kitchen</a>
                      </Link>
                    </p>
                    <p className="mobile-font-smaller"  >
                    <Link
                      href="/kitchen/shop"
                      as={process.env.PUBLIC_URL + "/kitchen/shop"}
                    >
                      <a>+ Shop Now</a>
                    </Link>
                    </p>
                  </div>
                </div>
                <Link
                  href="/kitchen"
                  as={process.env.PUBLIC_URL + "/kitchen"}
                >
                  <a className="banner-link"></a>
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="single-category single-category--three space-mb--30">
                <div className="single-category__image single-category__image--three single-category__image--three--creativehome">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/banners/creative-home/bathroom.png"
                    }
                    className="mobile img-fluid"
                    alt=""
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/banners/creative-home/bathroom-mobile.png"
                    }
                    className="desktop img-fluid"
                    alt=""
                  />
                </div>
                <div className="mobile-font single-category__content single-category__content--three single-category__content--three--creativehome">
                  <div  >
                    <p className="mobile-font" >
                      <Link
                        href="/bathroom"
                        as={process.env.PUBLIC_URL + "/bathroom"}
                      >
                        <a style={{fontSize:'15px!important'}}>Bathroom</a>
                      </Link>
                    </p>
                    <p className="mobile-font-smaller"  >
                    <Link
                      href="/bathroom/shop"
                      as={process.env.PUBLIC_URL + "/bathroom/shop"}
                    >
                      <a>+ Shop Now</a>
                    </Link>
                    </p>
                  </div>
                </div>
                <Link
                  href="/bathroom"
                  as={process.env.PUBLIC_URL + "/bathroom"}
                >
                  <a className="banner-link"></a>
                </Link>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={12}>
          <Row>
            <Col lg={3}>
              <div className="single-category single-category--three space-mb--30">
                <div className="single-category__image single-category__image--three single-category__image--three--creativehome">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/banners/creative-home/entryway-mobile.png"
                    }
                    className="mobile img-fluid"
                    alt=""
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/banners/creative-home/entryway-mobile.png"
                    }
                    className="desktop img-fluid"
                    alt=""
                  />
                </div>
                <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
                  <div>
                  <p className="mobile-font" >
                      <Link
                        href="/entryway"
                        as={process.env.PUBLIC_URL + "/entryway"}
                      >
                        <a>Entryway</a>
                      </Link>
                    </p>
                    <p className="mobile-font-smaller"  >
                    <Link
                      href="/entryway/shop"
                      as={process.env.PUBLIC_URL + "/entryway/shop"}
                    >
                      <a>+ Shop Now</a>
                    </Link>
                    </p>
                  </div>
                </div>
                <Link
                  href="/entryway"
                  as={process.env.PUBLIC_URL + "/entryway"}
                >
                  <a className="banner-link"></a>
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="single-category single-category--three space-mb--30">
                <div className="single-category__image single-category__image--three single-category__image--three--creativehome">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/banners/creative-home/bg-banner-new-07.jpg"
                    }
                    className="mobile img-fluid"
                    alt=""
                  />
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/banners/creative-home/custom-mobile.png"
                    }
                    className="desktop img-fluid"
                    alt=""
                  />
                </div>
                <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
                  <div>
                  <p className="mobile-font" >
                      <Link
                        href="/custom"
                        as={process.env.PUBLIC_URL + "/custom"}
                      >
                        <a>Custom</a>
                      </Link>
                    </p>
                    <p className="mobile-font-smaller"  >
                    <Link
                      href="/custom/shop"
                      as={process.env.PUBLIC_URL + "/custom/shop"}
                    >
                      <a>+ Shop Now</a>
                    </Link>
                    </p>
                  </div>
                </div>
                <Link
                  href="/custom"
                  as={process.env.PUBLIC_URL + "/custom"}
                >
                  <a className="banner-link"></a>
                </Link>
              </div>
            </Col>
            <Col lg={3}>
              <div className="single-category single-category--three space-mb--30">
                <div className="single-category__image single-category__image--three single-category__image--three--creativehome">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/banners/creative-home/outdoor.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                  
                </div>
                <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
                  <div>
                  <p className="mobile-font" >
                      <Link
                        href="/outdoor"
                        as={process.env.PUBLIC_URL + "/outdoor"}
                      >
                        <a>Outdoor</a>
                      </Link>
                    </p>
                    <p className="mobile-font-smaller"  >
                    <Link
                      href="/outdoor/shop"
                      as={process.env.PUBLIC_URL + "/outdoor/shop"}
                    >
                      <a>+ Shop Now</a>
                    </Link>
                    </p>
                  </div>
                </div>
                <Link
                  href="/outdoor"
                  as={process.env.PUBLIC_URL + "/outdoor"}
                >
                  <a className="banner-link"></a>
                </Link>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CreativeContent;
