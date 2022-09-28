import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ModalProvider from "./components/Context/ModalContext";

import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/Main";
import Esg from "./pages/Menu/Esg";
import RenterCar from "./pages/Menu/RenterCar";
import Accomodation from "./pages/Menu/Accomodation";
import Food from "./pages/Menu/Food";
import Mypage from "./pages/Mypage/Mypage";
import RentCar from "./pages/RentCar/RentCar";
import Preparing from "./pages/Menu/Preparing";
import Login from "./pages/login/login";
import TermsSignup from "./components/signup/termsSignup";
import Signup from "./pages/signup/signup";
import SignupFin from "./components/signup/signupFin";
import FooterTop from "./components/Footer/FooterTop";
import FooterBottom from "./components/Footer/FooterBottom";
import Restaurant from "./pages/Restaurant/Restaurant";
import RestaurantDetail from "./pages/Restaurant/RestaurantDetail";

function Router() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/esg" element={<Esg />} />
          <Route path="/rentercar" element={<RenterCar />} />
          <Route path="/accomodation" element={<Accomodation />} />
          <Route path="/food/:id" element={<Food />} />
          <Route path="/preparing" element={<Preparing />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/rentercar/rentcar/:id" element={<RentCar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/termsSignup" element={<TermsSignup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupFin" element={<SignupFin />} />
          <Route path="/preparing" element={<Preparing />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/restaurantDetail" element={<RestaurantDetail />} />
        </Routes>
        <FooterTop />
        <FooterBottom />
      </BrowserRouter>
    </ModalProvider>
  );
}

export default Router;
