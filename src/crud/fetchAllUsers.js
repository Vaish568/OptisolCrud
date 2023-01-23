import axios from "axios";
// axios.defaults.baseURL("http://54.202.218.249:9501/api");
const fetchAllUsers = async () => {
  try {
    const { data } = await axios.get("http://54.202.218.249:9501/api/users");
    console.log("Data fetched", data);
    return data;
  } catch (error) {
    console.log("Error occured ", error);
  }
};

export default fetchAllUsers;
