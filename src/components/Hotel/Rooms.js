import { useState } from "react";
import "./Rooms.scss";

function Rooms(hotelData) {
  // const [roomData, setRoomData] = useState(hotelData.hotelData.room);
  let roomData = hotelData.hotelData.room;
  return (
    <div className="rooms-container">
      <div className="rooms-contents">
        <div className="contents-top">
          <button className="contents-top-btn">전체</button>
          <button className="contents-top-btn">무료취소</button>
          <button className="contents-top-btn">조식포함</button>
        </div>
        {roomData.map((room) => (
          <div className="rooms-select" key={room.id}>
            <div className="rooms-select-top">
              <span>{room.roomName}</span>
            </div>
            <div className="rooms-select-contents">
              <span>{room.roomName} ></span>
              <div className="contents-price-info">
                <strong>{room.price} 원</strong>
                <span className="contents-price">환불불가</span>
                <span className="contents-price-bottom">
                  1박 기준, 세금포함
                </span>
                <button className="contents-price-status">예약</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
