import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider(props) {
  const { min, max } = props;

  const [value, setValue] = React.useState([0, 20]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //천단위 , 찍기 위한 함수
  const numberFormat = (num) => {
    if (num > 1000) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return "0";
    }
  };

  return (
    <Box sx={{ width: 350 }}>
      <Slider
        getAriaLabel={() => "range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
