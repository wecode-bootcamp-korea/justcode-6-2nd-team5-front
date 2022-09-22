import "./signup.scss";
import { useState } from "react";
import SignupModal from "../../components/signup/signupModal";
import { navigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordChk, setPasswordChk] = useState("");
  const [isValid, setIsValid] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  const userSignupEmailHandler = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  };

  const userSignupPasswordHandler = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
  };

  const userSignupPasswordChkHandler = (e) => {
    const passwordChkValue = e.target.value;
    setPasswordChk(passwordChkValue);
  };

  const userSignupNameHandler = (e) => {
    const nameValue = e.target.value;
    setName(nameValue);
  };

  const userSignupPhoneNumberHandler = (e) => {
    const phoneNumberValue = e.target.value;
    setPhoneNumber(phoneNumberValue);
  };

  const passwordPattern =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  const phonePattern = /^010-?([0-9]{3,4})-?([0-9]{4})$/;

  const userSignUp = () => {
    email.includes("@") &&
    email.split(".").length - 1 >= 1 &&
    password.length >= 8 &&
    password.length <= 16
      ? setIsValid(true)
      : setIsValid(false);

    if (password !== passwordChk) {
      alert("입력한 비밀번호가 다릅니다.");
    } else if (passwordPattern.test(password) == false) {
      alert("비밀번호를 확인해주세요.");
    } else if (phonePattern.test(phoneNumber) == false) {
      alert("전화번호를 확인해주세요.");
    } else {
      // api docs 확인 후 바꿔야함
      fetch("http://localhost:8000/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          birth: birth,
          phoneNumber: phoneNumber,
          gender: gender,
          email: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.message == "") {
            // navigate("/login");
          } else {
            alert("회원가입에 실패하였습니다.");
          }
        });
    }
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
              onChange={userSignupEmailHandler}
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
              onChange={userSignupPasswordHandler}
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
              onChange={userSignupPasswordChkHandler}
              className="signup-input"
            ></input>
          </div>
          <div>
            <label htmlFor="signup-name" className="signup-label">
              이름
            </label>
            <input
              id="signup-name"
              className="signup-input"
              onChange={userSignupNameHandler}
            ></input>
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
              placeholder="- 를 포함해 입력해주세요."
              onChange={userSignupPhoneNumberHandler}
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
          <button className="signup-action-btn" onClick={userSignUp}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
