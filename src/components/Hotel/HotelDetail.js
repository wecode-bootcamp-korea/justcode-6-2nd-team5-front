import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./HotelDetail.scss";
import Rooms from "./Rooms";
import Policies from "./Policies";
import Facilities from "./Facilities";
import Location from "./Location";
import HotelRanking from "../../components/Hotel/HotelRanking";
import Review from "../Review/Review";
import BookmarkIcon from "../../assets/images/bookmark-icon.png";
import ShareIcon from "../../assets/images/hotel-share.png";

function HotelDetail() {
  const location = useLocation();
  const id = location.state.id;
  const [tabIndex, setTabIndex] = useState(1);
  const [hotelData, setHotelData] = useState({
    id: "",
    name: "",
    intro: "",
    reviewPoint: "",
    bigAddress: "",
    regionAddress: "",
    fullAddress: "",
    photo: [],
    hashTag: "",
    tag: "",
    totalLike: "",
    room: [],
    review: [],
  });

  const navigate = useNavigate();
  const HotelRankingClick = () => {
    navigate("/hotelthema");
  };

  useEffect(() => {
    fetch(`http://localhost:8000/lodgment/item/${id}`, {
      // fetch("/data/hotel/hoteldetail.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setHotelData({
          ...hotelData,
          id: data.lodgment.id,
          name: data.lodgment.name,
          intro: data.lodgment.intro,
          reviewPoint: data.lodgment.reviewPoint,
          bigAddress: data.lodgment.bigAddress,
          regionAddress: data.lodgment.regionAddress,
          fullAddress: data.lodgment.fullAddress,
          photo: data.lodgment.photo,
          hashTag: data.lodgment.hashTag,
          tag: data.lodgment.tag,
          totalLike: data.lodgment.totalLike,
          room: data.room,
          review: data.review,
        });
      });
  }, []);

  // console.log("ROOM" + JSON.stringify(hotelData));

  return (
    <div className="hotel-detail-container">
      <div className="hotel-detail-contens">
        <div className="hotel-detail-top">
          <div>
            {/* <img src="https://static-file.jejupass.com/download/15072.webp?width=928&height=928"></img> */}

            <img src={hotelData.photo[0]}></img>
          </div>
          <div className="hotel-detail-info">
            <div className="detail-event">
              <span className="detail-e-border">제주패스 단독</span>
            </div>
            <h1>{hotelData.name}</h1>
            <p className="span-style">[제주패스X유수암소랑 단독오픈]</p>
            {/* <p>'소랑은'제주방언으로 '사랑'을 뜻합니다</p>
            <p>
              유수암 소랑에 머물고 가시는 모든 분들이 사랑으로 충만하시길 바라며
            </p>
            <p>
              여러분의 안락한 휴식공간을 선물해 드리기 위해 최선을 다하겠습니다.
            </p> */}
            <p>{hotelData.intro}</p>
            <div>
              <button className="hotel-tag-item">{hotelData.hashTag}</button>
              <button className="hotel-tag-item">#감성숙소</button>
              <button className="hotel-tag-item">#특급호텔</button>
              <button className="hotel-tag-item">#바비큐</button>
            </div>
            <div className="detail-bottom">
              <p>
                <div className="hotel-location">위치</div>
                <div className="hotel-address">
                  <span className="hotel-address-list after">
                    {hotelData.bigAddress}
                  </span>
                  <span className="hotel-address-list after">
                    {hotelData.regionAddress}
                  </span>
                  <span className="hotel-address-list ">
                    {hotelData.fullAddress}
                  </span>
                </div>
              </p>
              <div className="review-content">
                <div>
                  <span className="hotel-review">리뷰</span>
                  <span className="review-star">{hotelData.reviewPoint}</span>
                </div>
              </div>
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
              <button onClick={() => setTabIndex(5)} className="hotel-tabs-btn">
                리뷰
              </button>
              {tabIndex === 1 && <Rooms hotelData={hotelData} />}
              {tabIndex === 2 && <Policies />}
              {tabIndex === 3 && <Facilities />}
              {tabIndex === 4 && <Location hotelData={hotelData} />}
              {tabIndex === 5 && <Review reviewData={hotelData.review} />}
            </div>
          </div>
        </div>
        <div className="slider" onClick={HotelRankingClick}>
          <HotelRanking />
        </div>
      </div>
    </div>
  );
}
export default HotelDetail;
