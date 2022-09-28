import React from "react";

import "./RestaurantMenu.scss";

function RestaurantMenu({ data }) {
  return (
    <div>
      <ul className="restaurant-menu-wrapper">
        {data.map((menu) => {
          return (
            <li>
              <span>{menu.menu}</span>
              <span>{menu.price.toLocaleString() + "원"} </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
