import { useEffect, useState } from "react";
import "./Option.scss";

function Option(props) {
  const {
    filterType,
    option,
    checkedItemHandler,
    isAllChecked,
    isRefresh,
    setIsAllChecked,
  } = props;

  // 옵션 상태 관리값
  const [bChecked, setChecked] = useState(false);

  // 옵션 관리값 핸들러
  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(target.id, target.value, target.checked);
  };

  // 업데이트: 선택/해제
  useEffect(() => {
    isAllChecked ? setChecked(true) : setChecked(false);
  }, [isAllChecked]);

  // 필터 초기화
  useEffect(() => {
    setIsAllChecked(false);
    setChecked(false);
  }, [isRefresh]);

  return (
    <li className="check-filter">
      <span>{option}</span>
      <input
        id={filterType}
        value={option}
        type="checkbox"
        checked={bChecked}
        onChange={(e) => checkHandler(e)}
      />
    </li>
  );
}

export default Option;
