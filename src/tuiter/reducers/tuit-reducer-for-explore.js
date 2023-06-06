import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const tuitsSliceExplore = createSlice({
 name: 'tuits',
 initialState: { tuits: tuits }
});

export default tuitsSliceExplore.reducer;