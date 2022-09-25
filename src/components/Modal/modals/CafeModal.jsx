import React from "react";
import styled from "styled-components";

import CafeSearch from "../detailSearch/CafeSearch";
import { NormalSearchBox } from "../commonStyled";

import { BiSearch } from "react-icons/bi";

const CafeModal = () => {
  return (
    <>
      <NormalSearchBox>
        <div>
          <input placeholder="상호명 혹은 키워드를 입력하세요." />
        </div>
        <button>
          <BiSearch />
        </button>
      </NormalSearchBox>
      <CafeSearch />
    </>
  );
};

export default CafeModal;
