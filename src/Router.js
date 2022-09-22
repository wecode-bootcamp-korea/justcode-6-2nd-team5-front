import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Mypage from "./pages/Mypage/Mypage";
import RentCar from "./pages/RentCar/RentCar";
import Main from "./pages/Main/Main";
import Login from "./pages/login/login";
import TermsSignup from "./components/Signup/TermsSignup";
import Signup from "./pages/Signup/Signup";
import SignupFin from "./components/Signup/SignupFin";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/rentcar" element={<RentCar />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/termsSignup" element={<TermsSignup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupFin" element={<SignupFin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
