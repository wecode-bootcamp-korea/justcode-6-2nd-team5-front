import "./Facilities.scss";
import HotelFacilities from "../../assets/images/hotel-facilities.png";

function Facilities() {
  return (
    <div className="facilities-container">
      <img src={HotelFacilities} width="60%"></img>
    </div>
  );
}

export default Facilities;
