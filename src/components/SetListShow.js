import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../Api/fetchData";
import { Link } from "react-router-dom";
import Songs from "./userComponents/Songs";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AboutSetList from "./AboutSetList";
import Event from "./Event";
import avatar from "./../images/user-avatar.png";
import CommunityContainer from "./CommunityContainer";
import { communityData } from "./Data/communityData";

const SetListShow = ({ authData }) => {
  const params = useParams();

  const urlMain = process.env.REACT_APP_URL_MAIN;

  const [data, setData] = useState([]);
  const [owner, setOwner] = useState([]);

  const { id, name, theme, city } = data;

  const regex = /\d+/g;
  const ownerId = parseInt(data?.owner?.match(regex)[0]);
  const userId = authData.userData?.id;
  const userIsOwner = userId === ownerId;

  useEffect(() => {
    fetchData(urlMain + "/api/set_lists/" + params.id).then((res) => {
      setData(res);
    });
  }, [params.length]);

  useEffect(() => {
    fetchData(urlMain + data?.owner).then((res) => {
      setOwner(res);
    });
  }, [data?.owner]);

  const handleRequest = () => {
    alert("votre demande a était envoyée ");
  };

  return (
    <div className="container mt-5">
      <Link to={`/musician-profile/${ownerId}`}>
        <div className="mb-3">
          <img src={avatar} className="avatar" alt="" />
          <h3>{owner?.username}</h3>
        </div>
      </Link>

      <div>
        <h3>{name}</h3>
        <p>{theme}</p>
        <p>{city}</p>
      </div>

      <Tabs
        defaultActiveKey="about"
        id="uncontrolled-tab-example"
        className="mb-3 d-flex "
        fill
      >
        <Tab eventKey="about" title="about">
          <AboutSetList />

          {!userIsOwner && (
            <div className="my-3">
              <Button onClick={handleRequest} className="btn btn-success">
                Join community
              </Button>
            </div>
          )}

          <CommunityContainer communityData={communityData} />
        </Tab>

        <Tab eventKey="songs" title="songs">
          {userIsOwner && (
            <div className="my-4">
              <Link to={`/song-new/${id}`} className="btn btn-primary">
                Add song
              </Link>
            </div>
          )}

          <Songs data={data} userIsOwner={userIsOwner} />
        </Tab>

        <Tab eventKey="events" title="events">
          {userIsOwner && (
            <div className="my-4">
              <Link to={"/"} className="btn btn-info">
                new event
              </Link>
            </div>
          )}
          <Event />
        </Tab>
      </Tabs>
    </div>
  );
};

export default SetListShow;
