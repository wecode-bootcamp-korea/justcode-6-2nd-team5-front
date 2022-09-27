import React from "react";
import styled from "styled-components";
import banner from "../../assets/images/made-banner.png";
import testPhoto from "../../assets/images/test-photo.jpeg";
import { FaRegHeart, FaHeart, FaUserAlt } from "react-icons/fa";
import Content from "../../components/Review/ReveiwContent";

const Review = () => {
  const replaceStr = (e) => {
    let len = e.length;
    return `${e.substring(0, len - 2)}*${e[len - 1]}`;
  };

  return (
    <>
      <RateContainer>
        <div className="rate">
          <span className="rate-star">★★★★★</span>
          <div className="rate-number">
            <span className="rate-number-average">4 </span>
            <span className="rate-number-max">/ 5</span>
          </div>
        </div>
        <div className="rate-condition">
          <div className="flavor condition">
            <span>맛</span>
            <span className="content">4</span>
          </div>
          <div className="mood condition">
            <span>분위기</span>
            <span className="content">4</span>
          </div>
          <div className="service condition">
            <span>서비스</span>
            <span className="content">4</span>
          </div>
        </div>
      </RateContainer>
      <SubmitContainer>
        <button>리뷰 남기기</button>
      </SubmitContainer>
      <ListContainer>
        <img src={banner} />
        <div className="select-bar">
          <div className="photo-select">
            <span className="photo-review">포토리뷰(0)</span>
            <span className="toggle-btn">토글</span>
          </div>
          <div className="sort">정렬</div>
        </div>
        <ReviewContent>
          <div className="text">
            <div className="user-box">
              <div className="user-img">
                <FaUserAlt />
              </div>
              <span className="user-id">{replaceStr("jdc19407")}</span>
            </div>
            <div className="rate-date">
              <span className="comment-rate">★☆☆☆☆</span>
              <span className="date">2021-05-29</span>
            </div>
            <p className="content">
              여기 진짜 비싸요 반면에 구성은 별로임 엄빠 모시고가서 기분
              대박상해서 나온 경험 ㅂㄷㅂㄷ...
            </p>
            <div className="like-btn">
              <FaRegHeart />
              <span className="like-num">0</span>
            </div>
          </div>
          <div className="photo">
            <img src={testPhoto} />
          </div>
        </ReviewContent>
      </ListContainer>
    </>
  );
};

const RateContainer = styled.div`
  /* border-bottom: 1px solid #eaeaea; */

  .rate {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

    .rate-star {
      padding: 20px;
      color: #fdbd0a;
      font-size: 40px;
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
