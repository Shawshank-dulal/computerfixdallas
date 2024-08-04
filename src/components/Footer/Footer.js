import React from "react";

import FooterOne from "./content/FooterOne";
import FooterTwo from "./content/FooterTwo";
const Footer = () => {
  return (
  <div className="main_container2 inside_sidespace pt-24 pb-16">
    <div className="flex flex-col gap-6">
    <FooterOne/>
    <FooterTwo/>
  </div>
  </div>
  );
};

export default Footer;
