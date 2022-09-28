import React, { useState, useEffect } from "react";

import RestaurantDetailList from "./RestaurantDetailList";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantReview from "./RestaurantReview";

import "./RestaurantDetail.scss";

function RestaurantDetail() {
  const [tabIndex, setTabIndex] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/restaurantDetailList.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      {data.length !== 0 && <RestaurantDetailList data={data.restaurant} />}
      <div className="restaurant-detail-wrapper">
        <div className="restaurant-button-wrapper">
          <button onClick={() => setTabIndex(1)}>업체정보</button>

          <button onClick={() => setTabIndex(2)}>메뉴</button>

          <button onClick={() => setTabIndex(3)}>리뷰</button>
        </div>

        {data.length !== 0 && tabIndex === 1 && (
          <RestaurantInfo data={data.restaurant} />
        )}
        {data.length !== 0 && tabIndex === 2 && (
          <RestaurantMenu data={data.menu} />
        )}
        {tabIndex === 3 && <RestaurantReview />}
      </div>
    </>
  );
}
export default RestaurantDetail;
