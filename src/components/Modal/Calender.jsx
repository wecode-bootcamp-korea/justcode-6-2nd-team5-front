import React from "react";
import styled from "styled-components";

const Calender = () => {
  return (
    <ConditionSelector>
      <h2 className="title">
        인수/반납일을
        <br />
        선택해주세요
      </h2>
      <div className="left-box"></div>
      <div className="right-box"></div>
    </ConditionSelector>
  );
};

const ConditionSelector = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  justify-content: center;
  background-color: white;

  .title {
    padding: 40px;
    height: 100%;
    font-family: "NanumSquareRound", sans-serif;
    font-weight: 800;
    font-size: 23px;
    line-height: 27px;
    border-right: 1px solid #eaeaea;
  }

  .left-box {
    width: 20%;
    border-right: 1px solid #eaeaea;
  }

  .right-box {
    width: 20%;
    border-right: 1px solid #eaeaea;
  }
`;

export default Calender;
