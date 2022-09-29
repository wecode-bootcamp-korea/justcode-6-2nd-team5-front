import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Restaurant.scss";

function Restaurant() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/common/restaurantInfo.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.restaurantInfo);
      });
  }, []);

  const clickHandler = (id) => {
    navigate(`/restaurant/detail/${id}`);
  };

  return (
    <div className="content-wrapper">
      <h1 className="title">제주도 맛집 추천</h1>
      <div className="restaurant-wrapper">
        {data.map((data) => (
          <div
            className="restaurant-info-wrapper"
            key={data.id}
            onClick={() => clickHandler(data.id)}
          >
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
