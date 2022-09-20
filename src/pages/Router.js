import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Nav from "./Nav";
import FooterTop from "./FooterTop";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes></Routes>
      <FooterTop />
    </BrowserRouter>
  );
}

export default Router;
