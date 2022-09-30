import "./NoPlan.scss";

function NoPlan(props) {
  const { user, type } = props;

  return (
    <div className="plan-detail-wrap">
      <div className="noplan-detail">
        <div className="plus-btn">+</div>
        <div className="text-wrap">
          {/* 회색 글씨 */}
          {type === "rentCar" && (
            <p>{user}님과 비슷한 연령대 회원님에게 인기있는</p>
          )}
          {type === "hotel" && (
            <p>{user}님과 유사한 연령대와 성별의 고객님들은</p>
          )}
          {type === "restaurant" && <p>이번 달 제주패스에서만 만날 수 있는</p>}

          {/* 강조 글씨 */}
          {type === "rentCar" && (
            <p style={{ color: "black" }}>
              <span>인기 차량</span> 을 확인해보세요.
            </p>
          )}
          {type === "hotel" && (
            <p style={{ color: "black" }}>
              <span>리조트</span> 을(를) 선택하셨어요!
            </p>
          )}
          {type === "restaurant" && (
            <p style={{ color: "black" }}>
              제주의 <span>특별한 맛집</span> !
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default NoPlan;
