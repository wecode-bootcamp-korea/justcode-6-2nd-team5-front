import RentCarCard from "./RentCarCard/RentCarCard";
import "./RentCarList.scss";

function RentCarList(props) {
  const { rentCarList, rentCarTags } = props;

  return (
    <div className="rentcar-list">
      {rentCarList &&
        rentCarList.map((rentCarInfo, index) => {
          return (
            <RentCarCard
              key={index}
              rentCarInfo={rentCarInfo}
              rentCarTags={rentCarTags}
            />
          );
        })}
    </div>
  );
}

export default RentCarList;
