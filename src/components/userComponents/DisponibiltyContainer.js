import React from "react";
import DisponibilityComponent from "./DisponibilityComponent";

const DisponibiltyContainer = ({ userDisponibility }) => {
  return (
    <div className="mt-3">
      <h2>Availablity</h2>
      <ul className="list-group">
        {userDisponibility.map((disponibility) => {
          return (
            <DisponibilityComponent
              key={disponibility.id}
              disponibility={disponibility}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default DisponibiltyContainer;
