import React from "react";
import { faHeart, faArrowUpFromBracket,faComment, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TuitStats = ({
  tuit = {},
}) => {
  return (
    <div className="row mt-4">
      <span className="d-flex justify-content-around">
      <span> <FontAwesomeIcon icon={faComment} /> {tuit.retuits}{" "} </span>
      <span> <FontAwesomeIcon icon={faRetweet} /> {tuit.replies}{" "} </span>
      <span> <FontAwesomeIcon style={{color: tuit.liked ? "red" : "gray"}}icon={faHeart} /> {tuit.likes}{" "}</span>
      <span> <FontAwesomeIcon icon={faArrowUpFromBracket} /> </span>
      </span>
    </div>
  );
};
export default TuitStats;