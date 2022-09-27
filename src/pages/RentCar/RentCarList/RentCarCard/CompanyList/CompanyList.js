import { useEffect, useRef, useState } from "react";
import "./CompanyList.scss";

function CompanyList(props) {
  const { companyInfo } = props;

  //천단위 , 찍기 위한 함수
  const numberFormat = (num) => {
    if (num >= 1000) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return num.toString();
    }
  };

  // 선택된 렌터카 기업 상태값
  const [currentCompany, setCurrentCompany] = useState(0);

  // 각 기업카드에 들어갈 ref 값
  const companyCardRef = useRef([]);

  useEffect(() => {
    for (let i = 0; i < companyCardRef.current.length; i++) {
      // 기업 리스트중 선택된 기업인 경우 스타일 변경
      if (companyCardRef.current[i].id === currentCompany) {
        companyCardRef.current[i].className = "company-card-on product-bar";
      } else {
        companyCardRef.current[i].className = "company-card-off product-bar";
      }
    }
  }, [currentCompany]);

  // company 선택시
  const onSelect = (e) => {
    // 선택된 기업 세팅
    setCurrentCompany(e.target.id);
  };

  // 에약 버튼
  const onReserve = (e) => {
    // 이벤트 버블링 막기
    e.stopPropagation();
  };

  return (
    <>
      {companyInfo &&
        companyInfo.map((info, index) => {
          return (
            <div key={info.rentCompanyCarId} className="company-list-wrap">
              <div
                className="company-card-off product-bar"
                ref={(elem) => {
                  companyCardRef.current[index] = elem;
                }}
                id={index}
                value={info.rentCompanyCarId}
                onClick={onSelect}
              >
                <div className="text-content">
                  <div className="title">
                    <span className="company-name">{info.companyName}</span>
                    <div className="point-icon"></div>
                    <span className="point">{info.reviewPoint}</span>
                    <span className="total-review">{`(${info.totalReview})`}</span>
                  </div>
                  <div className="condition">
                    <span>{info.insurance}</span>
                    <span>{info.rentCarYear}</span>
                    <span>{info.driverAge}</span>
                    <span>{info.driverExperience}</span>
                    <span>누적예약 {`${numberFormat(info.totalReserve)}`}</span>
                  </div>
                </div>
                <div className="price-and-button-content">
                  <span className="price title">
                    {`${numberFormat(info.price)}`}원
                  </span>
                  <button
                    className="button product-bar"
                    id={info.rentCompanyCarId}
                    onClick={onReserve}
                  >
                    예약
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default CompanyList;
