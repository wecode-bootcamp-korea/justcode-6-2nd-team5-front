import React from "react";

import { ConditionSelector, HashTagBtn } from "../commonStyled";

const CafeSearch = () => {
  const cafeHashArr = [
    "#디저트카페",
    "#감성카페",
    "#공항근처",
    "#브런치카페",
    "#베이커리카페",
    "#서귀포카페",
    "#오션뷰카페",
    "#한림카페",
    "#애월카페",
    "#제주시",
  ];
  return (
    <ConditionSelector>
      <h2 className="title">
        카페패스 가맹점을
        <br /> 찾아보세요<span style={{ color: "red" }}> .</span>
      </h2>
      <div className="box">
        <h5>테마로 검색</h5>
        {cafeHashArr.map((item, index) => {
          return <HashTagBtn key={index}>{item}</HashTagBtn>;
        })}
      </div>
      <div className="box">
        <h5>지역으로 검색</h5>
      </div>
    </ConditionSelector>
  );
};

export default CafeSearch;
