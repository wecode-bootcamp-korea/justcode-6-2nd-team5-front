import Promotion from "../../components/Promotion/Promotion";
import HotelRanking from "../../components/Hotel/HotelRanking";
import HotelSearch from "../../components/Hotel/HotelSearch";
import HotelStroy from "../../components/Hotel/HotelStroy";
import "./Hotel.scss";

function Hotel() {
  return (
    <div className="hotel-container">
      <div className="hotel-contens">
        <HotelRanking />
        <HotelSearch />
        <HotelStroy />
        <Promotion />
      </div>
    </div>
  );
}

export default Hotel;
