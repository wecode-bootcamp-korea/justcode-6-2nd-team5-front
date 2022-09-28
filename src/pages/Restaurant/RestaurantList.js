import React from "react";

import "./RestaurantList.scss";

function RestaurantList({ data }) {
  return (
    <div className="restaurant-list" key={data.id}>
      <div>
        <img src={data.img} alt="이미지" className="restaurant-img" />
      </div>
      <div className="restaurant-info">
        <h1>{data.name}</h1>
        <span className="total-like">{data.totalLike} </span>
        <span className="total-point">{data.reviewPoint}</span>
        <span className="address">{data.address}</span>
        <p>{data.intro}</p>
        <span>{data.hashTag}</span>
      </div>
    </div>
  );
}

export default RestaurantList;
