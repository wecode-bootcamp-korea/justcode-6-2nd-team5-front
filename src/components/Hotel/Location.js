import React, { useCallback, useEffect, useRef } from "react";
import GoogleMapsPin from "../../assets/images/google-maps-pin.png";
import "./Location.scss";

function Location(hotelData) {
  let locationData = hotelData.hotelData;

  return (
    <div className="location-container">
      <div className="location-contents">
        <div className="location-contents-top">
          <span>
            {locationData.bigAddress} | {locationData.regionAddress} |{" "}
            {locationData.fullAddress}
          </span>
          <div className="location-search">
            <img src={GoogleMapsPin} className="location-pin"></img>
            <span className="location-search-text">지도검색</span>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106561.00429980906!2d126.33678918578127!3d33.42242611935355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350cf7a2ec9d9f6f%3A0xec749413d8a9eeb8!2z7KCc7KO87Yq567OE7J6Q7LmY64-EIOygnOyjvOyLnCDslaDsm5TsnY0!5e0!3m2!1sko!2skr!4v1664354845002!5m2!1sko!2skr"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;
