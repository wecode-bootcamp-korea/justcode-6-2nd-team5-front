import React, { useState, useContext } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

import { MainContext } from "./context/Context";

import { ConditionSelector } from "../../commonStyled";

const RentalDate = () => {
  const { onDateSetting } = useContext(MainContext);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    onDateSetting(start, end);
  };

  return (
    <ConditionSelector>
      <h2 className="title">
        인수/반납일을
        <br />
        선택해주세요<span style={{ color: "red" }}> .</span>
      </h2>
      <StyledCalendar>
        <DatePicker
          dateFormat="yyyy.MM.dd(eee)"
          startDate={startDate}
          endDate={endDate}
          onChange={onChange}
          selectsRange
          locale={ko}
          minDate={new Date()}
          inline
          monthsShown={2}
        />
      </StyledCalendar>
    </ConditionSelector>
  );
};

const StyledCalendar = styled.div`
  .react-datepicker {
    padding: 30px 20px;
    border: none;
    border-right: 1px solid #eaeaea;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
      Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-size: 0.8rem;
    color: #606060;

    .react-datepicker__navigation--previous {
      left: 20px;
      top: 29px;
    }

    .react-datepicker__navigation--next {
      right: 20px;
      top: 29px;
    }

    .react-datepicker__month-container {
      width: 360px;

      .react-datepicker__header {
        width: 350px;
        background-color: white;
        border: none;

        .react-datepicker__current-month {
          margin-bottom: 10px;
        }

        .react-datepicker__day-names {
          margin: 0;

          .react-datepicker__day-name {
            margin: 0.5rem;
            color: #606060;
            font-weight: 600;
          }
        }
      }

      .react-datepicker__month {
        width: 350px;
        margin: 0;

        // 날짜 숫자 클래스
        .react-datepicker__day {
          margin: 0.4rem 0.5rem;
          color: #606060;
          font-weight: 600;

          :hover {
            background-color: f0f0f0;
            border-radius: 1rem;
          }
        }

        //주말 클래스
        .react-datepicker__day--weekend {
          color: #e83667;
        }

        //종료 날짜 선택 전 호버 클래스
        .react-datepicker__day--in-selecting-range {
          background-color: #f0f0f0;
          border-radius: 1rem;
        }

        /* .react-datepicker__day--selecting-range-start {
          border-radius: 16px;
        } */
        //오늘 날짜 선택 클래스
        .react-datepicker__day--today {
          /* background-color: #f53e72; */
          border-radius: 1rem;
          color: #63a1ff;
        }

        //종료 날짜 선택 전 시작날짜 클릭 클래스
        .react-datepicker__day--keyboard-selected {
          border-radius: 1rem;
          background-color: #63a1ff;
          color: white;
        }

        //오늘 날짜 이전, 선택불가 날짜 클래스
        .react-datepicker__day--disabled {
          color: #cacaca;
        }

        //시작 날짜, 종료 날짜 사이 중간날짜 선택완료
        .react-datepicker__day--in-range {
          border-radius: 1rem;
          background-color: #f4f9ff;
          color: #63a1ff;
        }

        //시작 날짜, 종료 날짜 선택완료
        .react-datepicker__day--range-start,
        .react-datepicker__day--range-end {
          border-radius: 1rem;
          background-color: #63a1ff;
          color: white;
        }
      }
    }
  }
`;

export default RentalDate;
