import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LogoSrc from "../assets/images/logo.png";
import { BiSearch, BiLogIn } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Nav = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/esg");
  };

  return (
    <NavContainer>
      <div className="logo-box"></div>
      <ul className="menu-box">
        <MenuTab onClick={goToMain}>ESG</MenuTab>
        <MenuTab>렌터카</MenuTab>
        <MenuTab>항공</MenuTab>
        <MenuTab>숙박</MenuTab>
        <MenuTab>트립</MenuTab>
        <MenuTab>카페패스</MenuTab>
        <MenuTab>맛집</MenuTab>
        <BiSearch color="blue" size="24px" />
      </ul>
      <div className="info-box">
        <InfoTab>
          <BiLogIn color="gray" />
          로그인
        </InfoTab>
        <InfoTab>
          <HiOutlineShoppingBag />
          주문조회
        </InfoTab>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: flex;
  width: 100vw;
  padding-top: 35px;
  background-color: #f8f8f8;

  .logo-box {
    width: 30%;
    background: url(${LogoSrc}) no-repeat;
  }

  .menu-box {
    display: flex;
  }
`;

const MenuTab = styled.li`
  padding: 16px;
  font-family: "NanumSquareRound", sans-serif;
  font-weight: 800;
  font-size: 1.6rem;
  cursor: pointer;
  &:hover {
    color: #63a1ff;
  }
`;

const InfoTab = styled.span`
  padding: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
    Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic",
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  color: #808080;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: #000000;
  }
`;

export default Nav;
