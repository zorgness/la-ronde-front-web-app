import React from "react";
import Logo from "../images/logo.png";
import Search from "./Search";
import Geolocation from "../images/geolocation.png";

const Home = () => {
  return (
    <div className="mt-5">
      <div className="m-3">
        <Search />
        <pre className="p-3">
          <img src={Geolocation} alt="" className="avatar-small mx-2" />
          entrez votre code postal
        </pre>
      </div>

      <img src={Logo} alt="logo" border="0" className="img-fluid" />

      <figure className="m-3">
        <blockquote className="blockquote">
          <p className="mb-0">
            La musique est l'expression parfaite d'un monde idéal qui
            s'exprimerait à nous par le moyen de l'harmonie.
          </p>
        </blockquote>
        <figcaption className="blockquote-footer m-3">
          <cite title="Source Title">Albert Camus</cite>
        </figcaption>
      </figure>
    </div>
  );
};

export default Home;
