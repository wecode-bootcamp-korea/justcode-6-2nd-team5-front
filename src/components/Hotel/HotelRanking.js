import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { FaHotel } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HotelRanking.scss";
import "../../styles/common.scss";

SwiperCore.use([Navigation, Pagination]);

function HotelRanking() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const HotelRankingClick = () => {
    navigate("/hotelthema");
  };
  useEffect(() => {
    fetch("/data/hotel/hotelranking.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.lodgeInfo);
      });
  }, []);

  return (
    <div className="content-wrapper" style={{ padding: "3% 0px" }}>
      <h1 className="title">
        이런 숙소는 어떠세요? <FaHotel />
      </h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="lodge-wrapper" onClick={HotelRankingClick}>
              <div>
                <img src={data.img} alt="image" />
              </div>
              <div className="lodge-info-wrapper">
                <p>{data.title}</p>
                <p>{data.tag}</p>
                <p>{data.info}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HotelRanking;
