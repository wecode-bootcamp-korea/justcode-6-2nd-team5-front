import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import styled from "styled-components";
import { BiSearch, BiLogIn } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { ModalContext } from "../Context/ModalContext";
import Modal from "../Modal/Modal";

const FixNav = () => {
  const { isOpen, setOpen, setClickedIcon } = useContext(ModalContext);
  const [token, setToken] = useState(localStorage.getItem("token"));

  const navigate = useNavigate();

  const userLogin = () => {
    if (token === "") navigate("/login");
    else if (token) navigate("/signup");
  };

  const userShop = () => {
    if (token === "") alert("로그인 후 접근해주세요.");
    else if (token) {
      navigate("/mypage");
    }
  };
  const modalOpen = () => {
    setOpen(true);
  };
  // console.log(token);
  return (
    <FixNavContainer>
      <ul className="menu-box">
        <FixMenuTab>
          <Link to="/rentcar">렌터카</Link>
        </FixMenuTab>
        <FixMenuTab>
          <Link to="/preparing">항공</Link>
        </FixMenuTab>
        <FixMenuTab>
          <Link to="/hotel">숙박</Link>
        </FixMenuTab>
        <FixMenuTab>
          <Link to="/preparing">트립</Link>
        </FixMenuTab>
        <FixMenuTab>
          <Link to="/preparing">카페패스</Link>
        </FixMenuTab>
        <FixMenuTab>
          <Link to="/restaurant">맛집</Link>
        </FixMenuTab>
        <FixMenuTab>
          <Link to="/esg">ESG</Link>
        </FixMenuTab>
        <BiSearch onClick={modalOpen} className="search-icon" />
      </ul>
      <div className="info-box">
        <FixInfoTab onClick={userLogin}>
          <BiLogIn color="rgba(255, 255, 255, 0.6)" />
          <span>{!token ? "로그인" : "로그아웃"}</span>
        </FixInfoTab>
        <Link to="/mypage">
          <FixInfoTab onClick={userShop}>
            <HiOutlineShoppingBag color="rgba(255, 255, 255, 0.6)" />
            <span>주문조회</span>
          </FixInfoTab>
        </Link>
      </div>
      {isOpen && <Modal />}
    </FixNavContainer>
  );
};

const FixNavContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 999;
  justify-content: space-between;
  width: 100vw;
  padding: 15px 80px;
  background-color: #1d68dc;
  letter-spacing: -0.5px;

  .menu-box {
    display: flex;
    align-items: center;

    .search-icon {
      width: 70px;
      border-left: 1.5px solid lightgray;
      color: white;
      font-size: 24px;
    }
  }

  .info-box {
    display: flex;
    align-items: center;
  }
`;

const FixMenuTab = styled.li`
  padding-right: 30px;
  font-family: "NanumSquareRound", sans-serif;
  font-weight: 900;
  font-size: 24px;
  color: white;
  background-color: #1d68dc;
  cursor: pointer;
`;

const FixInfoTab = styled.span`
  display: flex;
  padding: 12px 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
    Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic",
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: white;
  }

  svg {
    margin-right: 5px;
    font-size: 24px;
  }

  span {
    display: flex;
    align-items: center;
  }
`;

export default FixNav;
