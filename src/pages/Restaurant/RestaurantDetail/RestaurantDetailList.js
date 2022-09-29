import React from "react";

import "./RestaurantDetailList.scss";

function RestaurantDetailList({ data }) {
  return (
    <div className="restaurant-detail-top" key={data.id}>
      <div>
        <img src={data.photo} />
      </div>
      <div className="detail-info">
        <h1>{data.name}</h1>
        <span className="hash-tag">{data.hashTag}</span>
        <p className="intro">{data.intro}</p>
        <p>
          <span>위치:</span>
          <span>{data.regionAddress}</span>
        </p>
        <p>
          <span>리뷰:</span>
          <span>{data.reviewPoint}</span>
        </p>
      </div>
    </div>
  );
}

export default RestaurantDetailList;
