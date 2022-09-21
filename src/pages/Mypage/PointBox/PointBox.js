import "./PointBox.scss";

function PointBox() {
  return (
    <div className="mypage-point-box-wrap">
      <div className="point-list">
        <p>
          <span>충전포인트</span>
          <a href="">0p &gt;</a>
        </p>
        <p>
          <span>적립포인트</span>
          <a href="">0p &gt;</a>
        </p>
        <p>
          <span>기부포인트</span>
          <a href="">0p &gt;</a>
        </p>
      </div>
      <div className="ticket-list">
        <p>
          <span>숙박 이용권</span>
          <a href="">이용 시작하기</a>
        </p>
        <p>
          <span>렌터카 이용권</span>
          <a href="">0P</a>
        </p>
      </div>
    </div>
  );
}

export default PointBox;
