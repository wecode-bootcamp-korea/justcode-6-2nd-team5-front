import React, { useEffect, useState } from "react";
import "./Mypage.scss";
import GrayBox from "./GrayBox/GrayBox";
import MyPlan from "./MyPlan/MyPlan";
import PointBox from "./PointBox/PointBox";
import Profile from "./Profile/Profile";
import Snb from "./Snb/Snb";
import ServiceList from "./ServiceList/ServiceList";
import bookMarkIcon from "../../assets/images/bookmark-icon.png";
import reviewIcon from "../../assets/images/review-icon.png";
import couponIcon from "../../assets/images/coupon-icon.png";
import { useLocation } from "react-router-dom";

function Mypage() {
  const location = useLocation();

  // GrayBox Component Mockdata
  const GrayBoxContent = [
    {
      iconUrl: bookMarkIcon,
      content: "북마크",
    },
    {
      iconUrl: reviewIcon,
      content: "이용후기",
    },
    {
      iconUrl: couponIcon,
      content: "보유쿠폰",
    },
  ];

  // ServiceList Component Mockdata
  const serviceBtns1 = [
    "결항안내",
    "렌터카 예약안내",
    "렌터카 보험안내",
    "렌터카 인수반납",
    "숙박 이용안내",
    "취소/환불 안내",
  ];

  const serviceBtns2 = [
    "자주 찾는 질문",
    "1:1문의",
    "수정제안 내역",
    "결제수단관리",
  ];

  const [userInfo, setUserInfo] = useState({});
  const [rentCarReserveinfo, setRentCarReserveinfo] = useState([]);

  useEffect(() => {
    const url = "http://localhost:8000/rentcar/myreservation";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // Profile props
        setUserInfo(data[0].userinfo);

        // MyPlan props: rentCar
        setRentCarReserveinfo(data);
      });
  }, []);

  return (
    <div className="mypage-container">
      <Snb />
      <div className="mypage-content">
        <Profile user={userInfo} />
        <PointBox />
        <GrayBox GrayBoxContent={GrayBoxContent} />
        <p className="mypage-content-title">나의 여행일정</p>
        <MyPlan rentCar={rentCarReserveinfo} user={userInfo} />
        <p className="mypage-content-title">서비스 이용안내</p>
        <ServiceList content={"guide"} btns={serviceBtns1} btnwidth={"33.3%"} />
        <p className="mypage-content-title">고객센터</p>
        <ServiceList content={"center"} btns={serviceBtns2} btnwidth={"25%"} />
      </div>
    </div>
  );
}

export default Mypage;
