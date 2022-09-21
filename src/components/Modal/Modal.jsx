import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Header from "../../pages/Header";
import Calender from "../Modal/Calender";

import { MenuBox, Menu, SearchBtn } from "../../pages/SearchMenu";

import { DefaultIconBtn } from "../../pages/IconMenu";
import { AiFillCar } from "react-icons/ai";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaHotdog } from "react-icons/fa";

const Modal = ({ setOpen, onClose }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const menuArr = [
    { icon: <AiFillCar />, name: "렌터카검색" },
    { icon: <FaPlaneDeparture />, name: "항공검색" },
    { icon: <FaBed />, name: "숙박검색" },
    { icon: <FaTicketAlt />, name: "트립검색" },
    { icon: <FaCoffee />, name: "카페검색" },
    { icon: <FaHotdog />, name: "맛집검색" },
  ];

  return (
    <Overlay>
      <ModalWrap>
        <CloseButton onClick={handleClose}>✕</CloseButton>
        <Contents>
          {menuArr.map((menu) => {
            return <ModalIconBtn>{menu.icon}</ModalIconBtn>;
          })}
        </Contents>
        <MenuBox>
          <Menu border="1px solid #63a1ff" fontSize>
            <h6>인수/반납일</h6>
            <p>인수/반납일을 선택해주세요.</p>
          </Menu>
          <Menu fontSize>
            <h6>인수/반납 시간</h6>
            <p>시간을 선택해주세요.</p>
          </Menu>
          <Menu fontSize>
            <h6>차량조건</h6>
            <p>조건을 선택해주세요.</p>
          </Menu>
          <Menu fontSize>
            <h6>운전자조건</h6>
            <p>운전자조건을 선택해주세요.</p>
          </Menu>
          <SearchBtn fontSize>검색</SearchBtn>
        </MenuBox>
        <Calender />
      </ModalWrap>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  background-color: #f8f8f8;
  position: absolute;
  top: 0;
`;

const CloseButton = styled.div`
  position: absolute;
  right: 20px;
  width: 40px;
  height: 40px;
  margin: 40px;
  font-size: 20px;
  color: #202020;
  cursor: pointer;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;

  .search-menu {
    font-size: 14px;
  }
`;

const ModalIconBtn = styled(DefaultIconBtn)`
  width: 70px;
  height: 70px;
  margin: 10px;

  svg {
    font-size: 30px;
    margin-top: 5px;
  }
`;

export default Modal;
