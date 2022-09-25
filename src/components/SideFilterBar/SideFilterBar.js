import { useEffect, useState } from "react";
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

  return (
    <div className="rentcar-sfb-wrap">
      <SortOrderBar orderTypes={orderTypes} />
      <FilterBar
        filterTypes={filterTypes}
        getPriceRange={getPriceRange}
        getBookedRange={getBookedRange}
      />
      <div className="submit-btn"></div>
    </div>
  );
}

export default SideFilterBar;
