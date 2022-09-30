import "./Profile.scss";

function Profile({ user }) {
  return (
    <div className="mypage-profile-wrap">
      <div className="profile-img"></div>
      <div className="profile-info">
        <p>
          <span className="name">{user.username}</span>님은
          <br />
          <span className="grade">일반회원</span>입니다.
        </p>
      </div>
      <div className="profile-btn">
        <button>포인트 충전</button>
        <button>알림함</button>
      </div>
    </div>
  );
}

export default Profile;
