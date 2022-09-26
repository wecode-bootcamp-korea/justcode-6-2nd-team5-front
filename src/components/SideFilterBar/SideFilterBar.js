import { useEffect, useState } from "react";
import "./SideFilterBar.scss";
import SortOrderBar from "./SortOrderBar/SortOrderBar";
import FilterBar from "./FilterBar/FilterBar";
import _ from "lodash";

function SideFilterBar(props) {
  const { orderTypes, filterTypes } = props;

  return (
    <div className="rentcar-sfb-wrap">
      <SortOrderBar orderTypes={orderTypes} />
      <FilterBar filterTypes={filterTypes} />
      <div className="submit-btn"></div>
    </div>
  );
}

export default SideFilterBar;
