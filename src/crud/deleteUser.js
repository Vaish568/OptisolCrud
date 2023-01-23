import axios from "axios";

const deleteUser = async (id) => {
  try {
    const data = await axios.delete(
      `http://54.202.218.249:9501/api/users/${id}`
    );
    console.log("Deleted..", data);
    return true;
  } catch (error) {
    console.log("error while deleting..", error);
    return false;
  }
};

export default deleteUser;
