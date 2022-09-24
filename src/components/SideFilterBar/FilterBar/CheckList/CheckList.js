import { useEffect, useState } from "react";
import "./CheckList.scss";
import Option from "./Option/Option";

function CheckList(props) {
  const { filterTypeId, filterType, checkList, isRefresh, getCheckedItem } =
    props;

  // 체크 선택 관리 함수
  const checked = (checked) => {
    getCheckedItem(checked, "check");
  };

  // 체크 해제 관리 함수
  const deleted = (deleted) => {
    getCheckedItem(deleted, "delete");
  };

  // 선택/해제된 체크 핸들러
  const checkedItemHandler = (type, name, isChecked) => {
    const item = {
      filterType: type,
      filterContent: name,
    };

    isChecked ? checked(item) : deleted(item);
  };

  // 옵션 전체 선택 관리값
  const [isAllChecked, setIsAllChecked] = useState(false);

  const allCheckedHandler = ({ target }) => {
    setIsAllChecked(target.checked);

    target.checked
      ? getCheckedItem(target.id, "all checked")
      : getCheckedItem(target.id, "all delete");
  };

  useEffect(() => {
    getCheckedItem([], "refresh");
  }, [isRefresh]);

  return (
    <ul className="dep3" id={filterTypeId}>
      <div className="all-checked-wrap check-filter">
        <span>전체</span>
        <input
          className="manual-input"
          type="checkbox"
          id={filterType}
          checked={isAllChecked}
          onChange={(e) => allCheckedHandler(e)}
        />
      </div>
      {checkList.map((option, index) => (
        <Option
          key={index}
          filterType={filterType}
          option={option}
          checkedItemHandler={checkedItemHandler}
          isAllChecked={isAllChecked}
          setIsAllChecked={setIsAllChecked}
          isRefresh={isRefresh}
        />
      ))}
    </ul>
  );
}

export default CheckList;
