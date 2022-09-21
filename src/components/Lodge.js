import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

import "./Lodge.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

function Lodge() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/lodge.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.lodgeInfo);
      });
  }, []);

  return (
    <div className="content-wrapper">
      <h1 className="title">제주다운 감성숙소 추천</h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="lodge-wrapper">
              <div>
                <img src={data.img} alt="image" />
              </div>
              <div className="lodge-info-wrapper">
                <span>{data.title}</span>
                <span>{data.tag}</span>
                <span>{data.location}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Lodge;
