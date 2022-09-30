import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Promotion from "../../components/Promotion/Promotion";
import Restaurant from "../../components/Restaurant/Restaurant";
import FoodHeader from "../../components/Header/FoodHeader";
import Modal from "../../components/Modal/Modal";
import { ModalContext } from "../../components/Context/ModalContext";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./RestaurantMain.scss";

SwiperCore.use([Navigation]);

function RestaurantMain() {
  const { isOpen } = useContext(ModalContext);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/restaurant/restaurantLocation.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.location);
      });
  }, []);

  const clickHandler = (location) => {
    navigate(`/restaurant/list?지역=${location}`);
  };

  return (
    <>
      <FoodHeader />
      <div className="content-wrapper">
        <h1 className="title">맛집 지역을 선택해주세요</h1>
        <Swiper spaceBetween={20} slidesPerView={8} navigation loop={true}>
          {data.map((data) => (
            <SwiperSlide key={data.id}>
              <div
                className="location-wrapper"
                onClick={() => clickHandler(data.location)}
              >
                <img src={data.img} alt="" />
                <h1>{data.location}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Restaurant />
      <Promotion />
      {isOpen && <Modal />}
    </>
  );
}

export default RestaurantMain;
