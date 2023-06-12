import React from "react";
import {
  faHeart,
  faArrowUpFromBracket,
  faComment,
  faRetweet,
  faThumbsDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { updateTuitThunk } from "../services/tuits-thunk";
import {useDispatch} from "react-redux";


const TuitStats = ({ tuit = {} }) => {
  const dispatch = useDispatch();
  return (
    <div className="row mt-4">
      <span className="d-flex justify-content-around">
        <span>
          {" "}
          <FontAwesomeIcon icon={faComment} /> {tuit.retuits}{" "}
        </span>
        <span>
          {" "}
          <FontAwesomeIcon icon={faRetweet} /> {tuit.replies}{" "}
        </span>
        <span>
          {" "}
          <FontAwesomeIcon
            style={{ color: tuit.liked ? "red" : "gray" }}
            icon={faHeart}
            onClick={() =>
              dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 , liked:true}))
            }
          />{" "}
          {tuit.likes}{" "}
        </span>
        <span>
          {" "}
          <FontAwesomeIcon icon={faArrowUpFromBracket} />{" "}
        </span>
        <span>
          {" "}
          <FontAwesomeIcon
            style={{ color: tuit.disliked ? "red" : "gray" }}
            icon={faThumbsDown}
            onClick={() =>
              dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1, disliked:true }))
            }
          />{" "}
          {tuit.dislikes}{" "}
        </span>
       
      </span>
    </div>
  );
};
export default TuitStats;
