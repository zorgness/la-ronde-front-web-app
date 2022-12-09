import React from "react";

const Rating = ({ rating }) => {
  const score = (rating / 5) * 100;

  return (
    <span className="star-wrapper">
      <span className="stars" style={{ width: score + "%" }}></span>
    </span>
  );
};

export default Rating;
