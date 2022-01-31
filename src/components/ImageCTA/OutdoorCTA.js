import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { IoIosCart } from "react-icons/io";

const OutdoorCTA = ({ spaceBottomClass }) => {
  return (
    <div
      className={`image-cta-two overflow-hidden ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="image-cta-two__content space-mb-mobile-only--40">
              <h3 className="subtitle space-mb--30">Custom Design</h3>
              <h2 className="title space-mb--30">Have your own furniture idea?</h2>
              <p className="text space-mb--30">
            We at Motif love creativity! With over 20+ years of experience in this 
            industry Motif's talent has the meticulous craftsmanship needed to bring your unique vision to life. 
              </p>
              <Link
                href="/shop/left-sidebar"
                as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
              >
                <a className="lezada-button lezada-button--medium lezada-button--icon--left">
                Contact Us
                </a>
              </Link>
            </div>
          </Col>
          <Col lg={3}>
            <div className="image-cta-two__image">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/cta/outdoor.webp"}
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OutdoorCTA;
