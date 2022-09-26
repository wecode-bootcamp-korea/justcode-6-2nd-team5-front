import React from "react";
import FixHeader from "../../components/Header/FixHeader";
import Banner from "../../components/Banner/Banner";
import Car from "../../components/Car/Car";
import Promotion from "../../components/Promotion/Promotion";
import Lodge from "../../components/Lodge/Lodge";
import Restaurant from "../../components/Restaurant/Restaurant";

function Main() {
  return (
    <>
      <FixHeader />
      <Banner />
      <Car />
      <Promotion />
      <Lodge />
      <Restaurant />
    </>
  );
}

export default Main;
