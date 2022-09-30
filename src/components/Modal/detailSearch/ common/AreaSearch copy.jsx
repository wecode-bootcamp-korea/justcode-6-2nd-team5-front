import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AreaSearch = () => {
  const navigate = useNavigate;
  const [select, setSelect] = useState([]);

  const AreaArr = [
    { id: 1, text: "제주시내" },
    { id: 2, text: "조천・함덕" },
    { id: 3, text: "구좌・월정" },
    { id: 4, text: "애월" },
    { id: 5, text: "한림・협재" },
    { id: 6, text: "서귀포・중문" },
    { id: 7, text: "표선・남원" },
    { id: 8, text: "성산・우도" },
    { id: 9, text: "안덕・대정" },
    { id: 10, text: "한경・저지" },
  ];

  const [selectArea, setSelectArea] = useState("");
  const onClick = (e) => {
    setSelectArea(e.target.innerHTML);
    const url = `
    &category(메뉴)
    &hashTag(태그)
    &facility(편의사항)
    &address(주소)`;
    navigate(`/restaurant/list?${url}`);
  };

  return (
    <Flex>
      {AreaArr.map((item) => {
        return (
          <AreaBtn
            key={item.id}
            onClick={() => {
              select.includes(item.id)
                ? setSelect(select.filter((arr) => arr !== item.id))
                : setSelect((el) => [...el, item.id]);
            }}
            className={select.includes(item.id) && "isClicked"}
          >
            <button id={item.id} className="AreaImg"></button>
            <label htmlFor={item.id} className="AreaName">
              {item.text}
            </label>
          </AreaBtn>
        );
      })}
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;

  .isClicked {
    button {
      background-color: #404040;
    }
  }
`;

const AreaBtn = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 10px 10px 0;
  width: fit-content;
  height: 85px;

  .AreaImg {
    padding: 0;
    width: 65px;
    height: 65px;
    border-radius: 50px;
    border: none;
    background-color: #808080;
    cursor: pointer;

    &:hover {
      background-color: #404040;
    }
  }

  .AreaName {
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    color: #808080;
    cursor: pointer;
  }
`;

export default AreaSearch;
