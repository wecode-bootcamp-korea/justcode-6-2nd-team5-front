import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ModalProvider from "./components/Context/ModalContext";

import Nav from "./components/Nav/Nav";
import Main from "./pages/Main/Main";
import Esg from "./pages/Menu/Esg";
import RenterCar from "./pages/Menu/RenterCar";
import Accomodation from "./pages/Menu/Accomodation";
import Mypage from "./pages/Mypage/Mypage";
import RentCar from "./pages/RentCar/RentCar";
import Preparing from "./pages/Menu/Preparing";
import Hotel from "./pages/Hotel/Hotel";
import Login from "./pages/login/login";
import TermsSignup from "./components/signup/termsSignup";
import Signup from "./pages/signup/signup";
import SignupFin from "./components/signup/signupFin";
import FooterTop from "./components/Footer/FooterTop";
import FooterBottom from "./components/Footer/FooterBottom";
import HotelThema from "./components/Hotel/HotelThema";
import HotelDetail from "./components/Hotel/HotelDetail";
import Restaurant from "./pages/Restaurant/Restaurant";
import RestaurantDetail from "./pages/Restaurant/RestaurantDetail/RestaurantDetail";
import RestaurantMain from "./pages/Restaurant/RestaurantMain";
import RentCarDetail from "./pages/RentCarDetail/RentCarDetail";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function Router() {
  return (
    <ModalProvider>
      <BrowserRouter>
        <Nav />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/esg" element={<Esg />} />
          <Route path="/rentcar" element={<RenterCar />} />
          <Route path="/accomodation" element={<Accomodation />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/rentcar/:id" element={<RentCar />} />
          <Route path="/rentcarDetail/:id" element={<RentCarDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/termsSignup" element={<TermsSignup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signupFin" element={<SignupFin />} />
          <Route path="/preparing" element={<Preparing />} />
          <Route path="/restaurant" element={<RestaurantMain />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
          <Route path="/restaurant/detail/:id" element={<RestaurantDetail />} />
          <Route path="/restaurantDetail" element={<RestaurantDetail />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/hotelThema" element={<HotelThema />} />
          <Route path="/hotelDetail" element={<HotelDetail />} />

          <Route path="/flight" element={<Preparing />} />
          <Route path="/cafepass" element={<Preparing />} />
          <Route path="/trip" element={<Preparing />} />
        </Routes>
        <FooterTop />
        <FooterBottom />
      </BrowserRouter>
    </ModalProvider>
  );
}

export default Router;
