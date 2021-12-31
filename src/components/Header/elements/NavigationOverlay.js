import { IoIosClose } from "react-icons/io";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";

const NavigationOverlay = ({ activeStatus, getActiveStatus }) => {
  return (
    <div className={`navigation-overlay ${activeStatus ? "active" : ""}`}>
      <div className="navigation-overlay__content">
        <button
          className="navigation-overlay__close-icon"
          onClick={() => {
            getActiveStatus(false);
            document.querySelector("body").classList.remove("overflow-hidden");
          }}
        >
          <IoIosClose />
        </button>
        <div className="navigation-overlay__content-container">
          <nav>
            <ul>
              <li className="has-children">
              <Link
                  href="/"
                  as={process.env.PUBLIC_URL + "/"}
                >
                    <a>Home</a>
                      </Link>          
               
              </li>
              <li className="has-children">
                <Accordion>
                  <Accordion.Toggle variant="link" eventKey="0" as="a">
                    Shop
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <ul className="sub-menu">
                      <li className="has-children-submenu">
                      <Link
                                  href="/bedroom/shop"
                                  as={
                                    process.env.PUBLIC_URL + "/bedroom/shop"
                                  }
                                >
                                  <a>Bedroom</a>
                                </Link>                     </li>
                      <li className="has-children-submenu">
                      <Link
                                  href="/living-room/shop"
                                  as={
                                    process.env.PUBLIC_URL + "/living-room/shop"
                                  }
                                >
                                  <a>Living-room</a>
                                </Link>
                      </li>
                     
                      <li className="has-children-submenu">
                      <Link
                                  href="/kitchen/shop"
                                  as={
                                    process.env.PUBLIC_URL + "/kitchen/shop"
                                  }
                                >
                                  <a>Kitchen</a>
                                </Link>
                      </li>
                      <li className="has-children-submenu">
                      <Link
                                  href="/office/shop"
                                  as={
                                    process.env.PUBLIC_URL + "/office/shop"
                                  }
                                >
                                  <a>Desks and Office</a>
                                </Link>
                                </li>
                      <li className="has-children-submenu">
                      <Link
                                  href="/bathroom/shop"
                                  as={
                                    process.env.PUBLIC_URL + "/bathroom/shop"
                                  }
                                >
                                  <a>Bathroom</a>
                                </Link>
                      </li>
                      <li className="has-children-submenu">
                      <Link
                                  href="/entryway/shop"
                                  as={
                                    process.env.PUBLIC_URL + "/entryway/shop"
                                  }
                                >
                                  <a>Entryway</a>
                                </Link>
                      </li>
                      <li className="has-children-submenu">
                      <Link
                                  href="/outdoor/shop"
                                  as={
                                    process.env.PUBLIC_URL + "/outdoor/shop"
                                  }
                                >
                                  <a>Outdoor</a>
                                </Link>
                       
                      </li>
                      <li className="has-children-submenu">
                      <Link
                                  href="/custom"
                                  as={
                                    process.env.PUBLIC_URL + "/custom"
                                  }
                                >
                                  <a>Custom</a>
                                </Link>
                        
                      </li>
                    </ul>
                  </Accordion.Collapse>
                </Accordion>
              </li>
              <li className="has-children">
              <Link
                                  href="/blog"
                                  as={
                                    process.env.PUBLIC_URL + "/blog"
                                  }
                                >
                                  <a>Blogs</a>
                                </Link>
                
                 
                      
              </li>
              <li className="has-children">
              <Link
                                  href="/about-us"
                                  as={
                                    process.env.PUBLIC_URL + "/about-us"
                                  }
                                >
                                  <a>About Us</a>
                                </Link>
              </li>
              <li className="has-children">
              <Link
                                  href="/contact-us"
                                  as={
                                    process.env.PUBLIC_URL + "/contact-us"
                                  }
                                >
                                  <a>Contact Us</a>
                                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigationOverlay;
