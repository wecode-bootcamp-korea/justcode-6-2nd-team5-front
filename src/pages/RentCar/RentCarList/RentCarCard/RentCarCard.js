import "./RentCarCard.scss";
import ImgCard from "./ImgCard/ImgCard";
import TagList from "./TagList/TagList";
import { useEffect, useState } from "react";

function RentCarCard(props) {
  const { rentCarInfo, rentCarTags } = props;

  // ImgCard props
  const [CarInfo, setCarInfo] = useState({});

  // TagList props
  const [TagInfo, setTagInfo] = useState([]);

  // props 세팅
  useEffect(() => {
    if (rentCarInfo && rentCarTags) {
      const ImgCardProps = {
        carName: rentCarInfo.carName,
        carPhoto: rentCarInfo.carPhoto,
        ridePeopleNumber: rentCarInfo.ridePeopleNumber,
        oilType: rentCarInfo.oilType,
      };

      const TagListProps = rentCarInfo.option;

      // props setting
      setCarInfo(ImgCardProps);
      setTagInfo(TagListProps);
    }
  }, [rentCarInfo]);

  return (
    <div className="rentcar-card-wrap product-bar">
      <ImgCard carInfo={CarInfo} />
      <TagList TagInfo={TagInfo} rentCarTags={rentCarTags} />
      <div className="company-list-wrap"></div>
    </div>
  );
}

export default RentCarCard;
