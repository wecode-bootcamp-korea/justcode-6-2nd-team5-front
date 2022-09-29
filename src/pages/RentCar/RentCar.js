import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RentCarHeader from "../../components/Header/RentCarHeader";
import SearchTagBox from "../../components/SearchTagBox/SearchTagBox";
import SideFilterBar from "../../components/SideFilterBar/SideFilterBar";
import TotalBox from "../../components/TotalBox/TotalBox";
import "./RentCar.scss";
import RentCarList from "./RentCarList/RentCarList";
import RentCarHeader from "../../components/Header/RentCarHeader";

function RentCar() {
  const location = useLocation();

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

  // 초기 필터링 세팅
  useEffect(() => {
    const url = `http://localhost:8000${location.pathname}${decodeURIComponent(
      location.search
    )}`;

    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // SideFilterBar props
        setFilterTypes(data[0].filterTypes);

        // RentCarList props
        if (data[0].filterTypes.length) {
          setRentCarTags(data[0].filterTypes[2].checkList);
        }

        // RentCarList props
        setRentCarList(data[0].carList);

        // TotalBox props
        let count = 0;
        data[0].carList.map((car) => {
          count += car.rentCarCompanyList.length;
        });
        setTotalAmount(count);
      });
  }, [location]);

  return (
    <>
      <div className="rentcar-container">
        <RentCarHeader />
        <div className="rentcar-content">
          <div className="rentcar-top-content">
            <SearchTagBox title={"빠른 검색"} tagList={tagList} />
          </div>
          <div className="rentcar-main-content">
            <SideFilterBar orderTypes={orderTypes} filterTypes={filterTypes} />
            <div className="rentcar-list-wrap">
              <TotalBox totalAmount={totalAmount} />
              <RentCarList
                rentCarList={rentCarList}
                rentCarTags={rentCarTags}
              />
              {totalAmount === 0 && (
                <div className="product-bar" style={{ height: "33%" }}>
                  <p style={{ textAlign: "center", marginTop: "20px" }}>
                    조회 내역이 없습니다.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RentCar;
