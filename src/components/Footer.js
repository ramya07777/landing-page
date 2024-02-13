import React from "react";
import "./Footer.css";
import footlogo from "../images/footlogo.png";
import footicon from "../images/footicon.png";
import footlogo2 from "../images/footlogo2.png";
import footlogo3 from "../images/footlogo3.png";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="footer">
      <div className="foot__foot">
        <div className="foot1">
          <img src={footlogo} alt="" />
          <p className="foot__parar">Fobas Mart Private Limited</p>
          <p className="foot__para">
            "We specialise in crafting and delivering nutritious, chef-prepared
            meals, offering convenience without compromising on quality, taste,
            or your health goals."
          </p>
          <p className="foot__para">
            RSF.No 227/8, Site No 25, S.P.K. Nagar, Thiruvachi, Thiruvachi,
            Perundurai. info@fobas.in
          </p>
        </div>
        <div className="foot__side">
          <p className="foot__sidehead">Menus</p>
          <p className="foot__sideheadpara">1. Nutritious Menus</p>
          <p className="foot__sideheadpara">2. Diabetes Menus</p>
          <p className="foot__sideheadpara">3. Vegan Meals</p>
          <p className="foot__sideheadpara">4. Signature Menus</p>
        </div>
        <div className="foot__side1">
          <p className="foot__sidehead">Plans</p>
          <p className="foot__sideheadpara">Plan Name</p>
          <p className="foot__sideheadpara">Plan Name</p>
          <p className="foot__sideheadpara">Plan Name</p>
          <p className="foot__sideheadpara">Plan Name</p>
        </div>
        <div className="foot__side2">
          <p className="foot__sidehead">Company</p>
          <p className="foot__sideheadpara">Pricing</p>
          <p className="foot__sideheadpara">Security</p>
          <p className="foot__sideheadpara">Privasi Policy</p>
          <p className="foot__sideheadpara">Term of use</p>
          <p className="foot__sideheadpara">Carrer</p>
        </div>

        <div className="foot__bott">
          <p className="foot__bootpara">Discover What's Cooking, </p>
          <p className="foot__bootpara">Subscribe Now</p>
          <div className="foot__bottom">
            <input
              type="text"
              placeholder="Your email"
              className="footer__input"
            />
            <img className="foot__botimg" src={footicon} alt="" />
          </div>
          <p className="foot__down">Download the App</p>

          <div className="footer__fott">
            <img className="fott__img" src={footlogo2} alt="" />
            <img className="fott__img" src={footlogo3} alt="" />
          </div>
        </div>
        <div className="foot__boticonimg">
          <TiSocialFacebook className="social__icon" />
          <FaTwitter className="social__icon" />
          <FaLinkedinIn className="social__icon" />
          <IoLogoInstagram className="social__icon" />
        </div>
        <div className="foot__cust">
          <p className="foot__iconspara">
            <span className="customerSupportText">Customer Support:</span>Help
            Center & FAQ | Contact Fobas.in | 9876543210
          </p>
        </div>
      </div>

      <div className="footer__line"></div>
      <p className="foot__final">© 2023 Fobas | Powered by Nulinz</p>
    </div>
  );
}
