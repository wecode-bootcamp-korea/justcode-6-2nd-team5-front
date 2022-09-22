import React, { useState } from "react";
import styled from "styled-components";

import { ConditionSelector } from "../Modal/Date";

const Time = () => {
  return (
    <ConditionSelector>
      <h2 className="title">
        인수/반납시간을
        <br />
        선택해주세요
      </h2>
      <div className="left-box"></div>
      <div className="right-box"></div>
    </ConditionSelector>
  );
};

export default Time;
