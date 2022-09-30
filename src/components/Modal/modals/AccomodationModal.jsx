import React, { useContext } from "react";
import styled from "styled-components";

import { ModalContext } from "../../Context/ModalContext";
import LocationCondition from "../detailSearch/LocationCondition";
import { NormalSearchBox } from "../commonStyled";

import { BiSearch } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AccomodationModal = () => {
  const { setOpen } = useContext(ModalContext);
  const navigate = useNavigate();
  const goToHotel = () => {
    navigate("/hotelThema?지역검색=제주시내");
    setOpen(false);
  };
  return (
    <>
      <NormalSearchBox>
        <div>
          <MdOutlineLocationOn />
          <input placeholder="목적지, 호텔∙숙소명, 관광명소" />
        </div>
        <button onClick={goToHotel}>
          <BiSearch />
        </button>
      </NormalSearchBox>
      <LocationCondition />
    </>
  );
};

export default AccomodationModal;
