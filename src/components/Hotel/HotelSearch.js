import HotelIcon from "../../assets/images/hotel-icon.png";
import "./HotelSearch.scss";

function HotelSearch() {
  return (
    <div className="hotel-theme-search">
      <h1 className="hotel-theme-search-title">테마검색</h1>
      <div className="inner">
        <div className="theme-tag-list">
          <button className="theme-tag-item">
            #인기
            <img src={HotelIcon} id="hotel-icon"></img>
          </button>
          <button className="theme-tag-item">#감성숙소</button>
          <button className="theme-tag-item">#특급호텔</button>
          <button className="theme-tag-item">#바비큐</button>
        </div>
      </div>
    </div>
  );
}

export default HotelSearch;
