import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Header from "../pages/Header";

import { IconBtn } from "../pages/Header";
import { AiFillCar } from "react-icons/ai";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { FaCoffee } from "react-icons/fa";
import { FaHotdog } from "react-icons/fa";

const Modal = ({ setOpen, onClose }) => {
  const handleClose = () => {
    console.log("in");
    onClose?.();
    setOpen(false);
  };

  return (
    <Overlay>
      <ModalWrap>
        <CloseButton onClick={handleClose}>x</CloseButton>
        <Contents>
          <IconBtn>
            <AiFillCar className="icon" />
          </IconBtn>
          <IconBtn>
            <FaPlaneDeparture className="icon" />
          </IconBtn>
          <IconBtn>
            <FaBed className="icon " />
          </IconBtn>
          <IconBtn>
            <FaTicketAlt className="icon" />
          </IconBtn>
          <IconBtn>
            <FaCoffee className="icon " />
          </IconBtn>
          <IconBtn>
            <FaHotdog className={`icon`} />
          </IconBtn>
          <Button onClick={handleClose}>Close</Button>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 100%;
  height: 80vh;
  background-color: #f8f8f8;
  position: absolute;
  top: 0;
`;

const CloseButton = styled.div`
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;
`;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 30px;
`;

const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: lightgray;
  cursor: pointer;
  &:hover {
    background-color: #898989;
  }
`;

export default Modal;
