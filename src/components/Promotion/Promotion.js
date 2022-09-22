import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { IoGift } from "react-icons/io5";

import "swiper/css";
import "swiper/css/pagination";
import "./Promotion.scss";

SwiperCore.use([Pagination, Autoplay]);

function Promotion() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/promotionInfo.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.promotionInfo);
      });
  }, []);

  return (
    <div className="content-wrapper">
      <h1 className="title">
        놓치면 안되는 제주패스 프로모션
        <IoGift />
      </h1>
      <div className="promotion-wrapper">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          autoplay
          pagination={{ clickable: false }}
        >
          {data.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="promotion-img">
                <img src={data.img} alt="image" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Promotion;
