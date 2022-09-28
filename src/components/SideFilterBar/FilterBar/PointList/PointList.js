import { useEffect, useState } from "react";
import "./PointList.scss";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Stars from "./Stars/Stars";

function PointList(props) {
  const { isRefresh, getPointItem, isDone } = props;

  // 슬라이드 value: 별점
  const [range, setRange] = useState([1, 5]);

  // 슬라이더 핸들러: 별점
  const handleChange = (event, newValue) => {
    setRange(newValue);
  };

  // 포인트 범위 보내주기
  useEffect(() => {
    getPointItem(range);
  }, [isDone]);

  // 필터 초기화
  useEffect(() => {
    setRange([1, 5]);
  }, [isRefresh]);

  return (
    <ul className="dep3">
      <li className="point-filter"></li>
      <div className="point-slider">
        <Box sx={{ width: 180 }}>
          <Slider
            getAriaLabel={() => "range"}
            value={range}
            onChange={handleChange}
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
