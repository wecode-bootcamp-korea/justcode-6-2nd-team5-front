import React, { useState } from "react";
import styled from "styled-components";

const IconMenu = ({ menu, ModalOpen }) => {
  const [color, setColor] = useState(true);
  console.log(menu);
  const onClick = () => {};
  return (
    <MainIconBtn onClick={ModalOpen}>
      {menu.icon}
      {menu.name}
    </MainIconBtn>
  );
};

export const DefaultIconBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-radius: 16px;
  border: none;
  background-color: #ffffff;
  font-weight: 600;

  svg {
    margin-bottom: 10px;
    color: #63a1ff;
    font-size: 30px;
  }
`;

const MainIconBtn = styled(DefaultIconBtn)`
  margin: 50px 10px;
  width: 90px;
  height: 90px;
  color: #808080;
`;

export default IconMenu;
