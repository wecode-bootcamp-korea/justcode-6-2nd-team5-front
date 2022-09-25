import React, { useState } from "react";
import styled from "styled-components";

import { ConditionSelector } from "../../commonStyled"

const Time = () => {
  const OPTIONS = [
    { value: "0800", name: "08:00" },
    { value: "0830", name: "08:30" },
    { value: "0900", name: "09:00" },
    { value: "0930", name: "09:30" },
    { value: "1000", name: "10:00" },
    { value: "1030", name: "10:30" },
    { value: "1100", name: "11:00" },
    { value: "1130", name: "11:30" },
    { value: "1200", name: "12:00" },
    { value: "1230", name: "12:30" },
    { value: "1300", name: "13:00" },
    { value: "1330", name: "13:30" },
    { value: "1400", name: "14:00" },
    { value: "1430", name: "14:30" },
    { value: "1500", name: "15:00" },
    { value: "1530", name: "15:30" },
    { value: "1600", name: "16:00" },
    { value: "1630", name: "16:30" },
    { value: "1700", name: "17:00" },
    { value: "1730", name: "17:30" },
    { value: "1800", name: "18:00" },
    { value: "1830", name: "18:30" },
    { value: "1900", name: "19:00" },
    { value: "1930", name: "19:30" },
    { value: "2000", name: "20:00" },
    { value: "2030", name: "20:30" },
    { value: "2100", name: "21:00" },
    { value: "2130", name: "21:30" },
    { value: "2200", name: "22:00" },
  ];
  const defaultValue = "3";

  return (
    <ConditionSelector>
      <h2 className="title">
        인수/반납시간을
        <br />
        선택해주세요<span style={{ color: "red" }}> .</span>
      </h2>
      <div className="box">
        <h5>인수시간</h5>
        <SelectTime name="인수시간">
          {OPTIONS.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            );
          })}
        </SelectTime>
      </div>
      <div className="box">
        <h5>반납시간</h5>
        <SelectTime name="인수시간">
          {OPTIONS.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            );
          })}
        </SelectTime>
      </div>
    </ConditionSelector>
  );
};

const SelectTime = styled.select`
  margin-top: 20px;
  width: 100%;
  padding: 8px 8px;
  font-size: inherit;
  line-height: inherit;
  border: 1px solid #80808037;
  border-radius: 6px;
  color: #606060;
  background-color: transparent;
  &:focus {
    outline: none;
    border-color: #63a1ff;
  }
`;

export default Time;
