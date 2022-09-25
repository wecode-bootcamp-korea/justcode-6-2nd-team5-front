import React from "react";

import { ConditionSelector, HashTagBtn } from "../../commonStyled";

const Seat = () => {
  return (
    <ConditionSelector>
      <h2 className="title">
        탑승인원과 좌석
        <br /> 등급을 선택해주세요<span style={{ color: "red" }}> .</span>
      </h2>
      <div className="box">
        <h5>탑승인원</h5>
        <HashTagBtn>#제주패스오리지널</HashTagBtn>
      </div>
      <div className="box">
        <h5>좌석등급</h5>
      </div>
    </ConditionSelector>
  );
};

export default Seat;
