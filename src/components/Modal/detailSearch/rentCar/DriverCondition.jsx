import React, { useState } from "react";
import styled from "styled-components";

import { ConditionSelector, SelectBtn } from "../../commonStyled";

const DriverCondition = () => {
  const [age, setAge] = useState("");
  const [career, setCareer] = useState("");

  const colorChangeAge = (e) => {
    setAge(Number(e.target.id));
  };
  const colorChangeCareer = (e) => {
    setCareer(Number(e.target.id));
  };

  const driverAgeArr = [
    { id: 1, text: "만 21세~25세" },
    { id: 2, text: "만 26세 이상" },
  ];

  const driverCareerArr = [
    { id: 1, text: "1년 미만" },
    { id: 2, text: "2년 미만" },
    { id: 3, text: "2년 이상" },
  ];

  return (
    <ConditionSelector>
      <h2 className="title">
        운전자 연령/경력을
        <br /> 선택해주세요<span style={{ color: "red" }}> .</span>
      </h2>
      <div className="box">
        <h5>운전자 연령</h5>
        {driverAgeArr.map((item) => (
          <SelectBtn
            key={item.id}
            id={item.id}
            onClick={colorChangeAge}
            className={age === item.id && "clicked"}
          >
            {item.text}
          </SelectBtn>
        ))}
      </div>
      <div className="box">
        <h5>경력</h5>
        {driverCareerArr.map((item) => (
          <SelectBtn
            otherType
            key={item.id}
            id={item.id}
            onClick={colorChangeCareer}
            className={career === item.id && "clicked"}
          >
            {item.text}
          </SelectBtn>
        ))}
      </div>
    </ConditionSelector>
  );
};

export default DriverCondition;
