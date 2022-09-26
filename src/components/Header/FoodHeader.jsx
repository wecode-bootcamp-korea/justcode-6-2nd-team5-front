import React from "react";
import styled from "styled-components";

import { NormalSearchBox } from "../Modal/commonStyled";
import { BiSearch } from "react-icons/bi";

const FoodHeader = ({ modalOpen }) => {
  return (
    <>
      <NormalSearchBox onClick={modalOpen} normal>
        <div>
          <input placeholder="맛집을 검색하세요." />
        </div>
        <button>
          <BiSearch />
        </button>
      </NormalSearchBox>
    </>
  );
};

export default FoodHeader;
