import React from "react";
import { importAll } from "../../utils/importAll";
import Rating from "../Rating";

const Instrument = ({ instruments }) => {
  const images = importAll(
    require.context("../../images/instru_images", false, /\.(png|jpe?g|svg)$/)
  );

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  return (
    <div className="mx-4">
      <ul className="list-group">
        {instruments?.map(({ id, name }) => {
          return (
            <li
              key={id}
              className="list-group-item text-start "
              style={{ border: "none" }}
            >
              <img
                src={images[`${name}.png`]}
                alt={name}
                className="avatar-square"
              />
              <span className="mx-4">{name}</span>
              <Rating rating={getRandomIntInclusive(1, 5)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Instrument;
