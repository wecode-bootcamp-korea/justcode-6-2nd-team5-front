import styled from "styled-components";

export const RateContainer = styled.div`
  .rate {
    display: flex;
    justify-content: center;
    margin: 30px 0 80px 0;
    width: 100%;

    .star-box {
      align-items: center;
      position: relative;
      width: 40%;

      .rate-star {
        position: absolute;
        top: 0px;
        left: 120px;
        z-index: 998;
        margin-left: 55px;
        height: 36px;
        overflow: hidden;
        color: #fdbd0a;

        .pointOfStar {
          z-index: 10;
          height: 36px;
          width: 180px;
        }
      }
      .backgroundStar {
        position: absolute;
        top: 0px;
        left: 120px;
        margin-left: 55px;
        width: 180px;
        height: 36px;
      }
    }
  }

  .rate-number {
    display: flex;
    align-items: center;
    font-size: 30px;
    padding-right: 150px;
    padding-top: 3px;

    .rate-number-average {
      padding-top: 3px;
      font-weight: 900;
      font-family: "NanumSquareRound", sans-serif;
    }

    .rate-slash {
      padding: 0 5px 3px 4px;
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
    box-shadow: 0 8px 16px 0 rgb(32 32 32 / 8%);

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

export const SubmitContainer = styled.div`
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
export const ListContainer = styled.div`
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

export const ReviewContent = styled.div`
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
