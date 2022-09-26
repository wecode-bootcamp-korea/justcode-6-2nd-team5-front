import { useEffect, useState } from "react";
import RangeSlider from "./RangeSlider/RangeSlider";
import "./SlideList.scss";

function SlideList(props) {
  const {
    filterTypeId,
    filterType,
    slideList,
    isRefresh,
    getSlideItem,
    isDone,
  } = props;

  // const [price, setPrice] = useState([]);
  // const [booked, setBooked] = useState([]);

  // const [slideItems1, setSlideItems1] = useState({ price: [], booked: [] });
  // const [slideItems2, setSlideItems2] = useState({ price: [], booked: [] });

  const [slideItems, setSlideItems] = useState([]);

  const getPrice = (range) => {
    getSlideItem(filterTypeId, range);
  };

  return (
    <ul className="dep3">
      <li className="slide-filter">
        {filterType === "가격 범위" && (
          <RangeSlider
            filterTypeId={filterTypeId}
            min={slideList[0]}
            max={slideList[1]}
            getValue={getPrice}
            isRefresh={isRefresh}
          />
        )}
        {filterType === "누적예약" && (
          <RangeSlider
            filterTypeId={filterTypeId}
            min={slideList[0]}
            max={slideList[1] === 0 ? 100 : slideList[1]}
            getValue={getPrice}
            isRefresh={isRefresh}
          />
        )}
      </li>
    </ul>
  );
}

export default SlideList;
