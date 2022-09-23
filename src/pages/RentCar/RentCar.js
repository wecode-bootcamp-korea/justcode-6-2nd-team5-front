import React, { useEffect, useState } from "react";
import SearchTagBox from "../../components/SearchTagBox/SearchTagBox";
import SideFilterBar from "../../components/SideFilterBar/SideFilterBar";
import "./RentCar.scss";

function RentCar() {
  // 선택된 태그 state value
  const [isOnTag0, setIsOnTag0] = useState(false);
  const [isOnTag1, setIsOnTag1] = useState(false);
  const [isOnTag2, setIsOnTag2] = useState(false);
  const [isOnTag3, setIsOnTag3] = useState(false);
  const [isOnTag4, setIsOnTag4] = useState(false);
  const [isOnTag5, setIsOnTag5] = useState(false);
  const [isOnTag6, setIsOnTag6] = useState(false);
  const [isOnTag7, setIsOnTag7] = useState(false);
  const [isOnTag8, setIsOnTag8] = useState(false);

  // tad disabled state value list
  const tagDisableds = [
    isOnTag0,
    isOnTag1,
    isOnTag2,
    isOnTag3,
    isOnTag4,
    isOnTag5,
    isOnTag6,
    isOnTag7,
    isOnTag8,
  ];

  // SearchTagBox props
  const [tagList, setTagList] = useState([]);

  // 태그 mockdata
  useEffect(() => {
    fetch("/data/rentcar/tagList.json")
      .then((res) => res.json())
      .then((data) => {
        setTagList(data.tagList);
      });
  }, []);

  // 각 태그에 disabled 속성 할당
  for (let i = 0; i < tagList.length; i++) {
    tagList[i].disabled = tagDisableds[i];
  }

  // 태그 선택/선택해제 함수
  const tagSelect = (e) => {
    const tagId = e.target.id;

    if (tagId === "0") setIsOnTag0((prev) => !prev);
    if (tagId === "1") setIsOnTag1((prev) => !prev);
    if (tagId === "2") setIsOnTag2((prev) => !prev);
    if (tagId === "3") setIsOnTag3((prev) => !prev);
    if (tagId === "4") setIsOnTag4((prev) => !prev);
    if (tagId === "5") setIsOnTag5((prev) => !prev);
    if (tagId === "6") setIsOnTag6((prev) => !prev);
    if (tagId === "7") setIsOnTag7((prev) => !prev);
    if (tagId === "8") setIsOnTag8((prev) => !prev);
  };

  // Side Filter Bar props

  // order type mockdata
  const [orderTypes, setOrderTypes] = useState([]);

  useEffect(() => {
    fetch("/data/rentcar/orderType.json")
      .then((res) => res.json())
      .then((data) => setOrderTypes(data.orderTypes));
  }, []);

  // filter type mockdata
  // filter dep-2
  const [isCheckFilter0, setIsCheckFilter0] = useState(false);
  const [isCheckFilter1, setIsCheckFilter1] = useState(false);
  const [isCheckFilter2, setIsCheckFilter2] = useState(false);
  const [isCheckFilter3, setIsCheckFilter3] = useState(false);
  const [isCheckFilter4, setIsCheckFilter4] = useState(false);
  const filterDep2Disableds = [
    isCheckFilter0,
    isCheckFilter1,
    isCheckFilter2,
    isCheckFilter3,
    isCheckFilter4,
  ];
  const [filterTypes, setFilterTypes] = useState([]);

  useEffect(() => {
    fetch("/data/rentcar/filterType.json")
      .then((res) => res.json())
      .then((data) => {
        setFilterTypes(data.filterTypes);
      });
  }, []);

  // 필터 dep-2 disabled 속성 할당
  for (let i = 0; i < filterTypes.length; i++) {
    filterTypes[i].disabled = filterDep2Disableds[i];
  }

  // filter dep-2 선택/선택해제 함수
  const filterSelect = (e) => {
    const tagId = e.target.id;

    if (tagId === "0") setIsCheckFilter0(!isCheckFilter0);
    if (tagId === "1") setIsCheckFilter1(!isCheckFilter1);
    if (tagId === "2") setIsCheckFilter2(!isCheckFilter2);
    if (tagId === "3") setIsCheckFilter3(!isCheckFilter3);
    if (tagId === "4") setIsCheckFilter4(!isCheckFilter4);
  };

  return (
    <div className="rentcar-container">
      <div className="rentcar-content">
        <div className="rentcar-top-content">
          <SearchTagBox
            title={"빠른 검색"}
            tagList={tagList}
            tagSelect={tagSelect}
          />
        </div>
        <div className="rentcar-main-content">
          <SideFilterBar
            orderTypes={orderTypes}
            filterTypes={filterTypes}
            filterSelect={filterSelect}
          />
          <div className="rentcar-list"></div>
        </div>
      </div>
    </div>
  );
}

export default RentCar;
