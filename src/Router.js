import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Mypage from "./pages/Mypage/Mypage";
import RentCar from "./pages/RentCar/RentCar";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/rentcar" element={<RentCar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
