import React, { useState } from "react";

import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantReview from "./RestaurantReview";

import "./RestaurantDetail.scss";

function RestaurantDetail() {
  const [tabIndex, setTabIndex] = useState(1);
  return (
    <>
      <div className="restaurant-detail-top">
        <div>
          <img src="https://static-file.jejupass.com/download/15072.webp?width=928&height=928"></img>
        </div>
        <div className="detail-info">
          <h1>그마니네식당</h1>
          <span>#애월맛집</span>
          <span>#은갈치</span>
          <span>#전복해물탕</span>
          <p>
            맛도 그만! 가격도 그만! 만족하면 그만!이라는 뜻의 이곳은 통갈치
            전문점이에요. 푸짐한 한상에 전복, 딱새우, 순두부, 수제비 그리고
            통갈치까지 알차게 만날 수 있어요. 직접 손질해주시는 해물들을
            편리하게 먹을 수 있어 남녀노소 누구나 즐기기 좋아요.
          </p>
          <p>
            위치 <span>애월</span>
          </p>
          <p>
            리뷰 <span>2.7</span>
          </p>
        </div>
      </div>
      <div className="restaurant-detail-wrapper">
        <div className="restaurant-button-wrapper">
          <button onClick={() => setTabIndex(1)}>업체정보</button>

          <button onClick={() => setTabIndex(2)}>메뉴</button>

          <button onClick={() => setTabIndex(3)}>리뷰</button>
        </div>

        {tabIndex === 1 && <RestaurantInfo />}
        {tabIndex === 2 && <RestaurantMenu />}
        {tabIndex === 3 && <RestaurantReview />}
      </div>
    </>
  );
}
export default RestaurantDetail;
