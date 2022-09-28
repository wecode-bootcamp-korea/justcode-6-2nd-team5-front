import React, { useState } from "react";

import { ConditionSelector, SelectBtn } from "../commonStyled";

const LocationCondition = () => {
  const [location, setLocation] = useState("");
  const colorChange = (e) => {
    setLocation(Number(e.target.id));
  };
  const locationArr = [
    { id: 1, text: "제주시" },
    { id: 2, text: "서귀포시" },
    { id: 3, text: "제주시 동부" },
    { id: 4, text: "서귀포시 동부" },
    { id: 5, text: "제주시 서부" },
    { id: 6, text: "서귀포시 서부" },
  ];

  return (
    <ConditionSelector>
      <h2 className="title">
        여행지를
        <br /> 선택해주세요<span style={{ color: "red" }}> .</span>
      </h2>
      <div className="box">
        <h5>지역 검색</h5>
        {locationArr.map((item) => {
          return (
            <SelectBtn
              onClick={colorChange}
              id={item.id}
              key={item.id}
              className={location === item.id && "clicked"}
            >
              {item.text}
            </SelectBtn>
          );
        })}
      </div>
      <div className="box">
        <h5>세부 검색</h5>
      </div>
    </ConditionSelector>
  );
};

export default LocationCondition;
