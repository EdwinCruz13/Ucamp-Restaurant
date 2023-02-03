import React from "react";

export const MyInvoiceFooter = ({ detail }) => {
  
  let TotalUnit = detail.reduce((acumulator, object) => {
    return acumulator + object.UnitPrice;
  }, 0);

  let Tax = detail.reduce((acumulator, object) => {
    return acumulator + object.Total;
  }, 0);

  let Total = detail.reduce((acumulator, object) => {
    return acumulator + object.Total;
  }, 0);

  

  return (
    <>
      <tr className="tr-footer">
        <td>SubTotal</td>
        <td> $ { TotalUnit.toFixed(2) } </td>
      </tr>
      <tr className="tr-footer">
        <td>Tax (15%)</td>
        <td>$ { (TotalUnit * 0.15 ).toFixed(2) }</td>
      </tr>

      <tr className="tr-footer">
        <td>Pay</td>
        <td>$ { Total.toFixed(2) }</td>
      </tr>
    </>
  );
};
