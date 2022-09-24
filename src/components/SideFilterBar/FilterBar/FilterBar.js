import { useEffect, useState } from "react";
import Dep1 from "../Dep1/Dep1";
import CheckList from "./CheckList/CheckList";
import "./FilterBar.scss";
import PointList from "./PointList/PointList";
import SlideList from "./SlideList/SlideList";

function FilterBar(props) {
  const { filterTypes } = props;

  // Filter types
  const [isCheckFilter0, setIsCheckFilter0] = useState(false);
  const [isCheckFilter1, setIsCheckFilter1] = useState(false);
  const [isCheckFilter2, setIsCheckFilter2] = useState(false);
  const [isCheckFilter3, setIsCheckFilter3] = useState(false);
  const [isCheckFilter4, setIsCheckFilter4] = useState(false);

  // Filter Bar disabled list: dep-2
  const filterDep2Disableds = [
    isCheckFilter0,
    isCheckFilter1,
    isCheckFilter2,
    isCheckFilter3,
    isCheckFilter4,
  ];

  // Filter Bar disabled 속성 할당: dep-2
  for (let i = 0; i < filterTypes.length; i++) {
    filterTypes[i].disabled = filterDep2Disableds[i];
  }

  // Filter Bar 선택/선택해제 함수: dep-2
  const filterSelect = (e) => {
    const tagId = e.target.id;

    if (tagId === "0") setIsCheckFilter0(!isCheckFilter0);
    if (tagId === "1") setIsCheckFilter1(!isCheckFilter1);
    if (tagId === "2") setIsCheckFilter2(!isCheckFilter2);
    if (tagId === "3") setIsCheckFilter3(!isCheckFilter3);
    if (tagId === "4") setIsCheckFilter4(!isCheckFilter4);
  };

  // Dep1 disabled
  const [isRefresh, setIsRefresh] = useState(false);

  // Dep1 disabled 값 가져오는 함수
  const getDep1Disabled = (bool) => {
    setIsRefresh(bool);
  };

  // API
  // http://localhost:8000/rentcar/searchList? GET

  return (
    <div className="sfb-wrap product-bar product-bar">
      <Dep1 title={"필터"} getValue={getDep1Disabled} />
      {
        <ul className="dep2">
          {filterTypes.map((filterInfo) => {
            return (
              <div key={filterInfo.id}>
                <li
                  className="list"
                  key={filterInfo.id}
                  id={filterInfo.id}
                  onClick={filterSelect}
                >
                  <span
                    className="dep2-type"
                    id={filterInfo.id}
                    onClick={filterSelect}
                  >
                    {filterInfo.type}
                  </span>
                  <div
                    className={
                      filterInfo.disabled ? "right-icon-on" : "right-icon-off"
                    }
                    id={filterInfo.id}
                    onClick={filterSelect}
                  ></div>
                </li>
                {filterInfo.disabled && filterInfo.checkList && (
                  <CheckList
                    filterTypeId={filterInfo.id}
                    filterType={filterInfo.type}
                    checkList={filterInfo.checkList}
                    isRefresh={isRefresh}
                  />
                )}
                {filterInfo.disabled && filterInfo.slideList && (
                  <SlideList
                    filterTypeId={filterInfo.id}
                    filterType={filterInfo.type}
                    slideList={filterInfo.slideList}
                    isRefresh={isRefresh}
                  />
                )}
                {filterInfo.disabled && filterInfo.pointList && (
                  <PointList
                    filterTypeId={filterInfo.id}
                    filterType={filterInfo.type}
                    slideList={filterInfo.slideList}
                    isRefresh={isRefresh}
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
