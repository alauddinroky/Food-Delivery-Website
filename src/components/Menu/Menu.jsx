import React, { useState } from "react";
// import "./Menu.css";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Pizza");

  const categories = ["Burger", "Pizza", "Cupcake", "Ramen", "Ice Cream"];
  const pizzas = [
    {
      name: "Italian Pizza",
      price: 7.49,
      imgSrc: "url_to_italian_pizza_image",
    },
    {
      name: "Sausage Pizza",
      price: 6.59,
      imgSrc: "url_to_sausage_pizza_image",
    },
  ];

  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <h3>Menu That Always Makes You Fall In Love</h3>
      <div className="menu-categories">
        {categories.map((category) => (
          <button
            key={category}
            className={category === activeCategory ? "active" : ""}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {activeCategory === "Pizza" && (
        <div className="menu-items">
          {pizzas.map((pizza) => (
            <div className="menu-item" key={pizza.name}>
              <img src={pizza.imgSrc} alt={pizza.name} />
              <h4>{pizza.name}</h4>
              <p>${pizza.price}</p>
              <button>Order Now</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
