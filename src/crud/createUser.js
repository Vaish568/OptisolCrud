import axios from "axios";

const createUser = async (user) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      `http://54.202.218.249:9501/api/users`,
      user,
      config
    );
    console.log("created data", data);
    return data;
  } catch (error) {
    console.log("Error ehile creating", error);
    return error;
  }
};
export default createUser;
