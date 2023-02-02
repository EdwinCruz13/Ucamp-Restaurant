import React from "react";
import { useState } from "react";
import { ItemAdded } from "./ItemAdded";

import "./Invoice.css";

export const Invoice = ({ itemsAdded }) => {
  const Tax = 0.15;
  let Units = itemsAdded.length;
  let TotalUnit = itemsAdded.reduce((acumulator, object) => {
    return acumulator + object.Price;
  }, 0);
  let TotalTax = itemsAdded.reduce((acumulator, object) => {
    return acumulator + object.Price * Tax;
  }, 0);
  let Total = TotalUnit + TotalTax;
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
        <h3>There are # items added in your order</h3>

        {itemsAdded.map((item) => {
          return <ItemAdded key={item.IdItem} itemAdded={item} />;
        })}
      </div>

      <div className="invoice-ticket">
        <h3>Seleccione la fecha de reservación</h3>
        <input type="date" />
        <table>
          <tr>
            <th>Items ({Units})</th>
            <td>$ {TotalUnit.toFixed(2)}</td>
          </tr>
          <tr>
            <th>Tax ({Tax * 100} %)</th>
            <td>$ {TotalTax.toFixed(2)}</td>
          </tr>
          <line></line>
          <tr>
            <th>Total</th>
            <td>$ {Total.toFixed(2)}</td>
          </tr>
        </table>
        <br />
        <button class="btn btn-primary">Reservar</button>
      </div>
    </>
  );
};
