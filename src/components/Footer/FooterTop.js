import React from "react";
import "./FooterTop.scss";
import { FcAndroidOs } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiNaver } from "react-icons/si";

const FooterTop = () => {
  return (
    <div className="foot-top-container">
      <ul className="foot-info flex">
        <li>
          <h6 className="foot-menu">제주조아</h6>
          <a>회사소개</a>
          <a>회원혜택 안내</a>
        </li>
        <li>
          <h6 className="foot-menu">고객센터</h6>
          <a>공지사항</a>
          <a>자주찾는질문</a>
          <a>예약확인</a>
        </li>
        <li>
          <h6 className="foot-menu">ESG</h6>
          <a>그린 앰버서더</a>
          <a>캠페인 기부</a>
        </li>
      </ul>
      <div className="foot-app-down">
        <h6 className="foot-menu">App 다운로드</h6>
        <p className="foot-text">
          제주조아 앱 설치하고 <br />더 편리하게 이용하세요.
        </p>
        <div className="down-btn-box flex">
          <button>
            <span className="icon">
              <FcAndroidOs size="27px" />
            </span>
            <span>구글플레이</span>
          </button>
          <button>
            <span className="icon">
              <BsApple size="20px" />
            </span>
            <span>앱스토어</span>
          </button>
        </div>
      </div>
      <div className="foot-contact flex">
        <li>
          <h6 className="foot-menu">전화예약 / 고객상담 </h6>
          <p className="foot-text">
            이용에 궁금하신 점이
            <br />
            있으신가요?
          </p>
          <div className="social-btn-box">
            <button>
              <BsInstagram color="white" size="18px" />
            </button>
            <button>
              <SiNaver color="white" size="18px" />
            </button>
          </div>
        </li>
        <ul>
          <h5 className="phone-number">1544-0445 </h5>
          <p className="foot-text">
            <li className="flex-between">
              <span>평일 </span>
              <span> 09:00 ~ 18:00 </span>
            </li>
            <li className="flex-between">
              <span>점심 </span>
              <span> 12:00 ~ 13:00 </span>
            </li>
          </p>
        </ul>
      </div>
    </div>
  );
};

export default FooterTop;
