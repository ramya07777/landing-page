import React, { useState } from "react";
import "./Header.css";
import logo from "../images/logo.png";
import { IoMdMenu } from "react-icons/io";

export default function Header() {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  const filterHandler = () => {
    setNavbarExpanded(!navbarExpanded);

    if (!navbarExpanded && window.innerWidth <= 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleNavLinkClick = () => {
    setNavbarExpanded(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="header__widht">
      <div className="header">
        <div className="header__header">
          <div className="header__img">
            <img src={logo} alt="" />
          </div>
          <IoMdMenu onClick={filterHandler} className="menuicon" />
          <div className={`${navbarExpanded ? "open" : "filterComponent "}`}>
            <div className="navbar">
              <p className="header__para" onClick={handleNavLinkClick}>
                PLANS
              </p>
              <p className="header__para" onClick={handleNavLinkClick}>
                OUR MENUS
              </p>
              <p className="header__para" onClick={handleNavLinkClick}>
                MEAL SUBSCRIPTION
              </p>
              <p className="header__para" onClick={handleNavLinkClick}>
                ABOUT US
              </p>
            </div>
            <div className="header__bottom">
              <p className="header__login" onClick={handleNavLinkClick}>
                LOG IN
              </p>
              <div className="header__start" onClick={handleNavLinkClick}>
                GET STARTED
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
