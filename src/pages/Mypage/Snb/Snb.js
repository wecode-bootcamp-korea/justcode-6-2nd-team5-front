import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Snb.scss";

function Snb() {
  // 메뉴 동적으로 열리는 것을 위한 state value
  const [isSnbOpen0, setIsSnbOpen0] = useState(false);
  const [isSnbOpen1, setIsSnbOpen1] = useState(false);
  const [isSnbOpen2, setIsSnbOpen2] = useState(false);
  const [isSnbOpen3, setIsSnbOpen3] = useState(false);
  const [isSnbOpen4, setIsSnbOpen4] = useState(false);
  const [isSnbOpen5, setIsSnbOpen5] = useState(false);

  // 사이드 메뉴 목록
  const snbList = [
    {
      title: "예약/이용내역",
      content: ["렌터카", "숙박"],
      disabled: isSnbOpen0,
    },
    {
      title: "북마크",
      content: ["숙박", "맛집", "스토리"],
      disabled: isSnbOpen1,
    },
    {
      title: "리뷰관리",
      content: ["작성가능리뷰", "작성완료리뷰"],
      disabled: isSnbOpen2,
    },
    {
      title: "1:1문의내역",
      content: [],
      disabled: isSnbOpen3,
    },
    {
      title: "수정제안내역",
      content: [],
      disabled: isSnbOpen4,
    },
    {
      title: "회원정보관리",
      content: [
        "회원정보변경",
        "비밀번호변경",
        "결제수단관리",
        "텀블러 등급",
        "마케팅정보 수신동의",
        "회원탈퇴",
      ],
      disabled: isSnbOpen5,
    },
  ];

  const navigate = useNavigate();

  const openMenu = (targetClassName) => {
    targetClassName = "active";
  };

  const nothing = () => {
    // 아무 동작 안 하는 함수
  };

  const snbSlideOn = (e) => {
    const sndId = e.target.id;

    sndId === "0"
      ? setIsSnbOpen0((prev) => !prev)
      : sndId === "1"
      ? setIsSnbOpen1((prev) => !prev)
      : sndId === "2"
      ? setIsSnbOpen2((prev) => !prev)
      : sndId === "3"
      ? navigate("/")
      : sndId === "4"
      ? navigate("/")
      : sndId === "5"
      ? setIsSnbOpen5((prev) => !prev)
      : nothing();
  };

  return (
    <div className="mypage-snb-wrap">
      <h2 className="mypage-snb-title">마이페이지</h2>
      <nav className="mypage-snb-list">
        <ul className="mypage-snb-list-dep1">
          {snbList.map((list, index) => {
            return (
              <li key={index}>
                {/* 사이드 메뉴 제목 */}
                <div
                  className={list.disabled ? "snb-on" : "snb-off"}
                  id={index}
                  onClick={snbSlideOn}
                >
                  {list.title}
                  <ul className="mypage-snb-list-dep2">
                    {list.content.map((content, index) => {
                      return (
                        <li className="slideWrapper" key={index}>
                          {/* 사이드 메뉴 소제목 */}
                          <a className="subtitle" href="">
                            {content}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Snb;
