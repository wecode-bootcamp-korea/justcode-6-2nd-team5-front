import Promotion from "../../components/Promotion/Promotion";
import Lodge from "../../components/Lodge/Lodge";
import "./Hotel.scss";

function Hotel() {
  const themeTagClick = () => {
    alert("아직 준비가 안됐습니다.");
  };

  return (
    <div className="hotel-container">
      <div className="hotel-contens">
        <div>
          <Lodge />
        </div>
        <div className="hotel-theme-search">
          <h1 className="hotel-theme-search-title">테마검색</h1>
          <div className="inner">
            <div className="theme-tag-list">
              <button className="theme-tag-item" onClick={themeTagClick}>
                #인기
              </button>
              <button className="theme-tag-item" onClick={themeTagClick}>
                #감성숙소
              </button>
              <button className="theme-tag-item" onClick={themeTagClick}>
                #특급호텔
              </button>
              <button className="theme-tag-item" onClick={themeTagClick}>
                #바비큐
              </button>
            </div>
          </div>
        </div>
        <div>
          <Promotion />
        </div>
      </div>
    </div>
  );
}

export default Hotel;
