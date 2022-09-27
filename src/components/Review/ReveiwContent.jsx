import React from "react";
import styled from "styled-components";
import { FaRegHeart, FaHeart, FaUserAlt } from "react-icons/fa";

const Content = () => {
  const replaceStr = (e) => {
    let len = e.length;
    return `${e.substring(0, len - 2)}*${e[len - 1]}`;
  };
  return (
    <ReviewContent>
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
        여기 진짜 비싸요 반면에 구성은 별로임 엄빠 모시고가서 기분 대박상해서
        나온 경험 ㅂㄷㅂㄷ...
      </p>
      <div className="like-btn">
        <FaRegHeart />
        <span className="like-num">0</span>
      </div>
    </ReviewContent>
  );
};

const ReviewContent = styled.div`
  padding: 24px 8px 30px;
  border-bottom: 1px solid #eaeaea;
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
    Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic",
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

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
`;

export default Content;
