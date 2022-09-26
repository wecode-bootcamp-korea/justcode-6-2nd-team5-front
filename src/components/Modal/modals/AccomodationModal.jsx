import React from "react";
import styled from "styled-components";

import LocationCondition from "../detailSearch/LocationCondition";
import { NormalSearchBox } from "../commonStyled";

import { BiSearch } from "react-icons/bi";
import { MdOutlineLocationOn } from "react-icons/md";

const AccomodationModal = () => {
  return (
    <>
      <NormalSearchBox>
        <div>
          <MdOutlineLocationOn />
          <input placeholder="목적지, 호텔∙숙소명, 관광명소" />
        </div>
        <button>
          <BiSearch />
        </button>
      </NormalSearchBox>
      <LocationCondition />
    </>
  );
};

export default AccomodationModal;
