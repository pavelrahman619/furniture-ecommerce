import { useEffect } from "react";
import Link from "next/link";

const MobileMenuNav = ({ getActiveStatus }) => {
  useEffect(() => {
    const offCanvasNav = document.querySelector(
      "#offcanvas-mobile-menu__navigation"
    );
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(
      ".mobile-sub-menu"
    );
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        getActiveStatus(false);
      });
    }
  });

  const sideMenuExpand = (e) => {
    e.currentTarget.parentElement.classList.toggle("active");
  };
  return (
    <nav
      className="offcanvas-mobile-menu__navigation"
      id="offcanvas-mobile-menu__navigation"
    >
      <ul>
        <li className="menu-item-has-children">
          <Link href="/" as={process.env.PUBLIC_URL + "/"}>
            <a>Home</a>
          </Link>
          
          
        </li>

        <li className="menu-item-has-children">
          <Link
            href="/shop/left-sidebar"
            as={process.env.PUBLIC_URL + "/shop/left-sidebar"}
          >
            <a>Shop</a>
          </Link>
          <ul className="mobile-sub-menu">
            <li className="menu-item-has-children">
              <Link
                href="/bedroom/shop"
                as={process.env.PUBLIC_URL + "/bedroom/shop"}
              >
                <a>Bedroom</a>
              </Link>
              
            </li>
            <li className="menu-item-has-children">
              <Link
                href="/living-room/shop"
                as={process.env.PUBLIC_URL + "/living-room/shop"}
              >
                <a>Living-room</a>
              </Link>
              
            </li>
            <li className="menu-item-has-children">
              <Link
                href="/kitchen/shop"
                as={process.env.PUBLIC_URL + "/kitchen/shop"}
              >
                <a>Kitchen</a>
              </Link>
              
            </li>
            <li className="menu-item-has-children">
              <Link
                href="/office/shop"
                as={process.env.PUBLIC_URL + "/office/shop"}
              >
                <a>Office</a>
              </Link>
              
            </li>
            <li className="menu-item-has-children">
              <Link
                href="/bathroom/shop"
                as={process.env.PUBLIC_URL + "/bathroom/shop"}
              >
                <a>Bathroom</a>
              </Link>
              
            </li>
            <li className="menu-item-has-children">
              <Link
                href="outdoor/shop"
                as={process.env.PUBLIC_URL + "/outdoor/shop"}
              >
                <a>Outdoor</a>
              </Link>
              
            </li>
            <li className="menu-item-has-children">
              <Link
                href="/entryway/shop"
                as={process.env.PUBLIC_URL + "/entryway/shop"}
              >
                <a>Entryway</a>
              </Link>
              
            </li>
            <li className="menu-item-has-children">
              <Link
                href="/custom"
                as={process.env.PUBLIC_URL + "/custom"}
              >
                <a>Custom</a>
              </Link>
              
            </li>

          </ul>
        </li>
        <li className="menu-item-has-children">
          <Link href="/blog" as={process.env.PUBLIC_URL + "/blog"}>
            <a>Blogs</a>
          </Link>
          
          
        </li>
        <li className="menu-item-has-children">
          <Link href="/about-us" as={process.env.PUBLIC_URL + "/about-us"}>
            <a>About Us</a>
          </Link>
          
          
        </li>
        <li className="menu-item-has-children">
          <Link href="/contact-us" as={process.env.PUBLIC_URL + "/contact-us"}>
            <a>Contact Us</a>
          </Link>
          
          
        </li>
        


      </ul>
    </nav>
  );
};

export default MobileMenuNav;
