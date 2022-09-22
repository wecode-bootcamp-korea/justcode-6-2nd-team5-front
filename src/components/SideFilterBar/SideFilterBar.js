import { useEffect, useState } from "react";
import "./SideFilterBar.scss";
import SortOrderBar from "./SortOrderBar/SortOrderBar";
import FilterBar from "./FilterBar/FilterBar";

function SideFilterBar(props) {
  const { orderTypes, filterTypes, filterSelect } = props;

  return (
    <div className="rentcar-sfb-wrap">
      <SortOrderBar orderTypes={orderTypes} />
      <FilterBar filterTypes={filterTypes} filterSelect={filterSelect} />
    </div>
  );
}

export default SideFilterBar;
