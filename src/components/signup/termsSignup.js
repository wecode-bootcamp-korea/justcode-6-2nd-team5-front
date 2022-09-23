import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./termsSignup.scss";

function TermsSignup() {
  const navigate = useNavigate();

  const [fullAgree, setFullAgree] = useState(true);
  const [firstAgree, setFirstAgree] = useState(false);
  const [secondAgree, setSecondAgree] = useState(false);
  const [thirdAgree, setThirdAgree] = useState(false);
  const [termsActionBtn, setTermsActionBtn] = useState(false);

  const agreeClick = (e) => {
    const currentTarget = e.currentTarget.id;

    switch (currentTarget) {
      case "fullAgree":
        setFullAgree(!fullAgree);
        setFirstAgree(fullAgree);
        setSecondAgree(fullAgree);
        setThirdAgree(fullAgree);
        return;
      case "firstAgree":
        setFirstAgree(!firstAgree);
        return;
      case "secondAgree":
        setSecondAgree(!secondAgree);
        return;
      case "thirdAgree":
        setThirdAgree(!thirdAgree);
        return;
    }
  };

  useEffect(() => {
    agreeSignupBtnChk();
  });

  const agreeSignupBtnChk = () => {
    if (firstAgree && secondAgree) {
      setTermsActionBtn(true);
    } else {
      setTermsActionBtn(false);
    }
  };

  const signupBtn = () => {
    if (firstAgree && secondAgree) {
      navigate("/signup");
    } else {
      alert("약관을 확인해주세요.");
    }
  };
  return (
    <div className="terms-signup">
      <div className="container">
        <div className="terms-text">
          <span className="terms-conditions">약관동의</span>
          <br></br>
          <span>약관 및 정보이용 안내에 동의해주세요.</span>
        </div>
        <div className="terms-container">
          <div className="full-consent">
            <input type="checkbox" id="fullAgree" onClick={agreeClick}></input>
            <label htmlFor="fullAgree" className="terms-label">
              전체 약관 동의
            </label>
          </div>
          <div>
            <div className="terms-essential">
              <FontAwesomeIcon icon={faCheck} />
              <span className="font-awesome">[필수]</span>
              <label
                id="firstAgree"
                onClick={agreeClick}
                className={firstAgree ? "terms-agree" : "label"}
              >
                이용약관 동의
              </label>
              <br></br>
              <div>
                <FontAwesomeIcon icon={faCheck} />
                <span className="font-awesome">[필수]</span>
                <label
                  id="secondAgree"
                  onClick={agreeClick}
                  className={secondAgree ? "terms-agree" : "label"}
                >
                  개인정보 취급방침 동의
                </label>
              </div>
            </div>
          </div>
          <div className="terms-select">
            <FontAwesomeIcon icon={faCheck} />
            <span className="font-awesome">[선택]</span>
            <span
              id="thirdAgree"
              onClick={agreeClick}
              className={thirdAgree ? "terms-agree" : "terms-span"}
            >
              마케팅 및 광고 활동 동의
            </span>
          </div>
          <div className="terms-comment-first">
            <span
              className={thirdAgree ? "terms-agree" : "terms-comment-first"}
            >
              ㆍ 수신 동의 시 제주도 여행 노하우가 담긴 이벤트 소식을
              알려드립니다.
            </span>
          </div>
          <div className="terms-comment-second">
            <span
              className={
                "terms-span-comments" +
                (thirdAgree ? " terms-agree" : " terms-comment-first")
              }
            >
              ㆍ 예약 관련 내용은 동의 여부와 관계없이 발송됩니다.
            </span>
          </div>
        </div>
        <div>
          <button
            id="termsActionBtn"
            className={
              "terms-action-btn" +
              (termsActionBtn ? " terms-action-true-btn" : " terms-action-btn")
            }
            onClick={signupBtn}
          >
            동의하고 가입하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default TermsSignup;
