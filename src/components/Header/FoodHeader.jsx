import React, { useContext } from "react";

import { ModalContext } from "../../components/Context/ModalContext";
import { NormalSearchBox } from "../Modal/commonStyled";
import { BiSearch } from "react-icons/bi";

const FoodHeader = () => {
  const { isOpen, setOpen, setClickedIcon } = useContext(ModalContext);

  const modalOpen = () => {
    setOpen(true);
    console.log(isOpen);
  };

  // const changeClicked = () => {
  //   setClickedIcon(6);
  // };

  return (
    <>
      <div onClick={() => setClickedIcon(6)}>
        <NormalSearchBox onClick={modalOpen} normal>
          <div>
            <input placeholder="맛집을 검색하세요." />
          </div>
          <button>
            <BiSearch />
          </button>
        </NormalSearchBox>
      </div>
    </>
  );
};

export default FoodHeader;
