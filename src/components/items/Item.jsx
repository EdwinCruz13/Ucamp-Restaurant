import React from "react";

export const Item = ({ Item, AddCard }) => {
  const { IdItem, IdType, Description, Price, ImgUrl } = Item;

  const handleClick = (event) => {
    let elementID = event.currentTarget.getAttribute('data-id');
    AddCard(elementID);
  }


  return (
    <div className="Items">
      <img className="item-img" src={ImgUrl} alt="detailing_items" />
      <h3 className="item-name">{Description}</h3>
      <h4 className="item-price">$ {Price} </h4>
      <button class="btn btn-primary"  data-id={ IdItem } onClick={ handleClick }>Agregar</button>
    </div>
  );
};
