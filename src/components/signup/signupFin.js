import "./SignupFin.scss";
import signupJeju from "../../assets/images/signupJeju.png";

function SignupFin() {
  return (
    <div className="signup-fin">
      <div className="signup-fin-container">
        <div className="signup-title">
          <p>회원가입</p>
        </div>
        <div>
          <img src={signupJeju} className="signup-j-img"></img>
        </div>
        <div className="signup-fin-bottom">
          <span>회원가입이 완료되었습니다.</span>
        </div>
        <div className="signup-bottom-btn">
          <div className="home-btn-div">
            <button className="home-btn">홈으로</button>
          </div>
          <div className="login-btn-div">
            <button className="login-btn">로그인</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupFin;
