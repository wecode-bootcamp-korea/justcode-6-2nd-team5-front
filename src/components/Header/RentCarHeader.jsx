import React, { useContext } from "react";
import { useLocation } from "react-router-dom";

import { ModalContext } from "../../components/Context/ModalContext";
import { MenuBox, Menu, SearchBtn } from "../Modal/commonStyled";

const RentCarHeader = () => {
  const location = useLocation();
  console.log(location);
  // console.log(rentHeader.search !== "");
  const { isOpen, setOpen, setClickedIcon } = useContext(ModalContext);

  const modalOpen = () => {
    setOpen(true);
  };
  // const url = location.href;
  // const urlParams = url.searchParams;
  // console.log(urlParams);

  return (
    <MenuBox onClick={() => setClickedIcon(1)}>
      <Menu onClick={modalOpen} className="border">
        <h6>대여/반납일</h6>
        <p>대여/반납일을 선택해주세요.</p>
      </Menu>
      <Menu onClick={modalOpen}>
        <h6>대여/반납 시간</h6>
        <p>시간을 선택해주세요.</p>
      </Menu>
      <Menu onClick={modalOpen}>
        <h6>차량조건</h6>
        <p>조건을 선택해주세요.</p>
      </Menu>
      <Menu onClick={modalOpen}>
        <h6>운전자조건</h6>
        <p>운전자조건을 선택해주세요.</p>
      </Menu>
      <SearchBtn onClick={modalOpen}>검색</SearchBtn>
    </MenuBox>
  );
};

export default RentCarHeader;
