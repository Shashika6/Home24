import React from "react";
import { FooterContainer } from "./Footer.style";
import { FOOTER_LABEL } from "../../constants/localization";

const Footer: React.FC = () => {
  return <FooterContainer aria-label="footer">{FOOTER_LABEL}</FooterContainer>;
};

export default Footer;
