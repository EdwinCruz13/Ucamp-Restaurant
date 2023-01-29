import React from "react";
import { useState } from "react";

import { Counter } from '../Counter';
import burger1 from "../../icons/images/burger1.png";

export const ItemAdded = ({id}) => {
    //const [counterItem, Increment, Decrease] = Counter();
    //const [state, setState] = useState({ count: 0 });


  
  

  return (
    <>
      <div data-id={id} className="card">
        <div className="image">
          <img src={burger1} alt="" />
        </div>

        <div className="details">
          <h1>Burger chess and jam</h1>
          <h2 className="item-price">14.5</h2>

          <div className="btn-group">
            <button
              className="btn btn-default rounded-left"
              
            >
              -
            </button>
            <span>2</span>
            <button
              className="btn btn-default rounded-right"
              
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
