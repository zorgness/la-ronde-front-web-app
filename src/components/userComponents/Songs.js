import React, { useState, useEffect } from "react";
import { fetchData } from "../../Api/fetchData";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import LikeDislikeComponent from "../LikeDislikeComponent";

const SongIndex = ({ data, userIsOwner }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const urlMain = process.env.REACT_APP_URL_MAIN;
    data?.songs?.forEach((item) => {
      fetchData(urlMain + item).then((res) => {
        setSongs((prevState) => [...prevState, res]);
      });
    });
  }, [data?.songs?.length]);

  return (
    <div className="m-3">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Titre</th>
          </tr>
        </thead>
        <tbody>
          {songs.map(({ id, name, creator }) => {
            return (
              <tr key={id}>
                <td>
                  <Link to={`/song/${id}`} state={{ userIsOwner: userIsOwner }}>
                    {name} <br /> {creator}
                  </Link>
                  <LikeDislikeComponent />{" "}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default SongIndex;
