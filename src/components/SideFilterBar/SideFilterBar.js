import "./SideFilterBar.scss";
import SortOrderBar from "./SortOrderBar/SortOrderBar";
import FilterBar from "./FilterBar/FilterBar";
import _ from "lodash";

function SideFilterBar(props) {
  const { orderTypes, filterTypes, getSortOrder } = props;

  return (
    <div className="rentcar-sfb-wrap">
      <SortOrderBar orderTypes={orderTypes} getSortOrder={getSortOrder} />
      <FilterBar filterTypes={filterTypes} />
    </div>
  );
}

export default SideFilterBar;
