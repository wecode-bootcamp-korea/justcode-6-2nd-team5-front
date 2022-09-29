import React from "react";
import ReactPaginate from "react-paginate";

import "./RestaurantPaginate.scss";

function RestaurantPaginate(props) {
  const handlePageClick = (data) => {
    props.offsetHandler(data.selected * 4);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {props.totalCount !== 0 && (
        <ReactPaginate
          previousLabel="&laquo;"
          nextLabel="&raquo;"
          pageCount={Math.ceil(props.totalCount / 4)}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousClassName={"previous-button"}
          nextClassName={"next-button"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          activeLinkClassName={"active-button"}
        />
      )}
    </>
  );
}

export default RestaurantPaginate;
