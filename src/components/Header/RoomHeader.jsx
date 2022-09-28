import React, { useContext } from "react";
import styled from "styled-components";

import { ModalContext } from "../../components/Context/ModalContext";
import { MenuBox, Menu, SearchBtn } from "../Modal/commonStyled";

const RoomHeader = () => {
  const { isOpen, setOpen, setClickedIcon } = useContext(ModalContext);

  const modalOpen = () => {
    setOpen(true);
    console.log(isOpen);
  };

  return (
    <MenuBox onClick={() => setClickedIcon(3)}>
      <Menu onClick={modalOpen} width="43%" className="border">
        <h6>여행지</h6>
        <p>여행지를 선택해주세요.</p>
      </Menu>
      <Menu onClick={modalOpen} width="25%">
        <h6>숙박일</h6>
        <p>여행일정을 선택해주세요.</p>
      </Menu>
      <Menu room nClick={modalOpen} width="22%">
        <h6>인원</h6>
        <p>인원을 선택하세요.</p>
      </Menu>
      <SearchBtn onClick={modalOpen}>검색</SearchBtn>
    </MenuBox>
  );
};

export default RoomHeader;
