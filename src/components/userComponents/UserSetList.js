import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../Api/fetchData";
import { connect } from "react-redux";
import { importAll } from "./../.././//utils/importAll";

const UserSetList = ({ setListData }) => {
  const [userSetLists, setUserSetList] = useState([]);

  // console.log(setListData)

  const images = importAll(
    require.context("../../images/img-music", false, /\.(png|jpe?g|svg)$/)
  );

  useEffect(() => {
    const urlMain = process.env.REACT_APP_URL_MAIN;

    setUserSetList([]);

    return () => {
      setListData?.forEach((element) => {
        fetchData(urlMain + element).then((res) => {
          setUserSetList((prev) => [...prev, res]);
        });
      });
    };
  }, [setListData]);

  const sortedList = userSetLists?.sort((a, b) => b?.id - a?.id);

  return (
    <div>
      <h2>PlayList</h2>

      <Link to={"/set-list-new"} className="btn btn-primary">
        Nouvelle Playlist
      </Link>

      <div className="d-flex justify-content-around flex-wrap mt-3 gap-3">
        {sortedList.map((element) => {
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

const mapStateToProps = (state) => {
  return {
    setListData: state.auth?.userData?.setLists,
  };
};

export default connect(mapStateToProps, null)(UserSetList);
