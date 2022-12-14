import React, { useState, useEffect } from "react";
import Avatar from "../../images/user-avatar.png";
import InstruForm from "./InstruForm";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { fetchData } from "../../Api/fetchData";
import Profile from "./Profile";
import Register from "../authComponents/Register";
import UserSetList from "./UserSetList";
import { connect } from "react-redux";

const Dashboard = ({ userAuthData }) => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  const [userInstrus, setUserInstrus] = useState([]);

  const username = userAuthData?.username;

  const instruments = userAuthData?.instruments;

  useEffect(() => {
    const urlMain = process.env.REACT_APP_URL_MAIN;

    setUserInstrus([]);

    return () => {
      instruments !== undefined &&
        instruments?.forEach((instruPath) => {
          fetchData(urlMain + instruPath).then((res) => {
            setUserInstrus((prevState) => [...prevState, res]);
          });
        });
    };
  }, [instruments]);

  return (
    <div>
      <div
        className="card-category"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://www.sight-o.io/wp-content/uploads/2020/09/AdobeStock_2025924791-min.jpeg)`,
        }}
      >
        <div className="d-flex flex-column">
          <div className="mb-4">
            <img src={Avatar} alt="user-avatar" className="avatar-large" />
          </div>

          {username}
        </div>
      </div>

      <main>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3 d-flex "
          fill
        >
          <Tab eventKey="profile" title="Profile">
            <Profile userData={userData} userInstrus={userInstrus} />
          </Tab>

          <Tab eventKey="setlist" title="Playlist">
            <UserSetList userData={userData} />
          </Tab>

          <Tab eventKey="Instruments" title="Instruments">
            <div className="d-flex align-items-center justify-content-center">
              <InstruForm
                userId={userData["@id"]}
                instruPresent={userInstrus}
              />
            </div>
          </Tab>

          <Tab eventKey="editProfile" title="Edit Profile">
            <div>
              <Register userData={userData} isEdit={true} />
            </div>
          </Tab>
        </Tabs>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userAuthData: state.auth.userData,
  };
};

export default connect(mapStateToProps, null)(Dashboard);
