import { useState } from "react";
import "./SortOrderBar.scss";

function SortOrderBar(props) {
  const { orderTypes } = props;

  // dep-1 check state value
  const [isOndep1, setIsOndep1] = useState();

  // dep-1 change disabled
  const onCheckDep1 = () => {
    setIsOndep1((prev) => !prev);
  };

  // dep-2 check-circle state value
  const [isOnOrderType0, setIsOnOrderType0] = useState(false);
  const [isOnOrderType1, setIsOnOrderType1] = useState(false);
  const [isOnOrderType2, setIsOnOrderType2] = useState(false);
  const disabledList = [isOnOrderType0, isOnOrderType1, isOnOrderType2];

  // dep-2 insert state value into orderTypes
  const insertDisabled = (data, disableds) => {
    for (let i = 0; i < data.length; i++) {
      data[i].disabled = disableds[i];
    }
  };

  if (orderTypes) insertDisabled(orderTypes, disabledList);

  // dep-2 change check circle disabled
  const onCheckDep2 = (e) => {
    const orderTypeId = e.target.id;

    if (orderTypeId === "0") {
      setIsOnOrderType0(true);
      setIsOnOrderType1(false);
      setIsOnOrderType2(false);
    }
    if (orderTypeId === "1") {
      setIsOnOrderType0(false);
      setIsOnOrderType1(true);
      setIsOnOrderType2(false);
    }
    if (orderTypeId === "2") {
      setIsOnOrderType0(false);
      setIsOnOrderType1(false);
      setIsOnOrderType2(true);
    }
  };

  return (
    <div className="sob-wrap product-bar">
      <div className="sob-dep1" onClick={onCheckDep1}>
        <span className="title">정렬</span>
        <div className={isOndep1 ? "right-icon-on" : "right-icon-off"}></div>
      </div>
      {isOndep1 && (
        <ul className="sob-dep2">
          {orderTypes.map((type) => {
            return (
              <li key={type.id} id={type.id} onClick={onCheckDep2}>
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
