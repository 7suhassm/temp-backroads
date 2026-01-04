import React from "react";
import { mediaLinks, pageLinks } from "../data";
import PageLinks from "./PageLinks";
import MediaLinks from "./MediaLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          return <PageLinks key={link.id} {...link} classTitle="footer-link" />;
        })}
      </ul>
      <ul className="footer-icons">
        {mediaLinks.map((link) => {
          return (
            <MediaLinks key={link.id} {...link} classTitle="footer-icon" />
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; BackRoads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
