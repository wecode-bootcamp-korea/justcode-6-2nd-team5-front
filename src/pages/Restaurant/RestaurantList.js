import React from "react";
import { useNavigate } from "react-router-dom";

import "./RestaurantList.scss";

function RestaurantList({ data }) {
  const navigate = useNavigate();
  const checkHandler = (id) => {
    navigate(`/restaurant/detail/${id}`);
  };
  return (
    <div
      className="restaurant-list"
      key={data.id}
      onClick={() => checkHandler(data.id)}
    >
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
