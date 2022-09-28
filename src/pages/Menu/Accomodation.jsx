import React, { useContext } from "react";
import Modal from "../../components/Modal/Modal";
import AccomodationHeader from "../../components/Header/RoomHeader";
import { ModalContext } from "../../components/Context/ModalContext";

const Accomodation = () => {
  const { isOpen } = useContext(ModalContext);

  return (
    <>
      <AccomodationHeader />
      <div> 숙박.</div>
      {isOpen && <Modal />}
    </>
  );
};

export default Accomodation;
