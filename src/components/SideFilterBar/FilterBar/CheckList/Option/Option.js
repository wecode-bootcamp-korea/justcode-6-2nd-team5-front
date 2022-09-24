import { useCallback, useEffect, useState } from "react";
import "./Option.scss";

function Option(props) {
  const {
    filterType,
    option,
    checkedItemHandler,
    isAllChecked,
    isRefresh,
    setIsAllChecked,
    // isAllFilter,
    // autoCheckedHandler,
    // allCheckedHandler,
  } = props;

  // 옵션 상태 관리값
  const [bChecked, setChecked] = useState(false);

  // 옵션 관리값 핸들러
  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(target.id, target.value, target.checked);
  };

  // 옵션 전체 선택/해제시
  useEffect(() => {
    isAllChecked ? setChecked(true) : setChecked(false);
  }, [isAllChecked]);

  // 필터 초기화
  useEffect(() => {
    setIsAllChecked(false);
    setChecked(false);
  }, [isRefresh]);

  // // 옵션 전체 선택시 자동으로 전체 클릭
  // const autoAllChecked = useCallback(() => {
  //   autoCheckedHandler({
  //     target: {
  //       id: isAllFilter[0],
  //       filterContent: isAllFilter[1],
  //       checked: isAllFilter[2],
  //     },
  //   });
  // }, [isAllFilter[2]]);

  // useEffect(() => {
  //   autoAllChecked();
  // }, [autoAllChecked]);

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
