import React, { useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";

import { AiFillCar } from "react-icons/ai";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaHotdog } from "react-icons/fa";

const Header = () => {
  const [color, setColor] = useState(true);
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((current) => !current);
  };

  return (
    <HeaderContainder>
      <BtnBox>
        <IconBtn onClick={handleClick}>
          <AiFillCar className="icon" />
          <span>렌터카검색</span>
          <Modal isOpen={isOpen} />
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
        </IconBtn>
      </BtnBox>
      <MenuBox>
        <Menu border="2px solid #63a1ff">
          <h6>대여/반납일</h6>
          <p>대여/반납일을 선택해주세요.</p>
        </Menu>
        <Menu>
          <h6>대여/반납 시간</h6>
          <p>시간을 선택해주세요.</p>
        </Menu>
        <Menu>
          <h6>차량조건</h6>
          <p>조건을 선택해주세요.</p>
        </Menu>
        <Menu>
          <h6>운전자조건</h6>
          <p>운전자조건을 선택해주세요.</p>
        </Menu>
        <SearchBtn>검색</SearchBtn>
      </MenuBox>
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

export const IconBtn = styled.button`
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
  background-color: white;
  font-weight: 600;

  &:active {
    background-color: #63a1ff;
  }

  svg {
    margin-bottom: 10px;
    color: #63a1ff;
    font-size: 30px;
  }
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Menu = styled.div`
  margin: 10px;
  border: ${(props) => props.border};
  height: 95px;
  padding: 25px 23px 16px 23px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 8px 16px 0 rgba(32, 32, 32, 0.08);

  h6 {
    padding-bottom: 10px;
    color: #606060;
    font-size: 15px;
    font-weight: 500;
  }

  p {
    color: #aeaeae;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
  }
`;

const SearchBtn = styled.button`
  margin: 10px;
  width: 96px;
  height: 96px;
  border-radius: 16px;
  border: none;
  background-color: #63a1ff;
  color: white;
  font-size: 20px;
  font-weight: 900;
  box-shadow: 0 8px 16px 0 rgba(32, 32, 32, 0.08);
  cursor: pointer;
`;

export default Header;
