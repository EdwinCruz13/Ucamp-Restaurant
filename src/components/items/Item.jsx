import React from "react";

export const Item = ({ Item }) => {
  const { IdItem, IdType, Description, Price, ImgUrl } = Item;
  return (
    <div className="Items" data-id={IdItem}>
      <img className="item-img" src={ImgUrl} alt="detailing_items" />
      <h3 className="item-name">{Description}</h3>
      <h4 className="item-price">$ {Price} </h4>
      <button class="btn btn-primary">Agregar</button>
    </div>
  );
};
