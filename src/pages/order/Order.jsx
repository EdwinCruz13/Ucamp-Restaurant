import React from "react";
import { useState/*, useEffect*/ } from "react";

import "./Order.css";

//components
import { Header } from "../../components/header/Header";
import { Badge } from "../../components/badge/Badge";
import { Items } from "../../components/items/Items";
import { Invoice } from "../../components/invoice/Invoice";

//data
import { Item_data } from "../../data";


export const Order = () => {

  const [itemsState, setItemsState] = useState(Item_data);
  const [itemsSelectedState, setitemsSelectedState] = useState([]);

  /*useEffect(() => {
    setItemsState(Item_data);
  }, [itemsState]);*/


  //filter according the selected food type
  const FilterTypes = async (idType) => {
    if (idType === "00")
      await setItemsState(Item_data);

    else
      await setItemsState(Item_data.filter(element => element.IdType === idType));

  }


  /*TODO:: MAKE THIS STATE WILL BE AN ARRAY */
  const AddCard = async(itemID) =>{
    await setitemsSelectedState(Item_data.filter(element => element.IdItem === itemID));

    console.log(itemsSelectedState);
  }

  return (
    <div id="Order-page">
      <Header />

      <section id="Order-body">
        <div id="Product-Items" className="product-invoice">
          <div className="Product-Type">
            <Badge FilterTypes={FilterTypes} />
          </div>

          <div className="products-list">
            <div className="titles">
              <h2>Choose Your Order</h2>
            </div>
            <div className="list">
              <Items Items={itemsState} AddCard = { AddCard }/>
            </div>
          </div>
        </div>
        <div id="Invoice" className="product-invoice">
          <h2
            className="itemAdded"
            style={{
              color: "#9E9E9E",
              "font-size": "22px",
              "margin-bottom": "2rem",
            }}
          >
            There are # items added in your order
          </h2>
          <Invoice itemAdded = { itemsSelectedState } />
        </div>
      </section>
    </div>
  );
};
