import React, { useState } from "react";
import styled from "styled-components";

import { ConditionSelector } from "../../commonStyled"
import { SelectBtn } from "../../commonStyled";

const CarCondition = () => {
  const insuranceTypeArr = [
    { id: 1, text: "일반자차" },
    { id: 2, text: "완전자차" },
    { id: 3, text: "부분무제한" },
    { id: 4, text: "슈퍼무제한" },
  ];

  const carTypeArr = [
    { id: 0, text: "전체" },
    { id: 1, text: "경형" },
    { id: 2, text: "소형" },
    { id: 3, text: "중형" },
    { id: 4, text: "승합" },
    { id: 5, text: "SUV/캠핑" },
    { id: 6, text: "전기" },
  ];

  const [select, setSelect] = useState([]);
  const [choice, setChoice] = useState("");

  const colorChange = (e) => {
    setChoice(Number(e.target.id));
  };

  return (
    <ConditionSelector>
      <h2 className="title">
        적용하실 보험/차종을
        <br /> 선택하세요<span style={{color: "red"}}> .</span>
      </h2>
      <div className="box">
        <h5>보험 선택</h5>
        {insuranceTypeArr.map((item) => {
          return (
            <SelectBtn
              key={item.id}
              id={item.id}
              onClick={colorChange}
              className={choice === item.id && "clicked"}
            >
              {item.text}
            </SelectBtn>
          );
        })}
      </div>
      <div className="box">
        <h5>차종 선택</h5>
        {carTypeArr.map((item) => {
          return (
            <SelectBtn
              otherType
              key={item.id}
              onClick={() => {
                select.includes(item.id)
                  ? setSelect(select.filter((arr) => arr !== item.id))
                  : setSelect((el) => [...el, item.id]);
              }}
              className={select.includes(item.id) && "clicked"}
            >
              {item.text}
            </SelectBtn>
          );
        })}
      </div>
    </ConditionSelector>
  );
};

export default CarCondition;


