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

  // 체크리스트: 각 필터별 전체 버튼 관리값
  const [isAllFilter, setIsAllFilter] = useState(["", "", false]);

  const checkAllChecked = (new1, older1, ele) => {
    let count1 = 0;
    let count2 = 0;

    new1.map((filteredItem) => {
      if (filteredItem.filterType === ele.filterType) {
        count1++;
      }
    });
    older1.map((filterType) => {
      if (filterType.type === ele.filterType) {
        count2 = filterType.checkList.length;
      }
    });

    return count1 === count2;
  };

  // 체크리스트: 선택된 항목 관리 함수
  const getCheckedItem = (item, action) => {
    let filteredItems;

    if (action === "check") {
      checkedItems.push(item);
      filteredItems = _.uniqBy(checkedItems, "filterContent");

      checkAllChecked(filteredItems, filterTypes, item)
        ? setIsAllFilter([item.filterType, item.filterContent, true])
        : setIsAllFilter([item.filterType, "", false]);
    } else if (action === "delete") {
      const deletedIndex = checkedItems.indexOf(item);
      checkedItems.splice(deletedIndex, 1);
      filteredItems = checkedItems;

      setIsAllFilter([item.filterType, item.filterContent, false]);
    } else if (action === "refresh") {
      checkedItems.splice(0, checkedItems.length);
      filteredItems = checkedItems;
    } else if (action === "all checked") {
      filterTypes.map((filterType) => {
        if (filterType.type === item) {
          filterType.checkList.map((content) => {
            checkedItems.push({
              filterType: item,
              filterContent: content,
            });
          });
        }
      });
      filteredItems = checkedItems;
      setIsAllFilter([item, "", true]);
    } else if (action === "all delete") {
      filterTypes.map((filterType) => {
        if (filterType.type === item) {
          filterType.checkList.map((content) => {
            const deletedItem = {
              filterType: item,
              filterContent: content,
            };
            const deletedIndex = checkedItems.indexOf(deletedItem);
            checkedItems.splice(deletedIndex, 1);
          });
        }
      });
      filteredItems = checkedItems;
      setIsAllFilter([item, "", false]);
    }

    filteredItems = _.uniqBy(checkedItems, "filterContent");
    setCheckedItems(filteredItems);
  };

  return (
    <div className="rentcar-sfb-wrap">
      <SortOrderBar orderTypes={orderTypes} getSateValue={getSateValue} />
      <FilterBar
        filterTypes={filterTypes}
        getCheckedItem={getCheckedItem}
        isAllFilter={isAllFilter}
      />
      <div className="submit-btn"></div>
    </div>
  );
}

export default SideFilterBar;
