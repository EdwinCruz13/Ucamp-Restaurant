import React from "react";
import { useState } from "react";
import { ItemType } from "./ItemType";
import { typeItem_data } from "../../data";



import "./Badge.css";
export const Badge = ({FilterTypes}) => {
  //get data
  const [itemsTypeState, setItemsTypeState] = useState(typeItem_data);


  return (
    <>
      {itemsTypeState.map((item) => {
          return <ItemType key={item.IdType} ItemType = { item } FilterTypes = {FilterTypes} />
      })}
    </>
  );
};
