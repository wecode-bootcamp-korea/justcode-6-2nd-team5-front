import { useState } from "react";
import Dep1 from "../Dep1/Dep1";
import "./FilterBar.scss";

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
      {filterTypes && (
        <ul className="dep2">
          {filterTypes.map((filterType) => {
            return (
              <div key={filterType.id}>
                <li
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
                  <ul className="dep3">
                    {filterType.checkList.map((content, index) => (
                      <li className="check-filter" key={index}>
                        <span>{content}</span>
                        <input type="checkbox" />
                      </li>
                    ))}
                  </ul>
                )}
                {filterType.disabled && filterType.slideList && (
                  <ul className="dep3">
                    <li className="slide-filter">
                      <div className="text-wrap">
                        <span>최소</span>
                        <span>최대</span>
                      </div>
                      <div className="slide">slide</div>
                      {filterType.id === 0 && (
                        <div className="range">
                          <span className="min todo">
                            {filterType.slideList[0]}원
                          </span>
                          <span>~</span>
                          <span className="max todo">
                            {filterType.slideList[1]}원
                          </span>
                        </div>
                      )}
                      {filterType.id === 3 && (
                        <div className="range">
                          <span className="min todo">
                            {filterType.slideList[0]}회
                          </span>
                          <span>~</span>
                          <span className="max todo">
                            {filterType.slideList[1]}회
                          </span>
                        </div>
                      )}
                    </li>
                  </ul>
                )}
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default FilterBar;
