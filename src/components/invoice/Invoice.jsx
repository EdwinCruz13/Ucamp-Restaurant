import React from "react";
import { useState } from "react";
import { ItemAdded } from "./ItemAdded";

import "./Invoice.css";

export const Invoice = () => {
  const [count, setCount] = useState({ counters: [{ id: 1 }, { id: 2 }] });



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
  }



  return (
    <>
      <div className="item-list list-task">
        {count.counters.map(({ id }) => (
          <ItemAdded key={id} id={id} itemAdded={itemAdded} Increase={Increase} Decrease={Decrease}/>
        ))}
      </div>

      <div className="invoice-ticket">i am the ending bill</div>
    </>
  );
};
