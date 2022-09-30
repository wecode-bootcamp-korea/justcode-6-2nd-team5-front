import { createContext, useState } from "react";

export const ModalContext = createContext({
  clickedIcon: 1,
  setClickedIcon: () => {},
  isOpen: false,
  setOpen: () => {},
  modalOpen: () => {},
  condtion: "time",
  setCondition: () => {},
});

const ModalProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [clickedIcon, setClickedIcon] = useState(1);
  const [condition, setCondition] = useState("date");

  const modalOpen = () => {
    setOpen(true);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, setOpen, clickedIcon, setClickedIcon, modalOpen, condition, setCondition }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
