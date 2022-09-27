import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import RentCarHeader from "../../components/Header/RentCarHeader";
import ImgCard from "../RentCar/RentCarList/RentCarCard/ImgCard/ImgCard";
import "./RentCarDetail.scss";

function RentCarDetail() {
  const location = useLocation();

  useEffect(() => {
    const rentCompanyCarId = decodeURIComponent(location.search).split("&");
    console.log(rentCompanyCarId);
  }, [location]);

  return (
    <div>
      <RentCarHeader />
      <ImgCard />
    </div>
  );
}

export default RentCarDetail;
