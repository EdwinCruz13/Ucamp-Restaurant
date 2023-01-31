import React from "react";
import { useState } from "react";
import { ItemAdded } from "./ItemAdded";

import "./Invoice.css";

export const Invoice = ({ itemsAdded }) => {
  /*const [count, setCount] = useState({ counters: [{ id: 1 }, { id: 2 }] });
  const [itemAdded, setItemAdded] = useState(1);
  //event in order to increase a item
  const Increase = () => {
    setItemAdded(itemAdded + 1);
  }
  //event in order to decrease a item
  const Decrease = () => {
    if (itemAdded < 2)
      setItemAdded(1)

    else
      setItemAdded(itemAdded - 1);
  }*/

  return (
    <>
      <div className="item-list list-task">
        
        {itemsAdded.map((item) => {
          return <ItemAdded key={item.IdItem} itemAdded={item} />
        })}
      </div>

      <div className="invoice-ticket">i am the ending bill</div>
    </>
  );
};
