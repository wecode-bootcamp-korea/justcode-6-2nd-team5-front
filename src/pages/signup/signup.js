import "./signup.scss";
import { useState } from "react";
import SignupModal from "../../components/signupModal";

function Signup() {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <div className="signup-title">
          <p>회원가입</p>
        </div>
        <form>
          <div>
            <label htmlFor="signup-id" className="signup-label">
              아이디(이메일)
            </label>
            <input
              id="signup-id"
              placeholder="example@jejupass.com"
              className="id-input"
            ></input>
            <button
              type="button"
              className="overlap-chk-btn"
              onClick={showModal}
            >
              확인
            </button>
            {modalOpen && <SignupModal setModalOpen={setModalOpen} />}
          </div>
          <div>
            <label htmlFor="signup-pw" className="signup-label">
              비밀번호
            </label>
            <input
              id="signup-pw"
              placeholder="영문, 숫자, 특수문자 8 ~ 16자 이내"
              className="signup-input"
            ></input>
          </div>
          <div>
            <label htmlFor="signup-pw" className="signup-label">
              비밀번호 확인
            </label>
            <input
              id="signup-pw"
              placeholder="확인을 위해 한번 더 입력해주세요."
              className="signup-input"
            ></input>
          </div>
          <div>
            <label htmlFor="signup-name" className="signup-label">
              이름
            </label>
            <input id="signup-name" className="signup-input"></input>
          </div>
          <div className="signup-bday-container">
            <span className="signup-bday">생년월일</span>
            <select name="year">
              <option value=""> 년 </option>
              <option value="1995">1995</option>
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="2000">2000</option>
            </select>
            <select name="month">
              <option value=""> 월 </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <select name="day">
              <option value=""> 일 </option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="26">16</option>
            </select>
          </div>
          <div>
            <label htmlFor="signup-ph-n" className="signup-label">
              전화번호
            </label>
            <input
              id="signup-ph-n"
              placeholder="- 를 빼고 입력해주세요."
              className="signup-input"
            ></input>
          </div>
          <div>
            <div className="form-radio-btn radio-male">
              <input
                id="radio-1"
                type="radio"
                name="userSex"
                value="male"
                checked
              ></input>
              <label htmlFor="radio-1">남자</label>
            </div>
            <div className="form-radio-btn">
              <input
                id="radio-2"
                type="radio"
                name="userSex"
                value="female"
              ></input>
              <label htmlFor="radio-2">여자</label>
            </div>
          </div>
        </form>
        <div>
          <button className="signup-action-btn">확인</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
