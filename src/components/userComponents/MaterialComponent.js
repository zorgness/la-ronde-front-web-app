import React from "react";

const MaterialComponent = ({ material }) => {
  const { item, brand, model } = material;
  return (
    <div className="mt-3">
      <div>
        <h6>{item}</h6>
        <p>{brand}</p>
        <p>{model}</p>
      </div>
    </div>
  );
};

export default MaterialComponent;
