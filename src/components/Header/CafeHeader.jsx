import React from "react";
import styled from "styled-components";

import { NormalSearchBox } from "../Modal/commonStyled";
import { BiSearch } from "react-icons/bi";

const CafeHeader = ({ modalOpen }) => {
  return (
    <>
      <NormalSearchBox onClick={modalOpen} normal>
        <div>
          <input placeholder="상품명 혹은 키워드를 입력하세요." />
        </div>
        <button>
          <BiSearch />
        </button>
      </NormalSearchBox>
    </>
  );
};

export default CafeHeader;
