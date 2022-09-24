import { useEffect, useState } from "react";
import "./SideFilterBar.scss";
import SortOrderBar from "./SortOrderBar/SortOrderBar";
import FilterBar from "./FilterBar/FilterBar";
import _ from "lodash";

function SideFilterBar(props) {
  const { orderTypes, filterTypes } = props;

  // 자식 컴포넌트 state 값들 가져오는 함수
  const getSateValue = (list) => {
    console.log(list);
  };

  // 체크리스트: 관리값
  const [checkedItems, setCheckedItems] = useState([]);

  // 체크리스트: 선택된 항목 관리 함수
  const getCheckedItem = (item, action) => {
    let filteredItems;

    if (action === "check") {
      checkedItems.push(item);
      filteredItems = _.uniqBy(checkedItems, "filterContent");
    } else if (action === "delete") {
      const deletedIndex = checkedItems.indexOf(item);
      checkedItems.splice(deletedIndex, 1);
      filteredItems = checkedItems;
    } else if (action === "refresh") {
      checkedItems.splice(0, checkedItems.length);
      filteredItems = checkedItems;
    }
    setCheckedItems(filteredItems);
  };

  return (
    <div className="rentcar-sfb-wrap">
      <SortOrderBar orderTypes={orderTypes} getSateValue={getSateValue} />
      <FilterBar filterTypes={filterTypes} getCheckedItem={getCheckedItem} />
      <div className="submit-btn"></div>
    </div>
  );
}

export default SideFilterBar;
