import { createContext, useState } from "react";

export const ModalContext = createContext({
  clickedIcon: 1,
  setClickedIcon: () => {},
  isOpen: false,
  setOpen: () => {},
});

const ModalProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [clickedIcon, setClickedIcon] = useState(1);

  return (
    <ModalContext.Provider
      value={{ isOpen, setOpen, clickedIcon, setClickedIcon }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
