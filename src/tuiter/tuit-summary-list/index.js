import React from "react";
// import tuitsArray from './tuits.json';
import { useSelector } from "react-redux";

import TuitSummaryItem
  from "./tuit-summary-item";



const TuitSummaryList = () => {
  const { tuits } = useSelector(state => state.tuitExplore)
 return(
   <ul className="list-group">
     {
       tuits.map(tuit =>
         <TuitSummaryItem
           key={tuit._id} tuit={tuit}/> )
     }
   </ul>
 );
};
export default TuitSummaryList;