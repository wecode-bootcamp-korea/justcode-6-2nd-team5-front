import "./RentCarRule.scss";

function RentCarRule() {
  return (
    <div className="rentcar-detail-rule-wrap">
      <div className="red-box">
        <p>주의하세요!</p>
        <p>
          렌트카의 추가 요금 및 대여 불가한 항목에 대해 꼼꼼히 확안하시기
          바랍니다.
        </p>
      </div>
      <p className="detail-title">반려동물 동반 추가비용 안내</p>
      <div className="whtie-box">
        <p>애견동반 시 30,000원 비용이 발생합니다.</p>
        <ul>
          악취, 오염 발생 시 클리닝 비용 20만원 이상이 청구 됩니다.
          <li>차량 내 케이지 사용 필수</li>
          <li>7kg 이하 소형견만 가능</li>
          <li>기본비용 마리당 청구</li>
        </ul>
      </div>
      <p className="detail-title">낚시용품 추가비용 안내</p>
      <div className="whtie-box">
        <p>낚시용품 지참 시 30,000원 비용이 발생합니다.</p>
        <ul>악취, 오염 발생 시 클리닝 비용 20만원 이상이 청구 됩니다.</ul>
      </div>
      <p className="detail-title">야간 인수/반납 추가비용 안내</p>
      <div className="whtie-box">
        <p>야간인수 시 추가 비용이 발생되지 않습니다.</p>
        <ul>
          무인 인수만 가능
          <li>야간인수 시간 20:00~22:00</li>
          <li>야간 시간대 셔틀버스 없음</li>
          <li>제주행 항공기 18시 20분 이후 출발부터 가능</li>
        </ul>
      </div>
      <p className="detail-title">인수불가 규정 안내 안내</p>
      <div className="text-box">
        <ul>
          <li>반려동물 동반 시 인수 가능한 경우 상단에 별도 안내</li>
          <li>낚시용품 소지 시 인수 가능한 경우 상단에 별도 안내</li>
          <li>전기차 충전카드의 의무적인 구매 거부 시</li>
          <li>
            외국 국적 또는 한국어 소통에 어려움이 있는 임차인 대여 시 대여
            업체별 상이
          </li>
        </ul>
      </div>
      <p className="detail-title">환불불가 안내 안내</p>
      <div className="text-box">
        <ul>
          <li>인수불가 규정 위반에 따른 책임은 예약 당사자에게 있습니다.</li>
          <li>
            인수불가 시 선택한 요금제에 따라 당일취소 수수료가 부과됩니다.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RentCarRule;
