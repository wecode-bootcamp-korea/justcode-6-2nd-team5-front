import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Overlay } from "../../components/Modal/Modal";
import { RiErrorWarningLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { ImStarFull } from "react-icons/im";
import salmon from "../../assets/images/salmon.jpg";

const WriteReviewModal = ({ restaurantName, setOpen, setRender }) => {
  const submitRef = useRef();
  const location = useLocation();
  const url = new URLSearchParams(location.search);
  const restaurantId = Number(url.get("id"));

  useEffect(() => {
    const $body = document.querySelector("body");
    $body.style.overflow = "hidden";
    return () => ($body.style.overflow = "auto");
  }, []);

  const handleClose = () => {
    setOpen(false);
    setRender((current) => !current);
  };

  const [tastePoint, setTastePoint] = useState(0);
  const [moodPoint, setMoodPoint] = useState(0);
  const [servicePoint, setServicePoint] = useState(0);
  const [review, setReview] = useState("");
  const [photo, setPhoto] = useState();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [value, setValue] = useState("");

  const starArr = [1, 2, 3, 4, 5];

  const handleInput = (e) => {
    const value = e.target.value;
    if (e.target.id === "review") setReview(value);
  };

  const onClick = (e) => console.log(e);
  const onSubmit = (e) => {
    e.preventDefault();
    if (review.length < 15) {
      alert("리뷰를 15글자 이상 작성해주세요.");
      return;
    } else if (tastePoint === 0 || moodPoint === 0 || servicePoint === 0) {
      alert("별점을 모두 선택해주세요.");
      return;
    }
    const body = {
      token,
      restaurantId,
      tastePoint,
      moodPoint,
      servicePoint,
      review,
      photo: "https://i.esdrop.com/d/f/toMKOprgCM/TGdhv0dAQB.jpg",
    };

    console.log(body);
    setReview("");
    setValue("");
    setOpen(false);

    fetch("http://localhost:8000/restaurant/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((json) => {
        alert("리뷰 작성 완료!");
      });
  };

  return (
    <Overlay>
      <ModalWrap>
        <Contents>
          <CloseButton onClick={handleClose}>✕</CloseButton>
          <div className="header">
            <h3>리뷰 남기기</h3>
          </div>
          <form //
            className="review-container"
            onSubmit={onSubmit}
            ref={submitRef}
          >
            <div className="title">
              "{restaurantName}"에서의 <br />
              경험 어떠셨나요<span style={{ color: "red" }}>?</span>
            </div>
            <div className="select-rate-box">
              <li className="flavor">
                <span>맛</span>
                <Stars>
                  {starArr.map((num) => (
                    <ImStarFull //
                      key={num}
                      onClick={() => setTastePoint(num)}
                      className={tastePoint >= num ? "clicked" : ""}
                      size="1.5vw"
                    />
                  ))}
                </Stars>
              </li>
              <li className="mood">
                <span>분위기</span>
                <Stars>
                  {starArr.map((num) => (
                    <ImStarFull //
                      key={num}
                      onClick={() => setMoodPoint(num)}
                      className={moodPoint >= num ? "clicked" : ""}
                      size="1.5vw"
                    />
                  ))}
                </Stars>
              </li>
              <li className="service">
                <span>서비스</span>
                <Stars>
                  {starArr.map((num) => (
                    <ImStarFull //
                      key={num}
                      onClick={() => setServicePoint(num)}
                      className={servicePoint >= num ? "clicked" : ""}
                      size="1.5vw"
                    />
                  ))}
                </Stars>
              </li>
            </div>
            <div className="write-review-box">
              <div className="input-title">
                <span>리뷰작성</span>
                <span className="essential">*필수</span>
              </div>
              <textarea
                id="review"
                onChange={handleInput}
                value={review}
                required={true}
                placeholder="리뷰를 남겨주세요. (15글자 이상)"
              ></textarea>
            </div>
            <div className="photo-upload-box">
              <div className="upload-title">사진 추가 (최대 1장)</div>
              <label id="upload-btn" htmlFor="btn">
                +
              </label>
              <input
                className="photo-upload-btn"
                id="btn"
                type="file"
                value={value}
              />
            </div>
            <div className="write-guide">
              <div className="guide-title">
                <RiErrorWarningLine />
                <span>리뷰작성 안내</span>
              </div>
              <ul className="guide-contents">
                <li>・ 작성된 리뷰는 수정할 수 없으며, 삭제만 가능합니다. </li>
                <li>
                  ・ 리뷰 내용에 금지어(비속어, 욕설 등)가 표함된 경우 리뷰를
                  등록할 수 없습니다.
                </li>
              </ul>
            </div>
          </form>
          <div className="submit-btn" onClick={onSubmit}>
            <span>완료</span>
          </div>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
};

const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;

  svg {
    color: gray;
    cursor: pointer;
    margin-bottom: 10px;

    &.clicked {
      color: #ffbf59;
    }
  }
`;

const ModalWrap = styled.div`
  width: 620px;
  height: fit-content;
  position: absolute;
  border-radius: 16px;
  background-color: #f8f8f8;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 25px;
  color: #202020;
  cursor: pointer;
`;

const Contents = styled.div`
  position: relative;
  background-color: white;
  border-radius: 16px;
  letter-spacing: -0.8px;

  .header {
    top: 0;
    padding: 30px 0px;
    border-bottom: 0.3px solid #eaeaea;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
      Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  .review-container {
    padding: 20px;
    height: 350px;
    overflow: scroll;

    .title {
      padding-bottom: 22px;
      border-bottom: 1.5px solid gray;
      line-height: 32px;
      font-size: 25px;
      font-weight: 800;
      font-family: "NanumSquareRound", sans-serif;
    }

    .select-rate-box {
      padding-bottom: 30px;
      .flavor,
      .mood,
      .service {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 0.3px solid #eaeaea;
        font-size: 18px;
        font-weight: 800;
        font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
          Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic",
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

        span {
          padding: 24px 0;
        }
      }

      .star {
        font-size: 30px;
        color: #eaeaea;
        letter-spacing: 2px;
      }
    }

    .write-review-box {
      .input-title {
        font-weight: 800;
        font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
          Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic",
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

        .essential {
          margin: 0 0 10px 6px;
          color: #63a1ff;
          font-weight: 800;
          font-size: 14px;
        }
      }

      textarea {
        margin: 10px 0;
        padding: 10px;
        width: 100%;
        min-width: 100%;
        max-width: 100%;
        min-height: 100px;
        max-height: 100px;
        height: 100px;
        border: 0.3px solid #eaeaea;
        border-radius: 10px;

        &:focus {
          outline: 0.3px solid #63a1ff;
        }
      }
    }

    .photo-upload-box {
      padding: 20px 0;
      .upload-title {
        margin-bottom: 80px;
        font-weight: 800;
        font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
          Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic",
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      }

      label {
        padding: 60px 80px;
        margin-top: 10px;
        height: 100px;
        border: 0.3px solid #eaeaea;
        border-radius: 12px;
        font-size: 24px;
        color: #eaeaea;
        cursor: pointer;
      }

      .photo-upload-btn {
        display: none;
      }
    }

    .write-guide {
      margin-top: 80px;
      padding-top: 20px;
      border-top: 1.5px solid gray;

      .guide-title {
        padding-bottom: 18px;
        border-bottom: 0.3px solid #eaeaea;
        font-size: 18px;
        font-weight: 800;
        font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
          Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic",
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;

        span {
          padding-left: 6px;
        }
      }

      .guide-contents {
        padding-top: 18px;
        li {
          padding-bottom: 7px;
          font-size: 15px;
          color: #404040;
        }
        list-style-type: circle;
      }
    }
  }

  .submit-btn {
    padding: 20px 0;
    background-color: white;
    border-radius: 16px;

    span {
      display: inline-block;
      margin: 0 20px;
      padding: 20px 40px;
      text-align: center;
      width: 94%;
      border: none;
      border-radius: 13px;
      background-color: #569aff;
      color: white;
      font-size: 18px;
      font-weight: 800;

      &:hover {
        background-color: #2f7bf2;
      }
    }
  }
`;

export default WriteReviewModal;
