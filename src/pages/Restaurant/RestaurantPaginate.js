import React from "react";
import ReactPaginate from "react-paginate";

import "./RestaurantPaginate.scss";

function RestaurantPaginate(props) {
  return (
    <ReactPaginate
      previousLabel="&laquo;"
      nextLabel="&raquo;"
      pageCount={Math.ceil(props.totalCount / 2)}
      //   onPageChange={handlePageClick}
      containerClassName={"pagination"}
      previousClassName={"previous-button"}
      nextClassName={"next-button"}
      pageClassName={"page-item"}
      pageLinkClassName={"page-link"}
      activeLinkClassName={"active-button"}
    />
  );
}

export default RestaurantPaginate;
