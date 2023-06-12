import axios from "axios";
// const TUITS_API = "http://localhost:4000/api/tuits";
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const TUITS_API = `${SERVER_API_URL}/tuits`;

// const TUITS_API = "https://tuiter-node-server-app-ikp4.onrender.com/api/tuits";



export const findTuits = async () => {
  const response = await axios.get(TUITS_API);
  const tuits = response.data;
  return tuits;
};

export const deleteTuit = async (tid) => {
    console.log(tid)
  const response = await axios.delete(`${TUITS_API}/${tid}`);
  console.log(response)
  return response.data;
};

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
   }

   export const updateTuit = async (tuit) => {
    const response = await axios
      .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
  }
  
   