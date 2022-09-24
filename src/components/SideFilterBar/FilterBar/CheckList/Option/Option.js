import { useEffect, useState } from "react";
import "./Option.scss";

function Option(props) {
  const {
    filterType,
    option,
    checkedItemHandler,
    isAllChecked,
    allCheckedHandler,
  } = props;

  // 옵션 상태 관리값
  const [bChecked, setChecked] = useState(false);

  // 옵션 관리값 핸들러
  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(target.id, target.value, target.checked);
  };

  // 옵션 전체 클릭 해제시

  useEffect(() => setChecked(false), [isAllChecked]);

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
