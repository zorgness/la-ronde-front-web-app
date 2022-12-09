import React from "react";
import CommunityComponent from "./userComponents/CommunityComponent";

const CommunityContainer = ({ communityData }) => {
  return <CommunityComponent communityData={communityData} />;
};

export default CommunityContainer;
