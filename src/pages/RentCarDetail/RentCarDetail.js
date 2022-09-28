import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RentCarHeader from "../../components/Header/RentCarHeader";
import ImgCard from "../RentCar/RentCarList/RentCarCard/ImgCard/ImgCard";
import "./RentCarDetail.scss";
import RentCarInfo from "./RentCarInfo/RentCarInfo";
import RentCarRule from "./RentCarRule/RentCarRule";
import RenterCarInsurance from "./RenterCarInsurance/RenterCarInsurance";

function RentCarDetail() {
  const location = useLocation();

  // 차량 정보: ImgCard props
  const [carInfo, setCarInfo] = useState({});

  // 업체 정보: RentCarInfo props
  const [rentCaompanyInfo, setRentCompanyInfo] = useState({});

  // 차량/보험 정보: RenterCarInsurance props
  const [insurance, SetInsurance] = useState([]);

  useEffect(() => {
    const conditionList = decodeURIComponent(location.search).split("&");
    const rentCompanyCarId = conditionList[8].split("=")[1];
    console.log(rentCompanyCarId);

    // 렌트카 정보 API
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
        // ImgCard props
        setCarInfo({
          carName: data[0].carName,
          carPhoto: data[0].carPhoto,
          ridePeopleNumber: data[0].ridePeopleNumber,
          oilType: data[0].oilType,
          rentcaryearinfo: data[0].rentcaryearinfo,
        });

        // RentCarInfo props
        setRentCompanyInfo({
          name: data[0].rentCarCompany,
          address: data[0].rentCarCompanyAddress,
          tel: data[0].rentCarCompanyPhoneNumber,
          mapAddress: data[0].mapaddress,
          rentPlace: data[0].rentPlace,
          shuttlePlace: data[0].shuttlePlace,
          shuttleSchedule: data[0].shuttleSchedule,
          shuttleInterval: data[0].shuttleInterval,
          shuttleRequiredTime: data[0].shuttleRequiredTime,
        });
      });
  }, [location]);

  const [tabIndex, setTabIndex] = useState(1);

  return (
    <div className="rentcar-detail-container">
      <RentCarHeader />
      <div className="rentcar-detail-content">
        <div className="rentcar-detail-list-wrap">
          <ImgCard carInfo={carInfo} styleChange={true} />
          <p className="rule">운임규정 및 취소 규정 안내 &gt;</p>
          <div className="rentcar-detail-info-box">
            <div className="rentcar-button-wrap">
              <button onClick={() => setTabIndex(1)}>유의사항</button>

              <button onClick={() => setTabIndex(2)}>차량/보험</button>

              <button onClick={() => setTabIndex(3)}>리뷰</button>

              <button onClick={() => setTabIndex(4)}>업체정보</button>
            </div>
            {tabIndex === 1 && <RentCarRule />}
            {tabIndex === 2 && <RenterCarInsurance />}
            {/* {tabIndex === 3 && <RestaurantReview />} */}
            {tabIndex === 4 && <RentCarInfo company={rentCaompanyInfo} />}
          </div>
        </div>
        <div className="rentcar-detail-snb"></div>
      </div>
    </div>
  );
}

export default RentCarDetail;
