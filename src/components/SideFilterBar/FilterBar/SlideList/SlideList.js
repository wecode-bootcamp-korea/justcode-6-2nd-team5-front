import { useEffect, useState } from "react";
import RangeSlider from "./RangeSlider/RangeSlider";
import "./SlideList.scss";

function SlideList(props) {
  const { filterTypeId, filterType, slideList } = props;

  // 슬라이더 value: 가격범위
  const [priceValue, setPriceValue] = useState([0, 0]);

  // 슬라이더 value: 누적예약
  const [bookedValue, setBookedValue] = useState([0, 0]);

  // 슬라이더 초기값 세팅
  useEffect(() => {
    // 가격범위
    setPriceValue([slideList[0], slideList[1]]);
    // 누적예약
    slideList[1] !== 0
      ? setBookedValue([slideList[0], slideList[1]])
      : setBookedValue([slideList[0], 100]);
  }, [filterTypeId]);

  // 슬라이더 핸들러: 가격범위
  const handlePriceChange = (event, newValue) => {
    setPriceValue(newValue);
  };

  // 슬라이더 핸들러: 누적예약
  const handleBookedChange = (event, newValue) => {
    setBookedValue(newValue);
  };

  return (
    <ul className="dep3">
      <li className="slide-filter">
        {filterType === "가격 범위" && (
          <RangeSlider
            filterTypeId={filterTypeId}
            value={priceValue}
            min={slideList[0]}
            max={slideList[1]}
            handleChange={handlePriceChange}
          />
        )}
        {filterType === "누적예약" && (
          <RangeSlider
            filterTypeId={filterTypeId}
            value={bookedValue}
            min={slideList[0]}
            max={slideList[1] === 0 ? 100 : slideList[1]}
            handleChange={handleBookedChange}
          />
        )}
      </li>
    </ul>
  );
}

export default SlideList;
