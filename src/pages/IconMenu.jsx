import React, { useState } from "react";
import styled from "styled-components";

const IconMenu = ({ menu }) => {
  const [color, setColor] = useState(true);
  console.log(menu);
  const onClick = () => {};
  return (
    <MainIconBtn onClick={onClick}>
      {menu.icon}
      {menu.name}
    </MainIconBtn>
  );
};

export const defaultIconBtn = styled.div`
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

const MainIconBtn = styled(defaultIconBtn)`
  margin: 50px 10px;
  width: 90px;
  height: 90px;
  color: #808080;
`;

export default IconMenu;
