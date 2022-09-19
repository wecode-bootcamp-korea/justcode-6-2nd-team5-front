import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Mypage from "./pages/Mypage/Mypage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
