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

  return (
    <div className="rentcar-stb-wrap todo">
      <div className="title">빠른 검색</div>
      <div className="tag-list">
        {tagList.map((tag, index) => {
          return <button key={index}>#{tag}</button>;
        })}
      </div>
      <div className="slide-btn">&gt;</div>
    </div>
  );
}

export default SerchTagBox;
