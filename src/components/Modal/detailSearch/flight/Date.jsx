import React, { useState, useContext } from "react";
import { StyledCalendar } from "../rentCar/RentalDate";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

import { ConditionSelector } from "../../commonStyled";

const Date = () => {
  return (
    <ConditionSelector>
      <h2 className="title">
        항공편 날짜를
        <br />
        선택하세요<span style={{ color: "red" }}> .</span>
      </h2>
      <StyledCalendar>
        <DatePicker
          dateFormatCalendar="yyyy년 M월"
          locale={ko}
          inline
          monthsShown={2}
        />
      </StyledCalendar>
    </ConditionSelector>
  );
};

export default Date;
