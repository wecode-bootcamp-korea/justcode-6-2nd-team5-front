import "./RangeSlider.scss";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";

function RangeSlider(props) {
  const { filterTypeId, min, max, getValue } = props;

  //천단위 , 찍기 위한 함수
  const numberFormat = (num) => {
    if (num >= 1000) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return num.toString();
    }
  };

  // 단위 포멧
  const unitFormat = (filterTypeId) => {
    const filterType = filterTypeId;
    const units = ["원", "회"];
    let unitIndex = null;

    if (filterType === 0) unitIndex = 0;
    if (filterType === 3) unitIndex = 1;

    return `${units[unitIndex]}`;
  };

  // 슬라이더 라벨 포멧
  function valueLabelFormat(value) {
    let returnValue = numberFormat(value);
    let unit = unitFormat(filterTypeId);

    return `${returnValue} ${unit}`;
  }

  // 슬라이더 범위
  const [range, setRange] = useState([min, max]);

  // 슬라이더 핸들러
  const handleChange = (event, newValue) => {
    setRange(newValue);
  };

  // 슬라이더 범위 업데이트
  useEffect(() => {
    getValue(range);
  }, [range]);

  return (
    <div>
      <div className="slider">
        <Box sx={{ width: 220 }}>
          <Slider
            getAriaLabel={() => "range"}
            value={range}
            onChange={handleChange}
            valueLabelDisplay="auto"
            min={min}
            max={max}
            valueLabelFormat={valueLabelFormat}
          />
        </Box>
      </div>
      <div className="range">
        <span className="min todo">
          {numberFormat(range[0]) + unitFormat(filterTypeId)}
        </span>
        <span>~</span>
        <span className="max todo">
          {numberFormat(range[1]) + unitFormat(filterTypeId)}
        </span>
      </div>
    </div>
  );
}

export default RangeSlider;
