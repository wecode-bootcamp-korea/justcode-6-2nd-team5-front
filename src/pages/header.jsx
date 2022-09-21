import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal/Modal";

import IconMenu from "./IconMenu";
import SearchMenu from "./SearchMenu";

import { AiFillCar } from "react-icons/ai";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaHotdog } from "react-icons/fa";

const Header = () => {
  const [color, setColor] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const modalOpen = (event) => {
    setOpen(true);
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
    <HeaderContainder>
      <BtnBox>
        {menuArr.map((menu, index) => {
          return <IconMenu key={index} menu={menu} />;
        })}

        {/* <IconBtn onClick={handleClick}>
          <AiFillCar className="icon" />
          <span>렌터카검색</span>
        </IconBtn>
        <IconBtn>
          <FaPlaneDeparture className="icon" />
          <span>항공검색</span>
        </IconBtn>
        <IconBtn>
          <FaBed className="icon " />
          <span>숙박검색</span>
        </IconBtn>
        <IconBtn>
          <FaTicketAlt className="icon" />
          <span>트립검색</span>
        </IconBtn>
        <IconBtn>
          <FaCoffee className="icon " />
          <span>카페검색</span>
        </IconBtn>
        <IconBtn>
          <FaHotdog className={`icon`} />
          <span>맛집검색</span>
        </IconBtn> */}
      </BtnBox>
      <SearchMenu modalOpen={modalOpen} />
      {isOpen && <Modal setOpen={setOpen} />}
    </HeaderContainder>
  );
};

const HeaderContainder = styled.div`
  background-color: #f8f8f8;
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
    Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic",
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif; ;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 10px;
  padding: 0;
  width: 90px;
  height: 90px;
  border-radius: 16px;
  border: none;
  color: #808080;
  background-color: #ffffff;
  font-weight: 600;

  svg {
    margin-bottom: 10px;
    color: #63a1ff;
    font-size: 30px;
  }
`;

export default Header;
