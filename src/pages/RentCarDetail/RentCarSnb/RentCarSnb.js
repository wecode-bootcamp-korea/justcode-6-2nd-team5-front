import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertModal from "../../../components/AlertModal/AlertModal";
import "./RentCarSnb.scss";

function RentCarSnb(props) {
  const { reservedInfo } = props;
  const navigate = useNavigate();

  // 네브 스크롤시 따라오게 하기
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  const scrollFixed = () => {
    if (scrollY > 100) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener("scroll", scrollFixed);
    };
    scrollListener();
    return () => {
      window.removeEventListener("scroll", scrollFixed);
    };
  });

  //천단위 , 찍기 위한 함수
  const numberFormat = (num) => {
    if (num >= 1000) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return num.toString();
    }
  };

  // 규칙 및 유의사항 모달창 닫는 함수
  const [isModal, setIsModal] = useState(false);

  const closeModal = (isDone) => {
    if (isDone) {
      console.log(reservedInfo);
      // 예약 정보 POST
      fetch("http://localhost:8000/rentcar/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: JSON.stringify(reservedInfo),
      })
        .then((res) => res.json())
        .then(() => {
          // 예약 완료 후 마이페이지로 이동
          navigate("/mypage");
        });
    } else {
      setIsModal(false);
    }
  };

  const openeModal = () => {
    setIsModal(true);
  };

  return (
    <div className={`rentcar-detail-snb-wrap ${scrollActive ? "fixed" : ""}`}>
      <div className="rentcar-detail-column">
        <div className="top-box">
          <p className="main-title">선택한 요금제 정보</p>
          <p className="title">
            대여요금(할인가)
            <span className="small-price">
              {/* {numberFormat(reservedInfo.price)}원 */}
            </span>
          </p>

          <p>완전자차 포함</p>
        </div>
        <div className="coupon-and-point-box">
          <p className="title">쿠폰 & 쿠폰 적용</p>
          <div>로그인하고 혜택받기 &gt;</div>
        </div>
        <div className="price-box">
          <p className="title">
            최종 결제금액
            <span className="big-price">
              {/* {numberFormat(reservedInfo.price)}원 */}
            </span>
          </p>
        </div>
        <div className="point-box">
          <p className="title">
            최대 적립 포인트
            <span style={{ fontWeight: "400" }}>최대</span> 1,713P
          </p>
          <p>
            기본 적립 <span>313P</span>
          </p>
          <p>
            포토리뷰 작성시 <span>150P</span>
          </p>
        </div>
        <div className="plus-point-box">
          <p className="title">
            포인트 더 받기
            <span style={{ fontWeight: "400" }}>최대</span> 1,251P
          </p>
          <p>
            그린 앱시시더 적립 <span>626P</span>
          </p>
          <p>
            충전 포인트로 결제시 <span>626P</span>
          </p>
        </div>
        <div className="alert-box">
          <p className="title">바로 결제해야 예약 확정</p>
          <span style={{ color: "gray", fontWeight: "bold" }}>
            시간이 경과될 경우 좌석이 매진되거나 요금이 변동될 수 있습니다.
          </span>
        </div>
        <button className="service-btn">슈퍼무제한으로 예약</button>
      </div>
      <button className="submit-btn" onClick={openeModal}>
        예약
      </button>
      {isModal && <AlertModal closeModal={closeModal} />}
    </div>
  );
}

export default RentCarSnb;
