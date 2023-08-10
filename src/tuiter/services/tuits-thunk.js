import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./tuits-service";

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.webp",
   };
   
   const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes" : 0,
    "disliked": false,
   }

export const findTuitsThunk = createAsyncThunk(
  "tuits/findTuits",
  async () => await service.findTuits()
);

export const deleteTuitThunk = createAsyncThunk(
  "tuits/deleteTuit",
  async (tuitId) => {
    await service.deleteTuit(tuitId);
    return tuitId;
  }
);

export const createTuitThunk = createAsyncThunk(
  "tuits/createTuit",
  async (tuit) => {
    
    let updatedTuit = {...tuit, ...templateTuit}

    const newTuit = await service.createTuit(updatedTuit);
    return newTuit;
  }

);


export const updateTuitThunk =
  createAsyncThunk(
    'tuits/updateTuit',
    async (tuit) =>
      await service.updateTuit(tuit)
);

