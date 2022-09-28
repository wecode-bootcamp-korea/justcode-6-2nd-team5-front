import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Overlay } from "../../components/Modal/Modal";
import testPhoto from "../../assets/images/test-photo.jpeg";

const PhotoModal = ({ setPhotoOpen }) => {
  console.log(setPhotoOpen);
  useEffect(() => {
    const $body = document.querySelector("body");
    $body.style.overflow = "hidden";
    return () => ($body.style.overflow = "auto");
  }, []);

  const handleClose = () => {
    setPhotoOpen(false);
  };

  return (
    <Overlay>
      <ModalWrap>
        <Contents>
          <CloseButton onClick={handleClose}>✕</CloseButton>
          <div className="header">
            <h3>포토리뷰</h3>
          </div>
          <div className="photo-container">
            <img src={testPhoto} />
          </div>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
};

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

  .photo-container {
    padding: 20px;
    height: 650px;
    overflow: scroll;
  }
`;

export default PhotoModal;
