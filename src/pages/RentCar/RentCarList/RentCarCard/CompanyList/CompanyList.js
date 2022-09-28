import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CompanyList.scss";

function CompanyList(props) {
  const { companyInfo } = props;
  const navigate = useNavigate();
  const location = useLocation();

  //천단위 , 찍기 위한 함수
  const numberFormat = (num) => {
    if (num >= 1000) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return num.toString();
    }
  };

  // 선택된 렌터카 업체 상태값
  const [currentCompany, setCurrentCompany] = useState(0);

  // 각 업체카드에 들어갈 ref 값
  const companyCardRef = useRef([]);

  useEffect(() => {
    for (let i = 0; i < companyCardRef.current.length; i++) {
      // 업체 리스트 중 선택된 업체인 경우 스타일 변경
      if (companyCardRef.current[i].id === currentCompany) {
        companyCardRef.current[i].className = "company-card-on product-bar";
      } else {
        companyCardRef.current[i].className = "company-card-off product-bar";
      }
    }
  }, [currentCompany]);

  // company 선택시
  const onSelect = (e) => {
    // 선택된 업체 세팅
    setCurrentCompany(e.target.id);
  };

  // 에약 버튼
  const onReserve = (e) => {
    // 이벤트 버블링 막기
    e.stopPropagation();
    // 대여일, 반납일, 대여시간, 반납시간, 보험, 차종, 운전자 연령, 경력은 유지한 상태로 navigate
    const conditionQuery = decodeURIComponent(location.search)
      .split("&")
      .slice(0, 8)
      .join("&");
    // 선택한 업체 고유 id
    const rentCompanyCarId = `&rentCompanyCarId=${e.target.id}`;

    // 경로 이동
    const url = "/rentcarDetail/searchList" + conditionQuery + rentCompanyCarId;
    // console.log(url);
    navigate(url);
  };

  return (
    <>
      {companyInfo &&
        companyInfo.map((info, index) => {
          return (
            <div key={info.rentCompanyCarId} className="company-list-wrap">
              <div
                className={
                  index === 0
                    ? "company-card-on product-bar"
                    : "company-card-off product-bar"
                }
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
