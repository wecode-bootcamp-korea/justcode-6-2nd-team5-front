import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import RestaurantList from "./RestaurantList";
import RestaurantTotal from "./RestaurantTotal";
import RestaurantPaginate from "./RestaurantPaginate";
import SideFilterBar from "../../components/SideFilterBar/SideFilterBar";

import "./Restaurant.scss";

function Restaurant() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [orderTypes, setOrderTypes] = useState([]);
  const [filterTypes, setFilterTypes] = useState([]);
  const [sortQuery, setSortQuery] = useState("정렬=추천순");

  useEffect(() => {
    const url = `http://localhost:8000${location.pathname}${decodeURIComponent(
      location.search
    )}&${sortQuery}&offset=${offset}&limit=4`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [location, offset]);

  // 목데이터를 이용한 정렬 필터링 부분 데이터 호출
  useEffect(() => {
    fetch("/data/rentcar/orderType.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderTypes(data.orderTypes.restaurant);
      });
  }, []);

  // 목데이터를 이용한 카테고리 필터 데이터 호출
  useEffect(() => {
    fetch("/data/restaurant/restaurantFilterType.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setFilterTypes(data[0].filterTypes);
      });
  }, []);

  // 페이지네이션 함수
  const offsetHandler = (offsetNum) => {
    setOffset(offsetNum);
  };

  // sort order bar 쿼리 변수명 가져오는 함수
  const getSortOrder = (sortType) => {
    setSortQuery(`정렬=${sortType}`);
    const url = `http://localhost:8000${location.pathname}${decodeURIComponent(
      location.search
    )}&${sortType}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="restaurant-container">
      <div className="restaurant-top-content">
        <SideFilterBar
          orderTypes={orderTypes}
          filterTypes={filterTypes}
          getSortOrder={getSortOrder}
        />
      </div>
      <div className="restaurant-main-content">
        {data.length != 0 && <RestaurantTotal totalCount={data.totalCount} />}
        <div className="restaurant-list-wrapper">
          {data.length !== 0 &&
            data.restaurantList.map((data) => {
              return <RestaurantList data={data} key={data.id} />;
            })}
        </div>
        {data.length != 0 && (
          <RestaurantPaginate
            offsetHandler={offsetHandler}
            totalCount={data.totalCount}
          />
        )}
      </div>
    </div>
  );
}

export default Restaurant;
