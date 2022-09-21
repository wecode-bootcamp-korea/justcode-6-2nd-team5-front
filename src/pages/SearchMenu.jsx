import React from "react";
import styled from "styled-components";

const SearchMenu = ({ modalOpen }) => {
  return (
    <MenuBox>
      <Menu onClick={modalOpen} border="1px solid #63a1ff">
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

export const MenuBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Menu = styled.div`
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
    font-size: ${(props) => (props.fontSize ? "12px" : "15px")};
    font-weight: 500;
  }

  p {
    color: #aeaeae;
    font-size: ${(props) => (props.fontSize ? "15px" : "18px")};
    font-weight: 600;
    cursor: pointer;
  }
`;

export const SearchBtn = styled.button`
  margin: 10px;
  width: 96px;
  height: 96px;
  border-radius: 16px;
  border: none;
  background-color: #63a1ff;
  color: white;
  font-size: ${(props) => (props.fontSize ? "16px" : "20px")};
  font-weight: 900;
  box-shadow: 0 8px 16px 0 rgba(32, 32, 32, 0.08);
  cursor: pointer;
`;

export default SearchMenu;
