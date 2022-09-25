import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";

import RentCarHeader from "./RentCarHeader";
import FlightHeader from "./FlightHeader";
import RoomHeader from "./RoomHeader";
import TripHeader from "./TripHeader";
import CafeHeader from "./CafeHeader";
import FoodHeader from "./FoodHeader";

import { HeaderContainer, IconBtn, BtnBox } from "../Modal/commonStyled";

import { AiFillCar } from "react-icons/ai";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaHotdog } from "react-icons/fa";

const Header = () => {
  const [clickedIcon, setClickedIcon] = useState(1);
  const [isOpen, setOpen] = useState(false);

  const changeColor = (e) => {
    setClickedIcon(Number(e.target.id));
  };

  const modalOpen = (event) => {
    setOpen(true);
    console.log(isOpen);
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
    <HeaderContainer>
      <BtnBox>
        {menuArr.map((menu) => {
          return (
            <IconBtn
              key={menu.id}
              id={menu.id}
              onClick={changeColor}
              className={clickedIcon === menu.id && "clicked"}
            >
              {menu.icon}
              {menu.name}
            </IconBtn>
          );
        })}
      </BtnBox>
      {clickedIcon === 1 && <RentCarHeader modalOpen={modalOpen} />}
      {clickedIcon === 2 && <FlightHeader modalOpen={modalOpen} />}
      {clickedIcon === 3 && <RoomHeader modalOpen={modalOpen} />}
      {clickedIcon === 4 && <TripHeader modalOpen={modalOpen} />}
      {clickedIcon === 5 && <CafeHeader modalOpen={modalOpen} />}
      {clickedIcon === 6 && <FoodHeader modalOpen={modalOpen} />}
      {isOpen && (
        <Modal
          setOpen={setOpen}
          menuArr={menuArr}
          clickedIcon={clickedIcon}
          setClickedIcon={setClickedIcon}
        />
      )}
    </HeaderContainer>
  );
};

export default Header;
