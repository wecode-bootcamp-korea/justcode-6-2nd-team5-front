import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchTagBox from "../../components/SearchTagBox/SearchTagBox";
import SideFilterBar from "../../components/SideFilterBar/SideFilterBar";
import TotalBox from "../../components/TotalBox/TotalBox";
import "./RentCar.scss";
import RentCarList from "./RentCarList/RentCarList";

function RentCar() {
  const location = useLocation();

  // 초기 필터링 세팅
  useEffect(() => {
    const url = `http://localhost:8000${location.pathname}${decodeURIComponent(
      location.search
    )}&${sortQuery}`;
    // console.log(url);

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  }, [location]);

  // sort order bar 쿼리 변수 관리값
  const [sortQuery, setSortQuery] = useState("정렬=추천순");

  // sort order bar 쿼리 변수명 가져오는 함수
  const getSortOrder = (sortType) => {
    setSortQuery(`정렬=${sortType}`);

    const url = `http://localhost:8000${location.pathname}${decodeURIComponent(
      location.search
    )}&${sortType}`;

    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => console.log(data))
  };

  // Serch Tag Box props
  // Search Tag Box mockdata
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    fetch("/data/rentcar/tagList.json")
      .then((res) => res.json())
      .then((data) => {
        setTagList(data.tagList);
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
        setOrderTypes(data.orderTypes.rentCar);
      });
  }, []);

  // Filter Bar, RentCarList props
  // Filter Bar, RentCarList API data: dep-3
  const [filterTypes, setFilterTypes] = useState([]);
  const [rentCarTags, setRentCarTags] = useState([]);
  const [rentCarList, setRentCarList] = useState([]);

  const filterTypeUrl =
    "http://localhost:8000/rentcar/searchList?rentStartDate=2022-09-28&rentEndDate=2022-09-29&rentStartTime=1&rentEndTime=2&insurance=일반자차&age=만 26세이상&experience=1년 미만";

  useEffect(() => {
    fetch("/data/rentcar/rentcar.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setFilterTypes(data[0].filterTypes);
        setRentCarTags(data[0].filterTypes[2].checkList);
        setRentCarList(data[0].carList);
      });
  }, []);

  return (
    <div className="rentcar-container">
      <div className="rentcar-content">
        <div className="rentcar-top-content">
          <SearchTagBox title={"빠른 검색"} tagList={tagList} />
        </div>
        <div className="rentcar-main-content">
          <SideFilterBar
            orderTypes={orderTypes}
            filterTypes={filterTypes}
            getSortOrder={getSortOrder}
          />
          <div className="rentcar-list-wrap">
            <TotalBox totalAmount={913} />
            <RentCarList rentCarList={rentCarList} rentCarTags={rentCarTags} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentCar;
