import axios from "axios";

const updateUser = async (id, user) => {
  try {
    const { data } = await axios.put(
      `http://54.202.218.249:9501/api/users/${id}`,
      user
    );
    console.log(data);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default updateUser;
