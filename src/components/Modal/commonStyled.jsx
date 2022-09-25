import styled from "styled-components";

//메인 헤더 아이콘 버튼
export const HeaderContainer = styled.div`
  background-color: #f8f8f8;
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
    Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic",
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif; ;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => props.primary && "20px"};

  .clicked {
    background-color: #63a1ff;
    color: white;

    svg {
      color: white;
      pointer-events: none;
    }
  }
`;

export const IconBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 10px;
  width: 80px;
  height: 80px;
  border-radius: 16px;
  border: none;
  color: #808080;
  font-size: 13px;
  font-weight: 600;
  background-color: #ffffff;

  svg {
    margin-bottom: 10px;
    color: #63a1ff;
    font-size: 30px;
    pointer-events: none;
  }
`;

//메인, 모달 내부 가짜검색창 스타일
export const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: ${(props) => (props.primary ? "0 210px" : "0 100px")};
  padding-right: 110px;
  padding-bottom: 20px;

  .border {
    border: "1px solid #63a1ff";
  }

  .flex {
    display: flex;
  }
`;

///////모달창 내부에서는 primary 속성값을 적용시켜 스타일 변화줌.
export const Menu = styled.div`
  flex: auto;
  margin: 7px;
  border: ${(props) =>
    (props.className === "border" || props.className === "border flex") &&
    "1px solid #63a1ff"};
  height: ${(props) => (props.primary ? "80px" : "95px")};
  width: ${(props) => props.width};
  padding: 23px 30px 0px 23px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 8px 16px 0 rgba(32, 32, 32, 0.08);

  h6 {
    padding: ${(props) => (props.primary ? "0 0 8px" : "3px 0 10px")};
    color: #606060;
    font-size: ${(props) => (props.primary ? "12px" : "14px")};
    font-weight: 500;
  }

  p {
    color: ${(props) => (!!props.date ? "#202020" : "#aeaeae")};
    font-size: ${(props) => (props.primary ? "15px" : "1rem")};
    font-weight: 600;
    cursor: pointer;
  }

  //헤더 항공 부분 아이콘
  .changeIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 10px 0 80px;
    width: 30px;
    height: 30px;
    background-color: #63a1ff;
    border-radius: 25px;

    svg {
      color: white;
      font-size: 24px;
    }
  }
`;

export const SearchBtn = styled.button`
  position: absolute;
  right: 0;
  margin: 7px;
  width: ${(props) => (props.primary ? "80px" : "95px")};
  height: ${(props) => (props.primary ? "80px" : "95px")};
  border-radius: 16px;
  border: none;
  background-color: #63a1ff;
  color: white;
  font-size: ${(props) => (props.primary ? "16px" : "20px")};
  font-weight: 900;
  box-shadow: 0 8px 16px 0 rgba(32, 32, 32, 0.08);
  cursor: pointer;
`;

//모달 내부 가짜 검색창 스타일 노멀 버전
export const NormalSearchBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
    Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic",
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  letter-spacing: -1.5px;

  div {
    display: flex;
    align-items: center;
    margin: 7px;
    height: ${(props) => (props.normal ? "62px" : "55px")};
    width: ${(props) => (props.normal ? "510px" : "450px")};
    background-color: white;
    border-radius: 16px;
    border: 1px solid #eaeaea;
    box-shadow: 0 8px 16px 0 rgba(32, 32, 32, 0.08);

    svg {
      margin: 20px 0 20px 20px;
      font-size: 24px;
      color: #808080;
    }

    input {
      padding-left: 20px;
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 16px;
      font-size: 16px;
      font-weight: 600;

      ::placeholder {
        color: #aeaeae;
      }
    }
  }

  button {
    margin: 7px;
    width: ${(props) => (props.normal ? "62px" : "55px")};
    height: ${(props) => (props.normal ? "62px" : "55px")};
    border-radius: 16px;
    border: none;
    background-color: #63a1ff;
    color: white;
    font-size: 20px;
    box-shadow: 0 8px 16px 0 rgba(32, 32, 32, 0.08);
    cursor: pointer;
  }
`;

//모달 내부 세부 조건 선택 부분 스타일
export const ConditionSelector = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 400px;
  width: 100%;
  background-color: white;
  letter-spacing: -0.5px;

  .title {
    padding: 40px 0 40px 5px;
    width: 240px;
    height: 100%;
    font-family: "NanumSquareRound", sans-serif;
    font-weight: 800;
    font-size: 22px;
    line-height: 27px;
    border-right: 1px solid #eaeaea;
  }

  .box {
    padding: 40px;
    width: 27%;
    border-right: 1px solid #eaeaea;
    .clicked {
      color: #63a1ff;
      background-color: #f4f9ff;
    }
    h5 {
      padding-bottom: 20px;
      font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
        Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
        "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji",
        "Segoe UI Symbol", sans-serif;
      font-weight: 800;
    }
  }
`;

//모달 내부 세부 조건 선택 버튼 스타일 (렌트카 - 차량조건, 운전자 조건)
export const SelectBtn = styled.button`
  margin: 0 6px 6px 0;
  padding: 12px;
  width: ${(props) => (props.otherType ? "90px" : "140px")};
  ${(props) => props.location && "95px"};
  border: 0.8px solid #eaeaea;
  border-radius: 6px;
  background-color: white;
  color: #606060;
  font-weight: 600;
  font-size: 13px;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    sans-serif;
  cursor: pointer;
`;

//모달 내부 세부 조건 선택 버튼 스타일 (트립, 카페, 맛집)
export const HashTagBtn = styled.button`
  padding: 9px 14px;
  margin: 4px;
  background-color: white;
  border-radius: 16px;
  border: 1px solid #eaeaea;
  color: #808080;
  font-weight: 600;
  font-size: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
    Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic",
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif; ;
;
`;
