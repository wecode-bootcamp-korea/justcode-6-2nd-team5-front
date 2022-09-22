import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Date = () => {
  const [value, setValue] = useState(0);

  return (
    <ConditionSelector>
      <h2 className="title">
        인수/반납일을
        <br />
        선택해주세요
      </h2>
      <div className="left-box">
        <Calendar onChange={setValue} value={value} />
      </div>
      <div className="right-box"></div>
    </ConditionSelector>
  );
};

export const ConditionSelector = styled.div`
  display: flex;
  margin: 0 auto;
  height: fit-content;
  width: 100%;
  justify-content: center;
  background-color: white;

  .title {
    padding: 40px 60px 40px 20px;
    width: 240px;
    height: 100%;
    font-family: "NanumSquareRound", sans-serif;
    font-weight: 800;
    font-size: 23px;
    line-height: 27px;
    border-right: 1px solid #eaeaea;
  }

  .left-box {
    padding: 40px;
    width: 25%;
    border-right: 1px solid #eaeaea;
  }

  .right-box {
    width: 25%;
    border-right: 1px solid #eaeaea;
  }
`;

export default Date;
