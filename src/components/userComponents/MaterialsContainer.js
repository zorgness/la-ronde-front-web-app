import React from "react";
import MaterialComponent from "../userComponents/MaterialComponent";

const Materials = ({ userMaterials }) => {
  return (
    <div>
      <div>
        <h3>Materials</h3>
      </div>
      {userMaterials.map((material, index) => {
        return <MaterialComponent key={index} material={material} />;
      })}
    </div>
  );
};

export default Materials;
