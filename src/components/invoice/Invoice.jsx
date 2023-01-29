import React from "react";
import { useState } from "react";
import { ItemAdded } from "./ItemAdded";

import "./Invoice.css";

export const Invoice = () => {
  const [count, setCount] = useState({
    counters: [{ id: 1 }, { id: 2 }],
  });

  return (
    <>
      <div className="item-list list-task">
        /*TODO: hice que iterara de acuerdo a una lista, ahora agregar el contador de items */
        {count.counters.map(({ id, classItem }) => (
          <ItemAdded key={id} id={id}  />
        ))}
      </div>

      <div className="invoice-ticket">i am the ending bill</div>
    </>
  );
};
