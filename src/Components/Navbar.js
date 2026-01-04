import React from "react";

import { pageLinks, mediaLinks } from "../data";
import logo from "../images/logo.svg";
import PageLinks from "./PageLinks";
import MediaLinks from "./MediaLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            return <PageLinks key={link.id} {...link} classTitle="nav-link" />;
          })}
        </ul>

        <ul className="nav-icons">
          {mediaLinks.map((link) => {
            return <MediaLinks key={link.id} {...link} classTitle="nav-icon" />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
