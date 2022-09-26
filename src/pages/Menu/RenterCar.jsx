import React, { useEffect, useContext } from "react";
import Modal from "../../components/Modal/Modal";
import RentCarHeader from "../../components/Header/RentCarHeader";
import { ModalContext } from "../../components/Context/ModalContext";

const RenterCar = () => {
  const { isOpen } = useContext(ModalContext);

  return (
    <>
      <RentCarHeader />
      <div> 렌터카.</div>
      {isOpen && <Modal />}
    </>
  );
};

export default RenterCar;
