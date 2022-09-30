import { createContext, useState } from "react";

export const ModalContext = createContext({
  clickedIcon: 1,
  setClickedIcon: () => {},
  isOpen: false,
  setOpen: () => {},
  modalOpen: () => {},
  condtion: "time",
  setCondition: () => {},
  location: "",
  setLocation: () => {},
});

const ModalProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [clickedIcon, setClickedIcon] = useState(1);
  const [condition, setCondition] = useState("date");
  //숙소 지역별 세부 검색
  const [location, setLocation] = useState("");

  const modalOpen = () => {
    setOpen(true);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setOpen,
        clickedIcon,
        setClickedIcon,
        modalOpen,
        condition,
        setCondition,
        location,
        setLocation,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
