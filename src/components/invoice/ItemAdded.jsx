import React from "react";
import burger1 from "../../icons/images/burger1.png";

export const ItemAdded = ({ id, itemAdded, Increase, Decrease }) => {

  

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
              onClick={Decrease}
            >
              -
            </button>
            <span>{itemAdded}</span>
            <button
              className="btn btn-default rounded-right"
              onClick={Increase}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
