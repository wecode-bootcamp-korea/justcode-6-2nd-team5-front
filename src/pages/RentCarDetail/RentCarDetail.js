import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RentCarHeader from "../../components/Header/RentCarHeader";
import ImgCard from "../RentCar/RentCarList/RentCarCard/ImgCard/ImgCard";
import "./RentCarDetail.scss";

function RentCarDetail() {
  const location = useLocation();

  const [carInfo, setCarInfo] = useState([]);

  const [rentCaompanyInfo, setRentCompanyInfo] = useState([]);

  useEffect(() => {
    const conditionList = decodeURIComponent(location.search).split("&");
    const rentCompanyCarId = conditionList[8].split("=")[1];
    console.log(rentCompanyCarId);

    fetch(
      "/data/rentcar/rentcarDetail.json"
      // {
      // method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify({
      //   rentCompanyCarId: rentCompanyCarId,
      // }),
      // }
      //
    )
      .then((res) => res.json())
      .then((data) => {
        setCarInfo({
          carName: data[0].carName,
          carPhoto: data[0].carPhoto,
          ridePeopleNumber: data[0].ridePeopleNumber,
          oilType: data[0].oilType,
          rentcaryearinfo: data[0].rentcaryearinfo,
        });
      });
  }, [location]);

  return (
    <div className="rentcar-detail-container">
      <RentCarHeader />
      <div className="rentcar-detail-content">
        <div className="rentcar-detail-list-wrap">
          <ImgCard carInfo={carInfo} styleChange={true} />
          <p className="rule">운임규정 및 취소 규정 안내 &gt;</p>
        </div>
        <div className="rentcar-detail-snb"></div>
      </div>
    </div>
  );
}

export default RentCarDetail;
