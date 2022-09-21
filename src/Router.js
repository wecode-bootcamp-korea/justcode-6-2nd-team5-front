import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Mypage from "./pages/Mypage/Mypage";
import RentCar from "./pages/RentCar/RentCar";
import Lodge from "./components/Lodge/Lodge";
import Banner from "./components/Banner/Banner";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/rentcar" element={<RentCar />} />
        <Route path="/Lodge" element={<Lodge />} />
        <Route path="/Banner" element={<Banner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
