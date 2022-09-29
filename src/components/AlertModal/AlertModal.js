import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AlertModal.scss";

function AlertModal(props) {
  const { closeModal } = props;

  const modalContent = [
    "최소 수수료 규정",
    "인수불가 및 환불사항",
    "예약시 유의하상",
  ];

  const [onFocus, setOnFocus] = useState("0");
  const [isAlert, setIsAlert] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const changeFocus = (e) => {
    setOnFocus(e.target.id);
  };

  // 예약 버튼 누를 시, 경고창 띄우고 버튼 다시 한번 누르면 마이페이지로 이동
  const onSubmit = () => {
    isAlert ? setIsDone(true) : setIsAlert(true);
  };

  useEffect(() => {
    if (isDone && isAlert) closeModal(false);
  }, [isDone]);

  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (isAlert) navigate("/mypage");
  // }, [isAlert]);

  return (
    <div className="alert-modal-background">
      <div className="alert-modal-wrap">
        {!isAlert ? (
          <p className="main-title">규정 및 유의사항</p>
        ) : (
          <p className="main-title">예약 완료</p>
        )}
        {!isAlert && (
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
        {onFocus === "0" && !isAlert && (
          <img src="/images/rentcar-modal-1.png" alt="content1" />
        )}
        {onFocus === "1" && !isAlert && (
          <img src="/images/rentcar-modal-2.png" alt="content2" />
        )}
        {onFocus === "2" && !isAlert && (
          <img src="/images/rentcar-modal-3.png" alt="content3" />
        )}
        {isAlert && <p className="alert-message">에약이 완료되었습니다.</p>}
        <button className="btn" onClick={onSubmit}>
          {!isAlert ? "예약하기" : "확인"}
        </button>
      </div>
    </div>
  );
}

export default AlertModal;
