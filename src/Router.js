import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/Main";
import Esg from "./pages/Menu/Esg";
import RenterCar from "./pages/Menu/RenterCar";
import Accomodation from "./pages/Menu/Accomodation";
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
import RestaurantDetail from "./pages/Restaurant/RestaurantDetail/RestaurantDetail";
import RestaurantMain from "./pages/Restaurant/RestaurantMain";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/esg" element={<Esg />} />
        <Route path="/rentercar" element={<RenterCar />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/restaurant" element={<RestaurantMain />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
        <Route path="/restaurant/detail/:id" element={<RestaurantDetail />} />
        <Route path="/preparing" element={<Preparing />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/rentercar/rentcar/:id" element={<RentCar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/termsSignup" element={<TermsSignup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupFin" element={<SignupFin />} />
        <Route path="/preparing" element={<Preparing />} />
      </Routes>
      <FooterTop />
      <FooterBottom />
    </BrowserRouter>
  );
}

export default Router;
