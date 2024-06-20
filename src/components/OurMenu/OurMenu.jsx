import React from "react";
import "./OurMenu.css";
import { image6, image7 } from "../../img";
function OurMenu() {
  return (
    <div className="ourMenu" id="ourMenu">
      <div className="menu-title-container">
        <span className="title-span">Our Menu</span>
        <div className="menu-title">
          <h1>
            Menu That Always
            <br /> Makes You Fall In Love
          </h1>
          <div className="item-arrow">
            <i className="fas fa-arrow-left"></i>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <div className="menu-item-container">
        <div className="menu-item-list">
          <ul>
            <li>Burger</li>
            <li className="active">Pizza</li>
            <li>Cup Cake</li>
            <li>Ramen</li>
            <li>Ice Cream</li>
          </ul>
        </div>
        <div className="menu-items">
          <div className="menu-item">
            <div className="menu-item-img">
              <img src={image6} alt="" />
              <div className="menu-item-details">
                <span>Burger</span>
                <span>$4.99</span>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <div className="menu-item-img">
              <img src={image7} alt="" />
              <div className="menu-item-details">
                <span>Burger</span>
                <span>$4.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMenu;
