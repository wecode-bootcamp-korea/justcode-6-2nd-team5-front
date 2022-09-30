import React, { useState, useEffect } from "react";
import banner from "../../assets/images/made-banner.png";

import NoReview from "./NoReview";
import WriteReviewModal from "./WriteReviewModal";
import Content from "./ReveiwContent";
import { RateContainer, SubmitContainer, ListContainer } from "./ReviewStyled";

import grayStar from "../../assets/images/gray_star.png";
import yellowStar from "../../assets/images/yellow_star.png";
import { useParams } from "react-router-dom";

const RestaurantReview = () => {
  const { id } = useParams();
  const [isOpen, setOpen] = useState(false);
  const [render, setRender] = useState(true);
  const [reviewData, setReviewData] = useState([]);
  const [isChecked, setChecked] = useState(false);

  const handleChecked = (e) => {
    setChecked((current) => !current);
    console.log(isChecked);
  };

  useEffect(() => {
    isChecked
      ? fetch(`http://localhost:8000/restaurant/review?id=${id}`)
          .then((res) => res.json())
          .then((json) => {
            setReviewData(json);
          })
      : fetch(`http://localhost:8000/restaurant/review?id=${id}&category=photo`)
          .then((res) => res.json())
          .then((json) => {
            setReviewData(json);
          });
  }, [render]);

  const {
    totalAverage,
    tasteAverage,
    serviceAverage,
    moodAverage,
    restaurantReview,
    restaurantName,
  } = reviewData;

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
            <span className="content">
              {Math.round(tasteAverage * 10) / 10}
            </span>
          </div>
          <div className="mood condition">
            <span>분위기</span>
            <span className="content">{Math.round(moodAverage * 10) / 10}</span>
          </div>
          <div className="service condition">
            <span>서비스</span>
            <span className="content">
              {Math.round(serviceAverage * 10) / 10}
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
              포토리뷰(
              {restaurantReview !== undefined && restaurantReview.length})
            </span>
            <span className="toggle-btn">
              <input
                onClick={handleChecked}
                type="checkbox"
                name="photo-review"
                value="on"
              />
            </span>
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
          <WriteReviewModal
            restaurantName={restaurantName}
            setOpen={setOpen}
            setRender={setRender}
          />
        )}
      </ListContainer>
    </>
  );
};

export default RestaurantReview;
