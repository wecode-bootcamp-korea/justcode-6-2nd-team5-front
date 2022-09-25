import React, { useState, useContext, createContext } from "react";
import RentCarModal from "../../../modals/RentCarModal";
import RentalDate from "../RentalDate";

export const MainContext = createContext({
  dateSet: { start: "", end: "" },
  onDateSetting: (a, b) => {},
});

const MainContextProvider = ({ children }) => {
  const [dateSet, setDateSet] = useState({ start: "", end: "" });

  const onDateSetting = (start, end) => {
    console.log("바보");
    if (start && end) {
      const startDay =
        start.getFullYear().toString() +
        `.` +
        (start.getMonth() + 1).toString() +
        `.` +
        start.getDate().toString();
      const endDay =
        end.getFullYear().toString() +
        `.` +
        (end.getMonth() + 1).toString() +
        `.` +
        end.getDate().toString();

      return setDateSet({ start: startDay, end: endDay });
    } else {
      console.log("선택해주세요");
    }
  };

  return (
    <MainContext.Provider value={{ onDateSetting, dateSet }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
