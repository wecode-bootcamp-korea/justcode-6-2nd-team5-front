import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./Nav";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes></Routes>
      <FooterTop />
      <FooterBottom />
    </BrowserRouter>
  );
}

export default Router;
