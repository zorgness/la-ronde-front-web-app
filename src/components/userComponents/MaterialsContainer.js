import React from "react";
import MaterialComponent from "../userComponents/MaterialComponent";

const Materials = ({ userMaterials }) => {
  return (
    <div>
      {userMaterials.map((material, index) => {
        return <MaterialComponent key={index} material={material} />;
      })}
    </div>
  );
};

export default Materials;
