import React, { useEffect, useState } from "react";

import { ConditionSelector } from "../../commonStyled";
import { SelectBtn } from "../../commonStyled";

const CarCondition = ({ setInsurance, setCarType }) => {
  const insuranceTypeArr = [
    { id: 1, text: "일반자차" },
    { id: 2, text: "완전자차" },
    { id: 3, text: "부분무제한" },
    { id: 4, text: "슈퍼무제한" },
  ];

  const carTypeArr = [
    { id: 0, text: "전체" },
    { id: 1, text: "경형" },
    { id: 2, text: "소형" },
    { id: 3, text: "준중형" },
    { id: 4, text: "중형" },
    { id: 5, text: "고급" },
    { id: 6, text: "SUV/캠핑" },
    { id: 7, text: "승합" },
  ];

  const [select, setSelect] = useState([]);
  const [choice, setChoice] = useState("");

  const colorChange = (e) => {
    setInsurance(e.target.innerHTML);
    setChoice(Number(e.target.id));
  };

  // useEffect(() => {
  //   if (select.length === 7 || select[select.length - 1] === 0) setSelect([0]);
  //   if (select[0] === 0 && select.length > 1)
  //     setSelect(select.filter((number) => number !== 0));
  // }, [select]);

  useEffect(() => {
    if (select.includes(0) && select.length > 1) {
      setSelect(select.filter((num) => num !== 0));
    }
    if (select.length === 7) setSelect([0]);
    setCarType([...select]);
  }, [select]);

  // console.log(select);
  return (
    <ConditionSelector>
      <h2 className="title">
        적용하실 보험/차종을
        <br /> 선택하세요<span style={{ color: "red" }}> .</span>
      </h2>
      <div className="box">
        <h5>보험 선택</h5>
        {insuranceTypeArr.map((item) => {
          return (
            <SelectBtn
              key={item.id}
              id={item.id}
              onClick={colorChange}
              className={choice === item.id && "clicked"}
            >
              {item.text}
            </SelectBtn>
          );
        })}
      </div>
      <div className="box">
        <h5>차종 선택</h5>
        {carTypeArr.map((item) => {
          return (
            <SelectBtn
              otherType
              key={item.id}
              onClick={() => {
                //select 배열내에 내가 클릭한 버튼의 아이디가 들어있는 경우 ? 내가 누른 버튼 아이디 빼고 배열 반환 : 배열에 내가 누른 버튼 아이디 추가 (단, 누른게 0이면 [0] 배열 반환)
                select.includes(item.id) && item.id !== 0
                  ? setSelect(select.filter((arr) => arr !== item.id))
                  : setSelect((el) => {
                      if (item.id !== 0) return [...el, item.id];
                      else return [0];
                    });
                // setCarType(select);
              }}
              className={select.includes(item.id) && "clicked"}
            >
              {item.text}
            </SelectBtn>
          );
        })}
      </div>
    </ConditionSelector>
  );
};

export default CarCondition;
