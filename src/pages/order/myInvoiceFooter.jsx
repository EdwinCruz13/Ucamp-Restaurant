import React from "react";

import { Invoice_Detail } from "../../data";

export const MyInvoiceFooter = ({ detail }) => {
  

  let mylist = Invoice_Detail.filter((product) => {
    return product.IdInvoice === detail.IdInvoice && product.Item === detail.Item ;
  });

  let TotalUnit = mylist.reduce((acumulator, object) => {
    return acumulator + object.UnitPrice;
  }, 0);

  let Tax = mylist.reduce((acumulator, object) => {
    return acumulator + object.Total;
  }, 0);

  let Total = mylist.reduce((acumulator, object) => {
    return acumulator + object.Total;
  }, 0);

  

  return (
    <>
      <tr>
        <td>SubTotal</td>
        <td> $ { TotalUnit.toFixed(2) } </td>
      </tr>
      <tr>
        <td>Tax (15%)</td>
        <td>$ { (TotalUnit * 0.15 ).toFixed(2) }</td>
      </tr>

      <tr>
        <td>Pay</td>
        <td>$ { Total.toFixed(2) }</td>
      </tr>
    </>
  );
};
