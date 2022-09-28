import React from "react";

import "./RestaurantInfo.scss";

function RestaurantInfo({ data }) {
  return (
    <div className="restaurant-info-wrapper">
      <div className="restaurant-map">
        <iframe src={data.googleAddress} width="100%" height="400px"></iframe>
      </div>
      <div className="restaurant-detail-info-list">
        <div className="restaurant-detail-info">
          <span>영업시간 : </span>
          <span>{data.businessHour}</span>
        </div>
        <div className="restaurant-detail-info">
          <span>휴뮤일 : </span>
          <span>{data.closedDay}</span>
        </div>
        <div className="restaurant-detail-info">
          <span>전화번호 : </span>
          <span>{data.phoneNumber}</span>
        </div>
        <div className="restaurant-detail-info">
          <span>주소 : </span>
          <span>{data.fullAddress}</span>
        </div>
      </div>
    </div>
  );
}

export default RestaurantInfo;
