import React from "react";
import styled from "styled-components";

import { NormalSearchBox } from "../Modal/commonStyled";
import { BiSearch } from "react-icons/bi";

const TripHeader = ({ modalOpen }) => {
  return (
    <>
      <NormalSearchBox onClick={modalOpen} normal>
        <div>
          <input placeholder="여행 상품명을 검색하세요." />
        </div>
        <button>
          <BiSearch />
        </button>
      </NormalSearchBox>
    </>
  );
};

export default TripHeader;
