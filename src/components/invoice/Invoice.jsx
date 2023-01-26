import React from "react";

import "./Invoice.css";
import burger1 from "../../icons/images/burger1.png";

export const Invoice = () => {
    return (
        <>
            <div data-id="1" className="card">
                <div className="image">
                    <img src={burger1} alt="" />
                </div>

                <div className="details">
                
                    <h1>Burger chess and jam</h1>
                    <h2 className="item-price">$25.4</h2>

                    <div className="btn-group">
                        <button className="btn btn-default rounded-left">-</button>
                        <button className="btn">1</button>
                        <button className="btn btn-default rounded-right">+</button>
                    </div>
                </div>
            </div>

        </>
    )
}