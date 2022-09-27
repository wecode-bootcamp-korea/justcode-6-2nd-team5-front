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
    )}`;

    // console.log(url);
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  }, [location]);

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

  // Filter Bar, TotalBox, RentCarList props
  // Filter Bar, TotalBox, RentCarList API data
  const [filterTypes, setFilterTypes] = useState([]);
  const [rentCarTags, setRentCarTags] = useState([]);
  const [rentCarList, setRentCarList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

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

        let count = 0;
        data[0].carList.map((car) => {
          count += car.rentCarCompanyList.length;
        });
        setTotalAmount(count);
      });
  }, []);

  return (
    <div className="rentcar-container">
      <div className="rentcar-content">
        <div className="rentcar-top-content">
          <SearchTagBox title={"빠른 검색"} tagList={tagList} />
        </div>
        <div className="rentcar-main-content">
          <SideFilterBar orderTypes={orderTypes} filterTypes={filterTypes} />
          <div className="rentcar-list-wrap">
            <TotalBox totalAmount={totalAmount} />
            <RentCarList rentCarList={rentCarList} rentCarTags={rentCarTags} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentCar;
