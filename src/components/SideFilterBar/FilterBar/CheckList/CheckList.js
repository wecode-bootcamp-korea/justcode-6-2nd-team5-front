import { useEffect, useState } from "react";
import "./CheckList.scss";
import Option from "./Option/Option";
import _ from "lodash";

function CheckList(props) {
  const {
    filterTypeId,
    filterType,
    checkList,
    isRefresh,
    filterTypes,
    getQueryList,
    isDone,
  } = props;

  // query list 관리값
  const [queryList, setQueryList] = useState([]);

  // 체크리스트: 선택된 객체를 쿼리로 바꿔주는 함수
  const objToQuery = (obj) => {
    if (obj.length !== 0) {
      return `${obj.filterType}=${obj.filterContent}`;
    }
  };

  // 체크리스트: 전체 선택/해제 함수
  const allPushOrDelete = (type, action) => {
    filterTypes.map((filterType) => {
      if (filterType.type === type) {
        if (action === "push") {
          filterType.checkList.map((content) => {
            queryList.push(
              objToQuery({
                filterType: type,
                filterContent: content,
              })
            );
          });
        } else if (action === "delete") {
          filterType.checkList.map((content) => {
            const deletedItem = objToQuery({
              filterType: type,
              filterContent: content,
            });
            const deletedIndex = queryList.indexOf(deletedItem);
            queryList.splice(deletedIndex, 1);
          });
        }
      }
    });
  };

  // 체크리스트: 선택된 항목 관리 함수
  const getCheckedItem = (item, action) => {
    let toQuery = objToQuery(item);
    let filteredItems;

    if (action === "check") {
      queryList.push(toQuery);
    } else if (action === "delete") {
      const deletedIndex = queryList.indexOf(toQuery);
      queryList.splice(deletedIndex, 1);
    } else if (action === "refresh") {
      queryList.splice(0, queryList.length);
    } else if (action === "all checked") {
      const checkedType = toQuery.split("=")[0];
      allPushOrDelete(checkedType, "push");
    } else if (action === "all delete") {
      const checkedType = toQuery.split("=")[0];
      allPushOrDelete(checkedType, "delete");
    }

    filteredItems = _.uniqBy(queryList);
    setQueryList(filteredItems);
  };

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

  // 옵션 전체 선택 핸들러
  const allCheckedHandler = ({ target }) => {
    setIsAllChecked(target.checked);

    target.checked
      ? getCheckedItem(
          { filterType: target.id, filterContent: "" },
          "all checked"
        )
      : getCheckedItem(
          { filterType: target.id, filterContent: "" },
          "all delete"
        );
  };

  // 필터 초기화
  useEffect(() => {
    getCheckedItem([], "refresh");
  }, [isRefresh]);

  // query list 보내기
  useEffect(() => {
    getQueryList(queryList);
  }, [isDone]);

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
