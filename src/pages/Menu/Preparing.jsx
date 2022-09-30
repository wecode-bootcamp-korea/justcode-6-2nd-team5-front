import React from "react";
import { Link, useNavigate } from "react-router-dom";
import loading from "../../assets/images/loading.png";
import styled from "styled-components";

const Preparing = () => {
  const navigate = useNavigate();
  return (
    <StyledDiv>
      <img src={loading} />
      <div className="navigate">
        <button onClick={() => navigate(-1)}>이전페이지</button>
        <button className="main">
          <Link to="/">메인으로</Link>
        </button>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  img {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  .navigate {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;

    .main {
      color: white;
      background-color: #569aff;
    }

    button {
      display: inline-block;
      margin: 0 5px;
      padding: 20px 40px;
      text-align: center;
      width: 280px;
      border: none;
      border-radius: 13px;
      background-color: #e5effe;
      color: #65a1ff;
      font-size: 18px;
      font-weight: 800;

      &:hover {
        box-shadow: 0 8px 16px 0 rgba(32, 32, 32, 0.08);
      }
    }
  }
`;

export default Preparing;
