import React from "react";
import { MyInvoiceDetail } from "./MyInvoiceDetail";
import { MyInvoiceFooter } from "./myInvoiceFooter";

import { Invoice_Detail } from "../../data";

import Logo from "./logo.png";

export const MyInvoice = ({ bill }) => {
  
  return (
    <div class="purchase">
      <div className="purchase-header">
        <img src={Logo} alt="MyLogo" />
        <article>
          <h3 className="title">Invoice</h3>
          <h4 className="result"># {bill.IdInvoice}</h4>
        </article>
        <article>
          <h3 className="title">Date</h3>
          <h4 className="result">{bill.DateAt}</h4>
        </article>
      </div>

      <div className="purchase-body">
        <article className="booked-at">
          <h3>Reservation at</h3>
          <h4>{bill.BookedAt}</h4>
        </article>
        <section className="purchase-item">
          <table>
            <thead>
              <tr>
                <th>Items</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {Invoice_Detail.map((item) => {
                if (item.IdInvoice == bill.IdInvoice)
                  return <MyInvoiceDetail key={item.Id} detail={item} />;
              })}
            </tbody>
            <line></line>
            <tfoot>
              {Invoice_Detail.map((item) => {
                if (item.IdInvoice == bill.IdInvoice)
                  return (
                    <MyInvoiceFooter key={item.Id} detail={item} />
                  );
              })}
            </tfoot>
          </table>
        </section>
      </div>
    </div>
  );
};
