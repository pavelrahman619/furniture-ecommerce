import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const ConceptContent = () => {
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
                  All of the rooms are linked together by an aesthetic that is recognisable in its minimal lines, harmonious tones, sophisticated materials and precious details.
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
                        "/assets/images/category/living-room/chair.png"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                    <div className="title title--style-two">
                      <p>Chairs</p>
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
                        "/assets/images/category/living-room/table.webp"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                    <div className="title title--style-two">
                      <p>Tables</p>
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
                        "/assets/images/category/living-room/sofa.png"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                    <div className="title title--style-two">
                      <p>Sofas</p>
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
                        "/assets/images/category/living-room/bookcase.png"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                    <div className="title title--style-two">
                      <p>Book-Shelves</p>
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
                        "/assets/images/banners/living-room.webp"
                      })`
                    }}
                  >
                    <p className="text">
                      <span>Endeavour</span>
                      <br />
                      <span>To</span>
                      <br />
                      <span>Inspire</span>
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
                        "/assets/images/category/living-room/ottoman.png"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                    <div className="title title--style-two">
                      <p>Benches and Ottomans</p>
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

export default ConceptContent;
