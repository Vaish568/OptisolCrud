import axios from "axios";

const fetchUserById = async (id) => {
  try {
    const { data } = await axios.get(
      `http://54.202.218.249:9501/api/users/${id}`
    );
    console.log("Fetched by id", data);
    return data;
  } catch (error) {
    console.log("Error while fetching data by id", error);
    return error;
  }
};
export default fetchUserById;
