import "./Signup.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordChk, setPasswordChk] = useState("");
  const [gender, setGender] = useState("male");
  const [isValid, setIsValid] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [emailBtnDisable, setEmailBtnDisable] = useState(false);

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

  const userSignupBirthHandler = (e) => {
    const birthValue = e.target.value;
    setBirth(birthValue);
  };

  const userSignupPhoneNumberHandler = (e) => {
    const phoneNumberValue = e.target.value;
    setPhoneNumber(phoneNumberValue);
  };

  const passwordPattern =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  const phonePattern = /^010-?([0-9]{3,4})-?([0-9]{4})$/;
  const birthattern =
    /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;

  const userEmailValidation = () => {
    if (!(email.includes("@") && email.split(".").length - 1 >= 1)) {
      alert("이메일 형식이 아닙니다.");
    } else {
      fetch("http://localhost:8000/users/email/" + email, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      }).then((res) => {
        if (res.status === 400) {
          setEmailValid(false);
        } else {
          setEmailValid(true);
          alert("사용가능한 이메일 입니다.");
          setEmailBtnDisable(true);
        }
      });
    }
  };

  console.log(emailBtnDisable);

  const userSignUp = () => {
    email.includes("@") &&
    email.split(".").length - 1 >= 1 &&
    password.length >= 8 &&
    password.length <= 16
      ? setIsValid(true)
      : setIsValid(false);

    if (password !== passwordChk) {
      alert("입력한 비밀번호가 다릅니다.");
    } else if (email == "") {
      alert("이메일을 입력해주세요.");
    } else if (passwordPattern.test(password) == false) {
      alert("비밀번호를 확인해주세요.");
    } else if (name == "") {
      alert("이름을 입력해주세요.");
    } else if (birth == "") {
      alert("생년월일을 입력해주세요.");
    } else if (phonePattern.test(phoneNumber) == false) {
      alert("전화번호를 확인해주세요.");
    } else if (birthattern.test(birth) == false) {
      alert("생년월일 8자리를 확인해주세요.");
    } else {
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
          if (result.message == "회원가입 성공!") {
            navigate("/signupFin");
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
              onClick={userEmailValidation}
              disabled={emailBtnDisable}
            >
              확인
            </button>
            {emailValid ? (
              ""
            ) : (
              <p className="email-valid-chk">중복된 이메일 입니다.</p>
            )}
          </div>
          <div>
            <label htmlFor="signup-pw" className="signup-label">
              비밀번호
            </label>
            <input
              id="signup-pw"
              type="password"
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
              type="password"
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
            <label htmlFor="birth" className="signup-label">
              생년월일
            </label>
            <input
              id="birth"
              className="signup-input"
              onChange={userSignupBirthHandler}
              placeholder="생년월일은 8자리입니다."
            ></input>
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
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
