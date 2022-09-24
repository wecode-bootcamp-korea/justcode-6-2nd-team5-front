import { useEffect, useState } from "react";
import "./CheckList.scss";
import Option from "./Option/Option";
// import _ from "lodash";

function CheckList(props) {
  const { filterTypeId, filterType, checkList, isRefresh } = props;

  // 선택된 체크리스트
  const [checkedItems, setCheckedItems] = useState([]);

  // 체크 선택 관리 함수
  const checked = (checked) => {
    checkedItems.push(checked);
    setCheckedItems(checkedItems);
    console.log(checkedItems);
  };

  // 체크 해제 관리 함수
  const deleted = (deleted) => {
    const deletedIndex = checkedItems.indexOf(deleted);
    checkedItems.splice(deletedIndex, 1);
    setCheckedItems(checkedItems);
    console.log(checkedItems);
  };

  // 선택/해제된 체크 핸들러
  const checkedItemHandler = (type, name, isChecked) => {
    const checkedItem = {
      filterType: type,
      filterContent: name,
    };
    isChecked ? checked(checkedItem) : deleted(checkedItem);
  };

  // setCheckedItem(_.uniqBy([{ checkedItem }], "optionName"));

  // 옵션 전체 선택 관리값
  const [isAllChecked, setIsAllChecked] = useState(false);

  const allCheckedHandler = (isChecked) => {
    // if (isChecked) {
    //   setCheckedItem(new Set(checkList.map(({ id }) => id)));
    //   setIsAllChecked(true);
    // } else {
    //   checkedItem.clear();
    //   setCheckedItem(setCheckedItem);
    //   setIsAllChecked(false);
    // }
  };

  return (
    <ul className="dep3" id={filterTypeId}>
      {checkList.map((option, index) => (
        <Option
          key={index}
          filterType={filterType}
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
