import React from "react";


export const ItemType = ({ ItemType, FilterTypes }) => {
  const { IdType, Description, ImgUrl } = ItemType;


  //control the evento click from ItemType Food
  const handleClick = (event) =>{
    let elementID = event.currentTarget.getAttribute('data-id');
    FilterTypes(elementID);
  }


  return (
    <div key={IdType} className="badge" data-id={IdType} onClick={ handleClick }>
      <img src={ImgUrl} alt="detailing_items" />
      <span>{Description}</span>
    </div>
  );
};
