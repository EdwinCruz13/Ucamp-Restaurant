import React from "react";
import "./Order.css";

//componente
import { Header } from "../../components/header/Header";
import { Badge } from "../../components/badge/Badge";
import { Items } from "../../components/items/Items";

export const Order = () => {
  return (
    <div id="Order-page">
      <Header/>

      <section id="Order-body">
          <div id="Product-Items" className="product-invoice">
              <div className="Product-Type">
                  <Badge />
              </div>

              <div className="products-list">
                  <div className="titles">
                    <h2>Choose Your Order</h2>
                    <h2 className="itemAdded"># Products added</h2>
                  </div>
                  <div className="list">
                    <Items />
                  </div>
              </div>
          </div>
          <div id="Invoice" className="product-invoice">
            Soy una factura
          </div>
      </section>

    </div>
  );
};
