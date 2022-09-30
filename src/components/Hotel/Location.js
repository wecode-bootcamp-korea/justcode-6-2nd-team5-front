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
            {/* {locationData.bigAddress} |  */}
            {locationData.regionAddress} | {locationData.fullAddress}
          </span>
          <div className="location-search">
            <img src={GoogleMapsPin} className="location-pin"></img>
            <span className="location-search-text">지도검색</span>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53230.48223027992!2d126.49498049010718!3d33.503845074068515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350ce0858a6d79fd%3A0x4b9a8869e1919ce2!2z7KCc7KO87Yq567OE7J6Q7LmY64-EIOygnOyjvOyLnA!5e0!3m2!1sko!2skr!4v1664445217337!5m2!1sko!2skr"
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
