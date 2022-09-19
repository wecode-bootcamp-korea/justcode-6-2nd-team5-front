import "./MypageSnb.scss";

function MypageSnb() {
  // 사이드 메뉴 목록
  const snbList = [
    {
      title: "예약/이용내역",
      content: ["렌터카", "숙박"],
    },
    {
      title: "북마크",
      content: ["숙박", "맛집", "스토리"],
    },
    {
      title: "리뷰관리",
      content: ["작성가능리뷰", "작성완료리뷰"],
    },
    {
      title: "1:1문의내역",
      content: [],
    },
    {
      title: "수정제안내역",
      content: [],
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
    },
  ];

  return (
    <div className="mypage-snb-wrap">
      <h2 className="mypage-snb-title">마이페이지</h2>
      <nav className="mypage-snb-list">
        <ul className="mypage-snb-list-dep1">
          {snbList.map((list, index) => {
            return (
              <li key={index}>
                {/* 사이드 메뉴 제목 */}
                <a className="title" href="">
                  {list.title}
                </a>
                <ul className="mypage-snb-list-dep2">
                  {list.content.map((content, index) => {
                    return (
                      <li key={index}>
                        {/* 사이드 메뉴 소제목 */}
                        <a className="subtitle" href="">
                          {content}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default MypageSnb;
