import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import { ModalContext } from "../../components/Context/ModalContext";
import { MenuBox, Menu, SearchBtn } from "../Modal/commonStyled";

const RentCarHeader = () => {
  const location = useLocation();
  const url = new URLSearchParams(location.search);

  const sDate = url.get("rentStartDate");
  const eDate = url.get("rentEndDate");
  const sTime = url.get("rentStartTime");
  const eTime = url.get("rentEndTime");
  const insurance = url.get("insurance");
  const carType = url.get("carType");
  const age = url.get("age");
  const experience = url.get("experience");
  const timeGap = url.get("totalTime");

  const {
    isOpen,
    setOpen,
    clickedIcon,
    setClickedIcon,
    condition,
    setCondition,
  } = useContext(ModalContext);

  const modalOpen = (e) => {
    setOpen(true);
    setClickedIcon(1);
    {
      location.search === "" ? setCondition("date") : setCondition(e.target.id);
    }
  };
  // const url = location.href;
  // const urlParams = url.searchParams;
  // console.log(urlParams);

  return (
    <MenuBox>
      <Menu onClick={modalOpen} id="date" className="border">
        <h6 id="date">대여/반납일</h6>
        {sDate ? (
          <p className="date">
            {sDate} ~ {eDate}
          </p>
        ) : (
          <p>대여/반납일을 선택해주세요.</p>
        )}
      </Menu>
      <Menu onClick={modalOpen} id="time">
        <h6>대여/반납 시간</h6>
        {sTime ? (
          <p className="date">
            {sTime} ~ {eTime} ({timeGap}시간)
          </p>
        ) : (
          <p>시간을 선택해주세요.</p>
        )}
      </Menu>
      <Menu onClick={modalOpen} id="car">
        <h6>차량조건</h6>
        {sDate ? (
          <p className="date">
            {insurance}/ {carType}
          </p>
        ) : (
          <p>조건을 선택해주세요.</p>
        )}
      </Menu>
      <Menu onClick={modalOpen} id="driver">
        <h6>운전자조건</h6>
        {age ? (
          <p className="date">
            {age}, {experience}
          </p>
        ) : (
          <p>운전자 조건을 선택해주세요.</p>
        )}
      </Menu>
      <SearchBtn onClick={modalOpen}>검색</SearchBtn>
    </MenuBox>
  );
};

export default RentCarHeader;
