import { useEffect, useState } from "react";
import TagList from "../../RentCar/RentCarList/RentCarCard/TagList/TagList";
import "./RenterCarInsurance.scss";

function RenterCarInsurance(props) {
  const { insurance } = props;

  // 모든 태그
  const [rentCarTags, setRentCarTags] = useState([]);
  // 유효 태그
  const [rentCarTagInfo, setRentCarTagsInfo] = useState([]);

  // 차량의 모든 태그들 세팅
  useEffect(() => {
    fetch("/data/rentcar/rentcar.json")
      .then((res) => res.json())
      .then((data) => {
        setRentCarTags(data[0].filterTypes[2].checkList);
      });
  }, []);

  // 차량 정보 API
  useEffect(() => {
    fetch("/data/rentcar/rentcarDetail.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setRentCarTagsInfo(data[0].options);
      });

    console.log();
  }, []);

  return (
    <div className="rentcar-detail-Insurance-wrap">
      <p className="detail-title">대여규정</p>
      <div className="top-box">
        <div className="top-box-card">
          <div className="icon-circle">
            <div className="icon icon1"></div>
          </div>
          <div className="subtitle">
            <p>연령</p>
            <span>{insurance.age} 이상</span>
          </div>
        </div>
        <div className="top-box-card">
          <div className="icon-circle">
            <div className="icon icon2"></div>
          </div>
          <div className="subtitle">
            <p>운전경력</p>
            <span>{insurance.experience}</span>
          </div>
        </div>
        <div className="top-box-card">
          <div className="icon-circle">
            <div className="icon icon3"></div>
          </div>
          <div className="subtitle">
            <p>운전면허</p>
            <span>{insurance.insurance}</span>
          </div>
        </div>
      </div>
      <p className="detail-title">종합보험</p>
      <table>
        <thead>
          <tr>
            <th>파트너사명</th>
            <th>종합보험명</th>
            <th>보상범위</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>대한렌트카</td>
            <td>렌트카공제조합</td>
            <td>무제한</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <div className="whtie-box"></div>
      <p className="detail-title">자차보험</p>
      <table>
        <thead>
          <tr>
            <th>보상내용</th>
            <th>완전자차</th>
            <th>슈퍼무제한</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>면책금</td>
            <td>면제</td>
            <td>면제</td>
          </tr>
          <tr>
            <td>보상한도</td>
            <td>150만원</td>
            <td>무제한</td>
          </tr>
          <tr>
            <td>휴차보상료</td>
            <td>면제</td>
            <td>면제</td>
          </tr>
        </tbody>
      </table>
      <p className="detail-title">차량옵션</p>
      <TagList TagInfo={rentCarTagInfo} rentCarTags={rentCarTags} />
    </div>
  );
}

export default RenterCarInsurance;
