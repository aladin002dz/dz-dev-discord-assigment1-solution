import axios from "axios";

//for development, using proxy from the package.json file
const API_URL = "/data";
//for production
//const API_URL = "https://dz-dev-discord-assigment1-api.herokuapp.com/data";

// Get user items
const getUserItems = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      mode: "cors",
    },
  };
  const response = await axios.get(API_URL, config);
  //console.log("Response date get all users:");
  //console.log(response.data);
  return response.data;
};

// Delete user goal
const deleteUserItem = async (userItemId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + "/" + userItemId, config);
  console.log("Response date delete user item:");
  console.log(response.data);
  //return response.data;
  return { id: userItemId };
};

const userItemsService = {
  getUserItems,
  deleteUserItem,
};

export default userItemsService;
