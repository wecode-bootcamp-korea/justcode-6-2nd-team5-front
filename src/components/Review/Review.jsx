import React, { useState, useEffect } from "react";
import banner from "../../assets/images/made-banner.png";

import NoReview from "../../components/Review/NoReview";
import WriteReviewModal from "./WriteReviewModal";
import Content from "./ReveiwContent";
import { RateContainer, SubmitContainer, ListContainer } from "./ReviewStyled";

import grayStar from "../../assets/images/gray_star.png";
import yellowStar from "../../assets/images/yellow_star.png";
import { useLocation } from "react-router-dom";

const Review = () => {
  const [isOpen, setOpen] = useState(false);
  const [render, setRender] = useState(true);

  // const replaceStr = (e) => {
  //   let len = e.length;
  //   return `${e.substring(0, len - 2)}*${e[len - 1]}`;
  // };

  //기완님 리뷰탭 클릭했을 때 데이터 받아온 다음 state에 저장해서 props로 넘겨주시면
  //될 것 같습니다...! props -> reviewData={reviewData} 이렇게 넘겨주세요!
  //props 사용하게 되면 아래 fetch 코드는 필요없으니까 지워주세용!
  const [reviewData, setReviewData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/restaurant/review?id=1")
      .then((res) => res.json())
      .then((json) => {
        setReviewData(json);
      });
  }, [render]);
  // console.log(reviewData);
  const {
    totalAverage,
    tasteAverage,
    serviceAverage,
    moodAverage,
    restaurantReview,
    restaurantName,
  } = reviewData;
  // console.log(restaurantReview);
  const starView = totalAverage * 36;

  return (
    <>
      <RateContainer>
        <div className="rate">
          <div className="star-box">
            <div className="rate-star" style={{ width: starView }}>
              <img className="pointOfStar" alt="별" src={yellowStar} />
            </div>
            <img className="backgroundStar" alt="별" src={grayStar} />
          </div>
          <div className="rate-number">
            <span className="rate-number-average">
              {totalAverage !== undefined && Math.round(totalAverage * 10) / 10}
            </span>
            <span className="rate-slash"> /</span>
            <span className="rate-number-max"> 5</span>
          </div>
        </div>
        <div className="rate-condition">
          <div className="flavor condition">
            <span>맛</span>
            <span className="content">{tasteAverage}</span>
          </div>
          <div className="mood condition">
            <span>분위기</span>
            <span className="content">{moodAverage}</span>
          </div>
          <div className="service condition">
            <span>서비스</span>
            <span className="content">{serviceAverage}</span>
          </div>
        </div>
      </RateContainer>
      <SubmitContainer>
        <button onClick={() => setOpen(true)}>리뷰 남기기</button>
      </SubmitContainer>
      <ListContainer>
        <img src={banner} />
        <div className="select-bar">
          <div className="photo-select">
            <span className="photo-review">
              포토리뷰(
              {restaurantReview !== undefined && restaurantReview.length})
            </span>
            <span className="toggle-btn">토글</span>
          </div>
        </div>
        {restaurantReview !== undefined &&
          restaurantReview.map((content) => (
            <Content key={content.id} content={content} />
          ))}
        {restaurantReview !== undefined && restaurantReview.length === 0 && (
          <NoReview />
        )}
        {isOpen && (
          <WriteReviewModal restaurantName={restaurantName} setOpen={setOpen} setRender={setRender} />
        )}
      </ListContainer>
    </>
  );
};

export default Review;
