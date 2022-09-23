import "./RangeSlider.scss";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function RangeSlider(props) {
  const { filterTypeId, value, min, max, handleChange } = props;

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

  return (
    <div>
      <div className="slider">
        <Box sx={{ width: 320 }}>
          <Slider
            getAriaLabel={() => "range"}
            value={value}
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
          {numberFormat(value[0]) + unitFormat(filterTypeId)}
        </span>
        <span>~</span>
        <span className="max todo">
          {numberFormat(value[1]) + unitFormat(filterTypeId)}
        </span>
      </div>
    </div>
  );
}

export default RangeSlider;
