import React, { useState, useEffect } from "react";

function RestaurantReview({ data }) {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/restaurant/review?id=${data.id}`)
      .then((res) => res.json())
      .then((json) => {
        setReviewData(json);
      });
  }, []);

  return <></>;
}

export default RestaurantReview;
