import React from "react";
import SerchTagBox from "../../components/SerchTagBox/SerchTagBox";
import "./RentCar.scss";

function RentCar() {
  return (
    <div className="rentcar-container">
      <div className="rentcar-top-content">
        <SerchTagBox />
      </div>
      <div className="rentcar-main-content">
        <div className="rentcar-snb"></div>
        <div className="rentcar-content"></div>
      </div>
    </div>
  );
}

export default RentCar;
