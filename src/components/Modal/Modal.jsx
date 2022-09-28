import React, { useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import MainContextProvider from "../../components/Context/MainContext";
import { ModalContext } from "../Context/ModalContext";

import RentCarModal from "./modals/RentCarModal";
import FlightModal from "./modals/FlightModal";
import AccomodationModal from "./modals/AccomodationModal";
import TripModal from "./modals/TripModal";
import CafeModal from "./modals/CafeModal";
import FoodModal from "./modals/FoodModal";

import { BtnBox } from "./commonStyled";

import { AiFillCar } from "react-icons/ai";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaHotdog } from "react-icons/fa";

const Modal = () => {
  const { setOpen, clickedIcon, setClickedIcon } = useContext(ModalContext);

  useEffect(() => {
    const $body = document.querySelector("body");
    $body.style.overflow = "hidden";
    return () => ($body.style.overflow = "auto");
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const menuArr = [
    { id: 1, icon: <AiFillCar />, name: "렌터카검색" },
    { id: 2, icon: <FaPlaneDeparture />, name: "항공검색" },
    { id: 3, icon: <FaBed />, name: "숙박검색" },
    { id: 4, icon: <FaTicketAlt />, name: "트립검색" },
    { id: 5, icon: <FaCoffee />, name: "카페검색" },
    { id: 6, icon: <FaHotdog />, name: "맛집검색" },
  ];

  return (
    <MainContextProvider>
      <Overlay>
        <ModalWrap>
          <CloseButton onClick={handleClose}>✕</CloseButton>
          <BtnBox primary>
            {menuArr.map((menu) => {
              return (
                <ModalIconBtn
                  onClick={(e) => setClickedIcon(Number(e.target.id))}
                  key={menu.id}
                  id={menu.id}
                  className={clickedIcon === menu.id && "clicked"}
                >
                  {menu.icon}
                </ModalIconBtn>
              );
            })}
          </BtnBox>
          {clickedIcon === 1 && <RentCarModal />}
          {clickedIcon === 2 && <FlightModal />}
          {clickedIcon === 3 && <AccomodationModal />}
          {clickedIcon === 4 && <TripModal />}
          {clickedIcon === 5 && <CafeModal />}
          {clickedIcon === 6 && <FoodModal />}
        </ModalWrap>
      </Overlay>
    </MainContextProvider>
  );
};

export const Overlay = styled.div`
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
  height: fit-content;
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

const ModalIconBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 10px;
  padding: 0;
  width: 80px;
  height: 80px;
  border-radius: 16px;
  border: none;
  color: #808080;
  font-size: 13px;
  font-weight: 600;
  background-color: #ffffff;
  width: 70px;
  height: 70px;
  margin: 10px;
  cursor: pointer;

  svg {
    font-size: 30px;
    margin-top: 5px;
    margin-bottom: 10px;
    color: #63a1ff;
    pointer-events: none;
  }
`;

export default Modal;
