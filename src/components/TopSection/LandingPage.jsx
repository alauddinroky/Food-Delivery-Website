import React from "react";
import "./LandingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  rectangleYellow,
  customer,
  rectangle,
  notoFire,
  yellowArrow,
  logo,
  hero,
  flyingPhone,
  flyingItem,
} from "../../img.js";

const LandingPage = () => {
  return (
    <div className="landing-container" id="home">
      <div className="main-content">
        <div className="text-content">
          <span className="tagline">More than Just Fast</span>
          <h1>
            Be the Fastest in Delivering Your{" "}
            <span className="highlight">Food</span>
          </h1>
          <p>
            Our mission is to satisfy your cravings with quick and free
            delivery.
          </p>
          <div className="buttons">
            <button className="get-started">Get Started</button>
            <button className="watch-video">
              <FontAwesomeIcon icon={faPlayCircle} /> Watch Video
            </button>
          </div>
        </div>
        <div className="image-content">
          <img src={rectangleYellow} alt="" className="rectangle" />
          <img src={hero} alt="Eating Food" className="hero-image" />
          <img src={flyingItem} alt="" className="flyingItem" />
          <img src={notoFire} alt="" className="fire" />
          <img src={yellowArrow} alt="" className="arrow" />
          <img src={rectangle} alt="" className="square" />

          {/* <div className="menu-item">
            <img src={flyingItem} alt="Italian Pizza" className="menu-image" />
            <div className="menu-details">
              <span>Italian Pizza</span>
              <span>$7.49</span>
            </div>
          </div> */}
          <div className="customer-card">
            <img
              src={customer}
              alt="Richard Watson"
              className="customer-image"
            />
            <div className="customer-details">
              <div className="span-details">
                <span>Richard Watson</span>
                <span>Food Courier</span>
              </div>
              <FontAwesomeIcon icon={faPhone} className="phone-icon" />
            </div>
          </div>

          {/* <div className="customer-review">
            <span>Our Happy Customers</span>
            <FontAwesomeIcon icon={faStar} className="star-icon" />
            <span>4.8 (12.5k reviews)</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
