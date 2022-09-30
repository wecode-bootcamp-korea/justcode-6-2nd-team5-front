import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { MainContext } from "../../Context/MainContext";
import { ModalContext } from "../../Context/ModalContext";

import { MenuBox, Menu, SearchBtn } from "../commonStyled";

import Date from "../detailSearch/rentCar/RentalDate";
import Time from "../detailSearch/rentCar/Time";
import CarCondition from "../detailSearch/rentCar/CarCondition";
import DriverCondition from "../detailSearch/rentCar/DriverCondition";

const RentCarModal = () => {
  const location = useLocation();
  const url = new URLSearchParams(location.search);
  const { dateSet } = useContext(MainContext);
  const { setOpen, isOpen, condition, setCondition } = useContext(ModalContext);
  const navigate = useNavigate();

  // const [condition, setCondition] = useState("date");

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

  //총 대여 시간 구하는 함수
  const timeGap = Math.round(
    dateSet.time +
      Number(returnSelected.slice(0, 2)) -
      Number(takeSelected.slice(0, 2))
  );

  // 숫자를 문자로 변환하는 함수
  useEffect(() => {
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

  console.log(timeGap);
  console.log("날짜", dateSet);
  console.log("인수시간", takeSelected);
  console.log("반납시간", returnSelected);
  console.log("보험", insurance);
  console.log("나이", driverAge);
  console.log("경력", driverCareer);

  //버튼 클릭 함수
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
      const url = `rentStartDate=${dateSet.start}&rentEndDate=${dateSet.end}&rentStartTime=${takeSelected}&rentEndTime=${returnSelected}&insurance=${insurance}&age=${driverAge}&experience=${driverCareer}&carType=경형&carType=소형&totalTime=${timeGap}`;
      navigate(`/rentcar/searchList?${url}`);
      setOpen(false);
      console.log(isOpen);
    }
  };


  const sDate = url.get("rentStartDate");
  const eDate = url.get("rentEndDate");
  const sTime = url.get("rentStartTime");
  const eTime = url.get("rentEndTime");
  const existInsurance = url.get("insurance");
  const existcarType = url.get("carType");
  const age = url.get("age");
  const experience = url.get("experience");
  const existTimeGap = url.get("totalTime");
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
          {/* 쿼리가 있을때 ? <( 날짜 모두 선택했을때 ? (선택한 값 띄우기) : (쿼리에서 데이터 나와서 값 박기))> : <(날짜를 모두 선택했을 때 ? (선택한 값 띄우기) : (기본 문구 띄우기))>*/}
          {location.search !== "" ? (
            dateSet.start !== "" ? (
              <p className="date">
                {dateSet.start} ~ {dateSet.end}
              </p>
            ) : (
              <p className="date">
                {sDate} ~ {eDate}
              </p>
            )
          ) : dateSet.start !== "" && dateSet.end !== "" ? (
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
          {location.search !== "" ? (
            takeSelected !== "" && returnSelected !== "" ? (
              <p className="date">
                {takeSelected} ~ {returnSelected} ({timeGap}시간)
              </p>
            ) : (
              <p className="date">
                {sTime} ~ {eTime} ({existTimeGap}시간)
              </p>
            )
          ) : takeSelected !== "" && returnSelected !== "" ? (
            <p className="date">
              {takeSelected} ~ {returnSelected} ({timeGap}시간)
            </p>
          ) : (
            <p>인수/반납일을 선택해주세요.</p>
          )}
        </Menu>
        <Menu
          onClick={() => setCondition("car")}
          className={condition === "car" && "border"}
          primary
          width="182px"
        >
          <h6>차량조건</h6>
          {location.search !== "" ? (
            insurance !== "" && replaceCarType !== "" ? (
              <p className="date">
                {insurance}/ {replaceCarType}
              </p>
            ) : (
              <p className="date">
                {existInsurance}/ {existcarType}
              </p>
            )
          ) : insurance !== "" && replaceCarType !== "" ? (
            <p className="date">
              {insurance}/ {replaceCarType}
            </p>
          ) : (
            <p>조건을 선택해주세요.</p>
          )}
        </Menu>
        <Menu
          onClick={() => setCondition("driver")}
          className={condition === "driver" && "border"}
          primary
          width="200px"
        >
          <h6>운전자조건</h6>
          {location.search !== "" ? (
            driverAge !== "" && driverCareer !== "" ? (
              <p className="date">
                {driverAge}, {driverCareer}
              </p>
            ) : (
              <p className="date">
                {age}, {experience}
              </p>
            )
          ) : driverAge !== "" && driverCareer !== "" ? (
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
