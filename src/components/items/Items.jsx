import React from "react";

import "./items.css"
import burger1 from "./images/burger1.png";

export const Items = () => {
  return (
    <>
      <div className="Items">
        <img src={burger1} alt="detailing_items" />
        <span>Titulos</span>
        <span>$ 14.24</span>
        <button class="btn btn-primary">Agregar</button>
      </div>
    </>
  );
};
