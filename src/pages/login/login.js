import { useState } from "react";
import "./login.scss";
import naverIcon from "../../assets/images/btnN.png";
import kakaoIcon from "../../assets/images/btnK.png";
// import loginBanner from "../../assets/images/loginBr.png";

function Login() {
  const [userEmail, setUserEamil] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const userEmailHandler = (e) => {
    const userEmailValue = e.target.value;
    setUserEamil(userEmailValue);
  };

  const userPasswordHandler = (e) => {
    const userPasswordValue = e.target.value;
    setUserPassword(userPasswordValue);
  };

  const loginClick = () => {
    fetch("http://localhost:8000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.token) {
          localStorage.setItem("token", result.token);
          alert("로그인 성공");
          window.location.replace("/");
        } else {
          alert("로그인 실패");
        }
      });
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-title">
          <p>
            똑똑한 제주여행,
            <br></br>
            제주패스로 시작하세요
          </p>
          {/* <div className="login-br">
            <img src={loginBanner} className="login-br"></img>
          </div> */}
        </div>
        <div className="tab-type">
          <li>
            <a>회원</a>
          </li>
          <li>
            <a>비회원</a>
          </li>
        </div>
        <div className="tab-content">
          <form className="tab-form">
            <div className="tab-input">
              <label htmlFor="id">아이디(이메일)</label>
              <input
                id="id"
                placeholder="E-mail을 입력해주세요."
                onChange={userEmailHandler}
              ></input>
            </div>
            <div className="tab-input">
              <label htmlFor="pw">비밀번호</label>
              <input
                type="password"
                id="pw"
                placeholder="비밀번호를 입력해주세요."
                onChange={userPasswordHandler}
              ></input>
            </div>
          </form>
          <div className="login-chks">
            <span>
              <input type="checkbox" id="login"></input>
              <label htmlFor="login">로그인 유지</label>
            </span>
            <span className="id-save-mrl-24">
              <input type="checkbox" id="id-save"></input>
              <label htmlFor="id-save">아이디 저장</label>
            </span>
          </div>
          <div className="btn-area">
            <button className="login-action-btn" onClick={loginClick}>
              로그인
            </button>
          </div>
          <div className="login-btn">
            <a className="btn-aft">아이디 찾기</a>
            <a className="btn-aft">비밀번호 찾기</a>
            <a className="btn-bef">회원가입</a>
          </div>
          <div>
            <div className="tit-bef">
              <span className="tit">간편 로그인</span>
            </div>
            <div>
              <button className="icon-btn">
                <img src={naverIcon} className="icon-n-css"></img>
              </button>
              <button className="icon-btn">
                <img src={kakaoIcon} className="icon-k-css"></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
