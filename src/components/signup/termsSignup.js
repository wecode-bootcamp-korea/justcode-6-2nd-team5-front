import "./TermsSignup.scss";

function TermsSignup() {
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
            <input type="checkbox" id="terms-chks"></input>
            <label htmlFor="terms-chks" className="terms-label">
              전체 약관 동의
            </label>
          </div>
          <div>
            <div className="terms-essential">
              <span>[필수]</span>
              <label> 이용약관 동의</label>
              <br></br>
              <div>
                <span>[필수]</span>
                <label> 개인정보 취급방침 동의</label>
              </div>
            </div>
          </div>
          <div className="terms-select">
            <span>[선택]</span>
            <span> 마케팅 및 광고 활동 동의</span>
          </div>
          <div className="terms-comment-first">
            <span>
              ㆍ 수신 동의 시 제주도 여행 노하우가 담긴 뉴스테러와 이벤트 소식을
              알려드립니다.
            </span>
          </div>
          <div className="terms-comment-second">
            <span className="terms-span-comments">
              예약 관련 내용은 동의 여부와 관계없이 발송됩니다.
            </span>
          </div>
        </div>
        <div>
          <button className="terms-action-btn">동의하고 가입하기</button>
        </div>
      </div>
    </div>
  );
}

export default TermsSignup;
