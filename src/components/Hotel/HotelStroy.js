import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import "./HotelStory.scss";

SwiperCore.use([Navigation, Pagination]);

function HotelStroy() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/hotel/hotelstory.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.hotelStory);
      });
  }, []);

  return (
    <div className="hotel-story-container">
      <div>
        <h1 className="hotel-story-title">JEJUPASS의 테마가 있는 스토리</h1>
      </div>
      <div className="hotel-story-slide">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
          }}
        >
          {data.map((data) => (
            <SwiperSlide key={data.id}>
              <div className="hotel-story-slide">
                <div className="hotel-story-slide-hidden">
                  <img src={data.img} className="first-img" />
                  <img src={data.img} className="second-img" />
                  <strong>{data.comment}</strong>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default HotelStroy;
