import React from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";
import IconBtn from "../pages/Header";
import { AiFillCar } from "react-icons/ai";

const Modal = ({ isOpen }) => {
  return (
    <ReactModal isOpen={isOpen}>
      <IconBtn>바보</IconBtn>
    </ReactModal>
  );
};
export default Modal;
