import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./HotelThema.scss";
import SideFilterBar from "../../components/SideFilterBar/SideFilterBar";

function HotelThema() {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);

  const HotelThemaClick = () => {
    navigate("/hotelDetail");
  };

  useEffect(() => {
    fetch("/data/hotel/hotelThema.json", {
      // fetch("http://localhost:8000/lodgment/list", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
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
        setOrderTypes(data.orderTypes.hotel);
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
    fetch("/data/hotel/filterType.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setFilterTypes(data[0].filterTypes);
      });
  }, []);

  return (
    <div className="hotel-thema-container">
      <div className="hotel-thema-content">
        <div className="hotel-thema-top-content">
          <SideFilterBar
            orderTypes={orderTypes}
            filterTypes={filterTypes}
            getSortOrder={getSortOrder}
          />
        </div>
      </div>
      <div className="hotel-thema-main-content">
        <div className="hotel-thema-keyword">
          <span>테마 키워드</span>
          <button className="thema-keyword-btn">전체</button>
        </div>
        <div className="total-hotel-thema">
          <p>
            총 <span>1326 </span>건
          </p>
        </div>
        <div className="hotel-thema-list-wrapper">
          {data.map((data) => {
            return (
              <div className="hotel-thema-list" key={data.id}>
                <div className="hotel-thema-img">
                  <img
                    src={data.photo[0]}
                    alt="이미지"
                    onClick={HotelThemaClick}
                  />
                </div>
                <div className="hotel-thema-info">
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

export default HotelThema;
