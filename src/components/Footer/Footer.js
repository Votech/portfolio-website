import React from "react";
import "./Footer.css";
import { ReactComponent as FacebookIcon } from "../icons/iconmonstr-facebook-3.svg";
import { ReactComponent as GithubIcon } from "../icons/iconmonstr-github-1.svg";
import { ReactComponent as LinkedinIcon } from "../icons/iconmonstr-linkedin-3.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer_icons">
        <div className="footer_icon">
          <LinkedinIcon />
        </div>
        <div className="footer_icon">
          <FacebookIcon />
        </div>
        <div className="footer_icon">
          <GithubIcon />
        </div>
      </div>
      <div className="footer_extra">WOJCIECH MIETLINSKI 2020</div>
    </footer>
  );
};

export default Footer;
