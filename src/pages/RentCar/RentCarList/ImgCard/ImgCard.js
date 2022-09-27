import "./ImgCard.scss";

function ImgCard() {
  return (
    <div className="car-img-content-wrap product-bar">
      <span className="car-name title">올 뉴 모닝</span>
      <div className="car-img"></div>
      <div className="car-detail-info">
        <div className="people-icon icon"></div>
        <span>5인승</span>
      </div>
      <div className="car-detail-info">
        <div className="oil-icon icon"></div>
        <span>5인승</span>
      </div>
    </div>
  );
}

export default ImgCard;
