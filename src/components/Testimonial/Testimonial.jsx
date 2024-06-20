import React from "react";
import "./Testimonial.css";
import testimonial from "../../assets/testimonial.png";
import reviewer from "../../assets/reviewer.png";
import reviewers from "../../assets/reviewers.png";
function Testimonial() {
  return (
    <div className="testimonial-container">
      <div className="testimonial-content">
        <div className="testimonial-img">
          <img src={testimonial} alt="" className="testi-img" />
          <img src={reviewers} alt="" className="fly-testimonial" />
        </div>
        <div className="testimonial-text">
          <span className="tagline">What They Say</span>
          <h2>What Our Customers Say About Us</h2>
          <p>
            “Fudo is the best. Besides the many and delicious meals, the service
            is also very good, especially in the very fast delivey. I highly
            recommend Fudo to you”.
          </p>
          <div className="reviewer-info">
            <img src={reviewer} alt="" />
            <div>
              <h4>Theresa Jordan</h4>
              <p>Food Enthusiast</p>
            </div>
          </div>
          <div className="ratings">
            <span>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </span>
            <span> 4.8</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
