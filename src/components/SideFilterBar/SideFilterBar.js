import { useEffect, useState } from "react";
import "./SideFilterBar.scss";
import SortOrderBar from "./SortOrderBar/SortOrderBar";
import FilterBar from "./FilterBar/FilterBar";

function SideFilterBar(props) {
  const { orderTypes, filterTypes } = props;

  // 자식 컴포넌트 state 값들 가져오는 함수
  const getSateValue = (list) => {
    console.log(list);
  };

  return (
    <div className="rentcar-sfb-wrap">
      <SortOrderBar orderTypes={orderTypes} getSateValue={getSateValue} />
      <FilterBar filterTypes={filterTypes} />
      <div className="submit-btn"></div>
    </div>
  );
}

export default SideFilterBar;
