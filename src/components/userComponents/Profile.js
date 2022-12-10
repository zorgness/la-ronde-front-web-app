import React, { useState } from "react";
import Instrument from "./Instrument";
import UserStory from "./UserStory";
import Button from "react-bootstrap/Button";
import ModalDescription from "./ModalDescription";
import MaterialsContainer from "../userComponents/MaterialsContainer";
import { userMaterials } from "../Data/userMaterials";
import { Link } from "react-router-dom";
import arrow from "../../images/arrow.png";

const Profile = ({ userData, userInstrus }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="profile">
      <p className="text-end mx-3">{userData.city}</p>

      <div className="text-start m-3">
        <Link
          to={`/musician-profile/${userData.id}`}
          className="btn btn-outline-primary"
        >
          <img src={arrow} alt="" className="avatar-small mx-2" />
          public profile
        </Link>
      </div>
      <h3 className="text-start mx-5">Mes Instruments</h3>

      <div>
        <Instrument instruments={userInstrus} />
        <MaterialsContainer userMaterials={userMaterials} />
        <UserStory userData={userData} />
      </div>

      {!userData.hasOwnProperty("description") && (
        <Button className="btn btn-primary" onClick={handleShow}>
          Ajouter votre description
        </Button>
      )}

      <ModalDescription
        userId={userData["@id"]}
        handleClose={handleClose}
        show={show}
      />
    </div>
  );
};

export default Profile;
