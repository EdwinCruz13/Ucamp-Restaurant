import React from "react";
import { Header } from "../../components/header/Header";

import { MyInvoice } from "./MyInvoice";

import "./MyOrder.css";

import { Invoice } from '../../data';


export const MyOrder = () => {
  return (
    <div id="MyOrder-page">
      <Header />

      <section id="MyOrder-body">
          {
            Invoice.map((bill) => {
                return <MyInvoice key = {bill.IdInvoice} bill = {bill} />
            })
          }
      </section>
    </div>
  );
};
