import React from "react";
import { useState } from "react";
import { ItemAdded } from "./ItemAdded";

import { AddInvoice, LastInvoiceCode } from "../../localStorage";

import "./Invoice.css";


export const Invoice = ({ itemsAdded }) => {
  const [invoice, setInvoice] = useState({});
  const [Currentdate, setCurrentDate] = useState('');

  const Tax = 0.15;
  let Units = itemsAdded.length;
  let TotalUnit = itemsAdded.reduce((acumulator, object) => {
    return acumulator + object.Price;
  }, 0);
  let TotalTax = itemsAdded.reduce((acumulator, object) => {
    return acumulator + object.Price * Tax;
  }, 0);
  let Total = TotalUnit + TotalTax;


  /*function SaveInvoice() {
    let year = new Date().getFullYear();
    let month =
      new Date().getMonth() + 1 < 10
        ? "0" + (new Date().getMonth() + 1).toString()
        : (new Date().getMonth() + 1).toString();
    let day =
      new Date().getDate() < 10
        ? "0" + new Date().getDate().toString()
        : new Date().getDate();

    let _DataAt = year + "-" + month + "-" + day;

    //add new item
    setInvoice({
      IdInvoice: LastInvoiceCode,
      BookedAt: Currentdate,
      DateAt: _DataAt,
    });

    AddInvoice(invoice);
  }*/

  const handleChange = (event) => {
    let inputDate = event.target.value;
    setCurrentDate(inputDate);
  }

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
        <input type="date" name="date" id="date" value={Currentdate} required pattern="\d{4}-\d{2}-\d{2}" onChange={handleChange} />
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
        <button class="btn btn-primary" >
          Reservar
        </button>
      </div>
    </>
  );
};
