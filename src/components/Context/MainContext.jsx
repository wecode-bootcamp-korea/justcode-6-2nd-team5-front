import React, { useState, useContext, createContext } from "react";
import RentCarModal from "../Modal/modals/RentCarModal";
import RentalDate from "../Modal/detailSearch/rentCar/RentalDate";

export const MainContext = createContext({
  dateSet: { start: "", end: "" },
  onDateSetting: (a, b) => {},
});

const MainContextProvider = ({ children }) => {
  const [dateSet, setDateSet] = useState({ start: "", end: "" });

  const onDateSetting = (start, end) => {
    if (start && end) {
      const day = (day) => {
        if (day === 1) return "(월)";
        else if (day === 2) return "(화)";
        else if (day === 3) return "(수)";
        else if (day === 4) return "(목)";
        else if (day === 5) return "(금)";
        else if (day === 6) return "(토)";
        else if (day === 7) return "(일)";
      };

      const startDay =
        start.getFullYear().toString() +
        `.` +
        (start.getMonth() + 1).toString() +
        `.` +
        start.getDate().toString() +
        day(start.getDay()).toString();
      const endDay =
        end.getFullYear().toString() +
        `.` +
        (end.getMonth() + 1).toString() +
        `.` +
        end.getDate().toString() +
        day(end.getDay()).toString();

      return setDateSet({ start: startDay, end: endDay });
    } else {
      return;
    }
  };

  return (
    <MainContext.Provider value={{ onDateSetting, dateSet }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
