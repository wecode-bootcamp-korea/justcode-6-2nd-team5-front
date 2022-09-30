import { useEffect, useState } from "react";
import "./AlertModal.scss";

function AlertModal(props) {
  const { closeModal, alertMessage } = props;

  const modalContent = [
    "최소 수수료 규정",
    "인수불가 및 환불사항",
    "예약시 유의사항",
  ];

  const [onFocus, setOnFocus] = useState("0");
  const [isAlert, setIsAlert] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const changeFocus = (e) => {
    setOnFocus(e.target.id);
  };

  // 예약 버튼 누를 시, 경고창 띄우고 버튼 다시 한번 누르면 마이페이지로 이동
  const onSubmit = () => {
    // 비로그인시 모달 닫음 (예약 막기)
    if (!localStorage.getItem("token")) {
      closeModal();
    }
    // 경고 메시지를 안 받는 경우
    if (!alertMessage) {
      // 모달창 완전 닫기
      isAlert ? setIsDone(true) : setIsAlert(true);
    }

    // 경고 메시지를 받은 경우
    if (alertMessage) closeModal();
  };

  useEffect(() => {
    if (isDone && isAlert) closeModal(true);
  }, [isDone]);

  return (
    <div className="alert-modal-background">
      <div className="alert-modal-wrap">
        {/* 유의사항인경우 & 경고 메시지를 넘겨받지 않은 경우 */}
        {!isAlert && !alertMessage && (
          <p className="main-title">규정 및 유의사항</p>
        )}

        {/* 예약 알림인 경우 & 경고 메시지를 넘겨받지 않은 경우 */}
        {isAlert && !alertMessage && <p className="main-title">예약 완료</p>}

        {/* 유의사항인경우 & 경고 메시지를 넘겨 받은 경우 */}
        {!isAlert && alertMessage && (
          <p className="main-title">{alertMessage[0]}</p>
        )}

        {/* 경고 메시지를 넘겨 받지 않으면 유의사항 타이틀 배너 띄움*/}
        {!isAlert && !alertMessage && (
          <p className="title">
            {modalContent.map((title, index) => {
              return (
                <span
                  className={onFocus === index.toString() ? "focus" : ""}
                  key={index}
                  id={index}
                  onClick={changeFocus}
                >
                  {title}
                </span>
              );
            })}
          </p>
        )}

        {/* 유의사항 content */}
        {onFocus === "0" && !isAlert && !alertMessage && (
          <img src="/images/rentcar-modal-1.png" alt="content1" />
        )}
        {onFocus === "1" && !isAlert && !alertMessage && (
          <img src="/images/rentcar-modal-2.png" alt="content2" />
        )}
        {onFocus === "2" && !isAlert && !alertMessage && (
          <img src="/images/rentcar-modal-3.png" alt="content3" />
        )}
        {isAlert && !alertMessage && (
          <p className="alert-message">렌터카 예약이 완료되었습니다.</p>
        )}

        {/* 경고 메시지를 넘겨 받은 경우 */}
        {alertMessage && <p className="alert-message">{alertMessage[1]}</p>}

        {/* 닫는 버튼 */}
        {!isAlert && !alertMessage && (
          <div className="close-btn" onClick={() => closeModal(false)}>
            x
          </div>
        )}
        <button className="btn" onClick={onSubmit}>
          {!isAlert && !alertMessage && "예약 확정하기"}
          {isAlert && !alertMessage && "확인"}
          {alertMessage && alertMessage[2]}
        </button>
      </div>
    </div>
  );
}

export default AlertModal;
