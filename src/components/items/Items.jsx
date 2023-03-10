import React from "react";


import "./items.css"
import { Item } from "./Item";

export const Items = ({ Items, AddCard }) => {
  return (
    <>
      {Items.map((item) => {
        return <Item key={item.IdItem} Item={item} AddCard={AddCard} />
      })}
    </>
  );
};
