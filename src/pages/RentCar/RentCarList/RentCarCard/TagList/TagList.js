import { useEffect, useState } from "react";
import "./TagList.scss";

function TagList(props) {
  const { TagInfo, rentCarTags } = props;

  // TagList props
  const [effectiveTag, setEffectiveTag] = useState([]);

  // 유효/비유효한 태그 세팅 함수
  useEffect(() => {
    let effectiveTags = [];

    // 모든 태그와 해당 렌터카의 유효한 태그를 비교
    for (let i = 0; i < rentCarTags.length; i++) {
      const result = rentCarTags.includes(TagInfo[i]);

      effectiveTags.push({
        id: i,
        tagName: rentCarTags[i],
        tagOn: result,
      });
    }

    // 태그 아이디, 태그 이름, 태그 상태 세팅
    setEffectiveTag(effectiveTags);
  }, [TagInfo]);

  return (
    <div className="tag-list-wrap">
      {effectiveTag &&
        effectiveTag.map((tag) => {
          return (
            <span key={tag.id} className={tag.tagOn ? "tag-on" : "tag-off"}>
              {tag.tagName}
            </span>
          );
        })}
    </div>
  );
}

export default TagList;
