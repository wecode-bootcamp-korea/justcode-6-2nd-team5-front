import React from "react";
import styled from "styled-components";

import TripSearch from "../detailSearch/TripSearch";
import { NormalSearchBox } from "../commonStyled";

import { BiSearch } from "react-icons/bi";

const TripModal = () => {
  return (
    <>
      <NormalSearchBox>
        <div>
          <input placeholder="여행 상품명을 검색하세요." />
        </div>
        <button>
          <BiSearch />
        </button>
      </NormalSearchBox>
      <TripSearch />
    </>
  );
};

export default TripModal;
