import React from "react";
import styled from "styled-components";
import { FaRegHeart, FaHeart, FaUserAlt } from "react-icons/fa";
import PhotoModal from "./PhotoModal";
import { useState } from "react";
import testPhoto from "../../assets/images/test-photo.jpeg";

const Content = ({ content }) => {
  console.log(content);
  const { userName, created_at, review, photo } = content;
  const [photoOpen, setPhotoOpen] = useState(false);
  const handlePhotoOpen = () => {
    setPhotoOpen(true);
  };
  const replaceStr = (e) => {
    let len = e.length;
    return `${e.substring(0, len - 2)}*${e[len - 1]}`;
  };
  return (
    <>
      <ReviewContent>
        <div className="text">
          <div className="user-box">
            <div className="user-img">
              <FaUserAlt />
            </div>
            <span className="user-id">{replaceStr(userName)}</span>
          </div>
          <div className="rate-date">
            <span className="comment-rate">★☆☆☆☆</span>
            <span className="date">{created_at}</span>
          </div>
          <p className="content">{review}</p>
          {/* <div className="like-btn">
            <FaRegHeart />
            <span className="like-num">0</span>
          </div> */}
        </div>
        <div className="photo" onClick={handlePhotoOpen}>
          <img src={testPhoto} />
        </div>
      </ReviewContent>
      {photoOpen && <PhotoModal setPhotoOpen={setPhotoOpen} />}
    </>
  );
};

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

export default Content;
