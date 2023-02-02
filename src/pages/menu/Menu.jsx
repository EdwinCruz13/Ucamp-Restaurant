import React from "react";
import { useState /*, useEffect*/ } from "react";

import "./Menu.css";

//components
import { Header } from "../../components/header/Header";
import { Badge } from "../../components/badge/Badge";
import { Items } from "../../components/items/Items";
import { Invoice } from "../../components/invoice/Invoice";

//data
import { Item_data } from "../../data";

/**
 * Order componente that whow the order to do by a customer
 * @returns Order component
 */
export const Menu = () => {
  
  //components that contain the items and type Item list
  const [itemsState, setItemsState] = useState(Item_data);
  const [itemAddedCar, setItemAddedCar] = useState([]);

  /*useEffect(() => {
    setItemsState(Item_data);
  }, [itemsState]);*/

  /**
   * filter according the selected food type
   * if the filter is 00 then show all the item in "Items" components
   * else show the the "Items" componentes the selected typeItem
   * @param {typeItem to filter} idType 
   */
  const FilterTypes = async (idType) => {
    if (idType === "00")
      await setItemsState(
        Item_data.filter((element) => !itemAddedCar.includes(element))
      );
    else
      await setItemsState(
        Item_data.filter((element) => element.IdType === idType).filter((element) => !itemAddedCar.includes(element))
      );
  };

  /**
   * Allow to add item into the shoping car
   * validate the origin list
   * @param {Item to add} itemID 
   */
  const AddCard = async (itemID) => {
    //filter the selected item
    let _item = {};
    _item = Item_data.filter((element) => element.IdItem === itemID);

    //add a new items to the car
    await setItemAddedCar((prevState) => {
      return [...prevState, _item[0]];
    });

    //removing from the origin list
    await setItemsState(
      itemsState.filter((element) => element.IdItem !== itemID)
    );
  };

  return (
    <div id="Menu-page">
      <Header />

      <section id="Menu-body">
        <div id="Product-Items" className="product-invoice">
          <div className="Product-Type">
            <Badge FilterTypes={FilterTypes} />
          </div>

          <div className="products-list">
            <div className="titles">
              <h2>Choose Your Order</h2>
            </div>
            <div className="list">
              <Items Items={itemsState} AddCard={AddCard} />
            </div>
          </div>
        </div>
        <div id="Invoice" className="product-invoice">
          
          <Invoice itemsAdded={itemAddedCar} />
        </div>
      </section>
    </div>
  );
};
