import React from "react";
import img from "../images/image001.png";
import FooterStyle from "../scss/footer.module.scss";

const Footer = () => {
  return (
    <div className={FooterStyle.footer} >
      <div className={FooterStyle.linkImg} >
        <img src={img} width="20px" alt="img" />
        <a href="/">Repository</a>
      </div>
      <div>
        <p>© 2022 Haliboss</p>
      </div>
    </div>
  );
};

export default Footer;
