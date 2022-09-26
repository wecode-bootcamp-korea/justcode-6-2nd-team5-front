import React, { useState, useEffect } from "react";

import "./HotelThema.scss";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Restaurant() {
  const [data, setData] = useState([]);
  const [menuBox, setMenuBox] = useState(null);
  const [locationBox, setLocationBox] = useState(null);
  const [p, setP] = useState(false);

  useEffect(() => {
    fetch("/data/hotelthema.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.restaurantList);
      });
  }, []);

  // const checkHandler = (e) => {
  //   if (e.target.checked) {
  //     localStorage.setItem("checkbox", e.target.value);
  //     setP(true);
  //   } else {
  //     localStorage.removeItem("checkbox", e.target.value);
  //     setP(false);
  //   }
  //   console.log(localStorage.getItem("checkbox"));
  // };

  return (
    <div className="restaurant-container">
      <div className="restaurant-content">
        <div className="restaurant-top-content">
          {/* <div className="category-wrapper"> */}
          {/* <span>메뉴</span>
            <button onClick={() => setMenuBox(!menuBox)}>
              {menuBox === true ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </button>
          </div>
          {menuBox && (
            <form className="category-list-wrapper">
              <label class="container">
                전체
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="container">
                일식
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="container">
                한식
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="container">
                중식
                <input
                  type="checkbox"
                  value="중식"
                  onChange={checkHandler}
                  checked={p}
                />
                <span class="checkmark"></span>
              </label>
              <label class="container">
                양식
                <input
                  type="checkbox"
                  value="양식"
                  onChange={checkHandler}
                  checked={p}
                />
                <span class="checkmark"></span>
              </label>
            </form>
          )}
          <div className="category-wrapper">
            <span>지역</span>
            <button onClick={() => setLocationBox(!locationBox)}>
              {locationBox === true ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </button>
          </div>
          {locationBox && (
            <form className="category-list-wrapper">
              <label class="container">
                One
                <input type="radio" name="radio" />
                <span class="radiomark"></span>
              </label>
              <label class="container">
                Two
                <input type="radio" name="radio" />
                <span class="radiomark"></span>
              </label>
              <label class="container">
                Three
                <input type="radio" name="radio" />
                <span class="radiomark"></span>
              </label>
              <label class="container">
                Four
                <input type="radio" name="radio" />
                <span class="radiomark"></span>
              </label>
            </form>
          )} */}
        </div>
      </div>
      <div className="restaurant-main-content">
        <div className="total-restaurant">
          <p>
            총 <span>129</span>건
          </p>
        </div>
        <div className="restaurant-list-wrapper">
          {data.map((data) => {
            return (
              <div className="restaurant-list" key={data.id}>
                <div className="restaurant-img">
                  <img src={data.img} alt="이미지" />
                </div>
                <div className="restaurant-info">
                  <h1>{data.name}</h1>
                  <span className="total-like">{data.totalLike} </span>
                  <span className="total-review-point">{data.reviewPoint}</span>
                  <span className="address">{data.address}</span>
                  <p>{data.intro}</p>
                  <span>{data.hashTag}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
