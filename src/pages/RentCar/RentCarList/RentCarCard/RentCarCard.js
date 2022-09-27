import "./RentCarCard.scss";
import ImgCard from "./ImgCard/ImgCard";
import TagList from "./TagList/TagList";
import { useEffect, useState } from "react";
import CompanyList from "./CompanyList/CompanyList";

function RentCarCard(props) {
  const { rentCarInfo, rentCarTags } = props;

  // ImgCard props
  const [carInfo, setCarInfo] = useState({});

  // TagList props
  const [tagInfo, setTagInfo] = useState([]);

  // CompanyList props
  const [companyInfo, setCompanyInfo] = useState([]);

  // props 세팅
  useEffect(() => {
    if (rentCarInfo && rentCarTags) {
      // ImgCard props setting
      const imgCardProps = {
        carName: rentCarInfo.carName,
        carPhoto: rentCarInfo.carPhoto,
        ridePeopleNumber: rentCarInfo.ridePeopleNumber,
        oilType: rentCarInfo.oilType,
      };

      // TagList props setting
      const tagListProps = rentCarInfo.option;

      // ImgCard props setting
      const companyProps = rentCarInfo.rentCarCompanyList;
      // props setting
      setCarInfo(imgCardProps);
      setTagInfo(tagListProps);
      setCompanyInfo(companyProps);
    }
  }, [rentCarInfo]);

  return (
    <div className="rentcar-card-wrap product-bar">
      <ImgCard carInfo={carInfo} />
      <TagList TagInfo={tagInfo} rentCarTags={rentCarTags} />
      <CompanyList companyInfo={companyInfo} />
    </div>
  );
}

export default RentCarCard;
