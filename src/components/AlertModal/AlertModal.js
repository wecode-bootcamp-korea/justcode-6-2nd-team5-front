import "./AlertModal.scss";

function AlertModal(props) {
  return (
    <div className="alert-modal-background">
      <div className="alert-modal-wrap">
        <p className="main-title">규정 및 유의사항</p>
        <p className="title">
          <span>최소 수수료 규정</span>
          <span>인수불가 및 환불사항</span>
          <span>예약시 유의하상</span>
        </p>
        <img src="/images/rentcar-modal-1.png" alt="content1" />
        <button className="btn">확인</button>
      </div>
    </div>
  );
}

export default AlertModal;
