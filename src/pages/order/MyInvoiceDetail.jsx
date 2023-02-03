import React from "react";

import { Item_data } from "../../data";
export const MyInvoiceDetail = ({ detail }) => {
  return (
    <>
      {detail.map((product) => {
        return (
          <tr key={product.IdItem} className="tr-detail">
            <td className="td-description">
              {
                Item_data.filter((itemproduct) => {
                  return product.Item === itemproduct.IdItem;
                })[0].Description
              }
            </td>
            <td>{product.Quantity}</td>
            <td>{product.UnitPrice}</td>
          </tr>
        );
      })}
    </>
  );
};
