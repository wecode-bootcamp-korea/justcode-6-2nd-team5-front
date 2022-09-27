import { useNavigate } from "react-router-dom";
import Promotion from "../../components/Promotion/Promotion";
import Lodge from "../../components/Lodge/Lodge";
import HotelSearch from "../../components/Hotel/HotelSearch";
import HotelStroy from "../../components/Hotel/HotelStroy";
import "./Hotel.scss";

function Hotel() {
  const navigate = useNavigate();
  const LodgeClick = () => {
    navigate("/hoteldetail");
  };

  return (
    <div className="hotel-container">
      <div className="hotel-contens">
        <div onClick={LodgeClick}>
          <Lodge />
        </div>
        <HotelSearch />
        <HotelStroy />
        <Promotion />
      </div>
    </div>
  );
}

export default Hotel;
