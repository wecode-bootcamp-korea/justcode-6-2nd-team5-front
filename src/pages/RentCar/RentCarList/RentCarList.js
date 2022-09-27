import { useEffect } from "react";
import ImgCard from "./ImgCard/ImgCard";
import "./RentCarList.scss";

function RentCarList(props) {
  const { rentCarList, rentCarTags } = props;

  // console.log(rentCarTags);

  return (
    <div className="rentcar-list product-bar">
      <ImgCard />
      <div className="tag-list-wrap">
        <span className="tag">블루투스</span>
        <span className="tag">블루투스</span>
        <span className="tag">블루투스</span>
        <span className="tag">블루투스</span>
        <span className="tag">블루투스</span>
        <span className="tag">블루투스</span>
        <span className="tag">블루투스</span>
        <span className="tag">블루투스</span>
        <span className="tag">블루투스</span>
        <span className="tag">블루투스</span>
        <span className="tag">블루투스</span>
      </div>
    </div>
  );
}

export default RentCarList;
