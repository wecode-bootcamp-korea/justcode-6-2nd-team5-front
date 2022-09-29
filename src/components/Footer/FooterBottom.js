import React from "react";
import "./FooterBottom.scss";

const FooterBottom = () => {
  return (
    <div className="footer-bottom-container">
      <div className="background-color">
        <ul className="foot-bottom-menu">
          <li>
            <h5>개인정보처리방침</h5>
          </li>
          <li>
            <p> | 이용약관</p>
          </li>
        </ul>
        <div className="foot-bottom-text">
          <li className="first-p">
            <p>
              <span>(주)캐플릭스 대표이사 : 윤형준</span>
              <span className="left-line">
                {" "}
                사업자등록번호 : 105-87-76000 사업자정보조회
              </span>
              <span className="left-line">
                {" "}
                통신판매신고 제2015-제주연동-43호
              </span>
              <span className="left-line">
                {" "}
                관광사업자 등록번호 : 제2021-08호
              </span>
            </p>
            <p>제주특별자치도 제주시 신광로 21, 4층 (우)63125</p>
          </li>
          <li className="second-p">
            <p>
              (주)캐플릭스는 개별 항공권 및 숙박 상품에 대하여
              통신판매중개자로서 통신판매의 당사자가 아니며 해당상품의 거래정보
              및 거래 등에 대해 책임을 지지 않습니다.
            </p>
            <p>
              (주)캐플릭스는 렌터카 파트너사가 제공하는 일부 렌터카에 대하여
              통신판매중개자의 지위를 가지며, 해당 상품, 상품정보, 거래에 관한
              의무와 책임은 판매자에게 있습니다.
            </p>
          </li>
          <li className="third-p">
            <span>Copyright ⓒ KAFLIX All Rights Reserved</span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
