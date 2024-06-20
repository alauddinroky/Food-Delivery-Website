import React from "react";
import "./WhatWeServe.css";

import { delivery1, delivery2, delivery3 } from "../../img.js";
function WhatWeServe() {
  return (
    <div className="what-we-serve-container">
      <h2 className="section-title">What We Serve</h2>
      <h3 className="section-subtitle">
        Your Favorite Food <br /> Delivery Partner
      </h3>
      <div className="services">
        <div className="service-card">
          <img src={delivery1} alt="Easy to Order" />
          <h4>Easy To Order</h4>
          <p>You only need a few steps in ordering food</p>
        </div>
        <div className="service-card">
          <img src={delivery2} alt="Fastest Delivery" />
          <h4>Fastest Delivery</h4>
          <p>Delivery that is always on time, even faster</p>
        </div>
        <div className="service-card">
          <img src={delivery3} alt="Best Quality" />
          <h4>Best Quality</h4>
          <p>Not only fast for us, quality is also number one</p>
        </div>
      </div>
    </div>
  );
}

export default WhatWeServe;
