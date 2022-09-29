import React, { useState, useEffect } from "react";
import styled from "styled-components";
import banner from "../../assets/images/made-banner.png";

import NoReview from "../../components/Review/NoReview";
import WriteReviewModal from "./WriteReviewModal";
import Content from "./ReveiwContent";

import grayStar from "../../assets/images/gray_star.png";
import yellowStar from "../../assets/images/yellow_star.png";

const Review = () => {
  const [isOpen, setOpen] = useState(false);

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
  }, []);
  // console.log(reviewData);
  const {
    totalAverage,
    tasteAverage,
    serviceAverage,
    moodAverage,
    restaurantReview,
  } = reviewData;
  // console.log(restaurantReview);
  const starView = totalAverage * 30;

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
            <span className="rate-number-max"> / 5</span>
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
        {isOpen && <WriteReviewModal setOpen={setOpen} />}
      </ListContainer>
    </>
  );
};

const RateContainer = styled.div`
  /* border-bottom: 1px solid #eaeaea; */

  .rate {
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    width: 100%;
    .star-box {
      width: 50%;
      .rate-star {
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 1000;
        margin-left: 55px;
        height: 35px;
        overflow: hidden;
        color: #fdbd0a;
        .pointOfStar {
          z-index: 10;
          height: 35px;
          width: 150px;
        }
      }
      .backgroundStar {
        position: absolute;
        top: 0px;
        left: 0px;
        margin-left: 55px;
        width: 150px;
        height: 35px;
      }
    }
  }

  .rate-number {
    padding-top: 27px;
    font-size: 30px;

    .rate-number-average {
      font-weight: 900;
      font-family: "NanumSquareRound", sans-serif;
    }
    .rate-number-max {
      font-weight: 400;
      font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
        Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic",
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    }
  }

  .rate-condition {
    display: flex;
    padding: 26px 0;
    margin-bottom: 50px;
    width: 100%;

    border-radius: 12px;
    background-color: #f4f9ff;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
      Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

    .condition {
      display: flex;
      justify-content: space-between;
      padding: 0 32px;
      width: 33%;
      font-size: 18px;

      .content {
        font-weight: 800;
        color: #63a1ff;
      }
    }
    .flavor,
    .mood {
      border-right: 1px solid #cde0ff;
    }
  }
`;

const SubmitContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px;
  button {
    padding: 16px 40px;
    width: 224px;
    border: none;
    border-radius: 16px;
    background-color: #569aff;
    color: white;
    font-size: 18px;
    font-weight: 800;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
      Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

    &:hover {
      background-color: #2f7bf2;
    }
  }
`;
const ListContainer = styled.div`
  img {
    width: 100%;
    border-radius: 16px;
  }

  .select-bar {
    display: flex;
    justify-content: space-between;
    padding: 34px 0 8px;
    border-bottom: 1px solid #202020;

    .photo-select {
      padding: 15px;
      font-size: 15px;
      font-weight: 700;
      font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
        Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic",
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

      .photo-review {
      }
      .toggle-btn {
        padding-left: 10px;
      }

      .sort {
        display: flex;
        align-items: center;
      }
    }
  }
`;
const ReviewContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 8px 30px;
  border-bottom: 1px solid #eaeaea;
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
    Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic",
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

  .text {
    .user-box {
      display: flex;
      align-items: center;

      .user-img {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        border-radius: 16px;
        background-color: #eaeaea;

        svg {
          color: #808080;
          font-size: 14px;
        }
      }

      .user-id {
        padding-left: 10px;
        font-size: 15px;
        font-weight: 700;
      }
    }

    .rate-date {
      margin-top: 11px;

      .comment-rate {
        padding-right: 5px;
        border-right: 2px solid #eaeaea;
        letter-spacing: 1.5px;
      }
      .date {
        margin-left: 5px;
        color: #808080;
        font-size: 14px;
        font-weight: 600;
      }
    }

    .content {
      margin: 10px 0 15px;
      color: #606060;
      font-weight: 500;
    }

    .like-btn {
      display: flex;

      svg {
        color: #808080;
        font-weight: 900;
      }

      .like-num {
        display: flex;
        align-items: center;
        padding-left: 10px;
      }
    }
  }

  .photo {
    img {
      width: 100px;
      border-radius: 16px;
    }
  }
`;

export default Review;
