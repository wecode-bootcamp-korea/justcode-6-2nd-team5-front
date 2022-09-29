import React, { useState, useEffect } from "react";
import banner from "../../assets/images/made-banner.png";

import NoReview from "./NoReview";
import RentcarReviewWrite from "./RentcarReviewWrite";
import Content from "./ReveiwContent";
import { RateContainer, SubmitContainer, ListContainer } from "./ReviewStyled";

import grayStar from "../../assets/images/gray_star.png";
import yellowStar from "../../assets/images/yellow_star.png";
import { useLocation, useParams } from "react-router-dom";

const RentcarReview = () => {
  const location = useLocation();
  const url = new URLSearchParams(location.search);
  const rentcarId = url.get("rentCompanyCarId");
  const [isOpen, setOpen] = useState(false);
  const [render, setRender] = useState(false);
  const [road, setRoad] = useState(false);
  const [reviewData, setReviewData] = useState([
    {
      carName: "",
      kindPoint: 0,
      cleanPoint: 0,
      conveniencePoint: 0,
      reviewPoint: 0,
      totalReviewCount: 0,
      reviewList: [],
    },
  ]);

  useEffect(() => {
    fetch(`http://localhost:8000/rentcar/detail?rentCompanyCarId=${rentcarId}`)
      .then((res) => res.json())
      .then((json) => {
        setReviewData(json);
        setRender(true);
      });
  }, [render, road]);

  // useEffect(() => {
  //   fetch("/data/rentcar/rentcarDetail.json")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setReviewData(json);
  //       setRender(true);
  //     });
  // }, [render, road]);

  console.log(reviewData);
  const {
    carName,
    kindPoint,
    cleanPoint,
    conveniencePoint,
    reviewPoint,
    totalReviewCount,
    reviewList,
  } = reviewData[0];

  // console.log(carName);
  const starView = reviewPoint * 36;

  return (
    render && (
      <>
        <RateContainer rentcar>
          <div className="rate">
            <div className="star-box">
              <div className="rate-star" style={{ width: starView }}>
                <img className="pointOfStar" alt="별" src={yellowStar} />
              </div>
              <img className="backgroundStar" alt="별" src={grayStar} />
            </div>
            <div className="rate-number">
              <span className="rate-number-average">
                {reviewPoint !== undefined && Math.round(reviewPoint * 10) / 10}
              </span>
              <span className="rate-slash"> /</span>
              <span className="rate-number-max"> 5</span>
            </div>
          </div>
          <div className="rate-condition">
            <div className="flavor condition">
              <span>친절</span>
              <span className="content">{Math.round(kindPoint * 10) / 10}</span>
            </div>
            <div className="mood condition">
              <span>청결</span>
              <span className="content">
                {Math.round(cleanPoint * 10) / 10}
              </span>
            </div>
            <div className="service condition">
              <span>편의</span>
              <span className="content">
                {Math.round(conveniencePoint * 10) / 10}
              </span>
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
                리뷰(
                {totalReviewCount})
              </span>
            </div>
          </div>
          {reviewList !== undefined &&
            reviewList.map((content) => (
              <Content key={content.reviewId} content={content} />
            ))}
          {totalReviewCount === 0 && <NoReview />}
          {isOpen && (
            <RentcarReviewWrite
              carName={carName}
              setOpen={setOpen}
              setRoad={setRoad}
            />
          )}
        </ListContainer>
      </>
    )
  );
};

export default RentcarReview;
