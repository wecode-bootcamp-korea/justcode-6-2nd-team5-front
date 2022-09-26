import React, { useState, useContext } from "react";

import { MainContext } from "../detailSearch/rentCar/context/Context";
import Store from "../detailSearch/rentCar/context/Context";

import { MenuBox, Menu, SearchBtn } from "../commonStyled";

import Date from "../detailSearch/rentCar/RentalDate";
import Time from "../detailSearch/rentCar/Time";
import CarCondition from "../detailSearch/rentCar/CarCondition";
import DriverCondition from "../detailSearch/rentCar/DriverCondition";

const RentCarModal = () => {
  const { dateSet } = useContext(MainContext);
  const [condition, setCondition] = useState("date");
  return (
    <>
      <MenuBox primary>
        <Menu
          onClick={() => setCondition("date")}
          className={condition === "date" && "border"}
          primary
        >
          <h6>인수/반납일</h6>
          {dateSet.end === "" ? (
            <p>인수/반납일을 선택해주세요.</p>
          ) : (
            <p date>
              {dateSet.start} ~ {dateSet.end}
            </p>
          )}
        </Menu>
        <Menu
          onClick={() => {
            setCondition("time");
          }}
          className={condition === "time" && "border"}
          primary
        >
          <h6>인수/반납 시간</h6>
          <p>시간을 선택해주세요.</p>
        </Menu>
        <Menu
          onClick={() => setCondition("car")}
          className={condition === "car" && "border"}
          primary
        >
          <h6>차량조건</h6>
          <p>조건을 선택해주세요.</p>
        </Menu>
        <Menu
          onClick={() => setCondition("driver")}
          className={condition === "driver" && "border"}
          primary
        >
          <h6>운전자조건</h6>
          <p>운전자조건을 선택해주세요.</p>
        </Menu>
        <SearchBtn primary>검색</SearchBtn>
      </MenuBox>
      {condition === "date" && <Date />}
      {condition === "time" && <Time />}
      {condition === "car" && <CarCondition />}
      {condition === "driver" && <DriverCondition />}
    </>
  );
};

export default RentCarModal;
