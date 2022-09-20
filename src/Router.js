import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login/login";
import TermsSignup from "./components/termsSignup";
import Signup from "./pages/signup/signup";
import SignupFin from "./components/signupFin";
import SignupModal from "./components/signupModal";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/termsSignup" element={<TermsSignup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signupModal" element={<SignupModal />} />
        <Route path="/signupFin" element={<SignupFin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
