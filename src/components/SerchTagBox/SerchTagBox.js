import { useState } from "react";
import "./SerchTagBox.scss";

function SerchTagBox() {
  // 버튼 슬라이드
  const [tagListSlide, setTagListSlide] = useState(0);
  const [slideCondition, setSlideCondition] = useState(1000000);

  // next 버튼이 눌렸을 때 (3번만 동작하도록 함)
  const nextSlide = () => {
    // tag-list 의 너비값을 추출 하여 할당
    const tagListWidth =
      document.documentElement.getElementsByClassName("tag-list")[0]
        .offsetWidth;

    // next 버튼의 렌더링 조건 설정 (tag-list 의 너비와 버튼 슬라이드의 최대움직임값은 반비례 관계)
    setSlideCondition(1500000 / tagListWidth);

    if (tagListSlide > -slideCondition) setTagListSlide((prev) => prev - 200);
  };
  // prev 버튼이 눌렸을 때 (next 버튼이 한번이라도 눌렸을 때만 동작하도록 함)
  const prevSlide = () => {
    if (tagListSlide < 0) setTagListSlide((prev) => prev + 200);
  };

  // 선택된 태그 state value
  const [isOnTag0, setIsOnTag0] = useState(false);
  const [isOnTag1, setIsOnTag1] = useState(false);
  const [isOnTag2, setIsOnTag2] = useState(false);
  const [isOnTag3, setIsOnTag3] = useState(false);
  const [isOnTag4, setIsOnTag4] = useState(false);
  const [isOnTag5, setIsOnTag5] = useState(false);
  const [isOnTag6, setIsOnTag6] = useState(false);
  const [isOnTag7, setIsOnTag7] = useState(false);
  const [isOnTag8, setIsOnTag8] = useState(false);

  // 태그 mockdata
  const tagList = [
    {
      tagName: "캐스퍼",
      disabled: isOnTag0,
    },
    {
      tagName: "애견동반",
      disabled: isOnTag1,
    },
    {
      tagName: "낚시용품 가능",
      disabled: isOnTag2,
    },
    {
      tagName: "오픈카",
      disabled: isOnTag3,
    },
    {
      tagName: "주유비 SAVE, 전기차",
      disabled: isOnTag4,
    },
    {
      tagName: "ALL NEW 신차",
      disabled: isOnTag5,
    },
    {
      tagName: "전기충전",
      disabled: isOnTag6,
    },
    {
      tagName: "BMW",
      disabled: isOnTag7,
    },
    {
      tagName: "차박/캠핑카",
      disabled: isOnTag8,
    },
  ];

  // 태그 선택/선택해제 함수
  const tagSelect = (e) => {
    const tagId = e.target.id;

    if (tagId === "0") setIsOnTag0((prev) => !prev);
    if (tagId === "1") setIsOnTag1((prev) => !prev);
    if (tagId === "2") setIsOnTag2((prev) => !prev);
    if (tagId === "3") setIsOnTag3((prev) => !prev);
    if (tagId === "4") setIsOnTag4((prev) => !prev);
    if (tagId === "5") setIsOnTag5((prev) => !prev);
    if (tagId === "6") setIsOnTag6((prev) => !prev);
    if (tagId === "7") setIsOnTag7((prev) => !prev);
    if (tagId === "8") setIsOnTag8((prev) => !prev);
  };

  return (
    <div className="rentcar-stb-wrap">
      <div className="title">빠른 검색</div>
      {/* prev 버튼은 tag list의 위치가 초기 위치보다 클 때만 렌더링 되도록 함 */}
      {tagListSlide < 0 && (
        <div className="prev-btn" onClick={prevSlide}>
          &lt;
        </div>
      )}
      <div className="tag-list-wrap">
        <div className="tag-list" style={{ marginLeft: `${tagListSlide}px` }}>
          {tagList.map((tagInfo, index) => {
            return (
              <button
                className={tagInfo.disabled ? "tag-on" : "tag-off"}
                key={index}
                id={index}
                onClick={tagSelect}
              >
                {tagInfo.disabled && <span>✓</span>}#{tagInfo.tagName}
              </button>
            );
          })}
        </div>
      </div>
      {/* 사용자가 설정한 페이지 너비가 넓어질수록 slideCondition는 작아짐*/}
      {tagListSlide > -slideCondition && (
        <div className="next-btn" onClick={nextSlide}>
          &gt;
        </div>
      )}
    </div>
  );
}

export default SerchTagBox;
