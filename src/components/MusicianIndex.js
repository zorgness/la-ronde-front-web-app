import React, { useState, useEffect } from "react";
import { fetchData } from "./../Api/fetchData";
import Musician from "./Musician";
import Search from "./Search";
import Loader from "./Loader";

const MusicianIndex = () => {
  const [musicians, setMusicians] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlMain = process.env.REACT_APP_URL_MAIN;

    return () => {
      fetchData(urlMain + "/api/users").then((res) => {
        setMusicians(res?.["hydra:member"]);
        setLoading(false);
      });
    };
  }, []);

  console.log(musicians);

  return (
    <div className="container mt-5">
      <h2 className="mb-5">Trouver un musicien</h2>

      <Search />

      <h6 className="text-center mt-3">Filter</h6>
      <div className="d-flex justify-content-around flex-wrap">
        <div>
          <button className="btn btn-primary" style={{ borderRadius: "40px" }}>
            Style
          </button>
        </div>
        <div>
          <button className="btn btn-dark" style={{ borderRadius: "40px" }}>
            Instruments
          </button>
        </div>
        <div>
          <button className="btn btn-warning" style={{ borderRadius: "40px" }}>
            Location
          </button>
        </div>
      </div>

      {loading && <Loader />}

      <div className="d-flex flex-wrap justify-content-around mt-5">
        {musicians.map((musician, index) => {
          return <Musician key={index} musician={musician} />;
        })}
      </div>
    </div>
  );
};

export default MusicianIndex;
