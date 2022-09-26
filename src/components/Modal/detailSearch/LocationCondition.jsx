import React from "react";

import { ConditionSelector, SelectBtn, HashTagBtn } from "../commonStyled";

const LocationCondition = () => {
  const locationArr = [
    "제주시",
    "서귀포시",
    "제주시 동부",
    "서귀포시 동부",
    "제주시 서부",
    "서귀포시 서부",
  ];

  return (
    <ConditionSelector>
      <h2 className="title">
        여행지를
        <br /> 선택해주세요<span style={{ color: "red" }}> .</span>
      </h2>
      <div className="box">
        <h5>지역 검색</h5>
        {locationArr.map((item, index) => {
          return <SelectBtn key={index}>{item}</SelectBtn>;
        })}
      </div>
      <div className="box">
        <h5>세부 검색</h5>
      </div>
    </ConditionSelector>
  );
};

export default LocationCondition;
