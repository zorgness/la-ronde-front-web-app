import React, { useState } from "react";
import likebtn from "../images/like.png";
import dislikebtn from "../images/dislike.png";

const LikeDislikeComponent = () => {
  const [likeCount, setLikeCount] = useState(5);
  const [dislikeCount, setDislikeCount] = useState(2);

  const [activeBtn, setActiveBtn] = useState("none");
  const handleLikeClick = () => {
    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }

    if (activeBtn === "like") {
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "dislike") {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("like");
    }
  };

  const handleDisikeClick = () => {
    if (activeBtn === "none") {
      setDislikeCount(dislikeCount + 1);
      setActiveBtn("dislike");
      return;
    }

    if (activeBtn === "dislike") {
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "like") {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likeCount - 1);
      setActiveBtn("dislike");
    }
  };
  return (
    <div className="container">
      <div className="btn-like-container">
        <button
          className={`btn-like ${activeBtn === "like" ? "like-active" : ""}`}
          onClick={handleLikeClick}
        >
          <span className="material-symbols-rounded">
            <img src={likebtn} alt="like" className="avatar" />
          </span>
          {likeCount}
        </button>

        <button
          className={`btn-like ${
            activeBtn === "dislike" ? "dislike-active" : ""
          }`}
          onClick={handleDisikeClick}
        >
          <span className="material-symbols-rounded">
            <img src={dislikebtn} alt="dislike" className="avatar" />
          </span>
          {dislikeCount}
        </button>
      </div>
    </div>
  );
};

export default LikeDislikeComponent;
