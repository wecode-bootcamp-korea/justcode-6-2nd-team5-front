import React from "react";

import { ConditionSelector, HashTagBtn } from "../../commonStyled";

const Place = () => {
  return (
    <ConditionSelector>
      <h2 className="title">
        찾으시는 맛집, 카페를
        <br /> 검색하세요<span style={{ color: "red" }}> .</span>
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
