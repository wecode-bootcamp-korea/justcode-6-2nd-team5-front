import React, { useState } from "react";
import SerchTagBox from "../../components/SerchTagBox/SerchTagBox";
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

  // 태그 mockdata
  const tagList = [
    {
      id: 0,
      tagName: "캐스퍼",
      disabled: isOnTag0,
    },
    {
      id: 1,
      tagName: "애견동반",
      disabled: isOnTag1,
    },
    {
      id: 2,
      tagName: "낚시용품 가능",
      disabled: isOnTag2,
    },
    {
      id: 3,
      tagName: "오픈카",
      disabled: isOnTag3,
    },
    {
      id: 4,
      tagName: "주유비 SAVE, 전기차",
      disabled: isOnTag4,
    },
    {
      id: 5,
      tagName: "ALL NEW 신차",
      disabled: isOnTag5,
    },
    {
      id: 6,
      tagName: "전기충전",
      disabled: isOnTag6,
    },
    {
      id: 7,
      tagName: "BMW",
      disabled: isOnTag7,
    },
    {
      id: 8,
      tagName: "차박/캠핑카",
      disabled: isOnTag8,
    },
  ];

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

  return (
    <div className="rentcar-container">
      <div className="rentcar-content">
        <div className="rentcar-top-content">
          <SerchTagBox
            title={"빠른 검색"}
            tagList={tagList}
            tagSelect={tagSelect}
          />
        </div>
        <div className="rentcar-main-content">
          <SideFilterBar />
          <div className="rentcar-list"></div>
        </div>
      </div>
    </div>
  );
}

export default RentCar;
