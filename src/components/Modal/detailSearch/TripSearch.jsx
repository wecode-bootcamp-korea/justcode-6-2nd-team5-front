import React from "react";

import { ConditionSelector, HashTagBtn } from "../commonStyled";
import AreaSearch from "./ common/AreaSearch";

const TripSearch = () => {
  return (
    <ConditionSelector>
      <h2 className="title">
        찾으시는 맛집, 카페를
        <br /> 검색하세요<span style={{ color: "red" }}> .</span>
      </h2>
      <div className="box">
        <h5>카테고리로 검색</h5>
        <HashTagBtn>#제주패스오리지널</HashTagBtn>
      </div>
      <div className="box">
        <h5>지역으로 검색</h5>
        <AreaSearch />
      </div>
    </ConditionSelector>
  );
};

export default TripSearch;
