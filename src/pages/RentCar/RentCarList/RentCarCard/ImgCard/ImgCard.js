import "./ImgCard.scss";

function ImgCard(props) {
  const { carInfo, styleChange } = props;

  return (
    <>
      {carInfo && (
        <div className="car-img-content-wrap product-bar">
          <div className="opacity-box"></div>
          <div className="content-wrap">
            <img className="car-img" src={carInfo.carPhoto} alt="" />
            <div className="car-detail-info">
              <span className="car-name title">{carInfo.carName}</span>
              <div className="detail">
                <div className="people-icon icon"></div>
                <span>{carInfo.ridePeopleNumber}인승</span>
                <div className="oil-icon icon"></div>
                <span>{carInfo.oilType}</span>
              </div>
              {carInfo.rentcaryearinfo && (
                <div className="detail">
                  <div className="calendar-icon icon"></div>
                  <span>{carInfo.rentcaryearinfo}</span>
                </div>
              )}
            </div>
          </div>
          {styleChange && (
            <p className="rentcar-detail-p-tag">
              차량 이미지는 이해를 돕기 위해 제작되었습니다. 실제 배차 차량과
              색상이나 버전이 다를 수 있습니다
            </p>
          )}
        </div>
      )}
    </>
  );
}

export default ImgCard;
