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

  return (
    <div className="container mt-5">
      <h2 className="mb-5">Trouver un musicien</h2>

      <Search />

      <h6 className="text-center mt-3">Filter</h6>
      <div className="d-flex justify-content-around flex-wrap gap-3">
        <div>
          <button className="btn btn-outline-primary btn-filter">Style</button>
        </div>
        <div>
          <button className="btn btn-outline-dark btn-filter">
            Instruments
          </button>
        </div>
        <div>
          <button className="btn btn-outline-warning btn-filter">
            Location
          </button>
        </div>
      </div>

      {loading && <Loader />}

      <div className="d-flex flex-wrap justify-content-around mt-5">
        {musicians?.map((musician, index) => {
          return <Musician key={index} musician={musician} />;
        })}
      </div>
    </div>
  );
};

export default MusicianIndex;
