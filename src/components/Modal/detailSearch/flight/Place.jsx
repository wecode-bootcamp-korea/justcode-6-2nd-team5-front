import React from "react";

import { ConditionSelector, HashTagBtn } from "../../commonStyled";

const Place = () => {
  return (
    <ConditionSelector>
      <h2 className="title">
        출발지를
        <br /> 선택해주세요<span style={{ color: "red" }}> .</span>
      </h2>
      <div className="box">
        <HashTagBtn>#제주패스오리지널</HashTagBtn>
      </div>
      <div className="box">
        <h5>지역으로 검색</h5>
      </div>
    </ConditionSelector>
  );
};

export default Place;
