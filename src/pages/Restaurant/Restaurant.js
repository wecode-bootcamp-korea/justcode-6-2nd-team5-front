import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Restaurant.scss";
import SideFilterBar from "../../components/SideFilterBar/SideFilterBar";

function Restaurant() {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/restaurantList.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.restaurantList);
      });
  }, []);

  // Side Filter Bar props
  // Sort Order Bar mockdata
  const [orderTypes, setOrderTypes] = useState([]);

  useEffect(() => {
    fetch("/data/rentcar/orderType.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderTypes(data.orderTypes.restaurant);
      });
  }, []);
  // sort order bar 쿼리 변수 관리값
  const [sortQuery, setSortQuery] = useState("order=추천순");
  // sort order bar 쿼리 변수명 가져오는 함수
  const getSortOrder = (sortType) => {
    setSortQuery(`order=${sortType}`);

    const url = `http://localhost:8000${location.pathname}${decodeURIComponent(
      location.search
    )}&${`order=${sortType}`}`;

    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => console.log(data))
  };

  // Filter Bar props
  // Filter Bar mockdata: dep-3
  const [filterTypes, setFilterTypes] = useState([]);

  const filterTypeUrl =
    "http://localhost:8000/rentcar/searchList?rentStartDate=2022-09-28&rentEndDate=2022-09-29&rentStartTime=1&rentEndTime=2&insurance=일반자차&age=만 26세이상&experience=1년 미만";

  useEffect(() => {
    fetch("/data/rentcar/filterType.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setFilterTypes(data[0].filterTypes);
      });
  }, []);

  return (
    <div className="restaurant-container">
      <div className="restaurant-content">
        <div className="restaurant-top-content">
          <SideFilterBar
            orderTypes={orderTypes}
            filterTypes={filterTypes}
            getSortOrder={getSortOrder}
          />
        </div>
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
