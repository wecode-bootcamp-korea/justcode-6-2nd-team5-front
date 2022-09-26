import React, { useState } from "react";
import styled from "styled-components";

import { ConditionSelector } from "../../commonStyled";

const Date = () => {
  const [value, setValue] = useState(0);

  return (
    <ConditionSelector>
      <h2 className="title">
        항공편 날짜를
        <br />
        선택하세요<span style={{ color: "red" }}> .</span>
      </h2>
      <div className="box">
        <StyledCalendar></StyledCalendar>
      </div>
      <div className="box"></div>
    </ConditionSelector>
  );
};

const StyledCalendar = styled.div`
  .react-calendar {
    background: white;
  }

  .react-calendar__navigation__label {
    background: white;
    border: none;
  }
`;

export default Date;
