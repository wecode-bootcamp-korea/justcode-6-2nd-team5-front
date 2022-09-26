import React, { useContext } from "react";
import styled from "styled-components";
import { CgArrowsExchangeAlt } from "react-icons/cg";

import { ModalContext } from "../../components/Context/ModalContext";
import { MenuBox, Menu, SearchBtn } from "../Modal/commonStyled";

const FlightHeader = () => {
  const { isOpen, setOpen, setClickedIcon } = useContext(ModalContext);

  const modalOpen = () => {
    setOpen(true);
  };

  return (
    <MenuBox onClick={() => setClickedIcon(2)}>
      <Menu onClick={modalOpen} className="border flex" width="400px">
        <div>
          <h6>출발</h6>
          <p>어디서 떠나시나요?</p>
        </div>
        <div className="changeIcon">
          <CgArrowsExchangeAlt />
        </div>
        <div>
          <h6>도착</h6>
          <p>어디로 떠나시나요?</p>
        </div>
      </Menu>
      <Menu onClick={modalOpen}>
        <h6>탑승일</h6>
        <p>탑승일을 선택해주세요.</p>
      </Menu>
      <Menu onClick={modalOpen}>
        <h6>인원 및 좌석등급</h6>
        <p className="date">성인1, 일반석</p>
      </Menu>
      <SearchBtn onClick={modalOpen}>검색</SearchBtn>
    </MenuBox>
  );
};

export default FlightHeader;
