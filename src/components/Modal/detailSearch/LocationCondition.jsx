import React, { useState, useContext } from "react";

import { ConditionSelector, SelectBtn } from "../commonStyled";
import HotelLocation from "./ common/HotelLocation";
import { ModalContext } from "../../Context/ModalContext";
import { GrPowerReset } from "react-icons/gr";

const LocationCondition = () => {
  const { location, setLocation } = useContext(ModalContext);
  // const [location, setLocation] = useState("");
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
        <h5>
          지역 검색
          <GrPowerReset
            onClick={() => setLocation("")}
            style={{ paddingTop: "3px", cursor: "pointer" }}
          />
        </h5>
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
        <HotelLocation />
      </div>
    </ConditionSelector>
  );
};

export default LocationCondition;
