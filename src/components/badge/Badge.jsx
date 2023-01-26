import React from "react";
import "./Badge.css";

import chicken_icon from "./chicken.png";
import burger_icon from "./burger.png";
import pizza_icon from "./pizza.png";
import snack_icon from "./snack.png";
import drinks_icon from "./drink.png";

export const Badge = () => {
  return (
    <>
      <div className="badge">
        <img
          src={chicken_icon}
          alt="detailing_items"
        />
        <span>Chicken</span>
      </div>

      <div className="badge">
        <img
          src={burger_icon}
          alt="detailing_items"
        />
        <span>Burger</span>
      </div>

      <div className="badge">
        <img
          src={pizza_icon}
          alt="detailing_items"
        />
        <span>Pizza</span>
      </div>

      <div className="badge">
        <img
          src={snack_icon}
          alt="detailing_items"
        />
        <span>Fries</span>
      </div>

      <div className="badge">
        <img
          src={drinks_icon}
          alt="detailing_items"
        />
        <span>Drinks</span>
      </div>
    </>
  );
};
