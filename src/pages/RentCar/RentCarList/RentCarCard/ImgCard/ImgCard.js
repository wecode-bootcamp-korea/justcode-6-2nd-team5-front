import "./ImgCard.scss";

function ImgCard(props) {
  const { carInfo, styleChange } = props;

  return (
    <>
      {carInfo && (
        <div
          className="car-img-content-wrap product-bar"
          style={{
            backgroundColor: styleChange ? "#fff" : "var(--color-white-gray)",
          }}
        >
          <div className="content-wrap">
            <span className="car-name title">{carInfo.carName}</span>
            <div
              className="car-img"
              style={{
                backgroundImage: `url("${carInfo.carPhoto}")`,
              }}
            ></div>
            <div className="car-detail-info">
              <div className="people-icon icon"></div>
              <span>{carInfo.ridePeopleNumber}인승</span>
            </div>
            <div className="car-detail-info">
              <div className="oil-icon icon"></div>
              <span>{carInfo.oilType}</span>
            </div>
            {carInfo.rentcaryearinfo && (
              <div className="car-detail-info">
                <div className="calendar-icon icon"></div>
                <span>{carInfo.rentcaryearinfo}</span>
              </div>
            )}
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
