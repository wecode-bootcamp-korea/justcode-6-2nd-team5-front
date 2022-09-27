import React from "react";

import "./RestaurantInfo.scss";

function RestaurantInfo() {
  return (
    <div className="restaurant-info-wrapper">
      <div className="restaurant-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.5955057195424!2d126.8560949150034!3d37.49387063604469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9d406c4c49fd%3A0x3290407af81d85a!2z7KCc7KO86rCI7LmY7KGw66a8!5e0!3m2!1sen!2sus!4v1664101930720!5m2!1sen!2sus"
          width="100%"
          height="600px"
        ></iframe>
      </div>
      <div className="restaurant-detail-info">
        <div>
          <p>영업시간 : </p>
          <span>09:00 ~ 20:00 </span>
        </div>
        <div>
          <p>휴뮤일 : </p>
          <span>연중무휴</span>
        </div>
        <div>
          <p>전화번호 : </p>
          <span>07041392441</span>
        </div>
        <div>
          <p>주소 :</p>
          <span>제주특별자치도 제주시 내도3길 11 1층</span>
        </div>
      </div>
    </div>
  );
}

export default RestaurantInfo;
