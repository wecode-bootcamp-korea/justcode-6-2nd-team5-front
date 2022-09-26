import React, { useContext } from "react";
import Modal from "../../components/Modal/Modal";
import FoodHeader from "../../components/Header/FoodHeader";
import { ModalContext } from "../../components/Context/ModalContext";

const Food = () => {
  const { isOpen } = useContext(ModalContext);

  return (
    <>
      <FoodHeader />
      <div> 맛집.</div>
      {isOpen && <Modal />}
    </>
  );
};

export default Food;
