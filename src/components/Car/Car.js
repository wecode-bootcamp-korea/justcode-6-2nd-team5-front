import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import "./Car.scss";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

function Car() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/common/carInfo.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.carInfo);
      });
  }, []);

  return (
    <div className="content-wrapper">
      <h1 className="title">최저가 렌터카 추천</h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        loop={true}
      >
        {data.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="car-wrapper">
              <div>
                <img src={data.img} alt="image" />
              </div>
              <div className="car-info-wrapper">
                <p>
                  <span>{data.title}</span>
                  <span>{data.price}</span>
                </p>
                <p className="date">{data.date}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Car;
