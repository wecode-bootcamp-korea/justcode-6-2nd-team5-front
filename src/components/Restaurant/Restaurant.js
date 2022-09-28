import React, { useState, useEffect } from "react";
import "./Restaurant.scss";
import { IoRestaurant } from "react-icons/io5";

function Restaurant() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/restaurantInfo.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.restaurantInfo);
      });
  }, []);

  return (
    <div className="content-wrapper">
      <h1 className="title">
        제주도 맛집 추천
        {/* <IoRestaurant /> */}
      </h1>
      <div className="restaurant-wrapper">
        {data.map((data) => (
          <div className="restaurant-info-wrapper" key={data.id}>
            <div className="restaurant-img">
              <img src={data.img} alt="image" />
            </div>
            <div className="restaurant-info">
              <span>{data.title}</span>
              <span>{data.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Restaurant;
