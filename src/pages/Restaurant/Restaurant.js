import React, { useState, useEffect } from "react";

import "./Restaurant.scss";

function Restaurant() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/restaurantList.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.restaurantList);
      });
  }, []);

  return (
    <div className="restaurant-container">
      <div className="restaurant-content">
        <div className="restaurant-top-content"></div>
      </div>
      <div className="restaurant-main-content">
        <div className="total-restaurant">
          <p>
            총 <span>129</span>건
          </p>
        </div>
        <div className="restaurant-list-wrapper">
          {data.map((data) => {
            return (
              <div className="restaurant-list" key={data.id}>
                <div className="restaurant-img">
                  <img src={data.img} alt="이미지" />
                </div>
                <div className="restaurant-info">
                  <h1>{data.name}</h1>
                  <span className="total-like">{data.totalLike} </span>
                  <span className="total-review-point">{data.reviewPoint}</span>
                  <span className="address">{data.address}</span>
                  <p>{data.intro}</p>
                  <span>{data.hashTag}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
