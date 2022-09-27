import "./Rooms.scss";

function Rooms() {
  return (
    <div className="rooms-container">
      <div className="rooms-contents">
        <div className="contents-top">
          <button className="contents-top-btn">전체</button>
          <button className="contents-top-btn">무료취소</button>
          <button className="contents-top-btn">조식포함</button>
        </div>

        <div className="rooms-select">
          <div className="rooms-select-top">
            <span>디럭스더블</span>
          </div>
          <div className="rooms-select-contents">
            <span>디럭스더블 ></span>
            <div className="contents-price-info">
              <strong>72,950원</strong>
              <span className="contents-price">환불불가</span>
              <span className="contents-price-bottom">1박 기준, 세금포함</span>
              <button className="contents-price-status">예약</button>
            </div>
          </div>
        </div>
      </div>
      <div className="rooms-contents">
        <div className="rooms-select">
          <div className="rooms-select-top">
            <span>디럭스트윈(오션뷰)</span>
          </div>
          <div className="rooms-select-contents">
            <span>디럭스트윈(오션뷰) ></span>
            <div className="contents-price-info">
              <strong>95,300원</strong>
              <span className="contents-price">환불불가</span>
              <span className="contents-price-bottom">1박 기준, 세금포함</span>
              <button className="contents-price-status end">판매완료</button>
            </div>
          </div>
        </div>
      </div>
      <div className="rooms-contents">
        <div className="rooms-select">
          <div className="rooms-select-top">
            <span>패밀리더블트윈</span>
          </div>
          <div className="rooms-select-contents">
            <span>패밀리더블트윈 ></span>
            <div className="contents-price-info">
              <strong>103,530원</strong>
              <span className="contents-price">환불불가</span>
              <span className="contents-price-bottom">1박 기준, 세금포함</span>
              <button className="contents-price-status">예약</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
