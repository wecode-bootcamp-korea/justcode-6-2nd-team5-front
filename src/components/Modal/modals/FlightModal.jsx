import React, { useState } from "react";

import { MenuBox, Menu, SearchBtn } from "../commonStyled";

import Place from "../detailSearch/flight/Place";
import Date from "../detailSearch/flight/Date";
import Seat from "../detailSearch/flight/Seat";

const FlightModal = () => {
  const [condition, setCondition] = useState("place");

  return (
    <>
      <MenuBox primary>
        <Menu
          onClick={() => setCondition("place")}
          className={condition === "place" && "border"}
          primary
        >
          <h6>출발</h6>
          <p>어디서 떠나시나요?</p>
        </Menu>
        <Menu
          onClick={() => setCondition("date")}
          className={condition === "date" && "border"}
          primary
        >
          <h6>탑승일</h6>
          <p>탑승일을 선택해주세요.</p>
        </Menu>
        <Menu
          onClick={() => setCondition("seat")}
          className={condition === "seat" && "border"}
          primary
        >
          <h6>인원 및 좌석등급</h6>
          <p className="date">성인1, 전체</p>
        </Menu>
        <SearchBtn primary>검색</SearchBtn>
      </MenuBox>
      {condition === "place" && <Place />}
      {condition === "date" && <Date />}
      {condition === "seat" && <Seat />}
    </>
  );
};

export default FlightModal;
