import React, { useState, useContext } from "react";

import { MainContext } from "../../Context/MainContext";

import { MenuBox, Menu, SearchBtn } from "../commonStyled";

import Date from "../detailSearch/rentCar/RentalDate";
import Time from "../detailSearch/rentCar/Time";
import CarCondition from "../detailSearch/rentCar/CarCondition";
import DriverCondition from "../detailSearch/rentCar/DriverCondition";

const RentCarModal = () => {
  const { dateSet } = useContext(MainContext);

  const [condition, setCondition] = useState("date");

  const [takeSelected, setTakeSelected] = useState("");
  const [returnSelected, setReturnSelected] = useState("");

  const [insurance, setInsurance] = useState("");

  const [driverAge, setDriverAge] = useState("");
  const [driverCareer, setDriverCareer] = useState("");
  console.log("인수", driverAge);
  console.log("반납", driverCareer);

  const handleTakeSelect = (e) => {
    setTakeSelected(e.target.value);
  };
  const handleReturnSelect = (e) => {
    setReturnSelected(e.target.value);
  };

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
            <p className="date">
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
          {takeSelected !== "" && returnSelected !== "" ? (
            <p className="date">
              {takeSelected} ~ {returnSelected}
            </p>
          ) : (
            <p>시간을 선택해주세요.</p>
          )}
        </Menu>
        <Menu
          onClick={() => setCondition("car")}
          className={condition === "car" && "border"}
          primary
        >
          <h6>차량조건</h6>
          {insurance === "" ? (
            <p>조건을 선택해주세요.</p>
          ) : (
            <p className="date">{insurance}</p>
          )}
        </Menu>
        <Menu
          onClick={() => setCondition("driver")}
          className={condition === "driver" && "border"}
          primary
        >
          <h6>운전자조건</h6>
          {driverAge !== "" && driverCareer !== "" ? (
            <p className="date">
              {driverAge}, {driverCareer}
            </p>
          ) : (
            <p>운전자조건을 선택해주세요.</p>
          )}
        </Menu>
        <SearchBtn primary>검색</SearchBtn>
      </MenuBox>
      {condition === "date" && <Date />}
      {condition === "time" && (
        <Time
          takeSelected={takeSelected}
          returnSelected={returnSelected}
          handleTakeSelect={handleTakeSelect}
          handleReturnSelect={handleReturnSelect}
        />
      )}
      {condition === "car" && <CarCondition setInsurance={setInsurance} />}
      {condition === "driver" && (
        <DriverCondition
          setDriverAge={setDriverAge}
          setDriverCareer={setDriverCareer}
        />
      )}
    </>
  );
};

export default RentCarModal;
