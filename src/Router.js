import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Mypage from "./pages/Mypage/Mypage";
import RentCar from "./pages/RentCar/RentCar";
import Lodge from "./components/Lodge/Lodge";
import Banner from "./components/Banner/Banner";
import Car from "./components/Car/Car";
import Restaurant from "./components/Restaurant/Restaurant";
import Promotion from "./components/Promotion/Promotion";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/rentcar" element={<RentCar />} />
        <Route path="/Lodge" element={<Lodge />} />
        <Route path="/Banner" element={<Banner />} />
        <Route path="/Car" element={<Car />} />
        <Route path="/Restaurant" element={<Restaurant />} />
        <Route path="/Promotion" element={<Promotion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
