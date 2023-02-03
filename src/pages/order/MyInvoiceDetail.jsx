import React from "react";

import { Item_data } from "../../data";

export const MyInvoiceDetail = ({ detail }) => {
  return (
    <>
      <tr>
        <td>
          {
            Item_data.filter((product) => {
              return product.IdItem === detail.Item;
            })[0].Description
          }
        </td>
        <td>{detail.Quantity}</td>
        <td>{detail.UnitPrice}</td>
      </tr>

     
    </>
  );
};
