import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./Nav";
import Header from "./Header";
import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Header />
      <Routes></Routes>
      <FooterTop />
      <FooterBottom />
    </BrowserRouter>
  );
}

export default Router;
