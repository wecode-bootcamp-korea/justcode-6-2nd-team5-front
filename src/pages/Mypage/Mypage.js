import React from "react";
import "./Mypage.scss";
import MypageGrayBox from "./MypageGrayBox/MypageGrayBox";
import MypageMyPlan from "./MypageMyPlan/MypageMyPlan";
import MypagePoint from "./MypagePoint/MypagePoint";
import MypageProfile from "./MypageProfile/MypageProfile";
import MypageSnb from "./MypageSnb/MypageSnb";

function Mypage() {
  return (
    <div className="mypage-container">
      <MypageSnb />
      <div className="mypage-content todo">
        <MypageProfile />
        <MypagePoint />
        <MypageGrayBox />
        <p className="mypage-content-title">나의 여행일정</p>
        <MypageMyPlan />
        <p className="mypage-content-title">서비스 이용안내</p>
        <div className="mypage-service-wrap">
          <ul className="service-list">
            <li>
              <button>결항안내</button>
            </li>
            <li>
              <button>렌터카 예약안내</button>
            </li>
            <li>
              <button>렌터카 보험안내</button>
            </li>
            <li>
              <button>렌터카 인수반납</button>
            </li>
            <li>
              <button>숙박 이용안내</button>
            </li>
            <li>
              <button>취소/환불 안내</button>
            </li>
          </ul>
        </div>
        <p className="mypage-content-title">고객센터</p>
      </div>
    </div>
  );
}

export default Mypage;
