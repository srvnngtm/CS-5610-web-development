import React from "react";
import { faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TuitStats from "../tuit-stats/tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../reducers/tuit-reducer";

const TuitItem = ({ tuit = {} }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-3">
          <img
            width={"100%"}
            className="rounded-3"
            src={require(`./images/${tuit.image}`)}
            alt=""
          />
        </div>
        <div className="col-9">
          <div>
            <FontAwesomeIcon
              className="float-end"
              icon={faXmark}
              onClick={() => deleteTuitHandler(tuit._id)}
            />
            <span className="fw-bolder">{tuit.topic}</span>{" "}
            <FontAwesomeIcon icon={faCircleCheck} /> {tuit.handle} . {tuit.time}
          </div>

          <div>{tuit.tuit}</div>
          <TuitStats key={tuit._id} tuit={tuit} />
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
