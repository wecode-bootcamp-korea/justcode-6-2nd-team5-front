import { useEffect, useState } from "react";
import RangeSlider from "./RangeSlider/RangeSlider";
import "./SlideList.scss";

function SlideList(props) {
  const { filterTypeId, slideList } = props;

  // 슬라이더 value: 렌터카 금액
  const [rentCarPriceValue, setRentCarPriceValue] = useState([0, 0]);

  // 슬라이더 value: 렌터카 누적예약
  const [rentCarBookedValue, setRentCarBookedValue] = useState([0, 0]);

  // 슬라이더 초기값 세팅
  useEffect(() => {
    // 렌터카 금액
    setRentCarPriceValue([slideList[0], slideList[1]]);
    // 렌터카 누적예약
    setRentCarBookedValue([slideList[0], slideList[1]]);
  }, [filterTypeId]);

  // 슬라이더 핸들러: 렌터카 금액
  const handleRentCarPriceChange = (event, newValue) => {
    setRentCarPriceValue(newValue);
  };

  // 슬라이더 핸들러: 렌터카 누적예약
  const handleRentCarBookedChange = (event, newValue) => {
    setRentCarBookedValue(newValue);
  };

  return (
    <ul className="dep3">
      <li className="slide-filter">
        {filterTypeId === 0 && (
          <RangeSlider
            filterTypeId={filterTypeId}
            value={rentCarPriceValue}
            min={slideList[0]}
            max={slideList[1]}
            handleChange={handleRentCarPriceChange}
          />
        )}
        {filterTypeId === 3 && (
          <RangeSlider
            filterTypeId={filterTypeId}
            value={rentCarBookedValue}
            min={slideList[0]}
            max={slideList[1]}
            handleChange={handleRentCarBookedChange}
          />
        )}
      </li>
    </ul>
  );
}

export default SlideList;
