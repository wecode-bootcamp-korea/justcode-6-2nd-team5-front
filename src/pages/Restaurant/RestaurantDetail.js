import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import RestaurantDetailList from "./RestaurantDetailList";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantReview from "./RestaurantReview";

import "./RestaurantDetail.scss";

function RestaurantDetail() {
  const [tabIndex, setTabIndex] = useState(1);
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/restaurant/item/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [id]);

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
        {data.length !== 0 && tabIndex === 3 && (
          <RestaurantReview data={data.restaurant} />
        )}
      </div>
    </>
  );
}
export default RestaurantDetail;
