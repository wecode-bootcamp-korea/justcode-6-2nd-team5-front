import React from "react";
import styled from "styled-components";

import FoodSearch from "../detailSearch/FoodSearch";
import { NormalSearchBox } from "../commonStyled";

import { BiSearch } from "react-icons/bi";

const FoodModal = () => {
  return (
    <>
      <NormalSearchBox>
        <div>
          <input placeholder="맛집을 검색하세요." />
        </div>
        <button>
          <BiSearch />
        </button>
      </NormalSearchBox>
      <FoodSearch />
    </>
  );
};

export default FoodModal;
