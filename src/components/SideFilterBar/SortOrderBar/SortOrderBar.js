import { useEffect, useState } from "react";
import Dep1 from "../Dep1/Dep1";
import "./SortOrderBar.scss";

function SortOrderBar(props) {
  const { orderTypes, getSortOrder } = props;

  // Dep1 disabled
  const [isOpen, setIsOpen] = useState(false);

  // Dep1 disabled 값 가져오는 함수
  const getDep1Disabled = (bool) => {
    setIsOpen(bool);
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

    // 쿼리 변수 상위폴더에 넘기기
    getSortOrder(orderTypes[e.target.id].type);

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

  return (
    <div className="sob-wrap product-bar">
      <Dep1 title={"정렬"} getValue={getDep1Disabled} />
      {isOpen && (
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
