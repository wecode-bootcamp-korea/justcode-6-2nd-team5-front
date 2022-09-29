import React from "react";
import styled from "styled-components";
import { FcSearch } from "react-icons/fc";

const NoReview = () => {
  return (
    <NoReviews>
      <FcSearch />
      <p>작성된 리뷰가 없습니다.</p>
    </NoReviews>
  );
};

const NoReviews = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 120px 0;


  svg {

    display: flex;
    justify-content: center;
    margin: 20px auto;
    font-size: 60px;
  }

  p {
    color: #606060;
    font-weight: 800;
    font-size: 15px;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
      Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }
`;

export default NoReview;
