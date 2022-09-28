import "./ImgCard.scss";

function ImgCard(props) {
  const { carInfo } = props;

  console.log(carInfo.carPhoto);

  return (
    <>
      {carInfo && (
        <div className="car-img-content-wrap product-bar">
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
          </div>
        </div>
      )}
    </>
  );
}

export default ImgCard;
