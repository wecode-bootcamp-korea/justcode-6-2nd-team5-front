import "./MypageGrayBox.scss";

function MypageGrayBox() {
  return (
    <div className="mypage-graybox-wrap">
      <a href="">
        <p>
          <img src="" alt="book mark icon" />
          북마크
          <span>0</span>
        </p>
      </a>
      <a href="">
        <p>
          <img src="" alt="review icon" />
          이용후기
          <span>0</span>
        </p>
      </a>
      <a href="">
        <p>
          <img src="" alt="coupon icon" />
          보유쿠폰
          <span>0</span>
        </p>
      </a>
    </div>
  );
}

export default MypageGrayBox;
