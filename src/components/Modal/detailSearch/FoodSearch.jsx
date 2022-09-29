import React from "react";

import { ConditionSelector, HashTagBtn } from "../commonStyled";
import AreaSearch from "./ common/AreaSearch";

const FoodSearch = () => {
  const foodHashArr = [
    "#추천맛집",
    "#데이트코스",
    "#인기맛집",
    "#가족여행",
    "#추천카페",
    "#도민맛집",
    "#인기카페",
    "#바다뷰",
    "#제주시맛집",
    "#공항근처",
  ];
  return (
    <ConditionSelector>
      <h2 className="title">
        찾으시는 맛집, 카페를
        <br /> 검색하세요<span style={{ color: "red" }}> .</span>
      </h2>
      <div className="box">
        <h5>테마로 검색</h5>
        {foodHashArr.map((item, index) => {
          return <HashTagBtn key={index}>{item}</HashTagBtn>;
        })}
      </div>
      <div className="box">
        <h5>지역으로 검색</h5>
        <AreaSearch />
      </div>
    </ConditionSelector>
  );
};

export default FoodSearch;
