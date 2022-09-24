import { useState } from "react";
import "./CheckList.scss";
import Option from "./Option/Option";
import _ from "lodash";

function CheckList(props) {
  const { filterTypeId, checkList, isRefresh } = props;

  // 선택된 옵션 관리값, Set을 활용하여 선택/해제 반복시 중복값 제거
  const [checkedItems, setCheckedItems] = useState([]);

  // 선택된 옵션 관리값 핸들러
  const checkedItemHandler = (name, isChecked) => {
    if (isChecked) {
      checkedItems.push({
        optionName: name,
        optionState: isChecked,
      });
      // setCheckedItems(_.uniqBy([{ checkedItems }], "optionName"));
      console.log(_.uniqBy(checkedItems, "optionName"));
    }
    // else if (!isChecked && checkedItems.has(id)) {
    //   checkedItems.delete(id);
    //   setCheckedItems(checkedItems);
    // }
  };

  // 옵션 전체 선택 관리값
  const [isAllChecked, setIsAllChecked] = useState(false);

  const allCheckedHandler = (isChecked) => {
    // if (isChecked) {
    //   setCheckedItems(new Set(checkList.map(({ id }) => id)));
    //   setIsAllChecked(true);
    // } else {
    //   checkedItems.clear();
    //   setCheckedItems(setCheckedItems);
    //   setIsAllChecked(false);
    // }
  };

  return (
    <ul className="dep3" id={filterTypeId}>
      {checkList.map((option, index) => (
        <Option
          key={index}
          id={index}
          option={option}
          checkedItemHandler={checkedItemHandler}
          isAllChecked={isAllChecked}
          allCheckedHandler={allCheckedHandler}
        />
      ))}
    </ul>
  );
}

export default CheckList;
