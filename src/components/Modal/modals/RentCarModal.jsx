import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { MainContext } from "../../Context/MainContext";
import { ModalContext } from "../../Context/ModalContext";

import { MenuBox, Menu, SearchBtn } from "../commonStyled";

import Date from "../detailSearch/rentCar/RentalDate";
import Time from "../detailSearch/rentCar/Time";
import CarCondition from "../detailSearch/rentCar/CarCondition";
import DriverCondition from "../detailSearch/rentCar/DriverCondition";

const RentCarModal = () => {
  const navigate = useNavigate();
  const { dateSet } = useContext(MainContext);
  const { setOpen, isOpen } = useContext(ModalContext);

  const [condition, setCondition] = useState("date");

  //시간 선택 state
  const [takeSelected, setTakeSelected] = useState("");
  const [returnSelected, setReturnSelected] = useState("");

  //보험, 차종 선택 state
  const [insurance, setInsurance] = useState("");
  const [carType, setCarType] = useState([]);
  const [replaceCarType, setReplaceCarType] = useState([]);

  //운전자 나이, 경력 선택 state
  const [driverAge, setDriverAge] = useState("");
  const [driverCareer, setDriverCareer] = useState("");

  const handleTakeSelect = (e) => {
    setTakeSelected(e.target.value);
  };
  const handleReturnSelect = (e) => {
    setReturnSelected(e.target.value);
  };

  const timeGap = Math.round(
    dateSet.time +
      Number(returnSelected.slice(0, 2)) -
      Number(takeSelected.slice(0, 2))
  );

  useEffect(() => {
    // console.log(carType);
    let arr = carType.map((v) => {
      switch (v) {
        case 0:
          return (v = "전체");
        case 1:
          return (v = "경형");
        case 2:
          return (v = "소형");
        case 3:
          return (v = "준중형");
        case 4:
          return (v = "중형");
        case 5:
          return (v = "고급");
        case 6:
          return (v = "SUV/캠핑");
        case 7:
          return (v = "승합");
      }
    });
    if (arr.length > 1) {
      for (let i = 1; i < arr.length; i++) {
        arr[i] = ", " + arr[i];
      }
    }
    return setReplaceCarType(arr);
  }, [carType]);

  // console.log(timeGap);
  // console.log("날짜", dateSet);
  // console.log("인수시간", takeSelected);
  // console.log("반납시간", returnSelected);
  // console.log("보험", insurance);
  // console.log("나이", driverAge);
  // console.log("경력", driverCareer);

  const handleSearchClick = () => {
    if (
      dateSet === "" ||
      takeSelected === "" ||
      returnSelected === "" ||
      insurance === "" ||
      driverAge === "" ||
      driverCareer === ""
    ) {
      alert("조건을 모두 선택해주세요");
      return;
    } else {
      const url = `rentStartDate=${dateSet.start}&rentEndDate=${dateSet.end}&rentStartTime=${takeSelected}&rentEndTime=${returnSelected}&insurance=${insurance}&age=${driverAge}&experience=${driverCareer}&carType=경형&carType=소`;
      navigate(`/rentcar/searchList?${url}`);
      setOpen(false);
      console.log(isOpen);
    }
  };

  return (
    <>
      <MenuBox primary>
        <Menu
          onClick={() => setCondition("date")}
          className={condition === "date" && "border"}
          primary
          width="240px"
        >
          <h6>인수/반납일</h6>
          {dateSet.start !== "" && dateSet.end !== "" ? (
            <p className="date">
              {dateSet.start} ~ {dateSet.end}
            </p>
          ) : (
            <p>인수/반납일을 선택해주세요.</p>
          )}
        </Menu>
        <Menu
          onClick={() => {
            setCondition("time");
          }}
          className={condition === "time" && "border"}
          primary
          width="220px"
        >
          <h6>인수/반납 시간</h6>
          {takeSelected !== "" && returnSelected !== "" ? (
            <p className="date">
              {takeSelected} ~ {returnSelected} ({timeGap}시간)
            </p>
          ) : (
            <p>시간을 선택해주세요.</p>
          )}
        </Menu>
        <Menu
          onClick={() => setCondition("car")}
          className={condition === "car" && "border"}
          primary
          width="182px"
        >
          <h6>차량조건</h6>
          {insurance === "" ? (
            <p>조건을 선택해주세요.</p>
          ) : (
            <p className="date">
              {insurance}/ {replaceCarType}
            </p>
          )}
        </Menu>
        <Menu
          onClick={() => setCondition("driver")}
          className={condition === "driver" && "border"}
          primary
          width="200px"
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
        <SearchBtn primary onClick={handleSearchClick}>
          검색
        </SearchBtn>
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
      {condition === "car" && (
        <CarCondition setInsurance={setInsurance} setCarType={setCarType} />
      )}
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
