import { Fragment } from "react";
import { HeaderThreeHome } from "../Header";
import { FooterThree } from "../Footer";

const LayoutThreeHome = ({ children }) => {
  return (
    <Fragment>
      <HeaderThreeHome />
      {children}
      <FooterThree />
    </Fragment>
  );
};

export default LayoutThreeHome;
