import "./RentCarInfo.scss";

function RentCarInfo(props) {
  const { company } = props;

  return (
    <div className="rentcar-detail-info-wrap">
      <p className="company-name">{company.name}</p>
      <div className="rentcar-detail-map">
        <iframe
          src={company.mapAddress}
          width="100%"
          height="400px"
          referrerPolicy="SAMEORIGIN"
        ></iframe>
      </div>
      <div className="rentcar-detail-info">
        <div className="info-box1">
          <div>
            <p>인수 / 반납 장소</p>
            <span>{company.rentPlace}에서 차량 인수/반납을 진행합니다.</span>
          </div>
          <div>
            <p>전화번호</p>
            <span>{company.tel}</span>
          </div>
          <div>
            <p>주소</p>
            <span>{company.address}</span>
          </div>
          <div>
            <p>셔틀타는곳</p>
            <span>{company.shuttlePlace}</span>
          </div>
        </div>
        <div className="info-box2">
          <div>
            <p>셔틀 운행시간</p>
            <span>{company.shuttleSchedule}</span>
          </div>
          <div>
            <p>셔틀 운행간격</p>
            <span>{company.shuttleInterval}</span>
          </div>
          <div>
            <p>소요시간</p>
            <span>{company.shuttleRequiredTime}</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        셔틀 운행시간 및 배차 간격은 업체 사정에 따라 변동 될 수 있습니다.
      </div>
    </div>
  );
}

export default RentCarInfo;
