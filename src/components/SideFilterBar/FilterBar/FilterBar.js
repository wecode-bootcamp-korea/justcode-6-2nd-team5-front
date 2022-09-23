import { useEffect, useState } from "react";
import Dep1 from "../Dep1/Dep1";
import CheckList from "./CheckList/CheckList";
import "./FilterBar.scss";
import SlideList from "./SlideList/SlideList";

function FilterBar(props) {
  const { filterTypes, filterSelect } = props;

  // deb-1 props data
  const [isOndep1, setIsOndep1] = useState(false);
  const onCheckDep1 = () => {
    setIsOndep1((prev) => !prev);
  };

  // http://localhost:8000/rentcar/searchList post

  // http://localhost:8000/rentcar/searchList?

  return (
    <div className="sfb-wrap product-bar product-bar">
      <Dep1 title={"필터"} isOndep1={isOndep1} onCheckDep1={onCheckDep1} />
      {
        <ul className="dep2">
          {filterTypes.map((filterType) => {
            return (
              <div key={filterType.id}>
                <li
                  className="list"
                  key={filterType.id}
                  id={filterType.id}
                  onClick={filterSelect}
                >
                  <span id={filterType.id} onClick={filterSelect}>
                    {filterType.type}
                  </span>
                  <div
                    className={
                      filterType.disabled ? "right-icon-on" : "right-icon-off"
                    }
                    id={filterType.id}
                    onClick={filterSelect}
                  ></div>
                </li>
                {filterType.disabled && filterType.checkList && (
                  <CheckList
                    filterTypeId={filterType.id}
                    checkList={filterType.checkList}
                  />
                )}
                {filterType.disabled && filterType.slideList && (
                  <SlideList
                    filterTypeId={filterType.id}
                    slideList={filterType.slideList}
                  />
                )}
              </div>
            );
          })}
        </ul>
      }
    </div>
  );
}

export default FilterBar;
