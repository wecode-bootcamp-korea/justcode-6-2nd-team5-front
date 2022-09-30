import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AlertModal from "../../components/AlertModal/AlertModal";
import RentCarHeader from "../../components/Header/RentCarHeader";
import ImgCard from "../RentCar/RentCarList/RentCarCard/ImgCard/ImgCard";
import "./RentCarDetail.scss";
import RentCarInfo from "./RentCarInfo/RentCarInfo";
import RentCarRule from "./RentCarRule/RentCarRule";
import RentCarSnb from "./RentCarSnb/RentCarSnb";
import RenterCarInsurance from "./RenterCarInsurance/RenterCarInsurance";
import RentcarReview from "../../components/Review/RentcarReview";

function RentCarDetail() {
  const location = useLocation();
  const navigate = useNavigate();

  // 차량 정보: ImgCard props
  const [carInfo, setCarInfo] = useState({});

  // 차량/보험 정보: RenterCarInsurance props
  const [insurance, SetInsurance] = useState({});

  // 업체 정보: RentCarInfo props
  const [rentCaompanyInfo, setRentCompanyInfo] = useState({});

  // 예약 정보: RentCarSnb props
  const [reservedInfo, setReservedInfo] = useState({});

  // 차량 정보가 없다면?
  const [isNone, setIsNone] = useState(false);
  const [prevUrl, setPrevUrl] = useState("");
  // 모달창 닫으면 이전페이지로 이동하는 함수
  const goPrev = () => {
    const prev = "/rentcar/searchList" + prevUrl;
    navigate(prev);
  };

  useEffect(() => {
    // 쿼리 변수들 리스트에 담음
    const conditionList = decodeURIComponent(location.search).split("&");

    // 쿼리변수에서 rentCompanyCarId 값 추출
    const rentCompanyCarId = conditionList.pop().split("=")[1];

    // 이전 페이지 url 세팅
    setPrevUrl(conditionList.join("&"));

    // 렌트카 정보 API
    const url = `http://localhost:8000/rentcar/detail?rentCompanyCarId=${decodeURIComponent(
      rentCompanyCarId
    )}`;
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data === "없는 차량입니다") {
          console.log(data);
          // 차량 없을시 모달창
          setIsNone(false);
          setReservedInfo(false);
        } else {
          // 차량 있을 시 차량 정보 UI
          setIsNone(true);

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

          // RentCarRule props
          SetInsurance({
            age: data[0].age,
            experience: data[0].experience,
            insurance: data[0].insurance,
          });

          // RentCarSnb props
          setReservedInfo({
            rentcompanycarid: rentCompanyCarId,
            rentStartDate: conditionList[0]
              .replace(/^./, "")
              .split("=")[1]
              .split("(")[0],
            rentEndDate: conditionList[1].split("=")[1].split("(")[0],
            rentStartTime: conditionList[2].split("=")[1],
            rentEndTime: conditionList[3].split("=")[1],
            price: data[0].price,
          });
        }
      });
  }, [location]);

  const [tabIndex, setTabIndex] = useState(1);

  return (
    <>
      {reservedInfo && (
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
                {tabIndex === 2 && <RenterCarInsurance insurance={insurance} />}
                {tabIndex === 3 && <RentcarReview />}
                {tabIndex === 4 && <RentCarInfo company={rentCaompanyInfo} />}
              </div>
            </div>
            <RentCarSnb reservedInfo={reservedInfo} />
          </div>
        </div>
      )}
      {!isNone && !reservedInfo && (
        <AlertModal
          closeModal={goPrev}
          alertMessage={[
            "경고",
            "차량 정보가 없습니다.",
            "이전 페이지로 돌아가기",
          ]}
        />
      )}
    </>
  );
}

export default RentCarDetail;
