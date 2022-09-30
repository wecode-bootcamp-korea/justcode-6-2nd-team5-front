import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

import "./Banner.scss";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Autoplay]);

function Banner() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/common/bannerInfo.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.bannerInfo);
      });
  }, []);

  return (
    <div className="content-wrapper">
      <Swiper slidesPerView={1} autoplay pagination={{ clickable: false }}>
        {data.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="banner-info-wrapper">
              <div className="banner-img">
                <img src={data.img} alt="image" />
              </div>
              <div className="banner-info">
                <p>{data.info1}</p>
                <p>{data.info2}</p>
                <p>{data.info3}</p>
                <p>{data.info4}</p>
                <p>{data.info5}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;
