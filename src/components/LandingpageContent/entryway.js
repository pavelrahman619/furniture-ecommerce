import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const Entryway = () => {
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
                  Blending design and comfort for living and night areas in line with the latest trends.
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
                        "/assets/images/category/entrance/Shoeracks.webp"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                    <div className="title title--style-two">
                      <p>Shoeracks</p>
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
                        "/assets/images/category/entrance/reception-desk.webp"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                    <div className="title title--style-two">
                      <p>Reception Desk</p>
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
                        "/assets/images/category/entrance/arches.webp"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                    <div className="title title--style-two">
                      <p>Arches</p>
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
                        "/assets/images/category/entrance/door.webp"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                    <div className="title title--style-two">
                      <p>Doors</p>
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
                        "/assets/images/banners/entrance.webp"
                      })`
                    }}
                  >
                    <p className="text">
                      <span>Balanced</span>
                      <br />
                      <span>And </span>
                      <br />
                      <span>Coherent</span>
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
                        "/assets/images/category/entrance/side-table.webp"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                    <div className="title title--style-two">
                      <p>Side-Table</p>
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

export default Entryway;
