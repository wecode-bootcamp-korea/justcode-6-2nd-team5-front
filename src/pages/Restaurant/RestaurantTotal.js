import React from "react";

import "./RestaurantTotal.scss";

function RestaurantTotal(props) {
  return (
    <div className="total-restaurant">
      <span>총</span>
      <span>{props.totalCount}</span>
      <span>건</span>
    </div>
  );
}

export default RestaurantTotal;
