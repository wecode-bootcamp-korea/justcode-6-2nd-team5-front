import { useState } from "react";
import { useEffect } from "react";
import ImgCard from "./ImgCard/ImgCard";
import "./RentCarList.scss";

function RentCarList(props) {
  const { rentCarList, rentCarTags } = props;

  // 유효 태그 관리값
  const [effectiveTag, setEffectiveTag] = useState([]);

  // 유효 태그 찾는 함수
  useEffect(() => {
    if (rentCarList.length && rentCarTags.length) {
      let tagStateList = [];
      let effectiveTags = [];

      rentCarList.map((carInfo, index) => {
        for (let i = 0; i < rentCarTags.length; i++) {
          const result = rentCarTags.includes(carInfo.option[i]);

          tagStateList.push({
            id: i,
            tagName: rentCarTags[i],
            tagOn: result,
          });
        }
        effectiveTags.push(tagStateList);
        tagStateList = [];
      });
      setEffectiveTag(effectiveTags);
    }
  }, [rentCarList]);

  return (
    <div className="rentcar-list product-bar">
      <ImgCard />
      <div className="tag-list-wrap">
        {/* {effectiveTag &&
          effectiveTag[0].map((tag) => {
            return (
              <span key={tag.id} className={tag.tagOn ? "tag-on" : "tag-off"}>
                {tag.tagName}
              </span>
            );
          })} */}
      </div>
    </div>
  );
}

export default RentCarList;
