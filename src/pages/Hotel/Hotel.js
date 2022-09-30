import Promotion from "../../components/Promotion/Promotion";
import HotelRanking from "../../components/Hotel/HotelRanking";
import HotelSearch from "../../components/Hotel/HotelSearch";
import HotelStroy from "../../components/Hotel/HotelStroy";
import Modal from "../../components/Modal/Modal";
import AccomodationHeader from "../../components/Header/RoomHeader";
import { ModalContext } from "../../components/Context/ModalContext";
import "./Hotel.scss";
import { useContext } from "react";

function Hotel() {
  const { isOpen } = useContext(ModalContext);
  return (
    <>
      <AccomodationHeader />
      <div className="hotel-container">
        <div className="hotel-contens">
          <HotelRanking />
          <HotelSearch />
          <HotelStroy />
          <Promotion />
        </div>
      </div>
      {isOpen && <Modal />}
    </>
  );
}

export default Hotel;
