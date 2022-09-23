import { useEffect, useState } from "react";
import Dep1 from "../Dep1/Dep1";
import "./SortOrderBar.scss";

function SortOrderBar(props) {
  const { orderTypes } = props;

  // dep-1 check state value
  const [isOndep1, setIsOndep1] = useState(false);

  // dep-1 change disabled
  const onCheckDep1 = () => {
    setIsOndep1((prev) => !prev);
  };

  // dep-2 check-circle state value
  const [isOnOrderType0, setIsOnOrderType0] = useState(true);
  const [isOnOrderType1, setIsOnOrderType1] = useState(false);
  const [isOnOrderType2, setIsOnOrderType2] = useState(false);
  const [isOnOrderType3, setIsOnOrderType3] = useState(false);
  const [isOnOrderType4, setIsOnOrderType4] = useState(false);
  const [isOnOrderType5, setIsOnOrderType5] = useState(false);
  const [isOnOrderType6, setIsOnOrderType6] = useState(false);
  const orderDisabledList = [
    isOnOrderType0,
    isOnOrderType1,
    isOnOrderType2,
    isOnOrderType3,
    isOnOrderType4,
    isOnOrderType5,
    isOnOrderType6,
  ];

  // dep-2 insert state value into orderTypes
  const insertDisabled = (data, disableds) => {
    for (let i = 0; i < data.length; i++) {
      data[i].disabled = disableds[i];
    }
  };

  if (orderTypes) insertDisabled(orderTypes, orderDisabledList);

  // dep-2 change check circle disabled
  const onCheckDep2 = (e) => {
    const orderTypeId = e.target.id;

    if (orderTypeId === "0") {
      setIsOnOrderType0(true);
      setIsOnOrderType1(false);
      setIsOnOrderType2(false);
      setIsOnOrderType3(false);
      setIsOnOrderType4(false);
      setIsOnOrderType5(false);
      setIsOnOrderType6(false);
    }
    if (orderTypeId === "1") {
      setIsOnOrderType0(false);
      setIsOnOrderType1(true);
      setIsOnOrderType2(false);
      setIsOnOrderType3(false);
      setIsOnOrderType4(false);
      setIsOnOrderType5(false);
      setIsOnOrderType6(false);
    }
    if (orderTypeId === "2") {
      setIsOnOrderType0(false);
      setIsOnOrderType1(false);
      setIsOnOrderType2(true);
      setIsOnOrderType3(false);
      setIsOnOrderType4(false);
      setIsOnOrderType5(false);
      setIsOnOrderType6(false);
    }
    if (orderTypeId === "3") {
      setIsOnOrderType0(false);
      setIsOnOrderType1(false);
      setIsOnOrderType2(false);
      setIsOnOrderType3(true);
      setIsOnOrderType4(false);
      setIsOnOrderType5(false);
      setIsOnOrderType6(false);
    }
    if (orderTypeId === "4") {
      setIsOnOrderType0(false);
      setIsOnOrderType1(false);
      setIsOnOrderType2(false);
      setIsOnOrderType3(false);
      setIsOnOrderType4(true);
      setIsOnOrderType5(false);
      setIsOnOrderType6(false);
    }
    if (orderTypeId === "5") {
      setIsOnOrderType0(false);
      setIsOnOrderType1(false);
      setIsOnOrderType2(false);
      setIsOnOrderType3(false);
      setIsOnOrderType4(false);
      setIsOnOrderType5(true);
      setIsOnOrderType6(false);
    }
    if (orderTypeId === "6") {
      setIsOnOrderType0(false);
      setIsOnOrderType1(false);
      setIsOnOrderType2(false);
      setIsOnOrderType3(false);
      setIsOnOrderType4(false);
      setIsOnOrderType5(false);
      setIsOnOrderType6(true);
    }
  };

  // 정렬 타입 추출 함수
  const isTrue = (obj) => {
    return obj.disabled === true;
  };

  var orderType = orderTypes.filter((obj) => isTrue(obj));

  // useEffect(() => {
  //   orderType.length !== 0 && console.log(orderType);
  // }, [orderType]);

  // API GET
  // useEffect(() => {
  //   orderType.length !== 0 &&
  //     fetch("API 주소", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ orderType: orderType }),
  //     })
  //       .then((res) => res.json)
  //       .then((data) => console.log(data));
  // }, [orderType]);

  return (
    <div className="sob-wrap product-bar">
      <Dep1 title={"정렬"} isOndep1={isOndep1} onCheckDep1={onCheckDep1} />
      {isOndep1 && (
        <ul className="dep2">
          {orderTypes.map((type) => {
            return (
              <li
                className="list"
                key={type.id}
                id={type.id}
                onClick={onCheckDep2}
              >
                <span id={type.id} onClick={onCheckDep2}>
                  {type.type}
                </span>
                <div
                  className={type.disabled ? "right-icon-on" : "right-icon-off"}
                  id={type.id}
                  onClick={onCheckDep2}
                ></div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default SortOrderBar;
