import { useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import ModalVideo from "react-modal-video";
import { LayoutTwo } from "../components/Layout";
import { BreadcrumbOne } from "../components/Breadcrumb";
import { SectionTitleOne } from "../components/SectionTitle";
import { TestimonialTwo } from "../components/Testimonial";
import testimonialTwoData from "../data/testimonials/testimonial-two.json";

const AboutTwo = () => {
  const [modalStatus, isOpen] = useState(false);
  return (
    <LayoutTwo>
      {/* breadcrumb */}
      <BreadcrumbOne
        pageTitle="About Two"
        backgroundImage="/assets/images/backgrounds/breadcrumb-bg-1.png"
      >
        <ul className="breadcrumb__list">
          <li>
            <Link href="/" as={process.env.PUBLIC_URL + "/"}>
              <a>Home</a>
            </Link>
          </li>

          <li>About Two</li>
        </ul>
      </BreadcrumbOne>
      <div className="about-page-wrapper space-mt--r130 space-mb--r130">
        {/* primary content */}
        <div className="about-content space-mb--r100">
          <Container className="wide">
            <SectionTitleOne
              title="Origin of Motif"
              subtitle="How it started"
            />
            <Row>
              <Col xl={6} lg={6}>
                <div className="about-page-2-image space-mb-mobile-only--50">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/backgrounds/about-bg.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </Col>
              <Col xl={5} lg={6} className="ml-auto">
                <div className="about-page-text space-mb--30 mt-0">
                  <p>
                  Motif was founded by current URBN chairman and president Dick Hayne, having heard the plea of a friend. 
                  She had just moved to the suburbs of Philadelphia, and was dissatisfied with the shopping options available to her. 
                  </p></div>
                  <div className="about-page-text space-mb--30 mt-0">
                  <p>
                  Now a distance from Urban Outfitters—a brand she also was aging out of—there was a void in her life. She longed for a store to indulge her creative side.
                   Dick, realizing this wasn't an isolated phenomenon, went on to build a lifestyle brand that catered to creative, educated and affluent 30-45 year-old women.
                   </p></div>
                   <div className="about-page-text space-mb--30 mt-0">
                    <p> Named after his college major (but with a decidedly French twist), 
                  Anthropologie opened its very first doors in the autumn of 1992 in Wayne, Pennsylvania. We now operate over 200 stores worldwide. 
                  </p>
                </div>
                {/* <div className="about-widget space-mb--35">
                  <h2 className="widget-title space-mb--25">ADDRESS</h2>
                  <p className="widget-content">
                    1800 Abbot Kinney Blvd. Unit D &amp; E Venice
                  </p>
                </div>
                <div className="about-widget space-mb--35">
                  <h2 className="widget-title space-mb--25">PHONE</h2>
                  <p className="widget-content">Mobile: (+88) – 1990</p>
                  <p className="widget-content">Hotline: 1800 – 1102</p>
                </div>
                <div className="about-widget">
                  <h2 className="widget-title space-mb--25">EMAIL</h2>
                  <p className="widget-content">contact@lezadastore.com</p>
                </div> */}
              </Col>
            </Row>
          </Container>
        </div>

        {/* testimonial */}
        <TestimonialTwo
          testimonialData={testimonialTwoData}
          backgroundImage="/assets/images/backgrounds/testimonial.webp"
        />
        <div className="space-mb--r100"></div>

        <div className="about-video-popup">
          <Container className="wide">
            <Row>
              <Col lg={12}>
                <div
                  className="about-video-bg space-mb--60"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL +
                      "/assets/images/backgrounds/about-video-bg-2.png"
                    })`
                  }}
                >
                  <div className="about-video-content__text-icon d-flex flex-column h-100 justify-content-center">
                    <div className="play-icon text-center space-mb--40">
                      <ModalVideo
                        channel="youtube"
                        isOpen={modalStatus}
                        videoId="feOScd2HdiU"
                        onClose={() => isOpen(false)}
                      />
                      <button onClick={() => isOpen(true)}>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/icon/icon-play-100x100.png"
                          }
                          className="img-fluid"
                          alt=""
                        />
                      </button>
                    </div>
                    <h1>OUR STORY</h1>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="about-page-content">
          <Container>
            <Row>
              <Col md={6} className="space-mb-mobile-only--50">
                {/*=======  about single block  =======*/}
                <div className="about-single-block">
                  <p className="subtitle">On at oders over $99</p>
                  <h1>Returning &amp; and Exchanging</h1>
                  <p>
                  Return or exchange online orders by mail or in a store. Start your online return or exchange and print your return label. To locate your order number, sign in to your Order History. Locate a store near you to return your item(s) in a store for free. 
                  </p>
                  <Link
                    href="/other/about"
                    as={process.env.PUBLIC_URL + "/other/about"}
                  >
                    <a>LEARN MORE</a>
                  </Link>
                </div>
              </Col>
              <Col md={6}>
                {/*=======  about single block  =======*/}
                <div className="about-single-block">
                  <p className="subtitle">Support 24/7</p>
                  <h1>Cancelation</h1>
                  <p>
                  As soon as we receive your order, we start working on it right away. While we’re unable to make changes after you've placed your order, you do have a short window of time to cancel items from your order before they begin processing. Please note, only items eligible for cancellation will be shown, and all quantities of the selected item will be cancelled. If you do not see the “Cancel Items” option in the order details, that indicates that we are unable to process a cancellation. However, once you have received your order, you may return or exchange any eligible items. 
                  </p>
                  <Link
                    href="/other/about"
                    as={process.env.PUBLIC_URL + "/other/about"}
                  >
                    <a>LEARN MORE</a>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </LayoutTwo>
  );
};

export default AboutTwo;
