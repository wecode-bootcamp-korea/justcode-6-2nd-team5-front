import React, { useState } from "react";
import "./HotelDetail.scss";
import Rooms from "./Rooms";
import Policies from "./Policies";
import Facilities from "./Facilities";
import Location from "./Location";
// import BookmarkIcon from "../../assets/images/bookmark-icon.png";
// import Share from "../../assets/images/hotel-share.png";

function HotelDetail() {
  const [tabIndex, setTabIndex] = useState(1);
  return (
    <div className="hotel-detail-container">
      <div className="hotel-detail-contens">
        <div className="hotel-detail-top">
          <div>
            <img src="https://static-file.jejupass.com/download/15072.webp?width=928&height=928"></img>
          </div>
          <div className="hotel-detail-info">
            <div className="detail-event">
              <span className="detail-e-border">제주패스 단독</span>
            </div>
            <h1>유수암 소랑</h1>
            <p className="span-style">[제주패스X유수암소랑 단독오픈]</p>
            <p>'소랑은'제주방언으로 '사랑'을 뜻합니다</p>
            <p>
              유수암 소랑에 머물고 가시는 모든 분들이 사랑으로 충만하시길 바라며
            </p>
            <p>
              여러분의 안락한 휴식공간을 선물해 드리기 위해 최선을 다하겠습니다.
            </p>
            <div>
              <button className="hotel-tag-item">#인기</button>
              <button className="hotel-tag-item">#감성숙소</button>
              <button className="hotel-tag-item">#특급호텔</button>
              <button className="hotel-tag-item">#바비큐</button>
            </div>
            <div className="detail-bottom">
              <p>
                위치 <span>제주도>제주시>애월</span>
              </p>
            </div>
          </div>
        </div>
        <div className="hotel-detail-wrapper">
          <div className="hotel-btn-wrapper">
            <div>
              <button onClick={() => setTabIndex(1)} className="hotel-tabs-btn">
                객실선택
              </button>
              <button onClick={() => setTabIndex(2)} className="hotel-tabs-btn">
                이용안내
              </button>
              <button onClick={() => setTabIndex(3)} className="hotel-tabs-btn">
                편의시설
              </button>
              <button onClick={() => setTabIndex(4)} className="hotel-tabs-btn">
                지도
              </button>
              {tabIndex === 1 && <Rooms />}
              {tabIndex === 2 && <Policies />}
              {tabIndex === 3 && <Facilities />}
              {tabIndex === 4 && <Location />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HotelDetail;
