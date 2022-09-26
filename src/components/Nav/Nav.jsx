import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link, useParams, useLocation } from "react-router-dom";

import FixNav from "./FixNav";

import styled from "styled-components";
import jejuzoaLogo from "../../assets/images/jejuzoa-logo.png";
import logo from "../../assets/images/logo-square.png";
import { BiSearch, BiLogIn } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";

import { ModalContext } from "../Context/ModalContext";

const Nav = () => {
  const { clickedIcon, setClickedIcon } = useContext(ModalContext);
  const [scrollPosition, setScrollPosition] = useState(0);

  const menu = useLocation();

  const onClick = (e) => {
    setClickedIcon(e.target.id);
    console.log(e);
    console.log("테스트", clickedIcon);
  };

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <>
      <NavContainer>
        <div className="logo-box">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <ul className="menu-box">
          <MenuTab className={menu.pathname === "/esg" && "color"}>
            <Link to="/esg">ESG</Link>
          </MenuTab>
          <MenuTab
            onClick={onClick}
            id="1"
            className={menu.pathname.includes("/rentercar") && "color"}
          >
            <Link to="/rentercar">렌터카</Link>
          </MenuTab>
          <MenuTab className={menu.pathname === "/preparing" && "color"}>
            <Link to="/preparing">항공</Link>
          </MenuTab>
          <MenuTab
            className={menu.pathname.includes("/accomodation") && "color"}
          >
            <Link to="/accomodation">숙박</Link>
          </MenuTab>
          <MenuTab>
            <Link to="/preparing">트립</Link>
          </MenuTab>
          <MenuTab>
            <Link to="/preparing">카페패스</Link>
          </MenuTab>
          <MenuTab className={menu.pathname.includes("/food") && "color"}>
            <Link to="/food">맛집</Link>
          </MenuTab>
          <BiSearch className="search-icon" />
        </ul>
        <div className="info-box">
          <Link to="/login">
            <InfoTab>
              <BiLogIn color="gray" />
              로그인
            </InfoTab>
          </Link>
          <InfoTab>
            <HiOutlineShoppingBag color="gray" />
            주문조회
          </InfoTab>
        </div>
      </NavContainer>
      {scrollPosition < 100 ? null : <FixNav />}
    </>
  );
};

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  padding: 35px 0 20px 0;
  background-color: #f8f8f8;
  letter-spacing: -0.5px;

  .color {
    color: #63a1ff;
  }

  .logo-box {
    padding: 0 40px;
    img {
      width: 130px;
    }
  }

  .menu-box {
    display: flex;
    align-items: center;

    .search-icon {
      width: 70px;
      border-left: 1.5px solid lightgray;
      color: #202020;
      font-size: 24px;
      &:hover {
        color: #63a1ff;
      }
    }
  }

  .info-box {
    display: flex;
    align-items: center;
  }
`;

export const MenuTab = styled.li`
  text-align: center;
  padding-right: 30px;
  font-family: "NanumSquareRound", sans-serif;
  font-weight: 900;
  font-size: 22px;
  cursor: pointer;
  &:hover {
    color: #63a1ff;
  }
`;

const InfoTab = styled.span`
  display: flex;
  align-items: center;
  padding: 12px 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
    Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic",
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  color: #808080;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: #202020;
  }

  svg {
    margin-right: 5px;
    font-size: 24px;
  }
`;

export default Nav;
