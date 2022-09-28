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
        setData(data.restaurantDetailList);
      });
  }, []);

  return (
    <>
      {data.map((data) => {
        return <RestaurantDetailList data={data} />;
      })}

      <div className="restaurant-detail-wrapper">
        <div className="restaurant-button-wrapper">
          <button onClick={() => setTabIndex(1)}>업체정보</button>

          <button onClick={() => setTabIndex(2)}>메뉴</button>

          <button onClick={() => setTabIndex(3)}>리뷰</button>
        </div>

        {tabIndex === 1 && <RestaurantInfo />}
        {tabIndex === 2 && <RestaurantMenu />}
        {tabIndex === 3 && <RestaurantReview />}
      </div>
    </>
  );
}
export default RestaurantDetail;
