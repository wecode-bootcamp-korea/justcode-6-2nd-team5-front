import { useCallback, useEffect, useState } from "react";
import "./SideFilterBar.scss";
import SortOrderBar from "./SortOrderBar/SortOrderBar";
import FilterBar from "./FilterBar/FilterBar";
import _ from "lodash";

function SideFilterBar(props) {
  const { orderTypes, filterTypes } = props;

  // 슬라이드리스트: 관리값
  const [slideItems, setSlideItems] = useState({
    priceRange: [],
    bookedRange: [],
  });

  // 슬라이드리스트: 가격 범위/누적예약 초기값 세팅
  useEffect(() => {
    filterTypes &&
      filterTypes.map((filterType) => {
        if (filterType.type === "가격 범위")
          slideItems.priceRange = [
            filterType.slideList[0],
            filterType.slideList[1],
          ];
        if (filterType.type === "누적예약")
          slideItems.bookedRange = [
            filterType.slideList[0],
            filterType.slideList[1],
          ];

        setSlideItems(slideItems);
      });
  }, []);

  // 슬라이드리스트: 슬라이드 된 가격 범위 관리 함수
  const getPriceRange = (price) => {
    slideItems.priceRange = price;
    setSlideItems(slideItems);
  };

  // 슬라이드리스트: 슬라이드 된 누적예약 범위 관리 함수
  const getBookedRange = (booked) => {
    slideItems.bookedRange = booked;
    setSlideItems(slideItems);
  };

  // useEffect(() => {
  //   console.log(slideItems);
  // }, [setSlideItems]);

  // 체크리스트: 관리값
  const [checkedItems, setCheckedItems] = useState([]);

  // 체크리스트: 선택된 항목 관리 함수
  const getCheckedItem = (item, action) => {
    let filteredItems;

    if (action === "check") {
      checkedItems.push(item);
    } else if (action === "delete") {
      const deletedIndex = checkedItems.indexOf(item);
      checkedItems.splice(deletedIndex, 1);
      filteredItems = checkedItems;
      console.log("del", filteredItems);
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
    }

    filteredItems = _.uniqBy(checkedItems, "filterContent");
    setCheckedItems(filteredItems);

    // setCheckedItems(filteredItems);
  };

  // query 관리값
  const [query, setQuery] = useState("");

  // query list 관리값
  const [queryList, setQueryList] = useState([]);

  // query 업데이트 함수
  const updateQuery = (newOption) => {
    // query += newOption;
    // setQuery(query);

    if (newOption.length !== 0) {
      newOption.map((option) => {
        queryList.push(`${option.filterType}=${option.filterContent}`);
      });
      setQueryList(_.uniqBy(queryList));
    }
  };

  useEffect(() => {
    updateQuery(checkedItems);
  }, [checkedItems]);

  console.log("queryList", queryList);
  return (
    <div className="rentcar-sfb-wrap">
      <SortOrderBar orderTypes={orderTypes} />
      <FilterBar
        filterTypes={filterTypes}
        getPriceRange={getPriceRange}
        getBookedRange={getBookedRange}
        getCheckedItem={getCheckedItem}
      />
      <div className="submit-btn"></div>
    </div>
  );
}

export default SideFilterBar;
