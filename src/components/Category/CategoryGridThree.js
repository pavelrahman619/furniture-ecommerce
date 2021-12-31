import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const CategoryGridThree = ({ spaceBottomClass }) => {
  return (
    <div
      className={`product-category-container ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <Container className="wide">
        <Row>
          <Col lg={3} md={6}>
            <div className="single-category single-category--one">
              <div className="single-category__image single-category__image--one">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/category/office/Desk.png"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                <div className="title">
                  <p>Desks</p>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a>+ Online store</a>
                  </Link>
                </div>
                <p className="product-count">999</p>
              </div>
              <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a className="banner-link" />
              </Link>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="single-category single-category--one">
              <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                <div className="title">
                  <p>Chairs</p>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a>+ Online store</a>
                  </Link>
                </div>
                <p className="product-count">222</p>
              </div>

              <div className="single-category__image single-category__image--one">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/category/office/chair.png"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>

              <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a className="banner-link" />
              </Link>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="single-category single-category--one">
              <div className="single-category__image single-category__image--one">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/category/office/Tables.png"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                <div className="title">
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
          <Col lg={3} md={6}>
            <div className="single-category single-category--one">
              <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                <div className="title">
                  <p>Armchair</p>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a>+ Online store</a>
                  </Link>
                </div>
                <p className="product-count">4</p>
              </div>

              <div className="single-category__image single-category__image--one">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/category/office/Armchair.png"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>

              <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a className="banner-link" />
              </Link>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="single-category single-category--one">
              <div className="single-category__image single-category__image--one">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/category/office/Shelves.png"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                <div className="title">
                  <p>Tall Shelves</p>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a>+ Online store</a>
                  </Link>
                </div>
                <p className="product-count">999</p>
              </div>
              <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a className="banner-link" />
              </Link>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="single-category single-category--one">
              <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                <div className="title">
                  <p>Wide Shelves</p>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a>+ Online store</a>
                  </Link>
                </div>
                <p className="product-count">222</p>
              </div>

              <div className="single-category__image single-category__image--one">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/category/office/Wide_Shelves.png"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>

              <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a className="banner-link" />
              </Link>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="single-category__content single-category__content--textbanner">
              <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a>+ store</a>
              </Link>
              <p className="text">
                <span>brand</span>
                <br />
                <span>made</span>
                <br />
                <span>with love</span>
              </p>
              <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a className="banner-link" />
              </Link>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="single-category single-category--one">
              <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
                <div className="title">
                  <p>Media Console</p>
                  <Link
                    href="/shop/left-sidebar"
                    as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
                  >
                    <a>+ Online store</a>
                  </Link>
                </div>
                <p className="product-count">4</p>
              </div>

              <div className="single-category__image single-category__image--one">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/category/office/console.png"
                  }
                  className="img-fluid"
                  alt=""
                />
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
      </Container>
    </div>
  );
};

export default CategoryGridThree;
