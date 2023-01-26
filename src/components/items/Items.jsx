import React from "react";

import "./items.css"
import burger1 from "../../icons/images/burger1.png";
import burger2 from "../../icons/images/burger2.png";
import burger3 from "../../icons/images/burger3.png";
import pizza1 from  "../../icons/images/pizza1.png";

export const Items = () => {
  return (
    <>
      <div className="Items">
        <img className="item-img" src={burger1} alt="detailing_items" />
        <h3 className="item-name">Titulos</h3>
        <h4 className="item-price">$ 14.24</h4>
        <button class="btn btn-primary">Agregar</button>
      </div>

      <div className="Items">
        <img className="item-img" src={burger2} alt="detailing_items" />
        <h4 className="item-name">Titulos</h4>
        <h4 className="item-price">$ 14.24</h4>
        <button class="btn btn-primary">Agregar</button>
      </div>

      <div className="Items">
        <img className="item-img" src={burger3} alt="detailing_items" />
        <h4 className="item-name">Titulos</h4>
        <h4 className="item-price">$ 14.24</h4>
        <button class="btn btn-primary">Agregar</button>
      </div>

      <div className="Items">
        <img className="item-img" src={pizza1} alt="detailing_items" />
        <h4 className="item-name">Titulos</h4>
        <h4 className="item-price">$ 14.24</h4>
        <button class="btn btn-primary">Agregar</button>
      </div>

      <div className="Items">
        <img className="item-img" src={pizza1} alt="detailing_items" />
        <h4 className="item-name">Titulos</h4>
        <h4 className="item-price">$ 14.24</h4>
        <button class="btn btn-primary">Agregar</button>
      </div>
    </>
  );
};
