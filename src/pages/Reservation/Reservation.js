import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Snb from "../Mypage/Snb/Snb";
import ImgCard from "../RentCar/RentCarList/RentCarCard/ImgCard/ImgCard";
import RentCarInfo from "../RentCarDetail/RentCarInfo/RentCarInfo";
import "./Reservation.scss";

function Reservation() {
  const location = useLocation();

  const [carInfo, setCarInfo] = useState({});
  const [info, setInfo] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [reserveInfo, setReserveInfo] = useState({});
  const [companyInfo, setCompanyInfo] = useState({});

  useEffect(() => {
    // reservation/rentcar/[예약번호]
    fetch(`http://localhost:8000${location.pathname}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY2NDQ4MDY0MCwiZXhwIjoxNjY0NTY3MDQwfQ.1tC6j_pceSGxijKyGOmAN_I9QXWEhbaEwT9BU3nI9-g",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCarInfo({
          carName: data[0].carinfo.carname,
          carPhoto: data[0].carinfo.carphoto,
          rentcaryearinfo: data[0].carinfo.driveexperience,
        });

        setInfo(data[0].carinfo);
        setUserInfo(data[0].userinfo);
        setReserveInfo(data[0].reserveinfo);
        setCompanyInfo(data[0].companyinfo);
      });
  }, []);
  return (
    <>
      {carInfo && (
        <div className="reservation-container mypage-container">
          <Snb />
          <div className="reservation-content">
            <p className="reservation-content-title">렌터카</p>
            <ImgCard carInfo={carInfo} styleChange={true} />
            <div className="rentcar-detail-map">
              <iframe
                src={companyInfo.mapaddress}
                width="100%"
                height="400px"
                referrerPolicy="SAMEORIGIN"
                style={{ borderRadius: "10px", marginBottom: "20px" }}
              ></iframe>
            </div>
            <div className="reservation-info-box">
              <div className="type">
                <p>차량 이름</p>
                <p>차량 종류</p>
                <p>보험 종류</p>
                <p>렌터카 본사 이름</p>
                <p>렌터카 휴대전화</p>
                <p>렌터카 대여 주소</p>
                <p>렌터카 대여 시간</p>
                <p>렌터카 반납 시간</p>
              </div>
              <div className="info">
                <p>{info.carname}</p>
                <p>{info.cartype}</p>
                <p>{info.driveinsurance}</p>
                <p>{companyInfo.rentcarcompanyname}</p>
                <p>{companyInfo.rentcarcompanyphonenumber}</p>
                <p>{companyInfo.shuttleplace}</p>
                <p>{reserveInfo.rentdate}</p>
                <p>{reserveInfo.returndate}</p>
              </div>
            </div>
            <div className="detail-wrap">
              <div className="user-detail-wrap">
                <p className="title">예약자 정보</p>
                <div className="content-box">
                  <div className="type">
                    <p>이름</p>
                    <p>휴대전화</p>
                    <p>이메일</p>
                  </div>
                  <div className="info">
                    <p>{userInfo.username}</p>
                    <p>{userInfo.userphonenumber}</p>
                    <p>{userInfo.useremail}</p>
                  </div>
                </div>
              </div>
              <div className="reservation-detail-wrap">
                <p className="title">예약 정보</p>
                <div className="content-box">
                  <div className="type">
                    <p>예약번호</p>
                    <p>예약일시</p>
                    <p>예약상태</p>
                  </div>
                  <div className="info">
                    <p>{reserveInfo.reservationid}</p>
                    <p>{reserveInfo.created_at}</p>
                    <p style={{ color: "var(--color-bright-blue)" }}>
                      예약완료
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Reservation;
