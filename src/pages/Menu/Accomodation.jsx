import React, { useContext } from "react";
import Modal from "../../components/Modal/Modal";
import AccomodationHeader from "../../components/Header/RoomHeader";
import { ModalContext } from "../../components/Context/ModalContext";

const Accomodation = () => {
  const { isOpen, setOpen, clickedIcon, setClickedIcon } =
    useContext(ModalContext);

  return (
    <>
      <AccomodationHeader />
      <div> 숙박.</div>
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

export default Accomodation;
