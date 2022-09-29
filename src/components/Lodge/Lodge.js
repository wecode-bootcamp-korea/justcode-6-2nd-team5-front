import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Lodge.scss";
import "../../styles/common.scss";

SwiperCore.use([Navigation, Pagination]);

function Lodge() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/common/lodgeInfo.json")
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
                <p>{data.title}</p>
                <p>{data.tag}</p>
                <p>{data.location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Lodge;
