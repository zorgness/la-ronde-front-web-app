import React, { useState, useEffect } from "react";
import Search from "./Search";
import { fetchData } from "../Api/fetchData";
import { Link } from "react-router-dom";
import { importAll } from "./../utils/importAll";
import Loader from "./Loader";

const SetListIndex = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const images = importAll(
    require.context("./../images/img-music", false, /\.(png|jpe?g|svg)$/)
  );

  useEffect(() => {
    const urlMain = process.env.REACT_APP_URL_MAIN;
    return () => {
      fetchData(urlMain + "/api/set_lists").then((res) => {
        setList(res);
        setLoading(false);
      });
    };
  }, [list?.length]);

  return (
    <div className="container mt-5">
      <h2>Set List</h2>

      <div className="m-3">
        <Search />
      </div>

      <h6 className="text-center">Filter</h6>
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

      <div className="d-flex justify-content-center gap-5 flex-wrap mt-5 ">
        {list?.["hydra:member"]?.map((element) => {
          return (
            <Link to={`/set-list/${element.id}`} key={element.id}>
              <div className="card-product">
                <img
                  src={images[element.theme.toLowerCase() + ".png"]}
                  alt=""
                />
                <div className="card-product-infos">
                  <h2>{element.name}</h2>
                  <p>{element.theme}</p>
                  <pre>{element.city}</pre>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SetListIndex;
