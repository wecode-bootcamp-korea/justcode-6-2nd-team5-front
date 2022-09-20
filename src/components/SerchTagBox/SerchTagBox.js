import { useState } from "react";
import "./SerchTagBox.scss";

function SerchTagBox() {
  const tagList = [
    "캐스퍼",
    "애견동반",
    "낚시용품 가능",
    "오픈카",
    "주유비 SAVE, 전기차",
    "ALL NEW 신차",
    "전기충전",
    "BMW",
    "차박/캠핑카",
  ];

  // 버튼 슬라이드
  const [tagListSlide, setTagListSlide] = useState(0);
  const pageWidth = document.documentElement.scrollWidth;
  const slideCondition = 1000000 / pageWidth;

  // next 버튼이 눌렸을 때 (3번만 동작하도록 함)
  const nextSlide = () => {
    if (tagListSlide > -slideCondition) setTagListSlide((prev) => prev - 300);
  };
  // prev 버튼이 눌렸을 때 (next 버튼이 한번이라도 눌렸을 때만 동작하도록 함)
  const prevSlide = () => {
    if (tagListSlide < 0) setTagListSlide((prev) => prev + 300);
  };

  return (
    <div className="rentcar-stb-wrap">
      <div className="title">빠른 검색</div>
      {/* prev 버튼은 next 버튼이 한번이라도 눌렸을 때만 렌더링 되도록 함 */}
      {tagListSlide !== 0 && (
        <div className="prev-btn" onClick={prevSlide}>
          &lt;
        </div>
      )}
      <div className="tag-list-wrap">
        <div className="tag-list" style={{ marginLeft: `${tagListSlide}px` }}>
          {tagList.map((tag, index) => {
            return <button key={index}>#{tag}</button>;
          })}
        </div>
      </div>
      {/* next 버튼 3번 누르면 사라지도록 함 */}
      {tagListSlide > -slideCondition && (
        <div className="next-btn" onClick={nextSlide}>
          &gt;
        </div>
      )}
    </div>
  );
}

export default SerchTagBox;
