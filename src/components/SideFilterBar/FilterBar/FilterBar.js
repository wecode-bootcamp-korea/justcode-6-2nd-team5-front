import { useEffect, useState } from "react";
import Dep1 from "../Dep1/Dep1";
import "./FilterBar.scss";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function FilterBar(props) {
  const { filterTypes, filterSelect } = props;

  // deb-1 props data
  const [isOndep1, setIsOndep1] = useState(false);
  const onCheckDep1 = () => {
    setIsOndep1((prev) => !prev);
  };

  // range slider

  // 초기 세팅
  const [rentCarPriceValue, setRentCarPriceValue] = useState([0, 0]);
  const [rentCarBookedValue, setRentCarBookedValue] = useState([0, 0]);

  useEffect(() => {
    if (filterTypes.length !== 0) {
      setRentCarPriceValue([
        filterTypes[0].slideList[0],
        filterTypes[0].slideList[1],
      ]);
      setRentCarBookedValue([
        filterTypes[3].slideList[0],
        filterTypes[3].slideList[1],
      ]);
    }
  }, [filterTypes]);

  //천단위 , 찍기 위한 함수
  const numberFormat = (num) => {
    if (num >= 1000) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return num.toString();
    }
  };

  // 슬라이더 핸들러
  const handleRentCarPriceChange = (event, newValue) => {
    setRentCarPriceValue(newValue);
  };
  const handleRentCarBookedChange = (event, newValue) => {
    setRentCarBookedValue(newValue);
  };

  // 슬라이더 라벨 포멧
  function valueLabelFormat(value) {
    const units = ["원", "회"];

    let unitIndex = 0;
    let returnvalue = numberFormat(value);

    return `${returnvalue} ${units[unitIndex]}`;
  }

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
                      {filterType.id === 0 && (
                        <div id={filterType.id}>
                          <div className="slider">
                            <Box sx={{ width: 350 }}>
                              <Slider
                                id={filterType.id}
                                getAriaLabel={() => "range"}
                                value={rentCarPriceValue}
                                onChange={handleRentCarPriceChange}
                                valueLabelDisplay="auto"
                                min={filterType.slideList[0]}
                                max={filterType.slideList[1]}
                                valueLabelFormat={valueLabelFormat}
                              />
                            </Box>
                          </div>
                          <div className="range">
                            <span className="min todo">
                              {numberFormat(rentCarPriceValue[0])}원
                            </span>
                            <span>~</span>
                            <span className="max todo">
                              {numberFormat(rentCarPriceValue[1])}원
                            </span>
                          </div>
                        </div>
                      )}
                      {filterType.id === 3 && (
                        <>
                          <div className="slider">
                            <Box sx={{ width: 350 }}>
                              <Slider
                                id={filterType.id}
                                getAriaLabel={() => "range"}
                                value={rentCarBookedValue}
                                onChange={handleRentCarBookedChange}
                                valueLabelDisplay="auto"
                                min={filterType.slideList[0]}
                                max={filterType.slideList[1]}
                                valueLabelFormat={valueLabelFormat}
                              />
                            </Box>
                          </div>
                          <div className="range">
                            <span className="min todo">
                              {numberFormat(rentCarBookedValue[0])}회
                            </span>
                            <span>~</span>
                            <span className="max todo">
                              {numberFormat(rentCarBookedValue[1])}회
                            </span>
                          </div>
                        </>
                      )}
                    </li>
                  </ul>
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
