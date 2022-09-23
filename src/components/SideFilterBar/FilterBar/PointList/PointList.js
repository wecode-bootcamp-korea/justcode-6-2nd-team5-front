import { useState } from "react";
import "./PointList.scss";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Stars from "./Stars/Stars";

function PointList() {
  // 슬라이드 value: 숙소 별점
  const [hotelPointValue, setHotelPointValue] = useState([1, 5]);

  // 슬라이더 핸들러: 숙소 별점
  const handleRentCarBookedChange = (event, newValue) => {
    setHotelPointValue(newValue);
  };

  return (
    <ul className="dep3">
      <li className="point-filter"></li>
      <div className="point-slider">
        <Box sx={{ width: 278 }}>
          <Slider
            getAriaLabel={() => "range"}
            value={hotelPointValue}
            onChange={handleRentCarBookedChange}
            valueLabelDisplay="auto"
            min={1}
            max={5}
            step={0.5}
          />
        </Box>
      </div>
      <Stars />
    </ul>
  );
}

export default PointList;
