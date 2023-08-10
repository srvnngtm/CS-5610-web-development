import TuitItem from "./tuit-item";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { findTuitsThunk } from "../services/tuits-thunk";


// const TuitList = () => {
//   const { tuits } = useSelector((state) => state.tuits);

//   return (
//     <ul className="list-group">
//       {tuits.map((tuit) => (
//         <>
//           <TuitItem key={tuit._id} tuit={tuit} />
//         </>
//       ))}
//     </ul>
//   );
// };

const TuitList = () => {
  const { tuits, loading } = useSelector((state) => state.tuits);
  const dispatch = useDispatch();
  // const { tuits } = useSelector(state => state.tuits)
  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);

  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}

      {tuits.map((tuit) => (
        <>
          <TuitItem key={tuit._id} tuit={tuit} />
        </>
      ))}
    </ul>
  );
};


export default TuitList;
