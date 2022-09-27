import React from "react";
import styled from "styled-components";

const AreaSearch = () => {
  const AreaArr = [
    { id: 1, text: "전체" },
    { id: 2, text: "제주시내" },
    { id: 3, text: "조천・함덕" },
    { id: 4, text: "구좌・월정" },
    { id: 5, text: "애월" },
    { id: 6, text: "한림・협재" },
    { id: 7, text: "중문" },
    { id: 8, text: "서귀포" },
    { id: 9, text: "표선・남원" },
    { id: 10, text: "성산・우도" },
    { id: 11, text: "안덕・대정" },
    { id: 12, text: "한경・저지" },
  ];

  return (
    <Flex>
      {AreaArr.map((item) => {
        return (
          <AreaBtn key={item.id}>
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
    background-color: gray;
  }

  .AreaName {
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    color: #808080;
  }
`;

export default AreaSearch;
