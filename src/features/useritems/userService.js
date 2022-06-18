import axios from "axios";

const API_URL = "/data";
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// Get user items
const getUserItems = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      mode: "cors",
    },
  };
  const response = await axios.get(API_URL, config);
  console.log("Response date get all users:");
  console.log(response.data);
  return response.data;
};

const userItemsService = {
  getUserItems,
};

export default userItemsService;
