import React, { useState } from "react";
import styled from "styled-components";

import { ConditionSelector } from "../../commonStyled";

const Time = ({
  takeSelected,
  returnSelected,
  handleTakeSelect,
  handleReturnSelect,
}) => {

  const OPTIONS = [
    { value: "08:00", name: "08:00" },
    { value: "08:30", name: "08:30" },
    { value: "09:00", name: "09:00" },
    { value: "09:30", name: "09:30" },
    { value: "10:00", name: "10:00" },
    { value: "10:30", name: "10:30" },
    { value: "11:00", name: "11:00" },
    { value: "11:30", name: "11:30" },
    { value: "12:00", name: "12:00" },
    { value: "12:30", name: "12:30" },
    { value: "13:00", name: "13:00" },
    { value: "13:30", name: "13:30" },
    { value: "14:00", name: "14:00" },
    { value: "14:30", name: "14:30" },
    { value: "15:00", name: "15:00" },
    { value: "15:30", name: "15:30" },
    { value: "16:00", name: "16:00" },
    { value: "16:30", name: "16:30" },
    { value: "17:00", name: "17:00" },
    { value: "17:30", name: "17:30" },
    { value: "18:00", name: "18:00" },
    { value: "18:30", name: "18:30" },
    { value: "19:00", name: "19:00" },
    { value: "19:30", name: "19:30" },
    { value: "20:00", name: "20:00" },
    { value: "20:30", name: "20:30" },
    { value: "21:00", name: "21:00" },
    { value: "21:30", name: "21:30" },
    { value: "22:00", name: "22:00" },
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
        <SelectTime
          name="인수시간"
          onChange={handleTakeSelect}
          value={takeSelected}
        >
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
        <SelectTime
          name="인수시간"
          onChange={handleReturnSelect}
          value={returnSelected}
        >
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
