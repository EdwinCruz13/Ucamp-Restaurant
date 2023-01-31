import React from "react";
import burger1 from "../../icons/images/burger1.png";

export const ItemAdded = ({ itemAdded}) => {

  

  return (
    <>
      <div data-id={itemAdded.IdItem} className="card">
        <div className="image">
          <img src={itemAdded.ImgUrl} alt="" />
        </div>

        <div className="details">
          <h1>{itemAdded.Description}</h1>
          <h2 className="item-price">{itemAdded.Price}</h2>

          <div className="btn-group">
            <button
              className="btn btn-default rounded-left"
              /*onClick={Decrease}*/
            >
              -
            </button>
            <span>0</span>
            <button
              className="btn btn-default rounded-right"
              /*onClick={Increase}*/
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
