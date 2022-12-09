import React from "react";

const DisponibilityComponent = ({ disponibility }) => {
  return (
    <li className="list-group-item">
      {disponibility.date.toISOString().split("T")[0]}{" "}
    </li>
  );
};

export default DisponibilityComponent;
