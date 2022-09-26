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
            <span>디럭스</span>
          </div>
          <div className="rooms-select-contents">
            <span>디럭스(2인조식포함) ></span>
            <div className="contents-price-info">
              <strong>367,500원</strong>
              <span className="contents-price">환불불가</span>
              <span className="contents-price-bottom">1박 기준, 세금포함</span>
              <button className="contents-price-status">예약</button>
            </div>
            {/* <div className="contents-price-btn">
              <button className="contents-price-status">판매완료</button> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rooms;
