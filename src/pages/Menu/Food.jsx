import React, { useContext } from "react";
import Modal from "../../components/Modal/Modal";
import FoodHeader from "../../components/Header/FoodHeader";
import { ModalContext } from "../../components/Context/ModalContext";

const Food = () => {
  const { isOpen, setOpen, clickedIcon, setClickedIcon } =
    useContext(ModalContext);

  return (
    <>
      <FoodHeader />
      <div> 맛집.</div>
      {isOpen && (
        <Modal
          setOpen={setOpen}
          clickedIcon={clickedIcon}
          setClickedIcon={setClickedIcon}
        />
      )}
    </>
  );
};

export default Food;
