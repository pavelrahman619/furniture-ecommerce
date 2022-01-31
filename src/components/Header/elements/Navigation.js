import Link from "next/link";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
const Navigation = () => {
  return (
    <nav className="header-content__navigation space-pr--15 space-pl--15 d-none d-lg-block">
      <ul>
        <li>
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a>Home</a>
          </Link>
         
        </li>
        <li>
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a>Shop</a>
          </Link>
          <IoIosArrowDown />
          <ul className="sub-menu sub-menu--mega sub-menu--mega--column-5">
            <li className="sub-menu--mega__title">
              <Link href="/bedroom/shop" as={process.env.PUBLIC_URL + "/bedroom/shop"}>
                <a>Bedroom</a>
              </Link>
              <ul style={{paddingBottom:"20px"}} className="sub-menu--mega__list">
                <li>
                  
                  <Link
                    href="/element/product-categories"
                    as={process.env.PUBLIC_URL + "/element/product-categories"}
                  >
                    <a>Beds</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-sliders"
                    as={process.env.PUBLIC_URL + "/element/product-sliders"}
                  >
                    <a>Side-tables</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-tabs"
                    as={process.env.PUBLIC_URL + "/element/product-tabs"}
                  >
                    <a>Wardrobe</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-widgets"
                    as={process.env.PUBLIC_URL + "/element/product-widgets"}
                  >
                    <a>Dressing Tables</a>
                  </Link>
                </li>
               
              </ul>
              <Link href="/living-room/shop" as={process.env.PUBLIC_URL + "/living-room/shop"}>
                <a>Living Room</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  
                  <Link
                    href="/element/product-categories"
                    as={process.env.PUBLIC_URL + "/element/product-categories"}
                  >
                    <a>Tables</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-sliders"
                    as={process.env.PUBLIC_URL + "/element/product-sliders"}
                  >
                    <a>Chairs</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-tabs"
                    as={process.env.PUBLIC_URL + "/element/product-tabs"}
                  >
                    <a>Showcase</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-widgets"
                    as={process.env.PUBLIC_URL + "/element/product-widgets"}
                  >
                    <a>Shelves</a>
                  </Link>
                </li>
                
              </ul>
            </li>
            <li className="sub-menu--mega__title">
            <Link href="/kitchen/shop" as={process.env.PUBLIC_URL + "/kitchen/shop"}>
                <a>Kitchen</a>
              </Link>
              <ul style={{paddingBottom:"20px"}}  className="sub-menu--mega__list">
                <li>
                  
                  <Link
                    href="/element/product-categories"
                    as={process.env.PUBLIC_URL + "/element/product-categories"}
                  >
                    <a>Counter tops</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-sliders"
                    as={process.env.PUBLIC_URL + "/element/product-sliders"}
                  >
                    <a>Shelves</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-tabs"
                    as={process.env.PUBLIC_URL + "/element/product-tabs"}
                  >
                    <a>Drawers</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-widgets"
                    as={process.env.PUBLIC_URL + "/element/product-widgets"}
                  >
                    <a>Cabinets</a>
                  </Link>
                </li>
                
              </ul>
              <Link href="/office/shop" as={process.env.PUBLIC_URL + "/office/shop"}>
                <a>Office</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/element/sale-products"
                    as={process.env.PUBLIC_URL + "/element/sale-products"}
                  >
                    <a>Desk</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/featured-products"
                    as={process.env.PUBLIC_URL + "/element/featured-products"}
                  >
                    <a>Chair</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/top-rated-products"
                    as={process.env.PUBLIC_URL + "/element/top-rated-products"}
                  >
                    <a>Cabinet</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/best-selling-products"
                    as={
                      process.env.PUBLIC_URL + "/element/best-selling-products"
                    }
                  >
                    <a>Shelves</a>
                  </Link>
                </li>
                
              </ul>
            </li>
            <li className="sub-menu--mega__title">
            <Link href="/bathroom/shop" as={process.env.PUBLIC_URL + "/bathroom/shop"}>
                <a>Bathroom</a>
              </Link>
              <ul style={{paddingBottom:"20px"}}  className="sub-menu--mega__list">
                <li>
                  
                  <Link
                    href="/element/product-categories"
                    as={process.env.PUBLIC_URL + "/element/product-categories"}
                  >
                    <a>Shelves</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-sliders"
                    as={process.env.PUBLIC_URL + "/element/product-sliders"}
                  >
                    <a>Sink-top</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-tabs"
                    as={process.env.PUBLIC_URL + "/element/product-tabs"}
                  >
                    <a>Drawer</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-widgets"
                    as={process.env.PUBLIC_URL + "/element/product-widgets"}
                  >
                    <a>Door</a>
                  </Link>
                </li>
                
              </ul>
              <Link href="/outdoor/shop" as={process.env.PUBLIC_URL + "/outdoor/shop"}>
                <a>Outdoor</a>
              </Link>
              <ul style={{paddingBottom:"20px"}} className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/element/blog-posts"
                    as={process.env.PUBLIC_URL + "/element/blog-posts"}
                  >
                    <a>Coffee Table</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/mailchimp-forms"
                    as={process.env.PUBLIC_URL + "/element/mailchimp-forms"}
                  >
                    <a>Stool</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/icon-boxes"
                    as={process.env.PUBLIC_URL + "/element/icon-boxes"}
                  >
                    <a>Table</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/team-members"
                    as={process.env.PUBLIC_URL + "/element/team-members"}
                  >
                    <a>Chair</a>
                  </Link>
                </li>
                
              </ul>
            </li>
            <li className="sub-menu--mega__title">
            <Link href="/entryway/shop" as={process.env.PUBLIC_URL + "/entryway/shop"}>
                <a>Entryway</a>
              </Link>
              <ul style={{paddingBottom:"20px"}}  className="sub-menu--mega__list">
                <li>
                  
                  <Link
                    href="/element/product-categories"
                    as={process.env.PUBLIC_URL + "/element/product-categories"}
                  >
                    <a>Doors</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-sliders"
                    as={process.env.PUBLIC_URL + "/element/product-sliders"}
                  >
                    <a>Gateway</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-tabs"
                    as={process.env.PUBLIC_URL + "/element/product-tabs"}
                  >
                    <a>Arches</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/product-widgets"
                    as={process.env.PUBLIC_URL + "/element/product-widgets"}
                  >
                    <a>Shoeracks</a>
                  </Link>
                </li>
                
              </ul>
              <Link href="/custom" as={process.env.PUBLIC_URL + "/custom"}>
                <a>Dining</a>
              </Link>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link
                    href="/element/countdown-timers"
                    as={process.env.PUBLIC_URL + "/element/countdown-timers"}
                  >
                    <a>Tables</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/buttons"
                    as={process.env.PUBLIC_URL + "/element/buttons"}
                  >
                    <a>Cabinets</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/testimonials"
                    as={process.env.PUBLIC_URL + "/element/testimonials"}
                  >
                    <a>Shelves</a>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/element/google-maps"
                    as={process.env.PUBLIC_URL + "/element/google-maps"}
                  >
                    <a>Cupboards</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <div className="sub-menu--mega__image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/menu-image/menu-element.png"
                  }
                  className="img-fluid"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/blogs" as={process.env.PUBLIC_URL + "/blogs"}>
            <a>Blogs</a>
          </Link>
         
        </li>
        <li>
          <Link href="/about-us" as={process.env.PUBLIC_URL + "/about-us"}>
            <a>About Us</a>
          </Link>
         
        </li>
        <li>
          <Link href="/contact-us" as={process.env.PUBLIC_URL + "/contact-us"}>
            <a>Contact Us</a>
          </Link>
         
        </li>
        
      </ul>
    </nav>
  );
};

export default Navigation;
