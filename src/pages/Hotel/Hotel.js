import Promotion from "../../components/Promotion/Promotion";
import Lodge from "../../components/Lodge/Lodge";
import HotelSearch from "../../components/Hotel/HotelSearch";
import HotelStroy from "../../components/Hotel/HotelStroy";
import "./Hotel.scss";

function Hotel() {
  return (
    <div className="hotel-container">
      <div className="hotel-contens">
        <Lodge />
        <HotelSearch />
        <HotelStroy />
        <Promotion />
      </div>
    </div>
  );
}

export default Hotel;
